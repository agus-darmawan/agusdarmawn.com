import { FC } from 'react';

import { Card, LikeView, Tag } from '@/components';

interface ISnippetCardProps {
  title: string;
  description: string;
  tags: string[];
  views: number;
  likes: number;
}

const SnippetCard: FC<ISnippetCardProps> = ({
  title,
  description,
  tags,
  views,
  likes,
}) => {
  return (
    <Card className='md:h-36 h-32 rounded-xl px-5 py-2 flex flex-col justify-between'>
      <h3 className='md:text-xl text-lg font-semibold'>{title}</h3>
      <p className='text-sm md:text-base font-light'>{description}</p>
      <div className='flex justify-between items-center pt-3'>
        <Tag labels={tags} />
        <LikeView views={views} likes={likes} />
      </div>
    </Card>
  );
};

export default SnippetCard;
