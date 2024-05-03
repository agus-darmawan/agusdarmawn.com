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
    <ul className={isOpen ? 'flex flex-col mt-2 h-full mb-2' : 'hidden'}>
      {links.map(({ label, href }, index) => (
        <li
          key={index}
          className={clsx(
            'hover:bg-gray-600/20 px-10 py-5 h-full w-full',
            (href === '/' ? route === '/' : route.includes(href))
              ? 'bg-gray-600/20'
              : '',
          )}
        >
          <NavLinks href={href} label={label} />
        </li>
      ))}
    </ul>
  );
};

export default MobileNavbar;
