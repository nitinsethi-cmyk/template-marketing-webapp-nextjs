import React, { useMemo } from 'react';

import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { resolveContentfulVariation, useVariant } from '@src/lib/experiment';

type SectionEntry = {
  __typename?: string | null;
  sys: { id: string };
} | null;

function withReplacedCta(
  items: SectionEntry[] | null | undefined,
  resolvedCta: SectionEntry,
  experimentConfigured: boolean,
) {
  if (!items) {
    return null;
  }

  return items.map(entry => {
    if (!entry || entry.__typename !== 'ComponentCta') {
      return entry;
    }
    if (!experimentConfigured || !resolvedCta?.__typename || !resolvedCta.sys?.id) {
      return entry;
    }
    return {
      __typename: resolvedCta.__typename,
      sys: { id: resolvedCta.sys.id },
    };
  });
}

const CtfPage = (props: CtfPageFieldsFragment) => {
  const topSection =
    props.topSectionCollection && props.topSectionCollection.items.filter(it => !!it);
  const extraSection =
    props.extraSectionCollection && props.extraSectionCollection.items.filter(it => !!it);

  // Experiment 1: finance-hp (blackCardCtaText) → replaces pageContent
  const primaryContainer = props.blackCardCtaText;
  const primaryExperimentId = primaryContainer?.experimentId ?? '';
  const primaryVariant = useVariant(primaryExperimentId || 'off', 'control', {
    track: Boolean(primaryExperimentId),
  });
  const content = useMemo(
    () =>
      resolveContentfulVariation(
        primaryContainer ?? null,
        primaryVariant,
        props.pageContent ?? null,
      ),
    [primaryVariant, primaryContainer, props.pageContent],
  );

  // Experiment 2: finance-existing-customer (testSlot2) → replaces existing ComponentCta
  const slot2Container = props.testSlot2;
  const slot2ExperimentId = slot2Container?.experimentId ?? '';
  const slot2Variant = useVariant(slot2ExperimentId || 'off', 'control', {
    track: Boolean(slot2ExperimentId),
  });

  const defaultCta =
    (topSection?.find(item => item?.__typename === 'ComponentCta') as SectionEntry | undefined) ??
    (extraSection?.find(item => item?.__typename === 'ComponentCta') as SectionEntry | undefined) ??
    null;

  const resolvedCta = useMemo(
    () =>
      resolveContentfulVariation(
        slot2Container ?? null,
        slot2Variant,
        defaultCta ? { __typename: defaultCta.__typename, sys: { id: defaultCta.sys.id } } : null,
      ),
    [defaultCta, slot2Container, slot2Variant],
  );

  const resolvedTopSection = useMemo(
    () =>
      withReplacedCta(topSection as SectionEntry[] | null, resolvedCta, Boolean(slot2ExperimentId)),
    [topSection, resolvedCta, slot2ExperimentId],
  );

  const resolvedExtraSection = useMemo(
    () =>
      withReplacedCta(
        extraSection as SectionEntry[] | null,
        resolvedCta,
        Boolean(slot2ExperimentId),
      ),
    [extraSection, resolvedCta, slot2ExperimentId],
  );

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <PageContainer>
      {resolvedTopSection &&
        resolvedTopSection.map(entry => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry as any} />
          </LayoutContext.Provider>
        ))}

      {content?.__typename && content.sys?.id && (
        <LayoutContext.Provider value={defaultLayout} key={content.sys.id}>
          <ComponentResolver
            componentProps={{
              __typename: content.__typename,
              sys: { id: content.sys.id },
            }}
          />
        </LayoutContext.Provider>
      )}

      {resolvedExtraSection &&
        resolvedExtraSection.map(entry => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry as any} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default CtfPage;
