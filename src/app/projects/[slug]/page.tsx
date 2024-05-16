import { notFound } from 'next/navigation';
import { FaClock, FaEye } from 'react-icons/fa';

import 'highlight.js/styles/github-dark.css';

import { cn } from '@/lib/cn';
import { getFileBySlug, getPostFrontmatter } from '@/lib/mdx.server';
import getFormattedDate from '@/lib/useFormattedDate';

import { CloudinaryImage, Links } from '@/components';
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const meta = await getPostFrontmatter(`projects/${slug}`);
  return {
    title: meta?.frontmatter.title,
    description: meta?.frontmatter.description,
    date: meta?.frontmatter.date,
  };
}

export default async function ProjectPostPage({ params: { slug } }: Props) {
  const post = await getFileBySlug(`projects/${slug}`);
  if (!post) notFound();
  const { meta, content } = post;
  const { frontmatter, readingTime } = meta;
  return (
    <main className={cn('layout  w-full pt-20 min-w-full')}>
      <CloudinaryImage
        className='w-full h-full rounded-xl col-start-1 row-start-1'
        publicId={String(frontmatter.banner)}
        height={400}
        width={1215}
        alt={frontmatter.title}
        title=' '
      />
      <h1 className='font-semibold text-5xl mt-4 mb-2'>{frontmatter.title}</h1>
      <h2 className='text-lg'>{`Written on ${getFormattedDate(frontmatter.date)} by Agus Darmawan`}</h2>
      <div className='flex flex-row pb-2 pt-4 gap-8 items-center'>
        <div className='flex flex-row pb-2 pt-4 gap-2 items-center'>
          <FaClock />
          <h2 className='text-lg'>{readingTime}</h2>
        </div>
        <div className='flex flex-row pb-2 pt-4 gap-2 items-center'>
          <FaEye />
          <h2 className='text-lg'>115 views</h2>
        </div>
      </div>
      <hr className='border-1 bg-black mb-10' />
      <section className='lg:grid lg:grid-cols-[auto,250px]'>
        {' '}
        <article className=''>{content}</article>
      </section>
      <p className='mt-10 mb-20'>
        <Links href='/projects'>← Back</Links>
      </p>
    </main>
  );
}
