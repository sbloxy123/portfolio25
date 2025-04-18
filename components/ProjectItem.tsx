import Image from 'next/image';
import Badges from './Badges';
import ButtonLink from './ButtonLink';
import { ProjectType } from '@/app/data/projects-data';
import GithubIcon from './icons/GithubIcon';

const ProjectItem = ({ project }: { project: ProjectType }) => {
  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1739031131/my-site/projects/${publicId}.png`;
  }

  const publicId = getCloudinaryUrl(project.image);

  return (
    <div className="">
      <div className="project__item__container group relative mx-auto aspect-[330/515] h-auto min-w-[320px] overflow-hidden shadow-[0_0_25px_rgba(var(--background-opac),0.25)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(var(--green-opac),0.15)] small:mx-0">
        <div className="project__image relative h-full w-full">
          <Image
            className="absolute left-0 top-0 w-full object-contain transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            src={publicId}
            width={2960}
            height={9724}
            alt={`Screenshot of ${project.title}'s website`}
          />
          <div className="project__image__overlay ease absolute inset-0 bg-background opacity-40 mix-blend-darken transition-opacity delay-200 duration-500 after:absolute after:bottom-0 after:h-[60%] after:w-full after:bg-gradient-to-t after:from-black after:to-transparent after:content-[''] group-hover:opacity-90"></div>
          <div className="project__image__gradient__overlay absolute bottom-0 left-0 right-0 h-[30%] w-full bg-gradient-to-t from-background to-transparent"></div>
        </div>
        <div className="project__item__content absolute inset-0 border-spacing-1 border border-theme_green bg-[rgba(var(--green-opac),0.05)] p-[5%] opacity-0 transition-opacity delay-[100] duration-700 group-hover:opacity-100">
          <h3 className="font-semibold uppercase">Key features</h3>
          <ul className="project__feature__summary__list my-4 max-h-[46%] min-h-[46%] overflow-auto">
            {project.features.map((feature, index) => (
              <li
                className="ml-[5%] list-item list-disc font-font_anonymous text-[1.6rem]"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="project-footer">
            <h4 className="pb-2 font-semibold uppercase">Tech:</h4>
            <Badges tech={project.tech} />
          </div>
        </div>
        <div className="project__cta absolute bottom-[3%] left-0 right-0 mx-auto mt-auto flex w-fit items-center justify-center gap-6">
          {/* <ButtonLink
                buttonType="primary"
                text="Visit Website"
                ariaLabel={` visit ${project.title}'s website`}
                hrefDestination={project.websiteLink}
                target="new window"
              /> */}
          {project.innerPageLink && (
            <ButtonLink
              buttonType="secondary"
              text="Read More"
              ariaLabel={`Read more about ${project.title}`}
              hrefDestination={`/projects/${project.innerPageLink}`}
            />
          )}
          {project.githubLink && (
            <ButtonLink
              customIcon={<GithubIcon />}
              buttonType="primary"
              text="Source Code"
              ariaLabel={`view the source code for ${project.title} on Github`}
              hrefDestination={project.githubLink}
              target="new window"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
