export const info = {
  baseUrl: "https://zainresu.me",
  name: "Zain Wania",
  jobDescription: "Full Stack Developer",
  about: `I am a Full Stack Web Developer with 8 years of experience.
  I use technologies like Vue, Nuxt, React, and Typescript to build web applications.
  I implement responsive designs using Tailwind CSS.
  I work with cloud platforms like AWS and cloudflare for infrastructure.
  I have experience with database management using MySQL, Postgres and Planetscale.
  I am interested in Zero by Rocicorp, a new sync engine for web apps.`,

  experience: [
    {
      name: "Contactmonkey",
      title: "Staff Software Engineer",
      location: "Toronto, Ontario, Canada",
      startDate: "Oct 2019",
      endDate: "Present",
      description: [
        "- Migrated the frontend from Ruby on Rails to Vue.js SPA.",
        "- Developed features and improvements.",
        "- Implemented a design system and component library.",
        "- Set up a Monorepo structure for the frontend.",
        "- Mentored the frontend team.",
      ],
    },

    {
      name: "Ample Organics",
      title: 'Software Developer',
      location: "Toronto, Ontario, Canada",
      startDate: "Jan 2018",
      endDate: "Sep 2019",
      description: [
        "- Developed a new frontend for the main product.",
        "- Implemented a design system and component library.",
        "- Led E2E testing strategies, improving product reliability.",
      ],
    },

    {
      name: "Exact Media",
      title: "Software Developer",
      location: "Toronto, Ontario, Canada",
      startDate: "Feb 2016",
      endDate: "Apr 2017",
      description: [
        "- Launched a new product from scratch, supporting over 70,000 users.",
        "- Deployed and maintained a Ruby on Rails application on AWS.",
      ],
    },
  ],

  socialMedia: {
    twitter: "https://twitter.com/Zain_Wania",
    github: "https://github.com/ZainW",
    email: "zain@wania.dev",
    linkedin: "https://www.linkedin.com/in/zainw/",
    bluesky: "https://bsky.app/profile/zainwania.bsky.social"
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
  },
  {
    name: 'Zero',
    logo: 'octicon:sync-16',
    description: 'Sync engine for building better web applications with offline support and conflict resolution.'
  }
];
