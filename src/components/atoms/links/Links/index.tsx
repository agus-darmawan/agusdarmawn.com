import Link from 'next/link';
import { ComponentPropsWithoutRef, FC } from 'react';

const Links: FC<ComponentPropsWithoutRef<'a'>> = ({
  href,
  children,
  className,
  ...rest
}) => {
  return (
    <Link href={String(href)} className={className} {...rest}>
      {children}
    </Link>
  );
};

export default Links;
