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
    <section className='w-full grid grid-cols-2 md:flex-row flex-col gap-10 mt-5 h-64 rounded-x'>
      <CloudinaryImage
        publicId='agusdarmawn/projects/example-banner'
        alt='agusdarmawn/projects/example-banner'
        width={1440}
        height={792}
        preview={false}
      />
      <article className='flex flex-col justify-between'>
        <h3 className='text-xl capitalize'>{tags}</h3>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p className='leading-relaxed text-justify'>{description}</p>
        <div className='flex flex-row pt-10 items-center'>
          <div>
            <h3 className='pb-3'>
              {getFormattedDate(startAt)}- {getFormattedDate(publishedAt)}
            </h3>
            <IconList icons={techs} variant='small' />
          </div>
          <Links
            href={id}
            className='ml-auto text-lg text-violet-500 hover:text-violet-400 cursor-pointer'
          >
            See More
          </Links>
        </div>
      </article>
    </section>
  );
};

export default ProjectCard;
