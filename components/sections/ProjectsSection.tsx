import { projects } from '@/app/data/projects-data';
import ProjectSwiper from '../swiper/ProjectSwiper';

const ProjectsSection = () => {
  return (
    <section
      className="projects__section relative overflow-x-hidden bg-background px-[5%] py-20 xsmall:mt-20 small:px-layout-small"
      id="projects"
    >
      <h2 className="section__title">Projects.</h2>

      <div className="projects__container bg-background py-10 xsmall:pb-20">
        <ProjectSwiper projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
