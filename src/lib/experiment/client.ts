import { Experiment, ExperimentClient, Variant } from '@amplitude/experiment-js-client';

const DEPLOYMENT_KEY = process.env.NEXT_PUBLIC_AMPLITUDE_EXPERIMENT_DEPLOYMENT_KEY;

let experimentClient: ExperimentClient | null = null;
let fetchPromise: Promise<ExperimentClient> | null = null;

/**
 * Initialize Amplitude Experiment and integrate with the existing Analytics
 * instance (CDN script in `_document.tsx`) via `initializeWithAmplitudeAnalytics`.
 *
 * @see https://amplitude.com/docs/sdks/experiment-sdks/experiment-javascript
 */
export function getExperimentClient(): ExperimentClient | null {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!DEPLOYMENT_KEY) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        '[Amplitude Experiment] NEXT_PUBLIC_AMPLITUDE_EXPERIMENT_DEPLOYMENT_KEY is not set',
      );
    }
    return null;
  }

  if (!experimentClient) {
    experimentClient = Experiment.initializeWithAmplitudeAnalytics(DEPLOYMENT_KEY);
  }

  return experimentClient;
}

/**
 * Fetch remote evaluation variants for the current user.
 * Safe to call multiple times — returns the same in-flight/completed promise.
 */
export function fetchExperimentVariants(): Promise<ExperimentClient | null> {
  const client = getExperimentClient();

  if (!client) {
    return Promise.resolve(null);
  }

  if (!fetchPromise) {
    fetchPromise = client.fetch().then(() => client);
  }

  return fetchPromise;
}

export function getVariant(flagKey: string, fallback?: string | Variant): Variant {
  const client = getExperimentClient();

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
  fetchPromise = null;
}
