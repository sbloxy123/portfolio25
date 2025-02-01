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
      target={`${target == 'new window' && '_blank'}`}
    >
      <div
        className={`relative flex items-center justify-center rounded-md ${buttonType == 'primary' ? 'bg-[rgba(var(--green-opac),1)]' : 'bg-[rgba(var(--orange-opac),1)]'} overflow-hidden px-6 py-4 font-font_anonymous text-[1.4rem] font-semibold uppercase duration-300 before:absolute before:inset-x-[2px] before:inset-y-[2px] before:border-spacing-1 before:rounded-md before:border before:border-background before:transition-all before:content-[""] hover:before:scale-[120%] hover:before:bg-[rgba(var(--background-opac),0.2)]`}
      >
        <span className="text-black">{text}</span>
      </div>
    </Link>
  );
};

export default ButtonLink;
