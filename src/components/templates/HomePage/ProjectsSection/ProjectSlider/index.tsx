'use client';
import { FC, useEffect, useState } from 'react';

import { CloudinaryImage } from '@/components';

import ProjectDetails from './ProjectDetails';
import ProjectNavigation from './ProjectNavigation';
import ProjectTechStack from './ProjectTechStack';

const ProjectSlider: FC = () => {
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
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides, lastButtonClick]);

  const data = dummyData[activeSlide];

  return (
    <div className='md:grid md:grid-cols-3 gap-2'>
      <CloudinaryImage
        publicId={data.banner}
        height={550}
        width={465}
        className='col-span-1 lg:max-h-[350px] md:max-h-[550px] max-h-[250px] -mt-5 md:mt-0'
        alt={data.title}
        scale
        preview={false}
      />
      <div className='col-span-2 lg:pl-16 md:pl-5 flex flex-col justify-between min-h-72'>
        <ProjectDetails {...data} />
        <ProjectTechStack techs={data.techs} />
        <ProjectNavigation
          totalSlides={totalSlides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

const dummyData = [
  {
    title: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas recusandae magnam vel aut architecto velit vero aspernatur animi, enim ',
    techs: ['css', 'bootstrap', 'tailwind', 'js', 'ts', 'react', 'next'],
    banner: 'samples/two-ladies',
  },
  {
    title: 'Project 2',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperi',
    techs: ['html', 'css', 'javascript', 'angular', 'nodejs'],
    banner: 'samples/two-ladies',
  },
  {
    title: 'Project 3',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et.',
    techs: ['vue', 'nuxt', 'tailwind', 'js', 'ts', 'graphql'],
    banner: 'samples/two-ladies',
  },
  {
    title: 'Project 4',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ',
    techs: ['python', 'django', 'flask', 'docker', 'kubernetes'],
    banner: 'samples/two-ladies',
  },
];

export default ProjectSlider;
