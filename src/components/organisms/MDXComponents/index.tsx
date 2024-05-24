import { MDXProvider } from '@mdx-js/react';
import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react';

import { CloudinaryImage, Link } from '@/components';

import Pre from '../Pre';

const H2: FC<ComponentPropsWithoutRef<'h2'>> = ({ children, id }) => (
  <h2
    className='leading-relaxed md:text-2xl text-xl font-semibold mdx mb-1'
    id={id}
  >
    {children}
  </h2>
);

const H3: FC<ComponentPropsWithoutRef<'h3'>> = ({ children, id }) => (
  <h3 className='leading-relaxed md:text-xl text-lg  mb-2 mdx' id={id}>
    {children}
  </h3>
);

const H4: FC<ComponentPropsWithoutRef<'h4'>> = ({ children, id }) => (
  <h4
    className='leading-relaxed md:text-lg text-base font-semibold mdx mb-2'
    id={id}
  >
    {children}
  </h4>
);

const P: FC<ComponentPropsWithoutRef<'p'>> = ({ children, id }) => (
  <p className='leading-relaxed md:text-base text-sm  mdx' id={id}>
    {children}
  </p>
);

const MDXComponents: ComponentProps<typeof MDXProvider>['components'] = {
  CloudinaryImage,
  a: Link,
  pre: Pre,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
};

export default MDXComponents;
