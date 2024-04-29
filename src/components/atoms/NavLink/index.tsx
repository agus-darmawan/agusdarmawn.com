'use client';
import clsx from 'clsx';
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
      className={clsx(
        'popins text-sm md:text-lg md:font-semibold',
        isActive ? 'text-blue-500' : 'text-white ',
      )}
    >
      {label}
    </Link>
  );
};

export default NavLinks;
