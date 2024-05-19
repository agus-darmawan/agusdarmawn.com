import { type MDXProvider } from '@mdx-js/react';
import { ComponentProps } from 'react';

import { CloudinaryImage, H2, H3, H4, Links, Pre } from '@/components';

const MDXComponents: ComponentProps<typeof MDXProvider>['components'] = {
  CloudinaryImage,
  a: Links,
  pre: Pre,
  h2: H2,
  h3: H3,
  h4: H4,
};

export default MDXComponents;
