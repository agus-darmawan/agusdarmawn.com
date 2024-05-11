import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io';

import { IListLinks } from '@/interfaces/links';

export const footerlinks: IListLinks = [
  {
    label: 'Source Code',
    href: 'https://github.com/agus-darmawan/agusdarmawn.com',
  },
  {
    label: 'Book Notes',
    href: '/book-notes',
  },
  {
    label: 'Polywork',
    href: 'https://www.polywork.com/agus_darmawan',
  },
  {
    label: 'Statistics',
    href: '/statistics',
  },
  {
    label: 'Analytics',
    href: 'https://analytics.us.umami.is/share/0GKC7BUvMLua4Z1P/agusdarmawn.com',
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
