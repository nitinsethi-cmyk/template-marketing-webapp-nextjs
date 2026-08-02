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

  const experimentContainer = props.blackCardCtaText;
  const experimentId = experimentContainer?.experimentId ?? '';
  const amplitudeVariant = useVariant(experimentId || 'off', 'control', {
    track: Boolean(experimentId),
  });

  const content = useMemo(
    () =>
      resolveContentfulVariation(
        experimentContainer ?? null,
        amplitudeVariant,
        props.pageContent ?? null,
      ),
    [amplitudeVariant, experimentContainer, props.pageContent],
  );

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

      {content && (
        <LayoutContext.Provider value={defaultLayout} key={content.sys.id}>
          <ComponentResolver componentProps={content} />
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
