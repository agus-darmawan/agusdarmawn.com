import { FC } from 'react';

import { IconList } from '@/components/molecules';
interface IProjectTechStackProps {
  techs: string[];
}

const ProjectTechStack: FC<IProjectTechStackProps> = ({ techs }) => {
  return (
    <div className='mx-auto md:mx-0 mb-5 md:mb-0'>
      <h4 className='md:text-2xl text-lg pb-2 text-center md:text-left'>
        Technology
      </h4>
      <IconList icons={techs} variant='small' />
    </div>
  );
};

export default ProjectTechStack;
