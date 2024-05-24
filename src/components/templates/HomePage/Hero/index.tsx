import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { Link } from '@/components';

const HeroHomePage: FC = () => {
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;
  return (
    <section
      className={clsx(
        'flex flex-col lg:flex-row lg:justify-start justify-center items-center',
        'h-screen overflow-hidden relative',
      )}
    >
      <div
        className={clsx(
          'flex flex-col justify-center',
          'px-10 md:-ml-32  lg:ml-0 lg:px-36',
        )}
      >
        <h1
          className={clsx(
            '-mt-52 lg:mt-0',
            'font-semibold leading-tight text-4xl md:text-7xl',
          )}
        >
          Hi! <br /> i'm{' '}
          <span className='font-bold text-violet-500'>Darmawan</span>
        </h1>
        <div className='flex items-center md:gap-8 gap-2'>
          <div className='h-0.5 md:h-1 w-32  md:w-64 lg:w-72 dark:bg-zinc-100 bg-black '></div>
          <h2 className='font-semibold md:text-2xl lg:text-3xl'>
            Front-end Dev
          </h2>
        </div>
        <p className='pt-5 text-xs lg:text-xl md:text-lg'>
          <Link href='https://barunastra-its.or.id/' target='_blank' underline>
            Barunastra Team's
          </Link>{' '}
          Programmer Division Leader, <br />
          with over {experienceYears} years of React frontend experience.
        </p>
      </div>
      <Image
        src='/img/home-page/hero-vector.svg'
        height={600}
        width={600}
        className='dark:block hidden absolute -right-60  bottom-1  -z-10 lg:static'
        alt='vector hand drawing techstack like next.js expres etc'
      />
    </section>
  );
};

export default HeroHomePage;
