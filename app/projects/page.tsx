'use client';

import { useEffect, useState, useRef } from 'react';
import ProjectItem from '@/components/ProjectItem';

import Stack from '@/components/sections/Stack';
import Link from 'next/link';
import { useTitleNav } from '@/contexts/TitleNavContext';
import { projects, ProjectType } from '../data/projects-data';

export default function Projects() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { setTitleInNav } = useTitleNav();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        // Check if we've scrolled past the header's top offset
        if (window.scrollY > headerRef.current.offsetTop + 105) {
          setIsSticky(true);
          setTitleInNav(true);
        } else {
          setIsSticky(false);
          setTitleInNav(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setTitleInNav]);

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
    <>
      <div className="mt-[14rem]">
        <div className="mx-auto block w-fit px-[2%] text-center">
          <h1 ref={headerRef} className={`block text-center`}>
            <Link
              href="/"
              aria-label="Link to homepage"
              className={`inner__page__title block pb-4 font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)] small:pb-0 ${isSticky && 'titles__sticky'}`}
            >
              Stuart Bloxham.{' '}
            </Link>
            <span className="ml-[-0.6rem] block font-font_italiana text-[clamp(4rem,12vw,8rem)] uppercase leading-[0.8] tracking-[0.02em] text-theme_light_orange xsmall:text-[clamp(3rem,10vw,5rem)]">
              <span className="tracking-[0.04em]">FRONT END</span>
              <br />
              <span className="">DEVELOPER</span>
            </span>
          </h1>
        </div>

        <section className="projects__page__section my-36 px-[5%] small:px-layout-small">
          <h2 className="section__title text-center xsmall:w-full">Projects.</h2>

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
          <ul className="projects__list flex flex-wrap justify-center gap-10 pt-10">
            {filteredProjects.map((project, index) => {
              return (
                <li key={index} className="">
                  <ProjectItem project={project} />
                </li>
              );
            })}
          </ul>
        </section>

        <Stack />
      </div>
    </>
  );
}
