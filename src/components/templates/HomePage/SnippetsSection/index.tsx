import { FC } from 'react';

import { CardSnippets, PostTitle } from '@/components';

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
    tags: ['Angular', 'TypeScript'],
    views: 75,
    likes: 30,
  },
  {
    title: 'Card Snippet 4',
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
    tags: ['JavaScript', 'Node.js'],
    views: 100,
    likes: 40,
  },
];

const SnippetsSection: FC = () => {
  return (
    <section className='layout mb-20'>
      <PostTitle
        title='Feature Snippets'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum odit, alias dignissimos soluta delectus?'
      />
      <div className='grid grid-cols-2 gap-10 mt-10 mb-4'>
        {dummyCardData.map((card, index) => (
          <CardSnippets
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
