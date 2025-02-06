import { projects } from '@/app/data/projects-data';
import ProjectSwiper from '../swiper/ProjectSwiper';
import ButtonLink from '../ButtonLink';

const ProjectsSection = () => {
  return (
    <section
      className="projects__section relative overflow-x-hidden bg-background px-[5%] pb-28 pt-20 xsmall:mt-20 small:px-layout-small"
      id="projects"
    >
      <h2 className="section__title">Projects.</h2>

      <div className="projects__container bg-background py-10 xsmall:pb-20">
        <ProjectSwiper projects={projects} />
      </div>

      <div className="button__link__container mx-auto w-fit">
        <ButtonLink
          text="View all Projects"
          buttonType="primary"
          ariaLabel="Visit my projects page"
          hrefDestination="/projects"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
