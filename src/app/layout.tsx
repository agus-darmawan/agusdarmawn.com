import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

import '@/style/globals.css';
import '@/style/reset.css';

import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: {
    template: '%s | Darmawan',
    default: 'Homepage | Darmawan',
  },
  description: 'Agus Darmawan poftofolio website.',
  metadataBase: new URL('https://agusdarmawn.com'),
  applicationName: 'Agus Darmawan Personal Website',
  authors: [{ name: 'Agus Darmawan' }],
  generator: 'Next.js',
  keywords: [
    'Agus Darmawan',
    'code',
    'web development',
    'javascript',
    'react',
    'node.js',
    'portofolio',
    'web dev',
    'html',
    'css',
    'python',
    'robotics',
    'ros',
    'barunastra',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Agus Darmawan',
  publisher: 'Agus Darmawan',
};

<script defer src='https://analytics.us.umami.is/script.js'></script>;

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang='en'>
      <body className={popins.className}>
        <Script
          defer
          src='https://analytics.us.umami.is/script.js'
          data-website-id={process.env.UMAMI_DATA_WEBSITE_ID}
        />

        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={true}
        >
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
