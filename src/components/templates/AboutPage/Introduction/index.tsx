import clsx from 'clsx';
import { FC } from 'react';

import { CloudinaryImage } from '@/components';
import { GradientText } from '@/components';

interface IIntroductionAboutProps {
  name: string;
  description: string;
  image: string;
}

const AboutMe: FC<IIntroductionAboutProps> = ({ name, description, image }) => {
  return (
    <section
      title='my-introduction'
      className='flex flex-col justify-center md:pt-36 pt-20'
    >
      <figure
        className={clsx(
          'flex md:flex-row flex-col items-center ',
          'md:mb-8 gap-5 md:gap-10 lg:gap-36',
        )}
      >
        <CloudinaryImage
          className='w-full h-[220px] md:h-[427px] min-w-60 rounded-lg md:max-w-full max-w-40'
          publicId={image}
          height={427}
          width={400}
          alt={`${name} formal picture`}
          preview={false}
        />
        <article className='md:text-left text-center'>
          <h2 className='font-semibold text-2xl md:text-4xl lg:text-5xl'>
            About
          </h2>
          <h1 className='font-semibold text-3xl md:text-5xl lg:text-6xl md:mb-10 mb-5'>
            <GradientText>{name}</GradientText>
          </h1>
          <p
            className='text-sm lg:text-xl md:text-lg md:leading-relaxed'
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </article>
      </figure>
    </section>
  );
};

export default AboutMe;
