import { ProjectType } from '@/app/data/projects-data';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from './ButtonLink';
import GithubIcon from './icons/GithubIcon';

const OverflowScrollScreenshot = ({
  project,
  shortenedUrl,
}: {
  project: ProjectType;
  shortenedUrl: string;
}) => {
  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1738793688/my-site/projects/${publicId}.png`;
  }
  const publicId = getCloudinaryUrl(project.image);

  return (
    <div className="project__intro__screenshot relative mx-auto mb-[120px] max-w-[550px]  small:min-w-[40%] small:max-w-[40%]">
      <div className="project__intro__screenshot__container__overlay absolute bottom-0 left-0 right-0 z-10 h-[30%] w-full bg-gradient-to-t from-background to-transparent"></div>
      <Link
        href={project.websiteLink}
        className="absolute bottom-0 w-fit break-words max-w-[90%] translate-y-[150%] pl-2 font-font_anonymous font-bold tracking-[0.2em] text-[rgba(var(--green-opac),0.6)] underline decoration-transparent transition-colors duration-300 hover:text-[rgba(var(--green-opac),1)] hover:decoration-[rgba(var(--green-opac),1)]"
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
      <div className='w-fit mt-5 absolute bottom-0 translate-y-[220%]'>
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
      <div className="project__intro__screenshot__container relative max-h-[75vh] min-w-[300px] overflow-scroll">
        <Image
          className="top-0 h-auto w-full"
          src={publicId}
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
  );
};

export default OverflowScrollScreenshot;
