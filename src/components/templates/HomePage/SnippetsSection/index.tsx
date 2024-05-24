'use client';
import { FC, useMemo } from 'react';

import useWindowSize from '@/hooks/useWindowSize';

import { PostTitle, SnippetCard } from '@/components';
const dummyCardData = [
  {
    title: 'Card Snippet 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    tags: ['React', 'Next.js'],
    views: 25,
    likes: 10,
  },
  {
    title: 'Card Snippet 2',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    tags: ['Vue', 'Nuxt.js'],
    views: 50,
    likes: 20,
  },
  {
    title: 'Card Snippet 3',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
    tags: ['Angular', 'TS'],
    views: 75,
    likes: 30,
  },
  {
    title: 'Card Snippet 4',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
    tags: ['JS', 'Node.js'],
    views: 100,
    likes: 40,
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
        {dummyCardData.slice(0, itemsToShow).map((card, index) => (
          <SnippetCard
            key={index}
            title={card.title}
            description={card.description}
            tags={card.tags}
            views={card.views}
            likes={card.likes}
          />
        ))}
      </div>
    </section>
  );
};

export default SnippetsSection;
