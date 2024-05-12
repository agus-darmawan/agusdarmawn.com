import { getPostsMeta } from '@/lib/usePost';

import ListPost from './ListPost';

export default async function Posts() {
  const posts = await getPostsMeta('projects');

  if (!posts) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  return (
    <section className=''>
      <ul className='w-full list-none p-0'>
        {posts.map((post) => (
          <ListPost key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
