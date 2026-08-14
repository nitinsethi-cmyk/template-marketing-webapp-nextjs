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

import { createExperimentClient, fetchExperimentVariants, getVariant } from './client';

const EMPTY_VARIANTS: Record<string, Variant> = {};

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

export function ExperimentProvider({
  children,
  initialVariants = EMPTY_VARIANTS,
}: {
  children: ReactNode;
  initialVariants?: Record<string, Variant>;
}) {
  const hasSSRVariants = Object.keys(initialVariants).length > 0;

  // Synchronous bootstrap so SSR HTML and client hydration agree (no flicker).
  const [client, setClient] = useState<ExperimentClient | null>(() =>
    createExperimentClient(initialVariants),
  );
  const [ready, setReady] = useState(hasSSRVariants);

  useEffect(() => {
    let cancelled = false;

    // Prefer SSR bootstrapped variants. Only remote-fetch on the client when
    // the server could not provide any (missing key, timeout, etc.).
    if (hasSSRVariants) {
      const resolved = createExperimentClient(initialVariants);
      if (!cancelled) {
        setClient(resolved);
        setReady(true);
      }
      return () => {
        cancelled = true;
      };
    }

    fetchExperimentVariants(initialVariants)
      .then(resolvedClient => {
        if (cancelled) {
          return;
        }
        setClient(resolvedClient ?? createExperimentClient(initialVariants));
        setReady(true);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('[Amplitude Experiment] Failed to fetch variants', error);
        if (!cancelled) {
          setClient(createExperimentClient(initialVariants));
          setReady(true);
        }
      });

    return () => {
      cancelled = true;
    };
    // Mount-only: pageProps.experimentVariants are fixed for the document lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const variant = useCallback(
    (flagKey: string, fallback?: string | Variant) => {
      // Prefer the SSR map so render matches server HTML even before client init.
      const fromSSR = initialVariants[flagKey];
      if (fromSSR && (fromSSR.value != null || fromSSR.key != null)) {
        return fromSSR;
      }
      if (!client) {
        return getVariant(flagKey, fallback, initialVariants);
      }
      return client.variant(flagKey, fallback);
    },
    [client, initialVariants],
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
 * Returns the variant for a flag key. Tracks exposure on the client when ready
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
    // Client-only exposure tracking (SSR must not fire exposures).
    if (ready && track && flagKey && flagKey !== 'off') {
      exposure(flagKey);
    }
  }, [ready, track, exposure, flagKey]);

  return resolved;
}
