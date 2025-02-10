import IconLinks, { Icon } from './icons/IconLinks';
import EnvelopeIcon from './icons/EnvelopeIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/Location';
import Link from 'next/link';

interface ExtendedIcon extends Icon {
  content: string;
}

const contactIcon: ExtendedIcon[] = [
  {
    title: 'Email',
    url: 'mailto:stuartjbloxham@gmail.com',
    content: 'stuartjbloxham@gmail.com',
    component: EnvelopeIcon,
    ariaLabel: 'Email me',
  },
  {
    title: 'Phone',
    url: 'tel:07806 615231',
    content: '07806 615231',
    component: PhoneIcon,
    ariaLabel: 'Call me',
  },
  {
    title: 'Location',
    url: 'https://www.google.com/maps/place/Buntingford/@51.9449653,-0.0406621,14z/data=!3m1!4b1!4m6!3m5!1s0x47d88034bbffa8e5:0xc49c3bdf6ad3404f!8m2!3d51.946217!4d-0.018547!16zL20vMDI5aHZn?entry=ttu&g_ep=EgoyMDI1MDIwMi4wIKXMDSoASAFQAw%3D%3D',
    content: 'Buntingford, Hertfordshire',
    opensIn: '_blank',
    component: LocationIcon,
    ariaLabel: 'View my location (opens in new window)',
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mx-auto max-w-screen-large overflow-hidden bg-background px-[5%] pb-[12rem] pt-40 small:px-layout-small"
    >
      <div className="pattern__bg absolute right-0 top-0 h-[700px] w-[400px]">
        <div className="pattern__overlay"></div>
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="5" cy="5" r="5" fill="#5eead4" />
          </pattern>

          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
            opacity="0.04"
          />
        </svg>
      </div>
      <div className="footer__content relative block">
        <h3
          className={`footer__title inner__page__title block min-h-[4.4rem] font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)] small:pb-0`}
        >
          Stuart Bloxham.{' '}
          <span className="-ml-1 block font-font_italiana text-[clamp(5rem,12vw,8rem)] uppercase leading-[0.8] tracking-[0.02em] text-theme_light_orange">
            <span className="tracking-[0.04em]">FRONT END</span>
            <br />
            <span className="">DEVELOPER</span>
          </span>
        </h3>

        <div className="contact__details pb-20 pt-14">
          <h3 className="mb-2">Contact Me.</h3>
          <div>
            {contactIcon.map((contactItem) => (
              <p key={contactItem.title}>
                <a
                  href={contactItem.url}
                  target={contactItem.opensIn}
                  aria-label={contactItem.ariaLabel}
                  className={`group flex h-[4.4rem] w-fit items-center gap-4 ${contactItem.title == 'Location' ? '' : 'underline'} underline-offset-2 transition-colors duration-300 hover:text-theme_green`}
                >
                  <span className="w-[3rem]">
                    <contactItem.component className="mx-auto block h-[2.4rem] w-auto fill-theme_green text-theme_green transition-all duration-300 group-hover:rotate-6 group-hover:scale-105" />
                  </span>
                  {contactItem.content}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div className="footer__icon__links">
          <IconLinks />
        </div>
      </div>
      <div className="absolute bottom-[2%] left-0 mx-auto max-w-screen-lg px-[5%] small:px-layout-small">
        <p className="mt-10 max-w-[500px]">
          This site is built with{' '}
          <em className="underline decoration-white/50 underline-offset-4">Next.js</em> and{' '}
          <em className="underline decoration-white/50 underline-offset-4">Tailwind CSS</em> and the
          source code can be found on Github -{' '}
          <Link
            href="https://github.com/sbloxy123/portfolio25"
            aria-label="view code on Github (opens in new window)"
            className="tracking-wider text-theme_green underline decoration-transparent opacity-80 transition-colors duration-300 hover:decoration-theme_green hover:opacity-100"
            target="_blank"
          >
            View Repository
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
