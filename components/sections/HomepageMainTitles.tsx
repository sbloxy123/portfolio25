'use client';
import { useEffect, useState, useRef } from 'react';

const HomepageMainTitles = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        // Check if we've scrolled past the header's top offset
        if (window.scrollY > headerRef.current.offsetTop + 105) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      ref={headerRef}
      className={`main__titles z-20 mt-[15rem] w-fit px-[5%] small:px-layout-small ${isSticky && 'titles__sticky'}`}
    >
      <h1 className="page__title">
        <span className="name__title block pb-4 font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)]">
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
