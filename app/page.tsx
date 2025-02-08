import ExperienceSection from '@/components/sections/ExperienceSection';
import HomepageMainTitles from '@/components/sections/HomepageMainTitles';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Stack from '@/components/sections/Stack';

export default function Home() {
  return (
    <>
      <section className="relative max-w-screen-large mx-auto">
        <HomepageMainTitles />

        <IntroSection />
        <ExperienceSection />
      </section>
      <ProjectsSection />
      <Stack />
    </>
  );
}
