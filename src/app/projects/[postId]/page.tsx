import { notFound } from 'next/navigation';

import 'highlight.js/styles/github-dark.css';

import { cn } from '@/lib/cn';
import getFormattedDate from '@/lib/useFormattedDate';
import { getPostByName, getPostsMeta } from '@/lib/usePost';

import { GradientText, Links } from '@/components';

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta('projects');
  if (!posts) return [];
  return posts.map((post) => ({
    postId: post.id,
  }));
}
export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`projects/${postId}.mdx`);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`projects/${postId}.mdx`);

  if (!post) notFound();
  const { meta, content } = post;
  const pubDate = getFormattedDate(meta.date);

  return (
    <main
      className={cn(
        'layout prose prose-xl prose-slate dark:prose-invert  w-full pt-20 min-w-full',
      )}
    >
      <h2 className='text-6xl mt-4 mb-0'>
        <GradientText>{meta.title}</GradientText>
      </h2>
      <p className='mt-0 text-xl'>{pubDate}</p>
      <article>{content}</article>
      <p className='mt-10 mb-20'>
        <Links href='/projects'>← Back</Links>
      </p>
    </main>
  );
}
