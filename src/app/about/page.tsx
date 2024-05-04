import { FC } from 'react';

import {
  IntroductionAbout,
  ListExperience,
  MyStatistics,
  SkillsTabs,
} from '@/components';

const AboutPage: FC = () => {
  return (
    <main title='about-page' className='min-h-[300vh]'>
      <IntroductionAbout />
      <SkillsTabs />
      <MyStatistics />
      <ListExperience />
    </main>
  );
};

export default AboutPage;
