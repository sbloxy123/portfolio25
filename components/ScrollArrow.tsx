'use client';

export const ScrollArrow = () => {
  function handleScroll() {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > window.innerHeight) {
      scrollButton?.classList.remove('scroll__button__hidden');
    } else {
      scrollButton?.classList.add('scroll__button__hidden');
    }
  }

  // Add event listener for scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <div
      id="scrollButton"
      className="scroll__button__hidden fixed bottom-[10%] right-[2rem] z-50 aspect-square w-[4.5rem] rounded-full mix-blend-difference hover:shadow-[0_0_40px_rgba(var(--orange-opac),0.35)]"
    >
      <a
        href="#header"
        title="scroll to top"
        aria-label="scroll to top of page"
        className="bg-orange flex h-[5rem] w-[5rem] items-center justify-center rounded-full border-[3px] border-theme_dark_orange bg-[rgba(var(--orange-opac),0.9)]"
      >
        <span className="flex items-center justify-center">
          <svg
            viewBox="0 0 32 32"
            className="h-[40%] w-[40%] -rotate-[90deg] stroke-background"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16H30M30 16L16 2M30 16L16 30"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};
