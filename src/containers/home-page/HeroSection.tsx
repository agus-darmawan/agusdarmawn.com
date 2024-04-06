import * as React from 'react';

interface IHeroSectionProps {}

const HeroSection: React.FC<IHeroSectionProps> = () => {
  return (
    <section
      title='homepage-hero'
      className='px-14 min-h-screen w-full flex items-center bg-[#161513]'
    >
      <h1 className='text-black text-7xl font-bold poppins'>Darmawan</h1>
    </section>
  );
};

export default HeroSection;
