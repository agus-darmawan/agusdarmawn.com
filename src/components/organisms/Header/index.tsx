'use client';
import React from 'react';
import { FC } from 'react';

import useScroll from '@/lib/useScrool';

import { NavLinks } from '@/components/atoms';
import { ThemeButton } from '@/components/molecules';

import { Link, links } from './links';

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
        className='flex flex-row gap-10 items-center px-32 w-full h-[72px]'
        title='main-navbar'
      >
        {links.map((value: Link, index: number) => (
          <NavLinks key={index} label={value.label} href={value.href} />
        ))}
        <ThemeButton className='ml-auto' />
      </nav>
    </header>
  );
};

export default Header;
