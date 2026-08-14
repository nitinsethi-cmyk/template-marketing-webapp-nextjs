import {
  Experiment,
  ExperimentClient,
  Source,
  Variant,
} from '@amplitude/experiment-js-client';

const DEPLOYMENT_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_EXPERIMENT_DEPLOYMENT_KEY;

let experimentClient: ExperimentClient | null = null;

function warnMissingKey() {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(
      '[Amplitude Experiment] NEXT_PUBLIC_AMPLITUDE_EXPERIMENT_DEPLOYMENT_KEY is not set',
    );
  }
}

/**
 * Create / return the Experiment client bootstrapped with SSR variants.
 *
 * Server: new ExperimentClient per request (no browser analytics).
 * Client: singleton via initializeWithAmplitudeAnalytics so exposure events
 * still flow through the Amplitude Analytics CDN instance.
 *
 * @see https://amplitude.com/docs/feature-experiment/advanced-techniques/server-side-rendering
 */
export function createExperimentClient(
  initialVariants: Record<string, Variant> = {},
): ExperimentClient | null {
  if (!DEPLOYMENT_KEY) {
    warnMissingKey();
    return null;
  }

  const config = {
    initialVariants,
    // Prefer SSR bootstrapped variants so first paint matches the server HTML.
    source: Source.InitialVariants,
  };

  if (typeof window === 'undefined') {
    return new ExperimentClient(DEPLOYMENT_KEY, config);
  }

  if (!experimentClient) {
    experimentClient = Experiment.initializeWithAmplitudeAnalytics(DEPLOYMENT_KEY, config);
  }

  return experimentClient;
}

/**
 * Initialize Amplitude Experiment and integrate with the existing Analytics
 * instance (CDN script in `_document.tsx`) via `initializeWithAmplitudeAnalytics`.
 *
 * @see https://amplitude.com/docs/sdks/experiment-sdks/experiment-javascript
 */
export function getExperimentClient(
  initialVariants: Record<string, Variant> = {},
): ExperimentClient | null {
  return createExperimentClient(initialVariants);
}

/**
 * Fetch remote evaluation variants for the current user.
 * Used as a client-only fallback when SSR did not bootstrap variants.
 */
export function fetchExperimentVariants(
  initialVariants: Record<string, Variant> = {},
): Promise<ExperimentClient | null> {
  const client = getExperimentClient(initialVariants);

  if (!client) {
    return Promise.resolve(null);
  }

  return client.fetch().then(() => client);
}

export function getVariant(
  flagKey: string,
  fallback?: string | Variant,
  initialVariants: Record<string, Variant> = {},
): Variant {
  const client = getExperimentClient(initialVariants);

  if (!client) {
    if (typeof fallback === 'string') {
      return { value: fallback };
    }
    return fallback ?? {};
  }

  return client.variant(flagKey, fallback);
}

export function clearExperimentClient(): void {
  experimentClient = null;
}
