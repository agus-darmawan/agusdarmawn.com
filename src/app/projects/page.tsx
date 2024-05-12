import type { Metadata } from 'next';
import { FC } from 'react';

import { ProjectsTitle } from '@/components';
import ListCard from '@/components/templates/ProjectsPage/ListCard';

export const metadata: Metadata = {
  title: 'Project ',
  description: 'This contain Agus Darmawan projects and their dependencies',
};

const ProjectsPage: FC = () => {
  return (
    <main title='projects-page' className='layout pt-16 min-h-screen'>
      <ProjectsTitle />
      <ListCard />
    </main>
  );
};

export default ProjectsPage;
