import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

const HeroHomePage: FC = () => {
  return (
    <section
      className={clsx(
        'flex flex-col lg:flex-row lg:justify-start justify-center',
        'h-screen relative overflow-hidden',
      )}
    >
      <div
        className={clsx(
          'flex flex-col justify-center',
          'px-10 md:px-20 lg:px-36',
        )}
      >
        <h1
          className={clsx(
            'text-zinc-100 -mt-52 lg:mt-0',
            'font-semibold leading-tight text-4xl md:text-7xl',
          )}
        >
          Hi! <br /> i'm{' '}
          <span className='font-bold text-violet-500'>Darmawan</span>
        </h1>
        <div className='flex items-center md:gap-8 gap-2'>
          <div className='h-0.5 md:h-1 w-32  md:w-64 lg:w-72 bg-zinc-100'></div>
          <h2 className='font-semibold md:text-2xl lg:text-3xl'>
            Front-end Dev
          </h2>
        </div>
        <p className='pt-5 text-xs lg:text-xl md:text-lg'>
          Barunastra Team's Programmer Division Leader, <br />
          with over 2 years of React frontend experience.
        </p>
      </div>
      <Image
        src='/assets/img/home-page/hero-vector.svg'
        height={600}
        width={600}
        className='absolute lg:static -right-60 bottom-0 -z-10'
        alt='vector'
      />
    </section>
  );
};

export default HeroHomePage;
