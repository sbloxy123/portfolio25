'use client';

import { ProjectType } from '@/app/data/projects-data';
import { useEffect, useState } from 'react';

interface FilterProps {
  projects: ProjectType[];
  onFilterChange: (filtered: ProjectType[]) => void;
}

const FilterProjectByTech = ({ projects, onFilterChange }: FilterProps) => {
  const techArr: string[] = [];
  projects.forEach((project) => {
    project.tech.forEach((t) => {
      techArr.push(t);
    });
  });
  const uniqueTech = Array.from(new Set(techArr));

  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  useEffect(() => {
    if (selectedTech.length === 0) {
      // If no tech selected, show all
      onFilterChange(projects);
    } else {
      // Filter: project must have all selected tech
      const newFiltered = projects.filter((p) =>
        selectedTech.every((tech) => p.tech.includes(tech)),
      );
      onFilterChange(newFiltered);
    }
  }, [selectedTech, projects, onFilterChange]);

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
    <ul className="badge__list flex flex-wrap gap-4 max-w-[750px]">
      {uniqueTech.map((tech, index) => {
        // Is this badge active?
        const isActive = selectedTech.includes(tech);

        return (
          <li key={index} onClick={() => handleBadgeClick(tech)}>
            <button
              className={`badge__item flex w-fit min-w-[70px] cursor-pointer items-center justify-center rounded-md border border-theme_light_orange px-3 py-2 transition-colors duration-300 ${
                isActive
                  ? 'border-r-theme_dark_orange bg-theme_light_orange text-background'
                  : 'bg-[rgba(var(--orange-opac),0.1)] text-theme_light_orange hover:bg-[rgba(var(--orange-opac),0.2)] hover:shadow-[0_0_20px_rgba(var(--orange-opac),0.15)]'
              }`}
              title={`add ${tech} to filter`}
            >
              <span className="font-font_inter text-[1.4rem]">{tech}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterProjectByTech;
