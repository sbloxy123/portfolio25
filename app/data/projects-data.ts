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
};

export const projects: ProjectType[] = [
  {
    title: 'Rosco & Perlini',
    image: '/projects/rosco.png',
    features: [
      'Fully Responsive',
      'Pixel-perfect to professional design',
      'High utilisation of Next.js features throughout',
      'Full integration with Sanity.io with live-edit preview setup',
    ],
    tech: ['Next.js', 'Tailwind', 'JavaScript', 'React', 'TypeScript', 'Sanity.io CMS'],
    websiteLink: 'https://www.roscoandperlini.co.uk',
    innerPageLink: 'rosco-and-perlini',
    projectType: 'Freelance',
    description: [
      'Business website built as a freelancer using Next.js and Tailwind with Sanity.io used for the Content Management System (CMS).',
      'The website needed to be pixel-perfect to the provided design and have a number of interactive elements for the website to standout against competition in the damp proofing industry.',
    ],
    fullFeatureList: [
      ' Text and voice search functionality',
      'Fully integrated with Sanity.io (CMS) for every element to be editable',
      ' ‘Preview mode’ setup with Sanity.io for client to edit content whilst seeing the changes immediately before publishing',
      'Multi-layer borders with multiple mix-blend-modes to highlight quality of clients work',
      ' Reordering of Services so that when the user clicks on a service, that service’s link moves to the bottom of the list to allow users to efficiently navigate through the services',
      ' Projects page with filter, gallery swiper and a before/after image slider',
      ' Fully responsive to mobile and tablet displays',
      ' Google Analytics integration',
      ' FAQ page setup with search functionality to help with SEO and populating website with useful content',
    ],
  },
  {
    title: 'Churchill Academy & Sixth Form',
    image: '/projects/churchill.png',
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
    image: '/projects/gurununak.png',
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
