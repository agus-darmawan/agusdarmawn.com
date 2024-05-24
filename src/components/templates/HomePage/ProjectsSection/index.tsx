import clsx from 'clsx';
import { FC } from 'react';

import { ButtonLink, PostTitle } from '@/components';

import ProjectSlider from './ProjectSlider';

const ProjectsSection: FC = () => {
  return (
    <section className='layout space-y-12 mb-20' title='project-section'>
      <PostTitle
        title='Feature Projects'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum odit, alias dignissimos soluta delectus?'
      />
      <ProjectSlider />
      <section
        className={clsx(
          'w-full md:py-5 lg:py-7 mt-10 rounded-2xl',
          'flex items-center justify-between ',
          'bg-gray-100 dark:bg-gray-800 px-10',
        )}
      >
        <div className='space-y-2'>
          <h3 className='lg:text-3xl md:text-xl font-semibold'>
            Interested in my projects
          </h3>
          <p className='lg:text-base text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className='flex flex-row gap-1'>
          <ButtonLink type='secondary' href='/projects'>
            More Project
          </ButtonLink>
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
