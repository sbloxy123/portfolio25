'use client';
import IconLinks from '@/components/icons/IconLinks';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const IntroSection = () => {
  interface HomeLink {
    title: string;
    linkHref: string;
  }

  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        // Check if we've scrolled past the header's top offset
        if (window.scrollY > headerRef.current.offsetTop - 160) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const homeLinks: HomeLink[] = [
    { title: 'About', linkHref: '#about__me' },
    { title: 'experience', linkHref: '#experience' },
    { title: 'projects', linkHref: '#projects' },
    { title: 'stack', linkHref: '#stack' },
  ];
  return (
    <div
      className="intro__section px-[5%] pt-24 font-font_anonymous text-[2rem] xsmall:mt-20 small:flex small:justify-between small:px-layout-small"
      id="about__me"
    >
      <div
        ref={headerRef}
        className={`bio__cta max-w-[38rem] small:w-[clamp(330px,31%,38rem)] ${isSticky && 'bio__sticky'}`}
      >
        <p className="title__sub-text">...with a genuine passion for all things Web Development!</p>

        <ul className="home__links w-[60%] py-[4rem]">
          {homeLinks.map((link, index) => (
            <li key={index} className="home__links__link relative">
              <Link
                aria-label={`Navigate to the "${link.title}" section`}
                className="group flex min-h-[44px] items-center gap-[1.5rem] transition-colors duration-300 hover:text-theme_green"
                href={link.linkHref}
              >
                <span className="relative my-auto block h-[1px] w-full bg-foreground before:absolute before:inset-0 before:z-10 before:mx-auto before:block before:h-[100%] before:w-0 before:bg-theme_green before:opacity-0 before:transition-all before:duration-500 before:content-[''] group-hover:before:w-full group-hover:before:opacity-100"></span>
                <span className="block text-[1.8rem] uppercase tracking-wider">
                  <strong>{link.title}</strong>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <IconLinks animate={false} />
      </div>

      <div className="bio__text max-w-[700px] pt-20 small:ml-auto small:w-[62%] small:pt-0 medium:w-1/2">
        <h2 className="section__title">About.</h2>

        <p className="text-[clamp(0.8em,2.3cqw,1.1em)]">
          A Senior Front-End Developer who transitioned from client-facing roles into tech after a
          challenging but rewarding journey. Currently working full-time in the websites department
          of a large Ed-Tech company, building and maintaining diverse websites for schools, trusts,
          and training centers using <strong>Vanilla JS</strong>, <strong>SCSS</strong>, HTML, and
          ASP.NET. Additionally, I keep sharpening my skills through freelancing and self-study,
          continuing my learning of <strong>React</strong>, <strong>Next.js</strong>,{' '}
          <strong>TypeScript</strong>, and <strong>Tailwind</strong>. I&apos;m passionate about
          creating clean, efficient, and user-friendly web experiences and am excited to apply my
          expertise to any new and exciting oportunities.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
