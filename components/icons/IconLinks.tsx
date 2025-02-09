'use client';
import { motion } from 'framer-motion';
import DocumentIcon from './DocumentIcon';
import GithubIcon from './GithubIcon';
import LinkedInIcon from './LinkedInIcon';
import Link from 'next/link';

export interface Icon {
  title: string;
  url: string;
  component: React.FC<React.SVGProps<SVGSVGElement>>;
  opensIn?: '_blank';
  ariaLabel?: string;
}

const svgIcons: Icon[] = [
  {
    title: 'CV',
    url: 'Stuart-Bloxham-CV-web-developer.pdf', //to be updated
    component: DocumentIcon,
  },
  {
    title: 'Github',
    url: 'https://github.com/sbloxy123',
    component: GithubIcon,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stuart-bloxham',
    component: LinkedInIcon,
  },
];

const IconLinks = ({
  menuIsOpen = true,
  animate = true,
}: {
  menuIsOpen?: boolean;
  animate?: boolean;
}) => {
  const animationState = animate ? (menuIsOpen ? 'show' : 'hidden') : 'show';
  const initialState = animate ? 'hidden' : 'show';

  const iconContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.9,
        delayChildren: 0.9,
        staggerChildren: 0.1,
      },
    },
  };
  const iconItem = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.ul
      className="w-fit leading-none"
      variants={iconContainer}
      initial={initialState}
      animate={animationState}
    >
      {svgIcons.map((icon, index) => {
        const rotateValue = index % 2 === 0 ? 3 : -3;

        return (
          <motion.li
            key={index}
            variants={iconItem}
            whileHover={{
              rotate: rotateValue,
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className="icon__link group relative mr-4 inline-block h-[3rem] px-3 text-foreground transition-colors duration-300 last:mr-0 hover:text-theme_green"
          >
            <Link
              // download={icon.title === 'CV' ? true : undefined}
              href={`${icon.url}`}
              target="_blank"
              aria-label={`${icon.title == 'CV' ? 'Download' : 'Link to'} "my ${icon.title} (opens in new window)"`}
              title={`${icon.title == 'CV' ? 'Download' : 'Link to'} my ${icon.title}`}
            >
              <icon.component />
              <span className="pointer-events-none absolute left-[50%] top-[115%] min-w-[5rem] -translate-x-1/2 rounded-sm border border-theme_green bg-white bg-opacity-10 px-2 py-1 text-center text-2xl opacity-0 bg-blend-soft-light backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(var(--green-opac),0.25)]">
                {icon.title}
              </span>
            </Link>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default IconLinks;
