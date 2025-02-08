'use client';

import { projects, ProjectType } from '@/app/data/projects-data';
import ProjectSwiper from '../swiper/ProjectSwiper';
import ButtonLink from '../ButtonLink';
import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const techArr: string[] = [];
  projects.forEach((project) => {
    project.tech.forEach((t) => {
      techArr.push(t);
    });
  });
  const uniqueTech = Array.from(new Set(techArr));

  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

  useEffect(() => {
    if (selectedTech.length === 0) {
      // If no tech selected, show all
      setFilteredProjects(projects);
    } else {
      // Filter: project must have all selected tech
      const newFiltered = projects.filter((p) =>
        selectedTech.every((tech) => p.tech.includes(tech)),
      );
      setFilteredProjects(newFiltered);
    }
  }, [selectedTech]);

  const handleBadgeClick = (tech: string) => {
    // If tech is already selected, remove it
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    } else {
      // Otherwise, add it
      setSelectedTech([...selectedTech, tech]);
    }
  };

  return (
    <section
      className="projects__section relative overflow-x-hidden bg-background px-[5%] pb-28 pt-20 xsmall:mt-20 small:px-layout-small"
      id="projects"
    >
      <h2 className="section__title">Projects.</h2>
      <h4 className="pb-4">Filter by tech:</h4>
      <ul className="badge__list flex flex-wrap gap-4">
        {uniqueTech.map((tech, index) => {
          // Is this badge active?
          const isActive = selectedTech.includes(tech);

          return (
            <li
              key={index}
              onClick={() => handleBadgeClick(tech)}
              className={`badge__item flex w-fit cursor-pointer items-center justify-center rounded-md border border-theme_light_orange px-3 py-2 transition-colors duration-300 ${
                isActive
                  ? 'border-r-theme_dark_orange bg-theme_light_orange text-background'
                  : 'bg-[rgba(var(--orange-opac),0.1)] text-theme_light_orange hover:bg-[rgba(var(--orange-opac),0.2)]'
              }`}
            >
              <span className="font-font_inter text-[1.4rem]">{tech}</span>
            </li>
          );
        })}
      </ul>
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
    </section>
  );
};

export default ProjectsSection;
