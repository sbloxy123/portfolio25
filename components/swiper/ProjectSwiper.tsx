'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectItem from '../ProjectItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode } from 'swiper/modules';
import { ProjectType } from '@/app/data/projects-data';

const ProjectSwiper = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      className="project__swiper"
      wrapperTag="ul"
      modules={[Navigation, Mousewheel, FreeMode]}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
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
    </Swiper>
  );
};

export default ProjectSwiper;
