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
  return <Tabs title='What can I do?' tabs={tabsData} />;
};

export default SkillsTabs;
