import { FC } from 'react';

import { GradientText } from '@/components';

const ProjectsTitle: FC = () => {
  return (
    <section className='mt-8'>
      <h1>
        <GradientText className='md:text-5xl text-3xl font-semibold'>
          Project
        </GradientText>
      </h1>
      <p className='md:text-lg text-sm pt-2'>
        Lorem ipsum dolor sit amet consectetur
      </p>
    </section>
  );
};

export default ProjectsTitle;
