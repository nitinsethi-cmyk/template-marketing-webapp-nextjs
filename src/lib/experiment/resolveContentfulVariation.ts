import { Variant } from '@amplitude/experiment-js-client';

export type ContentfulEntryRef = {
  __typename?: string | null;
  sys: { id: string };
};

type VariantContainerLike<T extends ContentfulEntryRef = ContentfulEntryRef> = {
  experimentId?: string | null;
  meta?: unknown;
  variantsCollection?: {
    items?: Array<T | null>;
  } | null;
} | null;

/**
 * Map an Amplitude Experiment variant key to a Contentful variation entry
 * using the Amplitude Contentful plugin's `meta` + `variantsCollection` shape.
 *
 * @see https://amplitude.com/docs/feature-experiment/contentful
 */
export function resolveContentfulVariation<T extends ContentfulEntryRef = ContentfulEntryRef>(
  container: VariantContainerLike<T>,
  amplitudeVariant: Variant | undefined,
  fallback: T | null = null,
): T | null {
  if (!container?.experimentId) {
    return fallback;
  }

  const variantKey = amplitudeVariant?.value || amplitudeVariant?.key || 'control';
  const meta =
    container.meta && typeof container.meta === 'object'
      ? (container.meta as Record<string, string>)
      : null;

  const variationId = meta?.[variantKey];
  if (!variationId) {
    // Control (or unmapped variant): keep the provided fallback entry.
    return fallback;
  }

  const match = container.variantsCollection?.items?.find(item => item?.sys?.id === variationId);

  return match ?? fallback;
}
