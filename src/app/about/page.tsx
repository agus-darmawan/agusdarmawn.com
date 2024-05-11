import { FC } from 'react';

import {
  Gallery,
  IntroductionAbout,
  ListExperience,
  SkillsTabs,
} from '@/components';

const AboutPage: FC = () => {
  return (
    <main title='about-page' className='layout'>
      <IntroductionAbout />
      <SkillsTabs />
      <ListExperience />
      <Gallery />
    </main>
  );
};

export default AboutPage;
