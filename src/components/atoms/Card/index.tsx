import { ComponentPropsWithoutRef, FC } from 'react';

import { cn } from '@/lib/cn';

import Link from '../links/Link';

const Card: FC<ComponentPropsWithoutRef<'a'>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={cn(
        className,
        'overflow-hidden dark:bg-gray-700 border border-gray-700',
        'scale-[99%] hover:scale-100 transition-transform duration-200',
      )}
    >
      {children}
    </Link>
  );
};

export default Card;
