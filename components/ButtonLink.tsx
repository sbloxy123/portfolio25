import Link from 'next/link';

const ButtonLink = ({
  text,
  hrefDestination,
  buttonType,
  ariaLabel,
  target,
}: {
  text: string;
  hrefDestination: string;
  ariaLabel?: string;
  buttonType: 'primary' | 'secondary';
  target?: 'new window' | 'same window';
}) => {
  return (
    <Link
      href={hrefDestination}
      aria-label={ariaLabel && ariaLabel}
      target={`${target == 'new window' ? '_blank' : ''}`}
      className={`group/button relative flex min-w-[140px] items-center justify-between overflow-hidden rounded-md border-2 border-theme_green px-4 py-4 font-font_anonymous text-[1.4rem] font-semibold uppercase leading-[1.4] transition-colors duration-300 hover/button:text-background`}
    >
      <div
        className={`button__link__bg animate-pulse-slow absolute inset-0 transition-all duration-300 backdrop:blur-sm group-hover/button:animate-none group-hover/button:border-[rgba(var(--background-opac),0.5)] ${buttonType == 'primary' ? 'bg-[rgba(var(--green-opac),0.2)] group-hover/button:bg-theme_green' : 'bg-[rgba(var(--orange-opac),0.2)] group-hover/button:bg-theme_light_orange'}`}
      ></div>
      <span className="relative w-full text-center">{text}</span>
      <div className="arrows-container relative ml-5 h-5 w-5">
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
    </Link>
  );
};

export default ButtonLink;
