import { getPostsMeta } from '@/lib/usePost';

import { ProjectCard } from '@/components';
export default async function ListCard() {
  const posts = await getPostsMeta('projects');
  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  return (
    <section className=''>
      <ul className='w-full'>
        {posts.map((post, index) => (
          <li key={index}>
            <ProjectCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
