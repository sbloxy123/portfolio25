'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import ProjectItem from '@/components/ProjectItem';

import Stack from '@/components/sections/Stack';
import Link from 'next/link';
import { useTitleNav } from '@/contexts/TitleNavContext';
import FilterProjectByTech from '@/components/FilterProjectByTech';
import { projects, ProjectType } from '../data/projects-data';

export default function Projects() {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { setTitleInNav } = useTitleNav();
  const [filteredProjects, setFilteredProjects] = useState<ProjectType[]>(projects);

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

  const handleFilterChange = useCallback((newFiltered: ProjectType[]) => {
    setFilteredProjects(newFiltered);
  }, []);

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

        <section className="projects__page__section my-36 px-[5%] small:px-layout-small max-w-screen-large mx-auto">
          <h2 className="section__title text-center xsmall:w-full">Projects.</h2>

          <h4 className="pb-4">Filter by tech:</h4>

          <FilterProjectByTech projects={projects} onFilterChange={handleFilterChange} />
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
