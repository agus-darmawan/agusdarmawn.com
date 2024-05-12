import type { Metadata } from 'next';
import { FC } from 'react';

import { ProjectCard, ProjectsTitle } from '@/components';

export const metadata: Metadata = {
  title: 'Project ',
  description: 'This contain Agus Darmawan projects and their dependencies',
};

const ProjectsPage: FC = () => {
  return (
    <main title='projects-page' className='layout pt-16 min-h-screen'>
      <ProjectsTitle />
      <ProjectCard />
    </main>
  );
};

export default ProjectsPage;
