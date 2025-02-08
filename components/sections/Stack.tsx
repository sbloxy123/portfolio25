'use client';
import Image from 'next/image';
// import StackSwiper from '../swiper/StackSwiper';
import dynamic from 'next/dynamic';

const DynamicStackSwiper = dynamic(() => import('../swiper/StackSwiper'), {
  ssr: false,
});

export type stackItemType = {
  title: string;
  image: string;
};

const stack: stackItemType[] = [
  {
    title: 'HTML5',
    image: 'HTML5.png',
  },
  {
    title: 'CSS',
    image: 'css3.png',
  },
  {
    title: 'SCSS',
    image: 'SCSS.png',
  },
  {
    title: 'Styled Components',
    image: 'styled-components.png',
  },
  {
    title: 'Tailwind CSS',
    image: 'tailwind.png',
  },
  {
    title: 'Bootstrap',
    image: 'bootstrap.png',
  },
  {
    title: 'Javascript',
    image: 'Javascript.png',
  },
  {
    title: 'Typescript',
    image: 'typescript.png',
  },

  {
    title: 'Gatsby',
    image: 'gatsbyjs.svg',
  },
  {
    title: 'Git',
    image: 'github.png',
  },
  {
    title: 'Heroku',
    image: 'heroku.png',
  },

  {
    title: 'Digital Ocean',
    image: 'digital-ocean.png',
  },
  {
    title: 'Netlify',
    image: 'netlify.svg',
  },

  {
    title: 'React',
    image: 'React.png',
  },
  {
    title: 'Next Js',
    image: 'next-js.png',
  },
  {
    title: 'Ruby on Rails',
    image: 'Ror.png',
  },
  {
    title: 'Stimulus JS',
    image: 'Stimulus.png',
  },
  {
    title: 'Strapi CMS',
    image: 'Strapi.png',
  },
  {
    title: 'Sanity CMS',
    image: 'sanity.svg',
  },
  {
    title: 'Postgres',
    image: 'postgresql.png',
  },
  {
    title: 'Figma',
    image: 'figma.svg',
  },
  {
    title: 'Adobe XD',
    image: 'adobeXD.png',
  },
  {
    title: 'Mapbox',
    image: 'mapbox.png',
  },
  {
    title: 'Cloudinary',
    image: 'cloudinary.png',
  },
  {
    title: 'Swiper Js',
    image: 'swiper.png',
  },
];

const Stack = () => {
  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1738792574/my-site/stack-icons/${publicId}`;
  }

  return (
    <section
      className="stack__section relative z-10 border-[3px] border-b-theme_green border-t-theme_green bg-white  py-20 "
      id="stack"
    >
      <div className='max-w-screen-large mx-auto px-[5%] small:px-layout-small'>

      <div className="absolute inset-0 bg-[rgba(var(--background-opac),0.2)] mix-blend-color"></div>
      <h2 className="section__title relative text-background">My Stack.</h2>

      <ul className="relative hidden flex-wrap items-start justify-between gap-[1.9rem] py-10 xsmall:flex">
        {stack.map((stackItem, index) => {
          const publicId = getCloudinaryUrl(stackItem.image);
          
          return (
            <li
            key={index}
            className="aspect-[3/2] h-auto w-[12%] min-w-[100px] last-of-type:mr-auto"
            >
              <Image
                width={100}
                height={100}
                src={publicId}
                alt={`${stackItem.title} logo`}
                title={`${stackItem.title}`}
                className="h-full w-full object-contain"
                />
            </li>
          );
        })}
      </ul>

      <div className="py-10 xsmall:hidden">
        <DynamicStackSwiper stack={stack} />
      </div>
        </div>
    </section>
  );
};

export default Stack;
