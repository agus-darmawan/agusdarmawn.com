'use client';
import clsx from 'clsx';
import { FC, useState } from 'react';

import useScroll from '@/hooks/useScrool';

import { Hamburger, MobileNavbar, NavLinks, ThemeButton } from '@/components';

import { navlinks } from './links';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPercentage: number = useScroll();

  return (
    <header
      className={clsx(
        'dark:bg-black/70 backdrop-blur',
        'fixed w-full md:rounded-b-xl z-20',
      )}
    >
      <div
        className='h-2'
        style={{
          background: `linear-gradient(to right, #836AFE ${scrollPercentage}%, #3CF687)`,
        }}
      ></div>
      <nav
        title='main-navigation'
        className='layout md:h-14 h-12 flex flex-row items-center justify-between'
      >
        <Hamburger
          className='block md:hidden'
          toggled={isOpen}
          size={20}
          onToggle={() => setIsOpen(!isOpen)}
        />
        <ul className='hidden md:flex flex-row gap-10'>
          {navlinks.map((value, index) => (
            <NavLinks key={index} label={value.label} href={value.href} />
          ))}
        </ul>
        <ThemeButton />
      </nav>
      <MobileNavbar isOpen={isOpen} links={navlinks} />
    </header>
  );
};

export default Header;
