import { FC } from 'react';

import { IntroductionAbout, SkillsTabs } from '@/components';

const AboutPage: FC = () => {
  return (
    <main>
      <IntroductionAbout />
      <SkillsTabs />
    </main>
  );
};

export default AboutPage;
