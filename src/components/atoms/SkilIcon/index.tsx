'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

interface ISkillIcon {
  icon: string;
}

const SkillIcon: FC<ISkillIcon> = ({ icon }) => {
  return (
    <figure
      className={clsx(
        'flex flex-col items-center relative',
        'h-10 hover:h-8 md:h-20 md:hover:h-14 lg:h-24 lg:hover:h-20',
      )}
    >
      <Image
        src={`https://skillicons.dev/icons?i=${icon}`}
        height={70}
        width={70}
        alt={icon}
        className='mx-2 lg:h-20 md:h-14 h-8'
      />
    </figure>
  );
};

export default SkillIcon;
