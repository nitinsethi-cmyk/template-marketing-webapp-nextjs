import { ExperimentClient, Variant } from '@amplitude/experiment-js-client';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { fetchExperimentVariants, getExperimentClient, getVariant } from './client';

export interface ExperimentContextValue {
  client: ExperimentClient | null;
  ready: boolean;
  variant: (flagKey: string, fallback?: string | Variant) => Variant;
  exposure: (flagKey: string) => void;
}

const ExperimentContext = createContext<ExperimentContextValue>({
  client: null,
  ready: false,
  variant: (flagKey, fallback) => getVariant(flagKey, fallback),
  exposure: () => undefined,
});

export function ExperimentProvider({ children }: { children: ReactNode }) {
  const [client, setClient] = useState<ExperimentClient | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetchExperimentVariants()
      .then(resolvedClient => {
        if (cancelled) {
          return;
        }
        setClient(resolvedClient ?? getExperimentClient());
        setReady(true);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('[Amplitude Experiment] Failed to fetch variants', error);
        if (!cancelled) {
          setClient(getExperimentClient());
          setReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const variant = useCallback(
    (flagKey: string, fallback?: string | Variant) => {
      if (!client) {
        return getVariant(flagKey, fallback);
      }
      return client.variant(flagKey, fallback);
    },
    [client],
  );

  const exposure = useCallback(
    (flagKey: string) => {
      client?.exposure(flagKey);
    },
    [client],
  );

  const value = useMemo(
    () => ({
      client,
      ready,
      variant,
      exposure,
    }),
    [client, ready, variant, exposure],
  );

  return <ExperimentContext.Provider value={value}>{children}</ExperimentContext.Provider>;
}

export function useExperiment(): ExperimentContextValue {
  return useContext(ExperimentContext);
}

/**
 * Returns the variant for a flag key. Tracks exposure when the client is ready
 * unless `track` is set to false.
 */
export function useVariant(
  flagKey: string,
  fallback?: string | Variant,
  options?: { track?: boolean },
): Variant {
  const { ready, variant, exposure } = useExperiment();
  const track = options?.track !== false;
  const resolved = variant(flagKey, fallback);

  useEffect(() => {
    if (ready && track) {
      exposure(flagKey);
    }
  }, [ready, track, exposure, flagKey]);

  return resolved;
}
