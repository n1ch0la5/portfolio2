export const personalInfo = {
  name: "Nick Johnson",
  title: "Senior Full-Stack Engineer",
  focus: "Laravel / Vue / Next.js / AI",
  location: "West Haven, CT",
  status: "Open to work",
  headshot: "/images/headshot.jpg",
  email: "nickjohnson.builds@gmail.com",
  phone: "203-500-0996",
  website: "https://nicksjohnson.com",
  github: "https://github.com/n1ch0la5",
  linkedin: "https://www.linkedin.com/in/nick-johnson-a5418914/",
  headline:
    "I build web applications end to end, from the Laravel API to the Vue or React frontend.",
  tagline:
    "Full-stack engineer with 17 years shipping web applications in Laravel, Vue, React, and Next.js.",
  contact:
    "I'm open to full-time roles, contract work, and interesting projects. Email is the fastest way to reach me.",
};

export const about = {
  summary: [
    "Seventeen years building web applications that developers want to work in and businesses can depend on, most of them for mortgage lenders. I work in Laravel and Vue, and in React and Next.js, and handle everything from the database and API to the interactive frontend.",
    "I'm a builder first. I use Claude Code and Codex daily in production code and own what ships. I'm most energized by teams that care about solid code and aren't afraid to challenge the status quo.",
  ],
};

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "Vue 2 / Vue 3",
      "React",
      "Next.js",
      "Nuxt.js",
      "React Native (Expo)",
      "TypeScript",
      "Alpine.js",
      "Tailwind CSS",
      "SASS",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "Livewire",
      "REST APIs",
      "Queues & Background Jobs",
      "Node.js",
      "Supabase",
      "WordPress",
    ],
  },
  {
    category: "Data",
    skills: ["MySQL", "PostgreSQL", "MSSQL", "Redis"],
  },
  {
    category: "Testing",
    skills: ["PHPUnit", "Vitest", "Playwright"],
  },
  {
    category: "Infrastructure",
    skills: ["Linux", "Nginx", "Docker", "CI/CD", "AWS"],
  },
  {
    category: "Auth",
    skills: ["SAML", "OpenID Connect", "OAuth", "LDAP"],
  },
  {
    category: "AI",
    skills: [
      "Claude Code",
      "Codex",
      "Anthropic API",
      "OpenAI API",
      "Tool Calling",
      "Structured Output",
    ],
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  tools: string[];
}

export const experience: Experience[] = [
  {
    title: "Full-Stack Engineer",
    company: "Cardinal Financial",
    location: "Remote",
    period: "2020 – 2026",
    summary:
      "Six years on the web team at a nationwide mortgage lender. Migrated the marketing sites from WordPress to Next.js and PostgreSQL (sebonic.com live, cardinalfinancial.com in progress when I left), built a Vue 3 sales dialer for loan officers with two other developers, and shipped an embeddable chat widget on my own. Helped set the team's standards for AI coding agents, writing shared Claude Code skills and CLAUDE.md rules, and used Claude Code and Codex daily in production code with tests across PHPUnit, Pest, Vitest, and Playwright.",
    tools: [
      "Next.js",
      "WordPress",
      "Laravel",
      "Alpine.js",
      "Vue 3",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Anthropic & OpenAI APIs",
    ],
  },
  {
    title: "Contract Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2019 – 2020",
    summary:
      "Built a job application platform end to end in Laravel and Vue 3: database schema, REST API, role-based access, server-side filtering and pagination, and a TypeScript frontend.",
    tools: ["Laravel", "Vue 3", "TypeScript", "MySQL"],
  },
  {
    title: "Lead Web Developer",
    company: "Total Mortgage Services",
    location: "Milford, CT",
    period: "2009 – 2019",
    summary:
      "Ten years running web for a mortgage lender. Led the modernization of TotalMortgage.com from ASP Classic to Laravel and Vue, and co-built Embr, the internal marketing portal. Led two developers and a designer, owned architecture and code review, and administered the Linux production environment, including enterprise single sign-on with SAML, OpenID Connect, and LDAP.",
    tools: ["Laravel", "Vue.js", "React", "MySQL", "Linux", "Nginx", "SAML / OIDC / LDAP"],
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
      "A marketing management platform for Total Mortgage, enabling teams to create, manage, and distribute marketing materials at scale.",
    tech: ["Laravel", "React", "MySQL", "REST API"],
    gradient: "from-orange-600 to-rose-600",
    image: "/images/embr.png",
  },
  {
    title: "ClassFindr",
    description:
      "An AI-powered marketplace connecting college students with available courses across institutions. Includes a prerequisite-aware course sequencer and LLM-based transfer credit evaluation using tool calling and structured output.",
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
      "A desktop application built for loan officers to run their sales calling workflow, built with two other developers. Real-time call management over WebSockets, contact tracking, and performance analytics.",
    tech: ["Vue 3", "TypeScript", "Vite", "Pinia"],
    gradient: "from-blue-600 to-indigo-600",
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
