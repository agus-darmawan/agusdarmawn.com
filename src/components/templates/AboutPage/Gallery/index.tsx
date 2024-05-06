import Image from 'next/image';
import { FC } from 'react';

import { GradientText } from '@/components';

const Gallery: FC = () => {
  return (
    <section className='px-10 md:px-20 lg:px-40 md:pt-36 pt-20 text-center'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
        <GradientText>My Gallery</GradientText>
      </h3>
      <h4 className='md:text-2xl text-xl pt-3'>
        Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame.
      </h4>
      <figure className='grid grid-cols-4 gap-2'>
        <Image
          src='/img/about-page/gallery/1.png'
          height={525}
          width={289}
          className='lg:h-[525px] '
          alt='vector'
        />
        <Image
          src='/img/about-page/gallery/2.png'
          height={525}
          width={578}
          className='lg:h-[525px] col-span-2'
          alt='vector'
        />
        <div className='flex flex-col gap-2 -ml-3'>
          <Image
            src='/img/about-page/gallery/3.png'
            height={258}
            width={289}
            className='lg:h-[258px] '
            alt='vector'
          />
          <Image
            src='/img/about-page/gallery/4.png'
            height={258}
            width={289}
            className='lg:h-[258px] '
            alt='vector'
          />
        </div>
      </figure>
    </section>
  );
};

export default Gallery;
