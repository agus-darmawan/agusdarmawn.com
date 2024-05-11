import { FC } from 'react';

import { CloudinaryImage, GradientText } from '@/components';

const Gallery: FC = () => {
  return (
    <section className='pt-20 text-center lg:mt-20 mb-32'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>
        <GradientText>My Gallery</GradientText>
      </h3>
      <h4 className='lg:text-2xl md:text-xl text-sm pt-3'>
        Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame.
      </h4>
      <figure className='grid md:grid-cols-4 grid-cols-2 lg:gap-5 gap-3 max-h-[525px] md:mt-10 mt-5'>
        <CloudinaryImage
          className='w-full h-full rounded-xl col-start-1 row-start-1'
          publicId='agusdarmawn/about/gallery/me'
          height={530}
          width={300}
          alt='My picture'
          preview={false}
          title=' '
        />
        <CloudinaryImage
          className='w-full h-full col-span-2 rounded-xl row-start-2 md:row-start-1'
          publicId='agusdarmawn/about/gallery/irc-2023'
          height={532}
          width={789}
          alt='My picture'
          preview={false}
          title=' '
        />
        <div className='flex flex-col lg:gap-5 gap-3 row-start-1'>
          <CloudinaryImage
            className='w-full h-full rounded-xl'
            publicId='agusdarmawn/about/gallery/kkctbn-2023'
            height={258}
            width={300}
            alt='My picture'
            preview={false}
            title=' '
          />
          <CloudinaryImage
            className='w-full h-full rounded-xl'
            publicId='agusdarmawn/about/gallery/rmi'
            height={258}
            width={300}
            alt='My picture'
            preview={false}
            title=' '
          />
        </div>
      </figure>
    </section>
  );
};

export default Gallery;
