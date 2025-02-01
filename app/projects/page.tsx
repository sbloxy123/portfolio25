import ProjectItem from '@/components/ProjectItem';
import { projects } from '@/components/sections/ProjectsSection';
import Stack from '@/components/sections/Stack';
import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <div className="relative mt-[14rem]">
        <Link href="/" title="link to homepage" className="mx-auto block w-fit px-[2%] text-center">
          <h1 className="page__title block text-center">
            <span className="block pb-4 font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)] small:pb-0">
              Stuart Bloxham.{' '}
            </span>
            <span className="ml-[-0.6rem] block font-font_italiana text-[clamp(4rem,12vw,8rem)] uppercase leading-[0.8] tracking-[0.02em] text-theme_light_orange xsmall:text-[clamp(3rem,10vw,5rem)]">
              <span className="tracking-[0.04em]">FRONT END</span>
              <br />
              <span className="">DEVELOPER</span>
            </span>
          </h1>
        </Link>

        <section className="projects__page__section my-36 px-[5%] small:px-layout-small">
          <h2 className="section__title text-center xsmall:w-full">Projects.</h2>

          <ul className="projects__list flex flex-wrap justify-center gap-10 pt-10">
            {projects.map((project, index) => (
              <li key={index} className="">
                <ProjectItem project={project} />
              </li>
            ))}
          </ul>
        </section>

        <Stack />
      </div>
    </>
  );
}
