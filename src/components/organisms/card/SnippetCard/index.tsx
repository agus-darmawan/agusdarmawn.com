import { FC } from 'react';

import { Card, LikeView, Tag } from '@/components';

import { PostMeta } from '@/interfaces/post';

const SnippetCard: FC<PostMeta> = ({ slug, frontmatter }) => {
  return (
    <Card
      className='md:h-36 h-32 rounded-xl px-5 py-2 flex flex-col justify-between'
      href={`snipets/${slug}`}
    >
      <h3 className='md:text-xl text-lg font-semibold'>{frontmatter.title}</h3>
      <p className='text-sm md:text-base font-light'>
        {frontmatter.description}
      </p>
      <div className='flex justify-between items-center pt-3'>
        <Tag labels={frontmatter.techs} />
        <LikeView views={200} likes={100} />
      </div>
    </Card>
  );
};

export default SnippetCard;
