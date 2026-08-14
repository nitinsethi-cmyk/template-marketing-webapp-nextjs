import {
  AmplitudeCookie,
  Experiment,
  RemoteEvaluationClient,
  Variants,
} from '@amplitude/experiment-node-server';
import type { Variant } from '@amplitude/experiment-js-client';
import type { IncomingMessage, ServerResponse } from 'http';

import { AMPLITUDE_API_KEY } from './constants';

type NextIncomingMessage = IncomingMessage & {
  cookies?: Partial<Record<string, string>>;
};

const DEPLOYMENT_KEY =
  process.env.AMPLITUDE_EXPERIMENT_SERVER_DEPLOYMENT_KEY ||
  process.env.NEXT_PUBLIC_AMPLITUDE_EXPERIMENT_DEPLOYMENT_KEY;

let remoteClient: RemoteEvaluationClient | null = null;

function getRemoteClient(): RemoteEvaluationClient | null {
  if (!DEPLOYMENT_KEY) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        '[Amplitude Experiment] Missing deployment key for server-side evaluation',
      );
    }
    return null;
  }

  if (!remoteClient) {
    // Short timeouts keep SSR latency bounded; fall back to {} on failure.
    // @see https://amplitude.com/docs/sdks/experiment-sdks/experiment-node-js
    remoteClient = Experiment.initializeRemote(DEPLOYMENT_KEY, {
      fetchTimeoutMillis: 500,
      fetchRetries: 1,
      fetchRetryBackoffMinMillis: 0,
      fetchRetryTimeoutMillis: 500,
    });
  }

  return remoteClient;
}

function readCookies(req: NextIncomingMessage): Partial<Record<string, string>> {
  if (req.cookies) {
    return req.cookies;
  }

  const header = req.headers.cookie;
  if (!header) {
    return {};
  }

  return header.split(';').reduce<Record<string, string>>((acc, part) => {
    const index = part.indexOf('=');
    if (index === -1) {
      return acc;
    }
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (key) {
      acc[key] = decodeURIComponent(value);
    }
    return acc;
  }, {});
}

function appendSetCookie(res: ServerResponse, cookie: string) {
  const existing = res.getHeader('Set-Cookie');
  if (!existing) {
    res.setHeader('Set-Cookie', cookie);
    return;
  }
  if (Array.isArray(existing)) {
    res.setHeader('Set-Cookie', [...existing, cookie]);
    return;
  }
  res.setHeader('Set-Cookie', [String(existing), cookie]);
}

function resolveDeviceId(req: NextIncomingMessage, res: ServerResponse): string {
  // Browser SDK 2.0 cookie format (matches analytics-browser-2.x in _document.tsx)
  const cookieName = AmplitudeCookie.cookieName(AMPLITUDE_API_KEY, true);
  const cookies = readCookies(req);
  const raw = cookies[cookieName];

  if (raw) {
    try {
      const parsed = AmplitudeCookie.parse(raw, true);
      if (parsed?.device_id) {
        return parsed.device_id;
      }
    } catch {
      // Fall through and mint a new cookie if parse fails.
    }
  }

  const deviceId =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `ssr-${Date.now()}-${Math.random().toString(36).slice(2)}`;

  const cookieValue = AmplitudeCookie.generate(deviceId, true);
  // No Domain attribute so localhost and production hosts both work.
  appendSetCookie(
    res,
    `${cookieName}=${encodeURIComponent(cookieValue)}; Path=/; Max-Age=31536000; SameSite=Lax`,
  );

  return deviceId;
}

function toSerializableVariants(variants: Variants): Record<string, Variant> {
  // Next.js page props must be JSON-serializable.
  return JSON.parse(JSON.stringify(variants ?? {})) as Record<string, Variant>;
}

/**
 * Remote-evaluate Amplitude Experiment flags for the current request and
 * return a serializable variant map for SSR bootstrap (`initialVariants`).
 *
 * Uses the Amplitude Browser SDK 2.0 identity cookie so server and client
 * share the same device id. Exposure is intentionally left to the client SDK.
 *
 * @see https://amplitude.com/docs/feature-experiment/advanced-techniques/server-side-rendering
 */
export async function getServerExperimentVariants(
  req: NextIncomingMessage,
  res: ServerResponse,
): Promise<Record<string, Variant>> {
  const client = getRemoteClient();
  if (!client) {
    return {};
  }

  const deviceId = resolveDeviceId(req, res);

  try {
    const variants = await client.fetchV2(
      { device_id: deviceId },
      // Keep exposure client-side via ExperimentProvider / useVariant.
      { tracksExposure: false },
    );
    return toSerializableVariants(variants);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[Amplitude Experiment] Server fetch failed', error);
    return {};
  }
}
