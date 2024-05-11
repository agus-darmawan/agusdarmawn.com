import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io';

import { IListLinks } from '@/interfaces/links';

export const footerlinks: IListLinks = [
  {
    label: 'Docs',
    href: '/docs',
  },
  {
    label: 'Book Notes',
    href: '/book-notes',
  },
  {
    label: 'Polywork',
    href: '/polywork',
  },
  {
    label: 'Statistics',
    href: '/statistics',
  },
  {
    label: 'Analytics',
    href: '/analytics',
  },
];

export const sociallinks: IListLinks = [
  {
    label: 'Github',
    href: 'https://github.com/agus-darmawan',
    icon: <IoLogoGithub color='fff' size={35} />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/agusdarmawann/',
    icon: <IoLogoLinkedin color='fff' size={35} />,
  },
  {
    label: 'Gmail',
    href: 'mailto:wayanagus.dr@gmail.com',
    icon: <IoLogoGoogle color='fff' size={35} />,
  },
];
