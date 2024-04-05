'use client';
import React from 'react';

import useScroll from '@/lib/useScrool';

import { links } from '@/components/Header/links';
import NavLinks from '@/components/NavLinks';

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  const scrollPercentage = useScroll();

  return (
    <header className='bg-black w-full fixed'>
      <div
        className='bg-gradient-to-r from-[#836AFE] to-[#3CF687] h-2'
        style={{
          background: `linear-gradient(to right, #836AFE ${scrollPercentage}%, #3CF687)`,
        }}
      ></div>
      <nav
        className='flex flex-row gap-10 items-center py-6 px-32'
        title='main-navbar'
      >
        {links.map((link, index) => (
          <NavLinks key={index} label={link.label} href={link.href} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
