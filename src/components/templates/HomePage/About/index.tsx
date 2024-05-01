import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IconList, Tabs } from '@/components';

const AboutHomePage: FC = () => {
  const startData = [
    {
      number: '3+',
      desc: 'Year Experience in Programming',
    },
    {
      number: '6+',
      desc: 'Work Experience',
    },
    {
      number: '15+',
      desc: 'Projects completed',
    },
  ];
  const tabsData = [
    {
      title: 'Frontend',
      content: (
        <IconList
          icons={['css', 'bootstrap', 'tailwind', 'js', 'ts', 'react', 'next']}
        />
      ),
    },
    {
      title: 'Robotics',
      content: (
        <IconList
          icons={[
            'cpp',
            'python',
            'arduino',
            'sklearn',
            'tensorflow',
            'opencv',
            'ros',
          ]}
        />
      ),
    },
    {
      title: 'Tools',
      content: (
        <IconList
          icons={[
            'github',
            'vscode',
            'postman',
            'npm',
            'docker',
            'figma',
            'ubuntu',
          ]}
        />
      ),
    },
  ];

  return (
    <section
      className={clsx(
        'h-screen flex flex-col justify-center',
        'px-10 md:px-20 lg:px-36',
      )}
    >
      <figure
        className={clsx(
          'flex md:flex-row flex-col items-center ',
          'md:mb-8 gap-5 lg:gap-36',
        )}
      >
        <Image
          src='/assets/img/home-page/dar-about-img.png'
          height={427}
          width={400}
          className='lg:h-[427px] md:h-[320px] h-[220px] w-max'
          alt='vector'
        />
        <article className='md:text-left text-center'>
          <h2
            className={clsx(
              'font-semibold md:pb-5 text-violet-500',
              'text-3xl md:text-5xl lg:text-6xl',
            )}
          >
            About Me
          </h2>
          <p className='text-sm lg:text-xl leading-relaxed'>
            6th semester S1 student majoring in Computer Engineering at FTEIC
            ITS, currently working as a Programmer at Barunastra ITS Roboboat
            Team with 3+ years experience in C++, Python, and ROS, and 2 years
            in React frontend development. Interested in web dev and robotics{' '}
            <Link href='/about' className='hover:underline text-violet-500'>
              lihat selengkapnya
            </Link>
          </p>
          <ul className='flex flex-row mt-10 justify-between'>
            {startData.map(({ number, desc }, index) => (
              <li key={index} className='flex flex-col md:max-w-48 w-1/3'>
                <span
                  className={clsx(
                    'lg:text-5xl md:text-4xl text-2xl',
                    ' font-semibold text-violet-500',
                  )}
                >
                  {number}
                </span>
                <span className='lg:text-xl text-xs'>{desc}</span>
              </li>
            ))}
          </ul>
        </article>
      </figure>
      <Tabs title='What can i do ?' tabs={tabsData} />
    </section>
  );
};

export default AboutHomePage;
