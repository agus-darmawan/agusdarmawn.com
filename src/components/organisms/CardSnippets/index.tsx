import { FC } from 'react';

import { LikeView, Tag } from '@/components';

interface ICardSnippetsProps {
  title: string;
  description: string;
  tags: string[];
  views: number;
  likes: number;
}

const CardSnippets: FC<ICardSnippetsProps> = ({
  title,
  description,
  tags,
  views,
  likes,
}) => {
  return (
    <section className='h-52 rounded-xl bg-gray-100 dark:bg-gray-800 px-10 py-5 flex flex-col justify-between'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-lg'>{description}</p>
      <div className='flex justify-between items-center'>
        <Tag labels={tags} />
        <LikeView views={views} likes={likes} />
      </div>
    </section>
  );
};

export default CardSnippets;
