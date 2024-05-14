import React, { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/cn';

const Input: React.FC<ComponentPropsWithoutRef<'input'>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={cn(
        className,
        'w-full py-4 px-8 border-2 border-gray-500 rounded-xl',
        'focus:border-gray-400',
      )}
      type='text'
      {...rest}
    />
  );
};

export default Input;
