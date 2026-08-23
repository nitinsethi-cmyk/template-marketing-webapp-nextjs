import React, { useMemo } from 'react';

import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { resolveContentfulVariation, useVariant } from '@src/lib/experiment';
import type { ContentfulEntryRef } from '@src/lib/experiment/resolveContentfulVariation';

type SectionEntry = {
  __typename?: string | null;
  sys: { id: string };
} | null;

type PageVariation = ContentfulEntryRef & {
  __typename: 'Page';
  topSectionCollection?: { items?: Array<SectionEntry> | null } | null;
  extraSectionCollection?: { items?: Array<SectionEntry> | null } | null;
  pageContent?: SectionEntry;
};

function isPageVariation(entry: ContentfulEntryRef | null): entry is PageVariation {
  return entry?.__typename === 'Page';
}

function filterSections(items: Array<SectionEntry> | null | undefined) {
  return items?.filter((it): it is NonNullable<SectionEntry> => !!it) ?? null;
}

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
  const defaultTopSection = filterSections(props.topSectionCollection?.items);
  const defaultExtraSection = filterSections(props.extraSectionCollection?.items);

  // Experiment: contentful-page-test (pageExperiment) → replaces the whole page when
  // the mapped variant is a Page, otherwise replaces pageContent.
  const pageExpContainer = props.pageExperiment;
  const pageExpId = pageExpContainer?.experimentId ?? '';
  const pageExpVariant = useVariant(pageExpId || 'off', 'control', {
    track: Boolean(pageExpId),
  });
  const pageExpMatch = useMemo(
    () => resolveContentfulVariation(pageExpContainer ?? null, pageExpVariant, null),
    [pageExpContainer, pageExpVariant],
  );

  const baseTopSection = isPageVariation(pageExpMatch)
    ? filterSections(pageExpMatch.topSectionCollection?.items)
    : defaultTopSection;
  const baseExtraSection = isPageVariation(pageExpMatch)
    ? filterSections(pageExpMatch.extraSectionCollection?.items)
    : defaultExtraSection;
  const basePageContent = isPageVariation(pageExpMatch)
    ? pageExpMatch.pageContent ?? null
    : pageExpMatch ?? props.pageContent ?? null;

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
        basePageContent,
      ),
    [primaryVariant, primaryContainer, basePageContent],
  );

  // Experiment 2: finance-existing-customer (testSlot2) → replaces existing ComponentCta
  const slot2Container = props.testSlot2;
  const slot2ExperimentId = slot2Container?.experimentId ?? '';
  const slot2Variant = useVariant(slot2ExperimentId || 'off', 'control', {
    track: Boolean(slot2ExperimentId),
  });

  const defaultCta =
    (baseTopSection?.find(item => item?.__typename === 'ComponentCta') as SectionEntry | undefined) ??
    (baseExtraSection?.find(item => item?.__typename === 'ComponentCta') as
      | SectionEntry
      | undefined) ??
    null;

  const resolvedCta = useMemo(
    () =>
      resolveContentfulVariation(
        slot2Container ?? null,
        slot2Variant,
        defaultCta,
      ),
    [defaultCta, slot2Container, slot2Variant],
  );

  const resolvedTopSection = useMemo(
    () =>
      withReplacedCta(
        baseTopSection as SectionEntry[] | null,
        resolvedCta,
        Boolean(slot2ExperimentId),
      ),
    [baseTopSection, resolvedCta, slot2ExperimentId],
  );

  const resolvedExtraSection = useMemo(
    () =>
      withReplacedCta(
        baseExtraSection as SectionEntry[] | null,
        resolvedCta,
        Boolean(slot2ExperimentId),
      ),
    [baseExtraSection, resolvedCta, slot2ExperimentId],
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
