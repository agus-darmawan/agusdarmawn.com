'use client';
import { useTheme } from 'next-themes';
import { ComponentPropsWithoutRef, FC, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { cn } from '@/lib/cn';

const ThemeButton: FC<ComponentPropsWithoutRef<'button'>> = ({
  className,
  ...rest
}) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      className={cn('p-2 rounded-full', 'hover:bg-slate-400/20', className)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      {...rest}
    >
      {mounted ? (
        theme === 'light' ? (
          <FiMoon size={20} />
        ) : (
          <FiSun size={20} />
        )
      ) : (
        <FiSun size={20} />
      )}
    </button>
  );
};

export default ThemeButton;
