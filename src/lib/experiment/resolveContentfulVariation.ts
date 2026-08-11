import { Variant } from '@amplitude/experiment-js-client';

export type ContentfulEntryRef = {
  __typename?: string | null;
  sys: { id: string };
};

type VariantContainerLike = {
  experimentId?: string | null;
  meta?: unknown;
  variantsCollection?: {
    items?: Array<ContentfulEntryRef | null>;
  } | null;
} | null;

/**
 * Map an Amplitude Experiment variant key to a Contentful variation entry
 * using the Amplitude Contentful plugin's `meta` + `variantsCollection` shape.
 *
 * @see https://amplitude.com/docs/feature-experiment/contentful
 */
export function resolveContentfulVariation(
  container: VariantContainerLike,
  amplitudeVariant: Variant | undefined,
  fallback: ContentfulEntryRef | null = null,
): ContentfulEntryRef | null {
  if (!container?.experimentId) {
    return fallback;
  }

  const variantKey = amplitudeVariant?.value || 'control';
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
