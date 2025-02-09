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
  githubLink?: string;
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
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript', 'React', 'TypeScript', 'GitHub', 'Sanity.io CMS', 'Google Analytics'],
    websiteLink: 'https://www.roscoandperlini.co.uk',
    innerPageLink: 'rosco-and-perlini',
    githubLink: 'https://github.com/sbloxy123/rosco',
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
      'TypeScript used throughout for improved maintainability and scalability'
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
    title: 'Bloxy Web Services',
    image: 'bloxy',
    features: [
      'Personal freelance website to attract local businesses',
      'Showcase of modern technologies and design expertise',
      'Clean, seamless user experience'
    ],
    tech: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'React Motion',
      'Figma',
      'React',
      'Google Analytics',
      'GitHub',
    ],
    websiteLink: 'https://www.bloxywebservices.co.uk',
    innerPageLink: 'bloxy-web-services',
    githubLink: 'https://github.com/sbloxy123/bloxy_web_services24',
    projectType: 'Self/Freelance',
    description: [
      'Bloxy Web Services is my personal freelance website, designed to attract local businesses and serve as a platform for experimenting with modern web technologies outside of my full-time employment. The site showcases my design and technical development skills through a clean, seamless user experience that highlights past work.'
    ],
    fullFeatureList: [
      'Built with Next.js 14 and Tailwind CSS to deliver a modern, responsive design',
      'Custom Swiper.js implementation for an intuitive multi-image hero section that showcases project screenshots',
      'Hero section featuring a video background utilising Next.js’s built-in asset size optimisation',
      'Section load-in animations powered by React Motion for enhanced visual engagement',
      'Quick and efficient form integration using the Formspree API',
      'Comprehensive SEO setup with metadata and JSON-LD, alongside Google Analytics for web traffic monitoring',
      'Website hosted on Vercel with code managed on GitHub',
      'Fully responsive design optimised for mobile, tablet, and desktop devices',
      'Custom hover transitions for refined interactive feedback',
      'TypeScript used throughout for improved maintainability and scalability'
    ]
  },
  {
    title: 'Dr Mould',
    image: 'dr-mould',
    features: [
      'Informative brochure website for a local mould cleaning company',
      'Showcases services with a clear, engaging design',
      'Integrated subtle animations to enhance user experience'
    ],
    tech: [
      'Next.js',
      'Tailwind CSS',
      'React Motion',
      'TypeScript',
      'Figma',
      'React',
      'Google Analytics',
      'GitHub',
    ],
    websiteLink: 'https://www.dr-mould.co.uk',
    innerPageLink: 'dr-mould',
    githubLink: 'https://github.com/sbloxy123/dr-mould',
    projectType: 'Freelance',
    description: [
      'Dr Mould is a brochure website built for a local mould cleaning company that required an informative online presence to showcase their services. Developed with Next.js 13.4 and fully designed in Figma, the project was taken from design to production within one month. The website is hosted on Vercel with GitHub version control, and images are served from Cloudinary to ensure optimal performance. Styling is achieved using Tailwind CSS and React Motion, resulting in subtle load-in animations for text and an animated FAQ section that enriches the user experience.'
    ],
    fullFeatureList: [
      'Pixel‐perfect design with a fully responsive layout',
      'Built with Next.js 13.4 and deployed on Vercel',
      'Completely designed in Figma to achieve a clean, modern look',
      'Images hosted on Cloudinary for enhanced performance',
      'Contact form implemented with Nodemailer using Next.js server‐side methods, supported by Zod and Formik for robust field validation',
      'Toastify integration for clear success and error notifications',
      'Dynamic before/after image slider to effectively showcase the quality of work',
      'Subtle text load‐in animations and an animated FAQ section for improved engagement',
      'Comprehensive SEO setup including metadata, JSON‐LD, schema.org markup and Google Analytics integration',
      'TypeScript used throughout for improved maintainability and scalability'
    ]
  },
  {
    title: 'My Portfolio Site',
    image: 'portfolio',
    features: [
      'Fully responsive design',
      'Modern Next.js & Tailwind CSS framework',
      'Component-based architecture for maintainability',
      'Smooth transitions and engaging loading animations'
    ],
    tech: [
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Figma',
      'React',
      'GitHub',
      'React Motion'
    ],
    websiteLink: 'https://www.stuartbloxham.co.uk',
    innerPageLink: 'my-portfolio-site',
    githubLink: 'https://github.com/sbloxy123/portfolio25',
    projectType: 'Self/Freelance',
    description: [
      "This website is an integral part of my portfolio, built to showcase my skills in modern web development. It not only demonstrates my technical expertise but also provides an opportunity to inspect the source code via the provided GitHub link."
    ],
    fullFeatureList: [
      'Developed with Next.js and Tailwind CSS to ensure a robust and well‐organised infrastructure for easy management and updates.',
      'Implemented entirely in TypeScript, focusing on clean, maintainable, and DRY code.',
      'Custom-designed in Figma with a strong emphasis on intuitive UI/UX.',
      'Smooth transitions and dynamic loading animations achieved through Tailwind and motion libraries.',
      'Interactive swipers powered by Swiper.js enhance user engagement.',
      'Fully responsive layout optimised for mobile, tablet, and desktop screens.',
      'Source code is hosted on GitHub for version control and deployed on Vercel for seamless updates.',
      'Built over a few weeks during evenings, utilising a component-based approach to maintain succinct styling and code clarity.'
    ]
  },
  {
    title: 'Churchill Academy & Sixth Form',
    image: 'churchill',
    features: [
      'Fully responsive design across all devices',
      'Dynamic spinning animations triggered by user scroll position',
      'Advanced use of CSS clip-path for a pixel‐perfect build'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.churchill-academy.org',
    innerPageLink: 'churchill-academy',
    projectType: 'Employed (Juniper Education)',
    description: [
      "Developed for Churchill Academy & Sixth Form, this website delivers a pixel‐perfect design that meets multiple clip‐path requirements. It incorporates dynamic spinning animations—driven by the user's scroll position—to animate logo watermarks and add visual interest. Additionally, absolute positioned elements are strategically used as background shapes and watermarks, further enhancing the site's design. The website is fully responsive for mobile and tablet devices and is entirely editable via an in‐house content management system."
    ],
    fullFeatureList: [
      'Pixel‐perfect design with stringent clip‐path requirements',
      'Dynamic spinning animations driven by the user’s scroll position to animate logo watermarks',
      'Strategic use of absolute positioned elements for background shapes and watermarks',
      'Fully responsive design optimised for mobile and tablet devices',
      'Complete editability through in‐house content management system',
    ]
  },
  {
    title: 'Consilium Academy Trust',
    image: 'consilium-trust',
    features: [
      'Bespoke, multi-feature site showcasing academies nationwide',
      'Customisable interactive map with editable pin locations and logos'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.consiliumtrust.ovw9.devwebsite.co.uk/',
    innerPageLink: 'consilium-academy-trust',
    projectType: 'Employed (Juniper Education)',
    description: [
      'Consilium Academy Trust is a bespoke website built to highlight the academies across the country. Designed with a clean, modern aesthetic, the site employs multiple load-in animations and subtle styling to enhance user engagement. It is fully responsive and future-proofed to accommodate the addition of new schools as the trust expands.'
    ],
    fullFeatureList: [
      'Customisable interactive map using SVG coordinates, allowing pin locations and logos to be edited via the in-house CMS',
      'Multiple load-in animations for a dynamic and engaging user experience',
      'Subtle yet effective styling that demonstrates advanced CSS techniques',
      'Fully responsive design optimised for all devices',
      'Future-proof architecture to seamlessly integrate additional schools as the trust grows',
      'Clean build with adaptable SVG sections that adjust to different screen sizes'
    ]
  },
  {
    title: 'Consortium Academy Trust',
    image: 'consortium-trust',
    features: [
      'Bespoke academy trust site with a dynamic, intuitive design',
      'Subtle hero and section load-in animations',
      'Fully responsive layout across all devices'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript', 'WCAG'],
    websiteLink: 'https://consortiumacademytrust.ovw5.devwebsite.co.uk/',
    innerPageLink: 'consortium-academy-trust',
    projectType: 'Employed (Juniper Education)',
    description: [
      'This academy trust website is a bespoke build designed to showcase the trust’s unique qualities while enabling customisation through an in-house CMS. The site features subtle animations on the hero images and throughout its sections, creating a lively yet professional user experience. With a pixel‐perfect build and fully responsive design, the project leverages advanced SCSS techniques for precise element positioning and styling.'
    ],
    fullFeatureList: [
      'Subtle hero animations that create a dynamic and intuitive feel',
      'Custom section load-in animations for engaging content transitions',
      'Pixel‐perfect design ensuring high precision and quality',
      'Fully responsive layout optimised for all devices',
      'Advanced SCSS skills used for detailed element positioning and styling',
      'Interactive custom map with editable pins: Users can set pin locations via the in-house CMS by utilising SVG coordinates. In admin mode, clients can hover over the map to determine the mouse position within the SVG, with a tooltip providing the coordinates for easy copying.',
      'Custom Vacancies page built to showcase the trust’s distinctive qualities',
      'Fully responsive custom slide-out menu adaptable to all screen sizes',
      'WCAG-compliant, ensuring accessibility for all users'
    ]
  },  
  {
    title: 'Aurora Academy Trust',
    image: 'Aurora-trust',
    features: [
      'Bespoke, dynamic design with intuitive animations',
      'Fully editable via an in‐house CMS with customisable colour schemes'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript', 'WCAG'],
    websiteLink: 'https://consortiumacademytrust.ovw5.devwebsite.co.uk/',
    innerPageLink: 'consortium-academy-trust',
    projectType: 'Employed (Juniper Education)',
    description: [
      'Aurora Academy Trust is a bespoke website built to deliver a dynamic and engaging user experience for an academy trust. Developed with a focus on customisation and maintainability, the site employs a rich palette of colours and opacity effects—managed through CSS variables—to ensure rapid development and ease of future updates. Advanced CSS techniques, including the use of clippaths and SVGs, create a unique, custom look and feel throughout the design.'
    ],
    fullFeatureList: [
      'Subtle hero animations that create a dynamic and intuitive feel',
      'Custom section load-in animations for smooth content transitions',
      'Pixel‐perfect design ensuring high precision and quality',
      'Extensive use of various colour tones and opacity effects via CSS variables for quick development and easy maintainability',
      'Advanced use of clippaths and SVGs to craft a distinctive visual identity',
      'Multiple hover transitions enhancing interactivity across the site',
      'Interactive multipin Google map that displays academy details on click—using SVG coordinates for precise pin placement, with details accessible in admin mode',
      'Fully editable design via the CMS, including the ability to update colours as needed',
      'Custom smooth scrolling (with a dedicated scroll button) and seamless section load-in animations',
      'WCAG-compliant design ensuring accessibility for all users',
      'News swiper implemented with Swiper.js and custom vanilla JavaScript to present updates in a uniquely styled grid',
      'Scrolling animations on watermarks that utilise the client’s window position for added dynamism'
    ]
  },
  
  {
    title: 'Guru Nanak Sich Academy',
    image: 'gurununak',
    features: [
      'Fully responsive design',
      'Meticulous attention to detail',
      'Smooth transitions and animations',
      'Multi-page administrative control'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.gurunanaksikhacademy.co.uk/',
    innerPageLink: 'guru-nunak',
    projectType: 'Employed (Juniper Education)',
    description: [
      'A comprehensive academy homepage developed for Guru Nanak Sich Academy. The design is clonable, allowing the creation of distinct pages for the school’s various phases – primary, secondary, and sixth form. Subtle hero and content animations provide a professional and clean look, while all content is managed via an in-house content management system.'
    ],
    fullFeatureList: [
      'Clonable homepage design that supports customised pages for primary, secondary, and sixth form phases.',
      'Subtle hero and content animations to enhance the overall professional look and feel.',
      'Content fully managed through an in-house content management system, enabling multi-page administrative control.',
      'Custom vacancies page designed to attract staff and showcase the school’s impressive infrastructure.',
      'Custom history page and timeline built with Swiper.js to present the school’s heritage.',
      'Custom splash page featuring the school’s logo for a welcoming introduction.',
      'Responsive design optimised for mobile, tablet, and desktop devices.',
      'Custom slide-out navigation menu tailored for smaller screen sizes.',
      'Integrated text and voice search functionality.'
    ]
  },
  {
    title: 'Sir WIlliam Robertson Academy',
    image: 'swr',
    features: [
      'Pixel‐perfect design with a subtle, professional load‐in animation',
      'Fully responsive layout across all devices',
      'Dynamic count‐up animation on housepoints'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://www.swracademy.org/',
    innerPageLink: 'sir-william-robertson',
    projectType: 'Employed (Juniper Education)',
    description: [
      'Developed for Sir William Robertson Academy, this website is a pixel‐perfect build that combines visual precision with engaging interactive elements. It features a subtle, professional load‐in animation and a dynamic count‐up animation on housepoints, adding an extra layer of engagement for users. The site is fully responsive and entirely editable through an in‐house content management system, ensuring seamless updates. Remarkably, the project was delivered from start to production within a two‐week timeframe.'
    ],
    fullFeatureList: [
      'Pixel‐perfect build with a subtle yet professional load‐in animation',
      'Fully responsive design, optimised for mobile, tablet, and desktop devices',
      'Engaging count‐up animation on housepoints to highlight key metrics',
      'Complete editability via an in‐house content management system',
      'Rapid development cycle: project completed from inception to production within two weeks',
      'Custom top‐level menu dropdowns with icon integration, managed directly through the CMS',
      'Integrated Facebook feed to display the latest social media updates'
    ]
  },
  {
    title: 'South Yorkshire Maths Hub',
    image: 'symathshub',
    features: [
      'Professional and clean build for a teaching and training centre',
      'Dynamic multi-image hero section with Swiper navigation',
      'Fully responsive design with subtle section loading animations'
    ],
    tech: ['CSS', 'ASP.NET', 'JavaScript'],
    websiteLink: 'https://symathshub.ovw1.devwebsite.co.uk/',
    innerPageLink: 'south-yorkshire-maths-hub',
    projectType: 'Employed (Juniper Education)',
    description: [
      'The South Yorkshire Maths Hub website is a professional and clean build designed specifically for a teaching and training centre. It features a dynamic multi-image hero section with Swiper navigation to showcase various image groups, as well as subtle loading animations and multiple overlay gradients to enhance visual appeal. Key statistics are presented with a count-up animation upon section load, and the entire site is fully responsive across mobile, tablet, and desktop devices.'
    ],
    fullFeatureList: [
      'Professional and clean build tailored for a teaching and training centre',
      'Dynamic multi-image hero section with Swiper navigation for multiple image groups',
      'Subtle section loading animations for a refined user experience',
      'Multiple use cases of overlay gradients to enhance design depth',
      'Fully responsive design optimised for mobile, tablet, and desktop',
      'Key statistics count-up animation triggered on section load'
    ]
  }

];
