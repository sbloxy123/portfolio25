'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, FreeMode, Grid } from 'swiper/modules';
import { stackItemType } from '../sections/Stack';
import Image from 'next/image';
import SwiperNavButton from '../SwiperNavButton';

const StackSwiper = ({ stack }: { stack: stackItemType[] }) => {
  function getCloudinaryUrl(publicId: string) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/v1738792574/my-site/stack-icons/${publicId}`;
  }
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      modules={[Navigation, Mousewheel, FreeMode, Grid]}
      wrapperTag="ul"
      className="stack__swiper relative mb-20"
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      navigation={{
        nextEl: '.next-stack',
        prevEl: '.prev-stack',
      }}
      grid={{
        rows: 3,
        fill: 'row',
      }}
      freeMode={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {stack.map((stackItem, index) => {
        const publicId = getCloudinaryUrl(stackItem.image);
        return (
          <SwiperSlide key={index} tag="li" className="stack__item max-w-[100px]">
            <div key={index} className="aspect-[3/2] h-auto w-full last-of-type:mr-auto">
              <Image
                width={100}
                height={100}
                src={publicId}
                alt={`${stackItem.title} logo`}
                className="h-full w-full object-contain"
              />
            </div>
          </SwiperSlide>
        );
      })}
      <div className="swiper__nav__container absolute bottom-0 left-0 right-0 top-auto m-auto flex h-fit w-[10rem] translate-y-[80px] items-center justify-between">
        <SwiperNavButton className="prev-stack" direction="prev" background="light" />
        <SwiperNavButton className="next-stack" direction="next" background="light" />
      </div>
    </Swiper>
  );
};

export default StackSwiper;
