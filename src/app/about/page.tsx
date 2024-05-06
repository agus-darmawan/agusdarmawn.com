import { FC } from 'react';

import {
  Gallery,
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
      <Gallery />
    </main>
  );
};

export default AboutPage;
