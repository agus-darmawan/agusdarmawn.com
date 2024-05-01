import Image from 'next/image';
import { ComponentPropsWithoutRef, FC } from 'react';

const SkilIcon: FC<ComponentPropsWithoutRef<'image'>> = () => {
  return (
    <Image
      src='https://cdn.svgporn.com/logos/react.svg'
      height={100}
      width={100}
      alt='react'
    />
  );
};

export default SkilIcon;
