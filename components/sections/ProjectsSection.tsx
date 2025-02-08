'use client';

import { projects, ProjectType } from '@/app/data/projects-data';
import ProjectSwiper from '../swiper/ProjectSwiper';
import ButtonLink from '../ButtonLink';
import { useCallback, useState } from 'react';
import FilterProjectByTech from '../FilterProjectByTech';

const ProjectsSection = () => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  const handleFilterChange = useCallback((newFiltered: ProjectType[]) => {
    setFilteredProjects(newFiltered);
  }, []);

  return (
    <section
      className="projects__section  relative overflow-x-hidden bg-background  pb-28 pt-20 xsmall:mt-20 small"
      id="projects"
    >
      <div className="max-w-screen-large mx-auto px-[5%] small:px-layout-small">

      <h2 className="section__title">Projects.</h2>
      <h4 className="pb-4">Filter by tech:</h4>
      <FilterProjectByTech projects={projects} onFilterChange={handleFilterChange} />

      <div className="projects__container bg-background py-10 xsmall:pb-20">
        <ProjectSwiper projects={filteredProjects} />
      </div>
      <div className="button__link__container mx-auto w-fit">
        <ButtonLink
          text="View all Projects"
          buttonType="primary"
          ariaLabel="Visit my projects page"
          hrefDestination="/projects"
          />
      </div>
          </div>
    </section>
  );
};

export default ProjectsSection;
