import Image from 'next/image';
import Badges from './Badges';
import ButtonLink from './ButtonLink';
import { ProjectType } from '@/app/data/projects-data';

const ProjectItem = ({ project }: { project: ProjectType }) => {
  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1738793688/my-site/projects/${publicId}.png`;
  }

  const publicId = getCloudinaryUrl(project.image);

  return (
    <div className="">
      <div className="project__item__container group relative mx-auto aspect-[330/467] h-auto w-[330px] max-w-[330px] cursor-pointer overflow-hidden small:mx-0">
        <div className="project__image relative h-full w-full">
          <Image
            className="absolute left-0 top-0 w-full object-contain transition-all duration-[1000ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:top-[100%] group-hover:translate-y-[-100%]"
            src={publicId}
            width={2960}
            height={9724}
            alt={`Screenshot of ${project.title}'s website`}
          />
          <div className="project__image__overlay ease absolute inset-0 bg-background opacity-40 mix-blend-darken transition-opacity delay-200 duration-500 after:absolute after:bottom-0 after:h-[60%] after:w-full after:bg-gradient-to-t after:from-black after:to-transparent after:content-[''] group-hover:opacity-90"></div>
        </div>
        <div className="project__item__content absolute inset-0 border-spacing-1 border border-theme_green bg-[rgba(var(--green-opac),0.05)] p-[5%] opacity-0 transition-opacity delay-[100] duration-700 group-hover:opacity-100">
          <h3 className="font-semibold uppercase">Key features</h3>
          <ul className="project__feature__summary__list my-4 max-h-[45%] min-h-[45%] overflow-auto">
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
            <h4 className="pb-4 font-semibold uppercase">Tech:</h4>
            <Badges tech={project.tech} />
            <div className="project__cta absolute bottom-[5%] left-0 right-0 mx-auto mt-auto flex w-fit items-center justify-center gap-6">
              <ButtonLink
                buttonType="primary"
                text="Visit Website"
                ariaLabel={` visit ${project.title}'s website`}
                hrefDestination={project.websiteLink}
                target="new window"
              />
              {project.innerPageLink && (
                <ButtonLink
                  buttonType="secondary"
                  text="Read More"
                  ariaLabel={`Read more about ${project.title}`}
                  hrefDestination={`projects/${project.innerPageLink}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
