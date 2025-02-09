import { notFound } from 'next/navigation';
import { projects } from '../../data/projects-data';
import Link from 'next/link';
import OverflowScrollScreenshot from '@/components/OverflowScrollScreenshot';
import Image from 'next/image';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Stack from '@/components/sections/Stack';
import ButtonLink from '@/components/ButtonLink';
import GithubIcon from '@/components/icons/GithubIcon';
import Breadcrumbs from '@/components/Breadcrumbs';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.innerPageLink }));
}
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.innerPageLink === slug);
  if (!project) {
    return notFound();
  }

  const shortenedUrl = project.websiteLink.split('www.')[1];

  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1738792574/my-site/project-captioned-images/rosco/${publicId}.png`;
  }

  return (
    <>
       <div className='breadcrumbs__container relative max-w-screen-large mt-[12rem] mx-auto px-[5%] small:px-layout-small xsmall:mt-[15rem]'>
          <Breadcrumbs position='inPage'/>
        </div>

      <div className="project__heading max-w-screen-large mx-auto px-[5%] small:px-layout-small">
        <h1 className="pt-[3rem] small:pt-20 text-[clamp(1.8rem,6cqw,2.4rem)]">
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
          className="relative w-fit block mt-4 font-font_anonymous font-bold tracking-[0.2em] text-[rgba(var(--green-opac),0.6)] underline decoration-transparent transition-colors duration-300 hover:text-[rgba(var(--green-opac),1)] hover:decoration-[rgba(var(--green-opac),1)]"
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

        <div className='w-fit mt-5'>
          {project.githubLink && (
            <ButtonLink
            customIcon={<GithubIcon />}
            buttonType="primary"
            text="View Source Code"
            ariaLabel={`view the source code for ${project.title} on Github`}
            hrefDestination={project.githubLink}
            target="new window"
            />
          )}
        </div>
      </div>

      <section className="project__top max-w-screen-large mx-auto relative flex flex-col-reverse items-start px-[5%] pt-32 small:flex-row small:justify-between small:gap-20 small:px-layout-small">
        <article className="project__info font-font_anonymous tracking-[0.1em]">
          <div className="project__description pb-10">
            {project.description?.map((paragraph, index) => (
              <p className="py-3" key={index}>
                {paragraph}
              </p>
            ))}
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

        <OverflowScrollScreenshot project={project} shortenedUrl={shortenedUrl} />
      </section>

      {project.captionedImages && (
        <section className="captioned__images max-w-screen-large mx-auto px-[5%] small:px-layout-small">
          <h2 className="py-20">Bonus Information</h2>

          {project.captionedImages?.map((captionedImage, index) => {
            const publicId = getCloudinaryUrl(captionedImage.image);

            console.log(publicId);
            return (
              <div key={index} className="caption__image mx-auto my-20">
                <Image alt={captionedImage.ariaLabel} src={publicId} width={1268} height={662} />
                <figcaption className="text-[1.4rem] text-theme_green opacity-75">
                  {captionedImage.caption}
                </figcaption>
              </div>
            );
          })}
        </section>
      )}

      <ProjectsSection />
      <Stack />
    </>
  );
}
