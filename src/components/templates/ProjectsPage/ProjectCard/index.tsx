import { FC } from 'react';

import { CloudinaryImage, IconList } from '@/components';

import { PostMeta } from '@/interfaces/post';

const ProjectCard: FC<PostMeta> = ({
  title,
  description,
  startAt,
  publishedAt,
  tags,
  techs,
}) => {
  return (
    <section className='w-full flex h-60 gap-10 mt-5 rounded-xl items-center relative overflow-hidden'>
      <figure className='w-1/2'>
        <CloudinaryImage
          className='h-full w-full'
          publicId='agusdarmawn/projects/example-banner'
          alt='agusdarmawn/projects/example-banner'
          width={1440}
          height={792}
          preview={false}
        />
      </figure>
      <article className='w-1/2'>
        <h3 className='text-xl capitalize'>{tags}</h3>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p className='leading-relaxed'>{description}</p>
        <h3 className='pt-10 pb-2'>
          {startAt}- {publishedAt}
        </h3>
        <IconList icons={techs} variant='small' />
      </article>
    </section>
  );
};

export default ProjectCard;
