'use client';
import Image from 'next/image';
import StackSwiper from '../swiper/StackSwiper';

export type stackItemType = {
  title: string;
  image: string;
};

const stack: stackItemType[] = [
  {
    title: 'Bootstrap',
    image: '/stack-icons/bootstrap.png',
  },
  {
    title: 'Cloudinary',
    image: '/stack-icons/cloudinary.png',
  },
  {
    title: 'CSS',
    image: '/stack-icons/css3.png',
  },
  {
    title: 'Figma',
    image: '/stack-icons/figma.svg',
  },
  {
    title: 'Gatsby',
    image: '/stack-icons/gatsbyjs.svg',
  },
  {
    title: 'Git',
    image: '/stack-icons/github.png',
  },
  {
    title: 'Heroku',
    image: '/stack-icons/heroku.png',
  },
  {
    title: 'HTML5',
    image: '/stack-icons/HTML5.png',
  },
  {
    title: 'Javascript',
    image: '/stack-icons/Javascript.png',
  },
  {
    title: 'Mapbox',
    image: '/stack-icons/mapbox.png',
  },
  {
    title: 'Netlify',
    image: '/stack-icons/netlify.svg',
  },
  {
    title: 'Next Js',
    image: '/stack-icons/next-js.png',
  },
  {
    title: 'Postgres',
    image: '/stack-icons/postgresql.png',
  },
  {
    title: 'React',
    image: '/stack-icons/React.png',
  },
  {
    title: 'Ruby on Rails',
    image: '/stack-icons/Ror.png',
  },
  {
    title: 'Stimulus',
    image: '/stack-icons/Stimulus.png',
  },
  {
    title: 'Strapi CMS',
    image: '/stack-icons/Strapi.png',
  },
  {
    title: 'Styled Components',
    image: '/stack-icons/styled-components.png',
  },
  {
    title: 'Tailwind CSS',
    image: '/stack-icons/tailwind.png',
  },

  {
    title: 'Swiper Js',
    image: '/stack-icons/swiper.png',
  },
  {
    title: 'SCSS',
    image: '/stack-icons/SCSS.png',
  },
  {
    title: 'Adobe XD',
    image: '/stack-icons/adobeXD.png',
  },
];

const Stack = () => {
  return (
    <section
      className="stack__section relative z-10 bg-white px-[5%] py-20 small:px-layout-small"
      id="stack"
    >
      <div className="absolute inset-0 bg-[rgba(var(--background-opac),0.2)] mix-blend-color"></div>
      <h2 className="section__title relative text-background">My Stack.</h2>

      <ul className="relative hidden flex-wrap items-start justify-between gap-[1.9rem] py-10 xsmall:flex">
        {stack.map((stackItem, index) => {
          return (
            <li
              key={index}
              className="aspect-[3/2] h-auto w-[12%] min-w-[100px] last-of-type:mr-auto"
            >
              <Image
                width={100}
                height={100}
                src={stackItem.image}
                alt={`${stackItem.title} logo`}
                className="h-full w-full object-contain"
              />
            </li>
          );
        })}
      </ul>

      <div className="py-10 xsmall:hidden">
        <StackSwiper stack={stack} />
      </div>
    </section>
  );
};

export default Stack;
