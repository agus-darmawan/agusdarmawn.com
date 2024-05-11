import { Metadata } from 'next';
import { FC } from 'react';

import {
  Gallery,
  IntroductionAbout,
  ListExperience,
  SkillsTabs,
} from '@/components';

export const metadata: Metadata = {
  title: 'About',
  description: 'This contain Agus Darmawan personal information',
};

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
