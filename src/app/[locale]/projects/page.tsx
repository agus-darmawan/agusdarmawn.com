import type { Metadata } from 'next';

import { getAllPostFrontmatter } from '@/lib/mdx.server';

import { PostTitle, ProjectCard } from '@/components';

export const metadata: Metadata = {
  title: 'Project ',
  description: 'This contain Agus Darmawan projects and their dependencies',
};

export default async function ProjectsPage() {
  const posts = await getAllPostFrontmatter('projects');
  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }
  return (
    <main title='projects-page' className='layout pt-24'>
      <PostTitle
        title='Projects'
        description='This contain Agus Darmawan projects and their dependencies.'
      />

      <section className='w-full flex flex-col gap-5 mt-5 mb-20'>
        {posts.map((post, index) => (
          <ProjectCard {...post} key={index} />
        ))}
      </section>
    </main>
  );
}
