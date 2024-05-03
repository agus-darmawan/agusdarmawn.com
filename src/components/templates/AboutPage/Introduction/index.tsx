import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { GradientText } from '@/components';

const IntroductionAbout: FC = () => {
  return (
    <section
      className={clsx(
        'flex flex-col justify-center',
        'px-10 md:px-20 lg:px-40 pt-36',
      )}
    >
      <figure
        className={clsx(
          'flex md:flex-row flex-col items-center ',
          'md:mb-8 gap-5 lg:gap-36',
        )}
      >
        <Image
          src='/img/home-page/dar-about-img.png'
          height={427}
          width={400}
          className='lg:h-[427px] md:h-[320px] h-[220px] w-max'
          alt='vector'
        />
        <article className='md:text-left text-center'>
          <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl'>
            About
          </h2>
          <h1 className='font-semibold text-3xl md:text-5xl lg:text-6xl mb-10'>
            <GradientText>Agus Darmaan</GradientText>
          </h1>
          <p className='text-sm lg:text-xl leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            architecto quas laudantium praesentium accusamus dolorum at, non
            ullam nam alias voluptatum quaerat, odio reiciendis est nobis et
            porro similique facere iure aliquid corporis eius voluptas.
            Deleniti,
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            architecto quas laudantium praesentium accusamus dolorum at, non
            ullam nam alias voluptatum quaerat, odio reiciendis est Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
            <br /> <br />
            Magnam architecto quas laudantium praesentium accusamus dolorum at,
            non ullam nam alias voluptatum quaerat, odio reiciendis est
          </p>
        </article>
      </figure>
    </section>
  );
};

export default IntroductionAbout;
