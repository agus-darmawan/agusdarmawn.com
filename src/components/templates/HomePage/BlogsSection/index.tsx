'use client';
import { FC, useMemo } from 'react';

import useWindowSize from '@/hooks/useWindowSize';

import { BlogCard } from '@/components';
import { PostTitle } from '@/components/organisms';
import { IBlogCardProps } from '@/components/organisms/card/BlogCard';

const BlogsSection: FC = () => {
  const { width } = useWindowSize();

  const itemsToShow = useMemo(() => {
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    if (width >= 640) return 3;
    return 2;
  }, [width]);
  return (
    <section className='layout'>
      <PostTitle
        title='Feature Blogs'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum odit, alias dignissimos soluta delectus?'
      />
      <div className='md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col lg:gap-5 gap-2 md:mt-10 mt-5 mb-4'>
        {blogs.slice(0, itemsToShow).map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

const blogs: IBlogCardProps[] = [
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['React', 'Next.js'],
    title: 'Sample Blog Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    reading: '5 min read',
    views: 100,
    likes: 50,
    date: 'May 24, 2024',
    slug: 'sample-blog-1',
  },
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['JavaScript', 'TypeScript'],
    title: 'Sample Blog Title 2',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    reading: '8 min read',
    views: 120,
    likes: 70,
    date: 'June 15, 2024',
    slug: 'sample-blog-2',
  },
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['HTML', 'CSS', 'Sass'],
    title: 'Sample Blog Title 3',
    description: 'Sed euismod nisi eget semper scelerisque.',
    reading: '6 min read',
    views: 80,
    likes: 40,
    date: 'July 3, 2024',
    slug: 'sample-blog-3',
  },
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['Node.js', 'Express.js'],
    title: 'Sample Blog Title 4',
    description: 'Fusce eget urna id nulla fermentum sodales ac at lacus.',
    reading: '7 min read',
    views: 90,
    likes: 60,
    date: 'August 21, 2024',
    slug: 'sample-blog-4',
  },
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['Vue.js', 'Vuex'],
    title: 'Sample Blog Title 5',
    description:
      'Curabitur rutrum tortor id sem suscipit, sit amet suscipit arcu hendrerit.',
    reading: '9 min read',
    views: 110,
    likes: 55,
    date: 'September 10, 2024',
    slug: 'sample-blog-5',
  },
  {
    image: 'samples/ecommerce/leather-bag-gray',
    tags: ['Python', 'Django'],
    title: 'Sample Blog Title 6',
    description:
      'Duis ultricies orci non velit ultricies, a ultrices mauris posuere.',
    reading: '6 min read',
    views: 85,
    likes: 45,
    date: 'October 5, 2024',
    slug: 'sample-blog-6',
  },
];

export default BlogsSection;
