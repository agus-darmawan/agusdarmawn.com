'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

const ThemeButton: FC<ThemeButtonProps> = ({ className, ...rest }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      className={clsx(
        'text-white',
        'p-2 rounded-full',
        'hover:bg-slate-400/20',
        className,
      )}
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
