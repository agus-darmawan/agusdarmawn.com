import { FC } from 'react';

import getFormattedDate from '@/lib/useFormattedDate';

import { CloudinaryImage, IconList, Link } from '@/components';

import { PostMeta } from '@/interfaces/post';

const ProjectCard: FC<PostMeta> = ({ slug, frontmatter }) => {
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
        <h3 className='text-xl capitalize'>{frontmatter.tags}</h3>
        <h2 className='text-5xl font-bold'>{frontmatter.title}</h2>
        <p className='leading-relaxed text-justify'>
          {frontmatter.description}
        </p>
        <div className='flex flex-row pt-10 items-center'>
          <div>
            <h3 className='pb-3'>
              {getFormattedDate(String(frontmatter.startDate))}-{' '}
              {getFormattedDate(String(frontmatter.endDate))}
            </h3>
            <IconList icons={frontmatter.techs} variant='small' />
          </div>
          <Link
            href={slug}
            className='ml-auto text-lg text-violet-500 hover:text-violet-400 cursor-pointer'
          >
            See More
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProjectCard;
