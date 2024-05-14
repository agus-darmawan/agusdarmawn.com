import { Metadata } from 'next';

import { PostTitle } from '@/components';

export const metadata: Metadata = {
  title: 'Blogs ',
  description:
    'This contain Agus Darmawan Blogs in web development and robotics',
};

import React from 'react';

export default function BlogsPage() {
  return (
    <main className='pt-24 layout min-h-screen' title='Blogs-page'>
      <PostTitle
        title='Blogs'
        description='This contain Agus Darmawan Blogs in web development and robotics'
      />
    </main>
  );
}
