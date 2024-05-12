'use client';
import clsx from 'clsx';
import { FC } from 'react';

import { NextImage } from '@/components';

interface ISkillIcon {
  icon: string;
  variant?: 'base' | 'small';
}

const SkillIcon: FC<ISkillIcon> = ({ icon, variant }) => {
  return (
    <figure
      className={clsx(
        'flex flex-col items-center relative',
        variant === 'small'
          ? 'h-10'
          : 'h-10 hover:h-8 md:h-20 md:hover:h-14 lg:h-24 lg:hover:h-20',
      )}
    >
      <NextImage
        src={`https://skillicons.dev/icons?i=${icon}`}
        height={70}
        width={70}
        alt={icon}
        className={clsx(
          variant === 'small'
            ? 'h-8 w-8'
            : 'lg:h-20 lg:w-20 md:h-14 md:w-14 h-8 w-8',
        )}
        blurClassName='rounded-2xl'
        useSkeleton={true}
      />
    </figure>
  );
};

export default SkillIcon;
