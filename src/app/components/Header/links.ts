type Link = {
  label: string;
  href: string;
};

type Links = Link[];

export const links: Links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Snippets',
    href: '/snippets',
  },
];
