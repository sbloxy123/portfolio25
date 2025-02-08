'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectItem from '../ProjectItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import { ProjectType } from '@/app/data/projects-data';
import SwiperNavButton from '../SwiperNavButton';

const ProjectSwiper = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      className="project__swiper relative mt-10"
      wrapperTag="ul"
      modules={[Navigation, Mousewheel, FreeMode]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      navigation={{
        nextEl: '.next-project',
        prevEl: '.prev-project',
      }}
      freeMode={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {projects.map((project, index) => (
        <SwiperSlide tag="li" key={index} className="project__item w-fit">
          <ProjectItem key={index} project={project} />
        </SwiperSlide>
      ))}

      <div className="swiper__nav__container absolute bottom-0 left-0 right-0 top-auto m-auto flex h-fit w-full items-center justify-between translate-y-[155%] xsmall:left-auto xsmall:max-w-[120px] xsmall:translate-y-[210%]">
        <SwiperNavButton direction="prev" className="prev-project" />
        <SwiperNavButton direction="next" className="next-project" />
      </div>
    </Swiper>
  );
};

export default ProjectSwiper;

{
  /* <div className="prev-project swiper__nav__button group visible relative z-10 aspect-square w-[45px] translate-x-[-50%] cursor-pointer overflow-hidden rounded-full border-2 border-theme_green bg-[rgba(var(--green-opac),0.5)] backdrop:blur-sm hover:border-[rgba(var(--background-opac),0.5)]">
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[40%] rotate-[180deg] transition-transform duration-300 group-hover:translate-x-[-60px]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16H30M30 16L16 2M30 16L16 30"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[40%] translate-x-[60px] rotate-[180deg] transition-transform duration-300 group-hover:translate-x-0"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 16H30M30 16L16 2M30 16L16 30"
      stroke="#fff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div> */
}
{
  /* <div className="next-project aspect-square w-[45px] rounded-full bg-white">
<svg
width="32"
height="32"
viewBox="0 0 32 32"
fill="none"
className="rotate-[0deg]"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M2 16H30M30 16L16 2M30 16L16 30"
stroke="#1E1E1E"
strokeWidth="4"
strokeLinecap="round"
strokeLinejoin="round"
/>
</svg>
</div> */
}
