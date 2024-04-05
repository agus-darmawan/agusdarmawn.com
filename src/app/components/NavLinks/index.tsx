'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

interface INavLinksProps {
  label: string;
  href: string;
}

const NavLinks: React.FC<INavLinksProps> = ({ label, href }) => {
  const route: string = usePathname();
  const isActive = href === '/' ? route === '/' : route.includes(href);

  return (
    <div className='popins text-lg font-semibold'>
      <Link href={href}>
        <h2 className={isActive ? 'text-blue-500' : 'text-white'}>{label}</h2>
      </Link>
    </div>
  );
};

export default NavLinks;
