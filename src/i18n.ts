import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'id'] as const;

export default getRequestConfig(async ({ locale }) => {
  // TypeScript type guard to ensure locale is one of the defined locales
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  // Import messages dynamically
  const messages = (await import(`../contents/${locale}.json`)).default;

  return {
    messages,
  };
});
