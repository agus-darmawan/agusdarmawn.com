import NextLink from 'next/link';
import { ComponentPropsWithoutRef, FC } from 'react';

import { cn } from '@/lib/cn'; // Using classNames library for conditional class handling

export interface LinkProps extends ComponentPropsWithoutRef<'a'> {
  underline?: boolean;
}

const Link: FC<LinkProps> = ({
  href,
  children,
  className,
  underline,
  ...rest
}) => {
  const linkClassName = cn(className, {
    'underline underline-offset-4 decoration-violet-500 decoration-dotted hover:decoration-solid transition-transform duration-1000':
      underline,
  });

  return (
    <NextLink href={String(href)} passHref className={linkClassName} {...rest}>
      {children}
    </NextLink>
  );
};

export default Link;
