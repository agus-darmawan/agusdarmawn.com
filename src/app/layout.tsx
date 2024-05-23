import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import { ReactNode } from 'react';

import '@/style/globals.css';
import '@/style/reset.css';

import Providers from '@/lib/providers';

import { Footer, Header } from '@/components';

export const metadata: Metadata = {
  title: {
    template: '%s | Darmawan',
    default: 'Homepage | Darmawan',
  },
  description: 'Agus Darmawan portfolio website.',
  metadataBase: new URL('https://agusdarmawan.com'),
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
    'portfolio',
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Script
          defer
          src='https://analytics.us.umami.is/script.js'
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_DATA_WEBSITE_ID}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
