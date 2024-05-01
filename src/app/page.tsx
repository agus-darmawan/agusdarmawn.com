import { FC } from 'react';

import { AboutHomePage, HeroHomePage } from '@/components';

const HomePage: FC = () => {
  return (
    <main className='bg-dark'>
      <HeroHomePage />
      <AboutHomePage />
    </main>
  );
};

export default HomePage;
