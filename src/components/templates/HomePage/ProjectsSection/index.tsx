'use client';

import { FC, useEffect, useState } from 'react';

import { CloudinaryImage, IconList, PostTitle } from '@/components';

const dummyData = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas recusandae magnam vel aut architecto velit vero aspernatur animi, enim reprehenderit culpa repellendus cumque dolorem odio!',
    techs: ['css', 'bootstrap', 'tailwind', 'js', 'ts', 'react', 'next'],
    banner: 'samples/two-ladies',
  },
  {
    title: 'Project 2',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    techs: ['html', 'css', 'javascript', 'angular', 'nodejs'],
    banner: 'cld-sample-2',
  },
  {
    title: 'Project 3',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    techs: ['vue', 'nuxt', 'tailwind', 'js', 'ts', 'graphql'],
    banner: 'cld-sample-3',
  },
  {
    title: 'Project 4',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    techs: ['python', 'django', 'flask', 'docker', 'kubernetes'],
    banner: 'cld-sample-4',
  },
];

const ProjectsSection: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [lastButtonClick, setLastButtonClick] = useState<number>(Date.now());
  const totalSlides = dummyData.length;

  const handlePrev = () => {
    setActiveSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : totalSlides - 1,
    );
    setLastButtonClick(Date.now());
  };

  const handleNext = () => {
    setActiveSlide((prevSlide) =>
      prevSlide < totalSlides - 1 ? prevSlide + 1 : 0,
    );
    setLastButtonClick(Date.now());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide < totalSlides - 1 ? prevSlide + 1 : 0,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [totalSlides, lastButtonClick]);

  const data = dummyData[activeSlide];

  return (
    <section className='layout h-screen'>
      <PostTitle
        title='Feature Projects'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum odit, alias dignissimos soluta delectus?'
      />
      <figure className='grid grid-cols-5 rounded-lg overflow-hidden mt-10'>
        <CloudinaryImage
          publicId={data.banner}
          height={350}
          width={465}
          className='col-span-2 '
          alt={data.title}
          scale
          preview={false}
        />
        <figcaption className='flex flex-col justify-between p-2 col-span-3 pl-16'>
          <div className='space-y-2'>
            <h3 className='text-5xl capitalize font-semibold'>{data.title}</h3>
            <p className='text-lg'>{data.description}</p>
          </div>
          <div>
            <h4 className='text-2xl pb-2'>Technology</h4>
            <IconList icons={data.techs} variant='small' />
          </div>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  onClick={() => setActiveSlide(index)}
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    index === activeSlide ? 'bg-blue-500' : 'bg-blue-100'
                  }`}
                ></button>
              ))}
            </div>
            <div className='flex gap-3'>
              <button
                onClick={handlePrev}
                className='h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-black'
                aria-label='Previous Slide'
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className='h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-black'
                aria-label='Next Slide'
              >
                &#10095;
              </button>
            </div>
          </div>
        </figcaption>
      </figure>
      <section className='w-full h-32 mt-10 rounded-2xl flex items-center bg-gray-100 dark:bg-gray-800 justify-between px-10'>
        <div>
          <h3 className='text-3xl font-semibold'>Intresting in my projects</h3>
          <p className='text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='space-x-5'>
          <button className='border-2 px-5 py-2 text-lg border-black dark:border-gray-100 rounded-lg'>
            More Projects
          </button>
          <button className='border-2 px-5 py-2 text-lg border-black dark:border-gray-100 rounded-lg'>
            Email me
          </button>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
