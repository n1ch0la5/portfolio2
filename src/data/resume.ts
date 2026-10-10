export const personalInfo = {
  name: "Nick Johnson",
  title: "Full-Stack Engineer",
  location: "West Haven, CT",
  email: "nickjohnson.builds@gmail.com",
  phone: "203-500-0996",
  website: "https://nicksjohnson.com",
  github: "https://github.com/n1ch0la5",
  linkedin: "https://www.linkedin.com/in/nick-johnson-a5418914/",
  tagline:
    "I build clean, scalable, and high-performing web applications with deep expertise in Laravel, Vue, React, and Next.js.",
};

export const about = {
  summary: [
    "Full-Stack Engineer who builds web applications that developers actually want to use and businesses can depend on. I work primarily with Laravel, Vue, React, and Next.js, handling everything from backend APIs to interactive frontends.",
    "I'm a builder first. I solve problems, adapt quickly, and bring hands-on experience to the work. I'm most energized when working with teams that care about shipping solid code and aren't afraid to challenge the status quo.",
  ],
  highlights: [
    { label: "Primary Stacks", value: "Laravel + Vue · React + Next.js" },
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
    color: "from-blue-500 to-sky-400",
    skills: [
      { name: "Vue 2 / Vue 3" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Nuxt.js" },
      { name: "React Native (Expo)" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Alpine.js" },
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
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Livewire" },
      { name: "REST APIs" },
      { name: "Queues & Background Jobs" },
      { name: "Node.js" },
      { name: "Supabase" },
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
      { name: "Redis" },
    ],
  },
  {
    category: "Testing",
    color: "from-lime-500 to-emerald-500",
    skills: [
      { name: "PHPUnit" },
      { name: "Vitest" },
      { name: "Playwright" },
    ],
  },
  {
    category: "Infrastructure & Tools",
    color: "from-orange-500 to-rose-500",
    skills: [
      { name: "Linux" },
      { name: "Nginx" },
      { name: "Apache" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "Vite" },
      { name: "AWS" },
    ],
  },
  {
    category: "Auth",
    color: "from-slate-500 to-gray-500",
    skills: [
      { name: "SAML" },
      { name: "OpenID Connect" },
      { name: "OAuth" },
      { name: "LDAP" },
    ],
  },
  {
    category: "AI",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "Claude Code" },
      { name: "Codex" },
      { name: "Cursor" },
      { name: "OpenAI API" },
      { name: "Anthropic API" },
      { name: "Tool Calling" },
      { name: "Structured Output" },
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
    period: "June 2020 - August 2026",
    bullets: [
      "Migrated the company's WordPress marketing sites to Next.js and their data from MySQL to PostgreSQL, including sebonic.com (live) and cardinalfinancial.com (in progress at my departure).",
      "Maintained and extended the company's existing WordPress web properties, covering theme and plugin development, MySQL schema and query work, and REST API integrations.",
      "Contributed backend and frontend development to a multi-year internal platform build in Laravel and Alpine.js, serving as the central hub for employee resources and tooling.",
      "Built a sales dialer for loan officers with two other developers using Vite, Vue 3, TypeScript, and Pinia, managing state across WebSocket connections and call workflows.",
      "Built an embeddable chat and lead-capture widget on my own with Vue and Vite's library mode (Rollup), shipped as a JavaScript library and deployed via a script tag.",
      "Used Claude Code, Codex, and previously Cursor daily in production codebases, reviewing every change before it shipped and owning the result in production.",
      "Integrated OpenAI and Anthropic APIs into application features, using tool calling, structured JSON output, and vision-based document understanding.",
      "Wrote automated tests across the stack, using PHPUnit for backend code and Vitest and Playwright for frontend and end-to-end coverage.",
      "Worked in Docker across local development and production, shipping through a CI/CD pipeline on a regular release cycle.",
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
      "Rebuilt TotalMortgage.com on Laravel and Vue.js, replacing a legacy stack, restructuring the database, and improving page load times.",
      "Led a team of 2 developers and a designer, owning architecture, technical decisions, and code review while shipping features on a regular release cycle.",
      "Administered the Linux application environment behind production web properties, covering Nginx and Apache configuration, PHP services, scheduled jobs, background queues, and application logging, and diagnosed production issues across the stack.",
      "Co-built Embr, an internal marketing portal using Laravel and React, handling campaign management, asset generation, and distribution workflows.",
      "Built and integrated authentication, including enterprise single sign-on (SAML, OpenID Connect, LDAP) and OAuth-based third-party providers.",
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
  icon?: "chat";
}

export const projects: Project[] = [
  {
    title: "TotalMortgage.com",
    description:
      "A full company website rebuild on Laravel and Vue.js, replacing a legacy stack with improved performance, SEO, and user experience.",
    tech: ["Laravel", "Vue.js", "SASS"],
    gradient: "from-pink-600 to-rose-600",
    link: "https://www.totalmortgage.com",
    image: "/images/tms.png",
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
    title: "ClassFindr",
    description:
      "An AI-powered marketplace connecting college students with available courses across institutions, including a prerequisite-aware course sequencer that handles multi-level chains, cross-institution prerequisites, and cycles in catalog data, plus LLM tool calling and structured output for transfer credit evaluation.",
    tech: ["Nuxt", "TypeScript", "GraphQL", "Prisma", "PostgreSQL", "OpenAI/Anthropic APIs"],
    gradient: "from-emerald-500 to-green-600",
    link: "https://www.classfindr.com",
    image: "/images/classfindr.png",
    badge: "In Development",
  },
  {
    title: "Company Intranet Hub",
    description:
      "A multi-year internal platform serving as the central hub for employee resources and tooling, built in Laravel and Alpine.js. I contributed backend and frontend development as part of the team.",
    tech: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL"],
    gradient: "from-cyan-600 to-blue-600",
    image: "/images/thehub.png",
  },
  {
    title: "Sales Dialer App",
    description:
      "A desktop application built for loan officers to run their sales calling workflow. Features real-time call management, contact tracking, and performance analytics.",
    tech: ["Vue 3", "TypeScript", "Vite", "Pinia"],
    gradient: "from-blue-600 to-indigo-600",
    link: "https://www.cardinalfinancial.com",
    image: "/images/salesdialer.png",
  },
  {
    title: "Embeddable Chat Widget",
    description:
      "A chat and lead-capture widget shipped as a standalone JavaScript library using Vite's library mode. Deployed via a single script tag across multiple company websites, with a Vue-powered UI that mounts into any host page without style conflicts.",
    tech: ["Vue", "Vite (Library Mode)", "TypeScript", "JavaScript"],
    gradient: "from-teal-500 to-cyan-600",
    icon: "chat",
  },
];

export const sideProjects: Project[] = [
  {
    title: "Podwobble",
    description:
      "A Mac and Windows app that turns a podcast episode or any audio into social video, with a waveform that reacts to whoever is speaking, local Whisper captions, and one render that exports 9:16, 16:9, 1:1 and 4:5 at once. Runs fully offline, with bundled FFmpeg and a sandboxed Mac App Store build.",
    tech: ["Tauri", "Rust", "TypeScript", "Canvas", "FFmpeg", "Whisper"],
    gradient: "from-sky-500 to-indigo-600",
    link: "https://podwobble.com",
    image: "/images/podwobble.png",
  },
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
    title: "Artemis 2 Mission",
    description:
      "A real-time mission dashboard built for NASA's Artemis 2 lunar flyby. Featured live viewer counts, floating emoji reactions, and a synchronized \"chill beats\" button so everyone watching listened to the same song at the same moment.",
    tech: ["Next.js", "Supabase Realtime", "WebSockets", "Tailwind CSS"],
    gradient: "from-indigo-600 to-blue-800",
    link: "https://artemis2mission.live",
    image: "/images/artemis2mission.png",
  },
];

export const education = {
  degree: "BBA in Marketing",
  school: "Southern Arkansas University",
  year: "December 2004",
};
