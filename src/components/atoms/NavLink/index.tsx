'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type NavLinkProps = {
  label: string;
  href: string;
};

const NavLinks: FC<NavLinkProps> = ({ label, href }) => {
  const route: string = usePathname();
  const isActive = href === '/' ? route === '/' : route.includes(href);

  return (
    <Link
      href={href}
      className={
        isActive
          ? 'text-blue-500 popins text-lg font-semibold'
          : 'text-white popins text-lg font-semibold'
      }
    >
      {label}
    </Link>
  );
};

export default NavLinks;
