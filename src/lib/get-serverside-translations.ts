import { SSRConfig } from 'next-i18next';

import deDE from '../../public/locales/de-DE/common.json';
import enUS from '../../public/locales/en-US/common.json';

const localeResources = {
  'en-US': { common: enUS },
  'de-DE': { common: deDE },
} as const;

/**
 * Build i18n props without reading public/locales from disk.
 * Cloudflare Workers (and other serverless runtimes) do not have those files on the filesystem,
 * so next-i18next's default fs backend would throw and pages would return 404.
 */
export const getServerSideTranslations = async (locale?: string): Promise<SSRConfig> => {
  const initialLocale = locale && locale in localeResources ? locale : 'en-US';
  const resources = localeResources[initialLocale as keyof typeof localeResources];

  return {
    _nextI18Next: {
      initialI18nStore: {
        [initialLocale]: resources,
      },
      initialLocale,
      ns: ['common'],
      userConfig: {
        i18n: {
          defaultLocale: 'en-US',
          locales: ['en-US', 'de-DE'],
        },
      },
    },
  };
};
