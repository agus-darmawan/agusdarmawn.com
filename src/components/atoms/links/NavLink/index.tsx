'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { cn } from '@/lib/cn';

interface INavLinkProps {
  label: string;
  href: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

const NavLinks: FC<INavLinkProps> = ({
  label,
  href,
  className,
  activeClassName,
  inactiveClassName,
}) => {
  const route: string = usePathname();
  const isActive = href === '/' ? route === '/' : route.includes(href);

  return (
    <Link
      href={href}
      className={cn(
        className,
        'text-sm md:text-lg md:font-semibold',
        isActive
          ? activeClassName || 'text-blue-500'
          : inactiveClassName || 'hover:text-violet-400',
      )}
    >
      {label}
    </Link>
  );
};

export default NavLinks;
