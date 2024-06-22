import {
  BlogsSection,
  HeroHomePage,
  ProjectsSection,
  SnippetsSection,
} from '@/components';

export default function HomePage() {
  return (
    <main>
      <HeroHomePage />
      <ProjectsSection />
      <BlogsSection />
      <SnippetsSection />
    </main>
  );
}
