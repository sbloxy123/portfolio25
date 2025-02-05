import { notFound } from 'next/navigation';
import { projects, ProjectType } from '../../data/projects-data';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.innerPageLink }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.innerPageLink === slug);
  if (!project) {
    return notFound();
  }
  const shortenedUrl = project.websiteLink.split('www.')[1];

  return (
    <div className="project__top relative items-start px-[5%] pt-[100px] small:flex small:justify-between small:gap-20 small:px-layout-small">
      <div className="project__heading__text">
        <div className="project__heading pb-20">
          <h1 className="pt-48 text-[clamp(1.8rem,6cqw,2.4rem)]">
            <span className="pr-4">Project</span> •{' '}
            <span className="pl-4 font-bold">{project.title}</span>{' '}
            {project.projectType && (
              <>
                <span className="px-4">•</span> {project.projectType}
              </>
            )}
          </h1>
          <Link
            href={project.websiteLink}
            className="relative w-fit font-font_anonymous font-bold tracking-[0.2em] text-[rgba(var(--green-opac),0.6)] underline decoration-transparent transition-colors duration-300 hover:text-[rgba(var(--green-opac),1)] hover:decoration-[rgba(var(--green-opac),1)]"
            target="_blank"
          >
            {shortenedUrl}
            <span className="link__icon absolute bottom-auto left-[103%] top-0 text-theme_green">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 6.04167V9.29167C8.75 9.57898 8.63586 9.85453 8.4327 10.0577C8.22953 10.2609 7.95398 10.375 7.66667 10.375H1.70833C1.42102 10.375 1.14547 10.2609 0.942301 10.0577C0.739137 9.85453 0.625 9.57898 0.625 9.29167V3.33333C0.625 3.04602 0.739137 2.77047 0.942301 2.5673C1.14547 2.36414 1.42102 2.25 1.70833 2.25H4.95833M7.125 0.625H10.375M10.375 0.625V3.875M10.375 0.625L4.41667 6.58333"
                  stroke="#5EEAD4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        <article className="project__info font-font_anonymous tracking-[0.1em]">
          <div className="project__description pb-10">
            {project.description?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>

          <h2 className="pb-10">Project features & challenges:</h2>
          <ul className="ml-[1rem] list-outside">
            {project.fullFeatureList?.map((feature, index) => (
              <li className="list-disc leading-loose tracking-[0.1em]" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <div className="project__intro__screenshot relative mt-[120px] small:max-w-[30%]">
        <div className="project__intro__screenshot__container__overlay absolute bottom-0 left-0 right-0 z-10 h-[30%] w-full bg-gradient-to-t from-background to-transparent"></div>
        <Link
          href={project.websiteLink}
          className="absolute bottom-0 w-fit translate-y-[150%] pl-2 font-font_anonymous font-bold tracking-[0.2em] text-[rgba(var(--green-opac),0.6)] underline decoration-transparent transition-colors duration-300 hover:text-[rgba(var(--green-opac),1)] hover:decoration-[rgba(var(--green-opac),1)]"
          target="_blank"
        >
          {shortenedUrl}
          <span className="link__icon absolute bottom-auto left-[103%] top-0 text-theme_green">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 6.04167V9.29167C8.75 9.57898 8.63586 9.85453 8.4327 10.0577C8.22953 10.2609 7.95398 10.375 7.66667 10.375H1.70833C1.42102 10.375 1.14547 10.2609 0.942301 10.0577C0.739137 9.85453 0.625 9.57898 0.625 9.29167V3.33333C0.625 3.04602 0.739137 2.77047 0.942301 2.5673C1.14547 2.36414 1.42102 2.25 1.70833 2.25H4.95833M7.125 0.625H10.375M10.375 0.625V3.875M10.375 0.625L4.41667 6.58333"
                stroke="#5EEAD4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
        <div className="project__intro__screenshot__container relative max-h-[75vh] min-w-[330px] overflow-scroll">
          <Image
            //   className="absolute left-0 top-0 w-full object-contain transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:top-[100%] group-hover:translate-y-[-100%]"
            className="top-0 h-auto w-full"
            src={project.image}
            width={2960}
            height={9724}
            alt={`Screenshot of ${project.title}'s website`}
          />
        </div>

        {/* temporarily hidden as may not want to us */}
        {/* <div className="fullsize__screenshot__container absolute left-0 right-0 top-[120px] z-10 m-auto hidden h-[80vh] w-[90%] max-w-[900px] overflow-scroll pr-20">
          <button
            title="close fullsize screenshot"
            aria-label="close fullsize screenshot"
            className="fullscreen__bg fixed bottom-0 left-0 right-0 top-0 -z-10 cursor-pointer bg-[rgba(var(--green-opac),0.2)] backdrop-blur-sm"
          ></button>
          <Image
            className="top-0 h-auto w-full"
            src={project.image}
            width={2960}
            height={9724}
            alt={`Screenshot of ${project.title}'s website`}
          />
          <button
            title="close fullsize screenshot"
            aria-label="close fullsize screenshot"
            className="absolute right-0 top-0 m-auto h-14 w-14 rounded-full border-2 border-theme_green bg-[rgba(var(--background-opac),0.9)] text-[4rem] backdrop-blur-sm"
          >
            <svg viewBox="0 0 14 14" className="p-4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="var(--green)"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </div>
  );
}
