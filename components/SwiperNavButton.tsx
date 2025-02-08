import React from 'react';

const SwiperNavButton = ({
  className,
  direction,
  background,
}: {
  className: string;
  direction: 'prev' | 'next';
  background?: 'light' | 'dark';
}) => {
  return (
    <div
      className={`${className} swiper__nav__button group visible relative z-10 aspect-square w-[45px] cursor-pointer overflow-hidden rounded-full border-2 border-theme_green bg-[rgba(var(--green-opac),0.5)] backdrop:blur-sm hover:border-[rgba(var(--background-opac),0.5)] ${direction == 'prev' ? 'translate-x-[-50%]' : 'translate-x-[50%]'}`}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className={`absolute bottom-0 left-0 right-0 top-0 m-auto w-[40%] transition-transform duration-300 ${direction == 'prev' ? 'rotate-[180deg] group-hover:translate-x-[-60px]' : 'rotate-[0deg] group-hover:translate-x-[60px]'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 16H30M30 16L16 2M30 16L16 30"
          stroke="#fff"
          className={`${background == 'light' && 'stroke-background'}`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        className={`absolute bottom-0 left-0 right-0 top-0 m-auto w-[40%] transition-transform duration-300 ${direction == 'prev' ? 'translate-x-[60px] rotate-[180deg] group-hover:translate-x-0' : 'translate-x-[-60px] rotate-[0deg] group-hover:translate-x-0'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 16H30M30 16L16 2M30 16L16 30"
          stroke="#fff"
          className={`${background == 'light' && 'stroke-background'}`}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SwiperNavButton;
