'use client';
import { useEffect, useState, useRef } from 'react';
import { useTitleNav } from '@/contexts/TitleNavContext';

const HomepageMainTitles = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const { setTitleInNav } = useTitleNav();

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > headerRef.current.offsetTop + 105) {
          setIsSticky(true);
          setTitleInNav(true);
        } else {
          setIsSticky(false);
          setTitleInNav(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setTitleInNav]);
  return (
    <div
      ref={headerRef}
      className={`main__titles mt-[15rem] w-fit px-[5%] small:px-layout-small ${isSticky && 'titles__sticky'}`}
    >
      <h1 className="page__title">
        <span
          className={`name__title block pb-4 font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)] ${isSticky ? 'opacity-0' : 'opacity-100'}`}
        >
          Stuart Bloxham.{' '}
        </span>

        <span className="fed__title ml-[-0.6rem] block font-font_italiana text-[clamp(5.7rem,17vw,10rem)] uppercase leading-[0.8] tracking-[0.02em] text-theme_light_orange xsmall:text-[clamp(8.5rem,10vw,19rem)]">
          <span className="tracking-[0.04em]">FRONT END</span>
          <br />
          <span className="">DEVELOPER</span>
        </span>
      </h1>
    </div>
  );
};

export default HomepageMainTitles;
