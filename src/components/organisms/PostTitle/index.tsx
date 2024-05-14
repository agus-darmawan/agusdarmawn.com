import { FC } from 'react';

import { GradientText } from '@/components';

interface IPostTitleProps {
  title: string;
  description: string;
}

const PostTitle: FC<IPostTitleProps> = ({ title, description }) => {
  return (
    <section>
      <h1>
        <GradientText className='md:text-5xl text-3xl font-semibold pb-2'>
          {title}
        </GradientText>
      </h1>
      <p className='md:text-lg text-sm pt-2'>{description}</p>
    </section>
  );
};

export default PostTitle;
