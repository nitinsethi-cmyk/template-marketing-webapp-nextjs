import { useContentfulContext } from '@src/contentful-context';

interface FormatCurrencyProps {
  value: number;
  locale?: string;
  style?: Intl.NumberFormatOptions['style'];
  currency?: string;
}

export const FormatCurrency = ({
  value,
  locale,
  style = 'currency',
  currency = 'EUR',
}: FormatCurrencyProps) => {
  const { locale: localeFromRouter } = useContentfulContext();

  return (
    <>{new Intl.NumberFormat(locale || localeFromRouter, { style, currency }).format(value)}</>
  );
};
