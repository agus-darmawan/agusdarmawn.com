import { Metadata } from 'next';

import { PostTitle } from '@/components';

export const metadata: Metadata = {
  title: 'Snippets ',
  description:
    'This contain Agus Darmawan snippets in web development and robotics',
};

import React from 'react';

export default function SnippetsPage() {
  return (
    <main className='pt-24 layout min-h-screen' title='snippets-page'>
      <PostTitle
        title='Snippets'
        description='This contain Agus Darmawan snippets in web development and robotics'
      />
    </main>
  );
}
