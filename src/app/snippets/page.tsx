import { Metadata } from 'next';
import React from 'react';

import { getAllPostFrontmatter } from '@/lib/mdx.server';

import { PostTitle, SnippetCard } from '@/components';

export const metadata: Metadata = {
  title: 'Snippets ',
  description:
    'This contain Agus Darmawan snippets in web development and robotics',
};

export default async function SnippetsPage() {
  const snippets = await getAllPostFrontmatter('snippets');
  if (!snippets) {
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;
  }

  return (
    <main className='pt-24 layout min-h-screen' title='snippets-page'>
      <PostTitle
        title='Snippets'
        description='This contain Agus Darmawan snippets in web development and robotics'
      />
      <section className='md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col lg:gap-5 gap-2 md:mt-5 mt-2 mb-4'>
        {snippets.map((snippet, index) => (
          <SnippetCard {...snippet} key={index} />
        ))}
      </section>
    </main>
  );
}
