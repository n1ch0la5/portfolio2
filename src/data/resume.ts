export const personalInfo = {
  name: "Nick Johnson",
  title: "Senior Full-Stack Developer",
  location: "West Haven, CT",
  email: "nicholas.johnson78@gmail.com",
  phone: "203-500-0996",
  website: "https://nicksjohnson.com",
  github: "https://github.com/n1ch0la5",
  tagline:
    "I build clean, scalable, and high-performing web applications with deep expertise in JavaScript, Vue.js, and Laravel.",
};

export const about = {
  summary: [
    "Senior Full-Stack Developer who builds web applications that developers actually want to use and businesses can depend on. I work primarily with Laravel, Vue.js, and modern JavaScript, handling everything from backend APIs to interactive frontends.",
    "I'm a builder first. I solve problems, adapt quickly, and bring hands-on experience to the work. I'm most energized when working with teams that care about shipping solid code and aren't afraid to challenge the status quo.",
  ],
  highlights: [
    { label: "Production Apps", value: "6+" },
    { label: "Primary Stack", value: "Laravel + Vue.js" },
    { label: "Location", value: "West Haven, CT" },
  ],
};

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  color: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Vue 2 / Vue 3" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Nuxt.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Pinia" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SASS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Laravel" },
      { name: "Livewire" },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "WordPress" },
      { name: "LEMP Stack" },
    ],
  },
  {
    category: "Database",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MSSQL" },
    ],
  },
  {
    category: "Tools & Practices",
    color: "from-orange-500 to-rose-500",
    skills: [
      { name: "Git" },
      { name: "Vite" },
      { name: "Alpine.js" },
      { name: "Responsive Design" },
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    title: "Full-Stack Engineer",
    company: "Cardinal Financial Co.",
    type: "Remote",
    period: "June 2020 - Present",
    bullets: [
      "Built and maintained multiple company-facing web applications on a Laravel backend with Vue.js frontends, handling everything from database schema design to API architecture to UI implementation.",
      "Architected and developed an internal intranet platform from the ground up using Laravel and Alpine.js, serving as the central hub for employee resources and tooling.",
      "Built a real-time sales dialer desktop application for loan officers using Vite, Vue 3, TypeScript, and Pinia - managing complex state across WebSocket connections and call workflows.",
      "Developed an embeddable chat and form widget shipped as a JavaScript library using Vite's library mode and Vue, deployed via script tag across company websites.",
    ],
  },
  {
    title: "Contract Full-Stack Developer",
    company: "Self-Employed",
    type: "Remote",
    period: "October 2019 - May 2020",
    bullets: [
      "Built a job application platform end-to-end using Laravel and Vue 3, designing the database schema, REST API layer, and Composition API frontend from scratch.",
      "Implemented server-side filtering, pagination, and role-based access control on the backend with a reactive, type-safe frontend in TypeScript.",
      "Shipped a responsive, production-ready app with optimized queries, lazy-loaded components, and cross-device compatibility.",
    ],
  },
  {
    title: "Lead Web Developer",
    company: "Total Mortgage Services LLC",
    type: "On-site",
    period: "September 2009 - October 2019",
    bullets: [
      "Migrated TotalMortgage.com from a legacy stack to Laravel, WordPress, and Vue.js - rebuilding the frontend, restructuring the database, and improving page load times.",
      "Led a team of 2 developers and a designer, owning technical decisions and code review while shipping features on a regular release cycle.",
      "Co-built Embr, an internal marketing portal using Laravel and React, handling campaign management, asset generation, and distribution workflows.",
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  link?: string;
  image?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: "Passtime",
    description:
      "An iOS app that transforms event tickets into shareable social media content. Scan movie, concert, or sports tickets with AI-powered recognition, customize with official artwork, and build a personal entertainment timeline.",
    tech: ["iOS", "Swift", "Supabase", "AI/Camera"],
    gradient: "from-amber-500 to-orange-600",
    link: "https://getpasstime.app",
    image: "/images/passtime.png",
  },
  {
    title: "ClassFindr",
    description:
      "An AI-powered marketplace connecting college students with available courses across institutions. Features transfer credit evaluation, course matching, and optimized graduation pathways to help students graduate cheaper and earlier.",
    tech: ["Vue.js", "TypeScript", "AI/ML", "Supabase"],
    gradient: "from-emerald-500 to-green-600",
    link: "https://www.classfindr.com",
    image: "/images/classfindr.png",
    badge: "In Development",
  },
  {
    title: "Sales Dialer App",
    description:
      "A desktop application built for loan officers to streamline their sales calling workflow. Features real-time call management, contact tracking, and performance analytics.",
    tech: ["Vue 3", "TypeScript", "Vite", "Pinia"],
    gradient: "from-violet-600 to-indigo-600",
    link: "https://www.cardinalfinancial.com",
    image: "/images/salesdialer.png",
  },
  {
    title: "Company Intranet Hub",
    description:
      "A modern internal employee platform serving as the central hub for company resources, announcements, tools, and team collaboration.",
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    gradient: "from-cyan-600 to-blue-600",
    image: "/images/thehub.png",
  },
  {
    title: "Embr Marketing Portal",
    description:
      "A comprehensive marketing management platform for Total Mortgage, enabling teams to create, manage, and distribute marketing materials at scale.",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    gradient: "from-orange-600 to-rose-600",
    image: "/images/embr.png",
  },
  {
    title: "TotalMortgage.com",
    description:
      "A full-scale company website rebuild and optimization, migrating legacy systems to a modern stack with improved performance, SEO, and user experience.",
    tech: ["Laravel", "Vue.js", "WordPress", "SASS"],
    gradient: "from-fuchsia-600 to-pink-600",
    link: "https://www.totalmortgage.com",
    image: "/images/tms.png",
  },
];

export const education = {
  degree: "BBA in Marketing",
  school: "Southern Arkansas University",
  year: "December 2004",
};
