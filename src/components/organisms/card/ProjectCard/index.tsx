import { FC } from 'react';

import getFormattedDate from '@/lib/useFormattedDate';

import { CloudinaryImage, IconList, Link } from '@/components';

import { PostMeta } from '@/interfaces/post';

const ProjectCard: FC<PostMeta> = ({ slug, frontmatter }) => {
  return (
    <section className='w-full md:grid grid-cols-2  flex-col gap-5 md:h-64 rounded-xl'>
      <CloudinaryImage
        publicId='agusdarmawn/projects/example-banner'
        alt='agusdarmawn/projects/example-banner'
        className='md:max-h-60 h-36 lg:h-full'
        width={1440}
        height={792}
        preview={false}
      />
      <section className='flex flex-col justify-between lg:py-3  md:py-2 md:px-5 max-h-60 mt-4'>
        <div className=''>
          <h3 className='md:text-base capitalize'>{frontmatter.tags}</h3>
          <h2 className='lg:text-3xl text-2xl font-semibold'>
            {frontmatter.title}
          </h2>
          <p className='leading-relaxed text-justify lg:text-base md:text-sm text-xs font-light'>
            {frontmatter.description}
          </p>
        </div>
        <div className='flex flex-row items-center'>
          <div>
            <h3 className='pb-3 lg:text-base text-xs font-light mt-2'>
              {getFormattedDate(String(frontmatter.startDate))}-{' '}
              {getFormattedDate(String(frontmatter.endDate))}
            </h3>
            <IconList icons={frontmatter.techs} variant='small' />
          </div>
          <Link
            href={slug}
            underline
            className='ml-auto mt-6 md:text-lg text-base text-violet-500 hover:text-violet-400 cursor-pointer'
          >
            See More
          </Link>
        </div>
      </section>
    </section>
  );
};

export default ProjectCard;
