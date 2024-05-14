import { FC, ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface IGradientTextProps {
  children: ReactNode;
  className?: string;
}

const GradientText: FC<IGradientTextProps> = ({ children, className }) => {
  return (
    <span
      className={cn(
        className,
        'bg-clip-text from-20% text-transparent',
        'bg-gradient-to-r from-violet-500 to-green-400',
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
