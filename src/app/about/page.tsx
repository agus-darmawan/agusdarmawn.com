import { Metadata } from 'next';

import { AboutMe, Gallery, ListExperience, SkillsTabs } from '@/components';

import data from './data.json';

export const metadata: Metadata = {
  title: data.aboutMe.title,
  description: data.aboutMe.description,
};

export default function AboutPage() {
  return (
    <main title='about-page' className='layout'>
      <AboutMe {...data.aboutMe} />
      <SkillsTabs />
      <ListExperience />
      <Gallery />
    </main>
  );
}
