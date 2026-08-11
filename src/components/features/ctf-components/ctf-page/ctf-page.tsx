import React, { useMemo } from 'react';

import { CtfPageFieldsFragment } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { ComponentResolver } from '@src/components/shared/component-resolver';
import { PageContainer } from '@src/components/templates/page-container';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { resolveContentfulVariation, useVariant } from '@src/lib/experiment';

const CtfPage = (props: CtfPageFieldsFragment) => {
  const topSection =
    props.topSectionCollection && props.topSectionCollection.items.filter(it => !!it);
  const extraSection =
    props.extraSectionCollection && props.extraSectionCollection.items.filter(it => !!it);

  // Experiment 1: finance-hp (blackCardCtaText) → swaps pageContent
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

  // Experiment 2: finance-existing-customer (testSlot2) → independent content slot
  const slot2Container = props.testSlot2;
  const slot2ExperimentId = slot2Container?.experimentId ?? '';
  const slot2Variant = useVariant(slot2ExperimentId || 'off', 'control', {
    track: Boolean(slot2ExperimentId),
  });
  const slot2Content = useMemo(() => {
    const resolved = resolveContentfulVariation(slot2Container ?? null, slot2Variant, null);
    if (!resolved?.__typename || !resolved.sys?.id) {
      return null;
    }
    return {
      __typename: resolved.__typename,
      sys: { id: resolved.sys.id },
    };
  }, [slot2Container, slot2Variant]);

  const layoutConfig = {
    ...defaultLayout,
    containerWidth: 1262,
  };

  return (
    <PageContainer>
      {topSection &&
        topSection.map(entry => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
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

      {slot2Content && (
        <LayoutContext.Provider value={defaultLayout} key={`slot2-${slot2Content.sys.id}`}>
          <ComponentResolver componentProps={slot2Content} />
        </LayoutContext.Provider>
      )}

      {extraSection &&
        extraSection.map(entry => (
          <LayoutContext.Provider value={layoutConfig} key={entry!.sys.id}>
            <ComponentResolver componentProps={entry!} />
          </LayoutContext.Provider>
        ))}
    </PageContainer>
  );
};

export default CtfPage;
