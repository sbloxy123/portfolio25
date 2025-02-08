type captionedImage = {
  caption: string;
  image: string;
  ariaLabel: string;
};

export type ProjectType = {
  title: string;
  image: string;
  //   altText: string;
  ariaLabel?: string;
  features: string[];
  tech: string[];
  websiteLink: string;
  innerPageLink?: string;
  projectType?: string;
  fullFeatureList?: string[];
  description?: string[];
  sectionImages?: string[];
  captionedImages?: captionedImage[];
};

export const projects: ProjectType[] = [
  {
    title: 'Rosco & Perlini',
    image: 'rosco',
    features: [
      'Fully responsive design',
      'Pixel‐perfect implementation of professional designs',
      'Extensive utilisation of Next.js features',
      'Comprehensive integration with Sanity.io, including a live-edit preview mode',
    ],
    tech: ['Next.js', 'Tailwind', 'JavaScript', 'React', 'TypeScript', 'Sanity.io CMS'],
    websiteLink: 'https://www.roscoandperlini.co.uk',
    innerPageLink: 'rosco-and-perlini',
    projectType: 'Freelance',
    description: [
      'A business website developed on a freelance basis utilising Next.js and Tailwind CSS, with Sanity.io serving as the Content Management System (CMS).',
      'The website was required to adhere meticulously to the approved design, ensuring a pixel‐perfect build while incorporating interactive elements that distinguish it in the competitive damp-proofing sector.',
    ],
    fullFeatureList: [
      'Integrated text and voice search functionality.',
      'Every element is editable through full integration with Sanity.io CMS.',
      'Live preview mode in Sanity.io allows the client to see content changes in real time before publishing.',
      'Multi-layer borders with various mix-blend modes to showcase the quality of the client’s work.',
      'Dynamic reordering of services: when a user selects a service, its link shifts to the bottom of the list for efficient navigation.',
      'Projects page featuring filters, a gallery swiper, and a before/after image slider.',
      'Optimised responsiveness across mobile and tablet devices.',
      'Google Analytics integration for comprehensive tracking.',
      'FAQ page equipped with search functionality, enhancing SEO and providing valuable content.',
    ],
    captionedImages: [
      {
        image: 'rosco-contact-form',
        ariaLabel: 'Screenshot of contact form',
        caption: 'Contact and newsletter sign‐up forms integrated via the Sendgrid API.',
      },
      {
        image: 'rosco-faq',
        ariaLabel: 'Screenshot of FAQ section with search filter functionality',
        caption:
          'FAQ section featuring a search filter. The FAQs are structured with schema.org markup for SEO optimisation.',
      },
      {
        image: 'rosco-image-slider',
        ariaLabel: 'Screenshot of before/after image slider',
        caption:
          'Projects gallery featuring thumbnails and a before/after image slider. The purple background corresponds to the specific service category.',
      },
      {
        image: 'rosco-search',
        ariaLabel: 'Screenshot of website search component',
        caption:
          'Search component offering both text and voice search, complete with image results.',
      },
      {
        image: 'rosco-swiper',
        ariaLabel: 'Screenshot of project swiper',
        caption:
          'Feature components implemented using Swiper.js, with responsive design and custom-styled image borders.',
      },
    ],
  },

  {
    title: 'Churchill Academy & Sixth Form',
    // image: '/projects/churchill.png',
    image: 'churchill',
    // altText: "Screenshot of Churchill Academy & Sixth Form's website",
    features: [
      'Fully Responsive',
      'Spinning animation using javascript to find user scroll position',
      'Strong use CSS Clip-path throughout',
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.churchill-academy.org',
    innerPageLink: 'churchill-academy',
  },
  {
    title: 'Guru Nanak Sich Academy',
    // image: '/projects/gurununak.png',
    image: 'gurununak',
    // altText: "Visit Churchill Academy & Sixth Form's website",
    features: [
      'Fully Responsive',
      'Attention to detail',
      'Smooth transitions and animations',
      'Multi-page admin control and functionality',
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.gurunanaksikhacademy.co.uk/',
    innerPageLink: 'guru-nunak',
  },
];
