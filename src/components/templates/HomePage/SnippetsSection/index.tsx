'use client';
import { FC, useMemo } from 'react';

import useWindowSize from '@/hooks/useWindowSize';

import { PostTitle, SnippetCard } from '@/components';

import { PostMeta } from '@/interfaces/post';
const transformedData: PostMeta[] = [
  {
    slug: 'card-snippet-1',
    readingTime: '5 min',
    frontmatter: {
      title: 'Card Snippet 1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      date: '2024-05-01',
      techs: ['React', 'Next.js'],
    },
  },
  {
    slug: 'card-snippet-2',
    readingTime: '8 min',
    frontmatter: {
      title: 'Card Snippet 2',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
      date: '2024-05-02',
      techs: ['Vue', 'Nuxt.js'],
    },
  },
  {
    slug: 'card-snippet-3',
    readingTime: '10 min',
    frontmatter: {
      title: 'Card Snippet 3',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus.',
      date: '2024-05-03',
      techs: ['Angular', 'TS'],
    },
  },
  {
    slug: 'card-snippet-4',
    readingTime: '12 min',
    frontmatter: {
      title: 'Card Snippet 4',
      description:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
      date: '2024-05-04',
      techs: ['JS', 'Node.js'],
    },
  },
];

const SnippetsSection: FC = () => {
  const { width } = useWindowSize();

  const itemsToShow = useMemo(() => {
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
  }, [width]);
  return (
    <section className='layout mb-20 mt-20'>
      <PostTitle
        title='Feature Snippets'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum odit, alias dignissimos soluta delectus?'
      />

      <div className='md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col lg:gap-5 gap-2 md:mt-10 mt-5 mb-4'>
        {transformedData.slice(0, itemsToShow).map((card, index) => (
          <SnippetCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default SnippetsSection;
