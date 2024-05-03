import { FC } from 'react';

import { IconList, Tabs } from '@/components';

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

const SkillsTabs: FC = () => {
  return (
    <section title='my-skill' className='px-10 md:px-20 lg:px-40'>
      <Tabs title='What can I do?' tabs={tabsData} />
    </section>
  );
};

export default SkillsTabs;
