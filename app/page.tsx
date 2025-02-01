import ExperienceSection from '@/components/sections/ExperienceSection';
import HomepageMainTitles from '@/components/sections/HomepageMainTitles';
import IntroSection from '@/components/sections/IntroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Stack from '@/components/sections/Stack';

export default function Home() {
  return (
    <>
      <div className="relative">
        <HomepageMainTitles />

        <IntroSection />
        <ExperienceSection />
      </div>
      <ProjectsSection />
      <Stack />
    </>
  );
}
