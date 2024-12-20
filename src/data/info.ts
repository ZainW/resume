export const info = {
  baseUrl: "https://zainresu.me",
  name: "Zain Wania",
  jobDescription: "Full Stack Developer",
  about: `I am a highly skilled Full Stack Web Developer with 8 years of experience.

  I specialize in utilizing innovative technologies and frameworks such as Vue, Nuxt, Ruby on Rails, and Typescript to develop robust and user-friendly web applications.
  My expertise extends to cloud platforms like AWS, as well as deployment services like Netlify and Vercel.
  With a strong background in database management using MySQL and Planetscale, I have successfully delivered scalable and efficient solutions.
  I am passionate about creating exceptional user experiences and continuously staying updated with the latest industry trends.
  I am always seeking new opportunities to apply my expertise and contribute to cutting-edge web development projects.
  Recently, I have been intensly interested in zero by rocicorp, a new sync engine for building better webapps`,

  experience: [
    {
      name: "Contactmonkey",
      title: "Staff Software Engineer",
      location: "Toronto, Ontario, Canada",
      startDate: "Oct 2019",
      endDate: "Present",
      description: [
        "- Migration of the frontend from Ruby on Rails to a modern Vue.js SPA.",
        "- Lead the development of numerous features and improvements to the platform.",
        "- Implemented a new design system and component library.",
        "- Implemented a Monorepo structure for the frontend.",
        "- Run and mentor the frontend team.",
      ],
    },

    {
      name: "Ample Organics",
      title: 'Software Developer',
      location: "Toronto, Ontario, Canada",
      startDate: "Jan 2018",
      endDate: "Sep 2019",
      description: [
        "- Lead the development of a new frontend for the company's flagship product.",
        "- Implemented a new design system and component library.",
        "- Led the implementation of E2E testing strategies, resulting in improved product reliability, efficient bug detection and saving of technical resources."
      ],
    },

    {
      name: "Exact Media",
      title: "Software Developer",
      location: "Toronto, Ontario, Canada",
      startDate: "Feb 2016",
      endDate: "Apr 2017",
      description: [
        "- Solo launched a new product from scratch, which supported over 70,000 users",
        "- Deployed and maintained a Ruby on Rails application on AWS",
      ],
    },
  ],

  // education: [
  //   {
  //     name: "Pakistan Institute of Professional Science & Technology (PIPS-TECH)",
  //     location: "Karāchi, Sindh, Pakistan",
  //     startDate: "2019",
  //     endDate: "2022",
  //     description: [
  //       "Diploma of Associate Engineering,  Computer Information Technology (CIT)",
  //     ],
  //   },
  //   {
  //     name: "Govt. Degree Boys College Buffer Zone",
  //     location: "Karāchi, Sindh, Pakistan",
  //     startDate: "2018",
  //     endDate: "2020",
  //     description: ["Intermediate, Pre-Engineering"],
  //   },
  //   {
  //     name: "Ghazi Foundation Schools & Colleges",
  //     location: "Karāchi, Sindh, Pakistan",
  //     startDate: "2016",
  //     endDate: "2018",
  //     description: ["Matriculation,  Computer Science"],
  //   },
  // ],

  socialMedia: {
    // facebook: "https://www.facebook.com/profile.php?id=100022899849583",
    twitter: "https://twitter.com/Zain_Wania",
    github: "https://github.com/ZainW",
    email: "zain@wania.dev",
    linkedin: "https://www.linkedin.com/in/zainw/",
    bluesky: "https://bsky.app/profile/zainwania.bsky.social" // Add this line
  },

  projects: [
    {
      title: "Zuxt",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/ZainW/zuxt",
      liveUrl: "https://github.com/ZainW/zuxt",
    },
  ],
};

export const technologies = [
  {
    name: 'Nuxt',
    logo: 'logos:nuxt-icon',
    description: 'Vue-powered framework enabling SSR, static site generation, and more for building performant web applications.'
  },
  {
    name: 'Vue',
    logo: 'logos:vue',
    description: 'Progressive JavaScript framework for building user interfaces with a gentle learning curve and powerful reactivity system.'
  },
  {
    name: 'Tailwind CSS',
    logo: 'logos:tailwindcss-icon',
    description: 'Utility-first CSS framework for rapidly building custom user interfaces without leaving your HTML.'
  },
  {
    name: 'Zod',
    logo: 'logos:zod',
    description: 'TypeScript-first schema validation with static type inference for building type-safe applications.'
  },
  {
    name: 'PostgreSQL',
    logo: 'logos:postgresql',
    description: 'Powerful open-source relational database with robust features for data integrity and complex queries.'
  },
  {
    name: 'SST',
    logo: 'logos:sst-icon',
    description: 'Framework for building full-stack serverless applications on AWS with TypeScript.'
  },
  {
    name: 'AWS',
    logo: 'logos:aws', 
    description: 'Comprehensive cloud platform offering compute, storage, database and ML services.'
  },
  {
    name: 'Cloudflare',
    logo: 'logos:cloudflare-icon',
    description: 'Global cloud network providing CDN, DNS, DDoS protection and edge computing capabilities.'
  }
];
