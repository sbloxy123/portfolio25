import ExperienceItem from '../ExperienceItem';

export type ExperienceJobType = {
  title: string;
  employer: string;
  details: string;
  commenceDate: string;
  finalDate: string;
  tech: string[];
};

const experienceList: ExperienceJobType[] = [
  {
    title: 'Front End Developer',
    employer: 'Juniper Education',
    details:
      'Build and maintain websites for an array of education institutions, ensuring  seamless usability and accessibility to their users. Strong focus on creating flexible and playful user interfaces to maximise user engagement. Work closely with cross-functional teams such as Designers, Developers and Project Managers to ensure client satisfaction.',
    commenceDate: 'SEPT 2023',
    finalDate: 'present',
    tech: ['Javascript', 'HTML & SCSS', 'WCAG', 'Swiper.js', 'Adobe XD'],
  },
  {
    title: 'Freelance Next.Js Developer',
    employer: 'Bloxy Web Services (self)',
    details:
      'Designing, building and launching modern and performant sites for local clients with Figma, Next.js 14, Typescript and Tailwind CSS. Work directly with clients to exceed expectations and drive local business visions and objectives into reality. Both working with third party designers and providing designs myself, gaining valuable experience in full website’s lifecycles.',
    commenceDate: '~2018',
    finalDate: 'PRESENT',
    tech: [
      'HTML & CSS',
      'Tailwind CSS',
      'Next.js 14',
      'React - Gatsby.js',
      'Typescript',
      'Figma',
      'Sanity.io (CMS)',
      'Github',
    ],
  },
  {
    title: 'BOOTCAMP',
    employer: 'Le Wagon',
    details:
      'Joined the reputable bootcamp to bolster my prior knowledge of front end development and to gain a more rounded understanding of full stack web development. A structured 9 week intensive course, learning Ruby on Rails and the MVC design pattern, relational databases, API and HTTP request-response cycles, among many other disciplines and other project planning techniques. Led and was part of a team of 4 in building 2 web applications - our final project was a Deliveroo-like construction material delivery service app - all collaborating via Github',
    commenceDate: 'SEPT 2022',
    finalDate: 'Jan 2023',
    tech: [
      'Ruby on Rails',
      'HTML & CSS',
      'Bootstrap & CSS',
      'PostgreSQL',
      'Javascript',
      'Mapbox API',
      'Figma',
      'Github',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      className="experience__section px-[5%] xsmall:mt-20 small:ml-auto small:w-[60%] small:pl-0 small:pr-layout-small medium:w-1/2"
      id="experience"
    >
      <h2 className="section__title">Experience.</h2>

      <ul className="experience__list">
        {experienceList.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
