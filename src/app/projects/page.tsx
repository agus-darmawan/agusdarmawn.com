import type { Metadata } from 'next';

import { PostTitle } from '@/components';
import ListCard from '@/components/templates/ProjectsPage/ListCard';

export const metadata: Metadata = {
  title: 'Project ',
  description: 'This contain Agus Darmawan projects and their dependencies',
};

export default function ProjectsPage() {
  return (
    <main title='projects-page' className='layout pt-24 min-h-screen'>
      <PostTitle
        title='Projects'
        description='This contain Agus Darmawan projects and their dependencies.'
      />
      <ListCard />
    </main>
  );
}
