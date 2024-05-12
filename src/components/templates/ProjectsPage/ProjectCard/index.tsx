import { FC } from 'react';

import getFormattedDate from '@/lib/useFormattedDate';

import { CloudinaryImage, IconList, Links } from '@/components';

import { PostMeta } from '@/interfaces/post';

const ProjectCard: FC<PostMeta> = ({
  id,
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
        <div className='flex flex-row pt-10'>
          <div>
            <h3 className='pb-2'>
              {getFormattedDate(startAt)}- {getFormattedDate(publishedAt)}
            </h3>
            <IconList icons={techs} variant='small' />
          </div>
          <Links
            href={id}
            className='ml-auto pr-20 text-lg text-violet-500 hover:text-violet-400 cursor-pointer'
          >
            See More
          </Links>
        </div>
      </article>
    </section>
  );
};

export default ProjectCard;
