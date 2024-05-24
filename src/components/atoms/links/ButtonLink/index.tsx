import clsx from 'clsx';
import { ComponentPropsWithRef, FC } from 'react';

import { cn } from '@/lib/cn';

import Link from '../Link';

// Extend with type like primary secondary etc

interface IButtonLink extends ComponentPropsWithRef<'a'> {
  type: 'primary' | 'secondary';
}

const ButtonLink: FC<IButtonLink> = ({
  type,
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <Link
      href={href ?? '#'}
      className={cn(
        className,
        'transition-colors duration-200',
        'border-2 lg:px-5 px-3 lg:py-2 py-1 text-lg rounded-lg',
        clsx({
          ' border-gray-700 dark:border-white  hover:dark:border-gray-100  bg-gray-700 text-white dark:bg-gray-100 dark:hover:bg-transparent hover:bg-transparent dark:text-black hover:dark:text-white hover:text-black':
            type === 'primary',
          ' border-gray-700 dark:border-gray-100  hover:bg-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black':
            type === 'secondary',
        }),
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
