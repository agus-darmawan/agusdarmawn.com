import { Poppins } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

import '@/style/globals.css';
import '@/style/reset.css';

import { Header } from '@/components';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

interface IRootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={popins.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={true}
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
