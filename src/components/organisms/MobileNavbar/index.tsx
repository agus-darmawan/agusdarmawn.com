import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { NavLinks } from '@/components';

import { IListLinks } from '@/interfaces/links';

interface IMobileNavbarProps {
  isOpen: boolean;
  links: IListLinks;
}

const MobileNavbar: FC<IMobileNavbarProps> = ({ isOpen, links }) => {
  const route: string = usePathname();
  return (
    <ul className={isOpen ? 'flex flex-col my-2 h-full' : 'hidden'}>
      {links.map(({ label, href }, index) => (
        <NavLinks
          href={href}
          label={label}
          key={index}
          className={clsx(
            'hover:bg-gray-600/20 px-10 h-full py-5 w-full',
            (href === '/' ? route === '/' : route.includes(href))
              ? 'bg-gray-600/20'
              : '',
          )}
        />
      ))}
    </ul>
  );
};

export default MobileNavbar;
