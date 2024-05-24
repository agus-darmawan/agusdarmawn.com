import { FC } from 'react';

interface ProjectDetailsProps {
  title: string;
  description: string;
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ title, description }) => {
  return (
    <figcaption className='lg:space-y-2 space-x-1 text-center md:text-left py-5 md:py-0'>
      <h3 className='lg:text-5xl md:text-3xl text-2xl capitalize font-semibold'>
        {title}
      </h3>
      <p className='md:text-base text-sm font-light'>{description}</p>
    </figcaption>
  );
};

export default ProjectDetails;
