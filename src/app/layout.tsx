import { ReactNode } from 'react';

interface IAppLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IAppLayoutProps) => {
  return children;
};

export default RootLayout;
