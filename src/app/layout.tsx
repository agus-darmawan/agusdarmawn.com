import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Darmawan',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} ${popins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
