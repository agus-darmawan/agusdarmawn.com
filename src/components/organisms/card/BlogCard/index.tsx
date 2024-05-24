import { FC } from 'react';
import { FiClock } from 'react-icons/fi';

import { Card, CloudinaryImage, LikeView, Tag } from '@/components';

export interface IBlogCardProps {
  readonly image: string;
  readonly tags: string[];
  readonly title: string;
  readonly description: string;
  readonly reading: string;
  readonly views: number;
  readonly likes: number;
  readonly date: string;
  readonly slug: string;
}

const BlogCard: FC<IBlogCardProps> = ({
  image,
  tags,
  title,
  description,
  reading,
  views,
  likes,
  date,
  slug,
}) => {
  return (
    <Card
      title='blogs-card'
      className='col-span-1 rounded-lg'
      href={`/blog/${slug}`}
    >
      <section className='relative'>
        <CloudinaryImage
          publicId={image}
          height={219}
          width={609}
          alt={title}
          className='rounded-none'
          title={title}
        />
        <div className='absolute bottom-2 mx-5 right-0'>
          <Tag labels={tags} />
        </div>
      </section>
      <figcaption className='md:mx-5 mx-2 my-3'>
        <h2 className='lg:text-2xl md:text-xl text-lg font-semibold'>
          {title}
        </h2>
        <p className='leading-relaxed md:text-sm text-xs font-light'>
          {description}
        </p>
        <div className='flex items-center gap-1 md:py-3 py-1 italic'>
          <FiClock />
          <h3 className='bg-violet-500/60 text-sm md:text-base'>{reading}</h3>
        </div>
        <div className='flex justify-between md:pb-3 font-light text-sm md:text-base'>
          <h3>{date}</h3>
          <LikeView views={views} likes={likes} />
        </div>
      </figcaption>
    </Card>
  );
};

export default BlogCard;
