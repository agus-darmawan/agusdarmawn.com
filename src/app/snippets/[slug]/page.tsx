import { notFound } from 'next/navigation';
import { FaEye } from 'react-icons/fa';

import { getFileBySlug, getPostFrontmatter } from '@/lib/mdx.server';

import { ClientTOC, Link, Tag } from '@/components';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const meta = await getPostFrontmatter(`snippets/${slug}`);
  return {
    title: meta?.frontmatter.title,
    description: meta?.frontmatter.description,
    date: meta?.frontmatter.date,
  };
}

export default async function SnippetsPostPage({ params: { slug } }: Props) {
  const post = await getFileBySlug(`snippets/${slug}`);
  if (!post) notFound();
  const { meta, content } = post;
  const { frontmatter } = meta;
  return (
    <main className='layout pt-24'>
      <section className='space-y-2'>
        <h1 className='md:text-4xl text-2xl font-semibold'>
          {frontmatter.title}
        </h1>
        <p className='lg:text-lg md:text-base text-sm'>
          {frontmatter.description}
        </p>
        <p className='flex gap-2 items-center md:text-base text-sm'>
          <FaEye className='mr-1' /> 21 Views
        </p>
        <Tag labels={frontmatter.techs} />
      </section>
      <hr className='border-1 bg-black my-2' />
      <section className='grid lg:grid-cols-[auto,250px] lg:gap-8 '>
        <article className='mdx  prose mx-0 mt-4 transition-colors duration-1000 dark:prose-invert min-w-full'>
          {content}
        </article>
        <aside>
          <div className='sticky top-36 hidden md:block'>
            <ClientTOC content={meta.slug} />
          </div>
        </aside>
      </section>
      <p className='mt-10 mb-20'>
        <Link href='/projects' underline>
          ← Back to Snippets
        </Link>
      </p>
    </main>
  );
}
