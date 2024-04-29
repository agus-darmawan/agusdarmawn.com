'use client';
import clsx from 'clsx';
import { FC } from 'react';

import useScroll from '@/lib/useScrool';

import { NavLinks } from '@/components/atoms';
import ThemeButton from '@/components/molecules/ThemeButton';

import { links } from './links';

const Header: FC = () => {
  const scrollPercentage: number = useScroll();

  return (
    <header className='bg-black fixed w-full'>
      <div
        className='h-2'
        style={{
          background: `linear-gradient(to right, #836AFE ${scrollPercentage}%, #3CF687)`,
        }}
      ></div>
      <nav
        className={clsx(
          'px-4 lg:px-32 md:px-20 w-full md:h-[72px] h-[54px]',
          'flex flex-row md:gap-10 gap-3 items-center',
        )}
      >
        {links.map((value, index) => (
          <NavLinks key={index} label={value.label} href={value.href} />
        ))}
        <ThemeButton className='md:ml-auto ml-3' />
      </nav>
    </header>
  );
};

export default Header;
