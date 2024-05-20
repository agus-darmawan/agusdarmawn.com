import { MDXProvider } from '@mdx-js/react';
import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react';

import { CloudinaryImage, Links } from '@/components';

const H2: FC<ComponentPropsWithoutRef<'h2'>> = ({ children, id }) => (
  <h2 className='leading-relaxed text-3xl font-semibold mdx' id={id}>
    {children}
  </h2>
);

const H3: FC<ComponentPropsWithoutRef<'h3'>> = ({ children, id }) => (
  <h3 className='leading-relaxed text-2xl font-semibold mdx' id={id}>
    {children}
  </h3>
);

const H4: FC<ComponentPropsWithoutRef<'h4'>> = ({ children, id }) => (
  <h4 className='leading-relaxed text-xl font-semibold mdx' id={id}>
    {children}
  </h4>
);

const MDXComponents: ComponentProps<typeof MDXProvider>['components'] = {
  CloudinaryImage,
  a: Links,
  // pre: Code,
  h2: H2,
  h3: H3,
  h4: H4,
};

export default MDXComponents;
