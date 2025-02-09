
import Link from 'next/link';
import { ReactNode } from 'react';

const ButtonLink = ({
  text,
  hrefDestination,
  buttonType,
  ariaLabel,
  target,
  customIcon
}: {
  text: string;
  hrefDestination: string;
  ariaLabel?: string;
  customIcon?: ReactNode;
  buttonType: 'primary' | 'secondary';
  target?: 'new window' | 'same window';
}) => {
  return (
    <Link
      href={hrefDestination}
      aria-label={`${ariaLabel && ariaLabel} ${target == 'new window' && '(opens in new window)'}`}
      target={`${target == 'new window' ? '_blank' : ''}`}
      className={`group/button relative flex min-h-[44px] min-w-[140px] gap-[1rem] items-center justify-around overflow-hidden rounded-md py-4 pl-[1.7rem] pr-[1.6rem] font-font_anonymous text-[1.4rem] font-semibold uppercase leading-[1.4] transition-colors duration-300 hover/button:text-background`}
    >
      <div
        className={`button__link__bg animate-pulse-slow absolute inset-0 border-2 transition-all duration-300 backdrop:blur-sm group-hover/button:animate-none group-hover/button:border-[rgba(var(--background-opac),0.5)] ${buttonType == 'primary' ? 'border-theme_green bg-[rgba(var(--green-opac),0.2)] group-hover/button:bg-theme_green' : 'border-theme_dark_orange bg-[rgba(var(--orange-opac),0.2)] group-hover/button:bg-theme_light_orange'}`}
      ></div>
      <span className="relative w-full leading-none text-center">{text}</span>

        {customIcon ? (
          <span className='block h-8 w-8 z-10'>
            {customIcon}
          </span>
        ) : 
        (
          <div className="arrows-container relative h-5 w-5">
            <span className="arrow__before absolute inset-0 h-full w-full stroke-background">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-x-[-200%] opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100"
              >
                <path
                  d="M2 16H30M30 16L16 2M30 16L16 30"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="arrow__after absolute inset-0 h-full w-full stroke-white">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover/button:translate-x-[150%] group-hover/button:opacity-0"
              >
                <path
                  d="M2 16H30M30 16L16 2M30 16L16 30"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        )
        }
        
    </Link>
  );
};

export default ButtonLink;
