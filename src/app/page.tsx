import * as React from 'react';

import HeroSection from '@/containers/home-page/HeroSection';

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = () => {
  return (
    <main className='min-w-full bg-white min-h-screen'>
      <HeroSection />
    </main>
  );
};

export default HomePage;
