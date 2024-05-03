import { FC } from 'react';

import { IntroductionAbout, MyStatistics, SkillsTabs } from '@/components';

const AboutPage: FC = () => {
  return (
    <main title='about-page'>
      <IntroductionAbout />
      <SkillsTabs />
      <MyStatistics />
    </main>
  );
};

export default AboutPage;
