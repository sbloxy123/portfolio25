import ProjectSwiper from '../swiper/ProjectSwiper';

export type ProjectType = {
  title: string;
  image: string;
  //   altText: string;
  ariaLabel?: string;
  features: string[];
  tech: string[];
  websiteLink: string;
  innerPageLink?: string;
};

export const projects: ProjectType[] = [
  {
    title: 'Churchill Academy & Sixth Form',
    image: '/projects/churchill.png',
    // altText: "Screenshot of Churchill Academy & Sixth Form's website",
    features: [
      'Fully Responsive',
      'Spinning animation using javascript to find user scroll position',
      'Strong use CSS Clip-path throughout',
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.churchill-academy.org',
    innerPageLink: '/',
  },
  {
    title: 'Guru Nanak Sich Academy',
    image: '/projects/gurununak.png',
    // altText: "Visit Churchill Academy & Sixth Form's website",
    features: [
      'Fully Responsive',
      'Attention to detail',
      'Smooth transitions and animations',
      'Multi-page admin control and functionality',
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.gurunanaksikhacademy.co.uk/',
    innerPageLink: '/',
  },
];

const ProjectsSection = () => {
  return (
    <section
      className="projects__section relative overflow-x-hidden bg-background px-[5%] py-20 xsmall:mt-20 small:px-layout-small"
      id="projects"
    >
      <h2 className="section__title">Projects.</h2>

      <div className="projects__container bg-background py-10 xsmall:pb-20">
        <ProjectSwiper projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;
