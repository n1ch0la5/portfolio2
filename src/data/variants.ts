/**
 * Tailored versions of the site, keyed by URL hash.
 * https://nicksjohnson.com#afterquery shows the "afterquery" variant.
 *
 * Every field is optional except `company`. Anything left out falls back to
 * the base content in resume.ts. Tailored resume PDFs are not configured here;
 * they live in Netlify Blobs (`npm run resumes -- add <Company>`) and are
 * matched by the same slug. See docs/VARIANTS.md.
 */
export interface Variant {
  /** Display name, shown as "Prepared for {company}". */
  company: string;
  /** Replaces personalInfo.title (e.g. "Senior Software Engineer"). */
  title?: string;
  /** Replaces personalInfo.focus, the mono line under the title. */
  focus?: string;
  /** Replaces personalInfo.headline, the big sentence in the hero. */
  headline?: string;
  /** Replaces about.summary, the bio paragraphs. */
  summary?: string[];
  /** Per-role summary overrides, keyed by the company name in resume.ts. */
  experience?: Record<string, string>;
  /** Project titles (from projects or sideProjects) to feature, in order. */
  featuredProjects?: string[];
  /** Skill category names to show first; the rest follow in base order. */
  skillsOrder?: string[];
  /** Replaces the Contact blurb. */
  contact?: string;
}

export const variants: Record<string, Variant> = {
  afterquery: {
    company: "AfterQuery",
    title: "Senior Full-Stack Engineer",
    focus: "Next.js / SQL / AI Code Review",
    headline:
      "I ship production web applications end to end and review AI-written code every day before it goes out.",
    summary: [
      "Seventeen years building and shipping production web applications, owning features from the data model through the interface. I work in Next.js, React, Vue, and TypeScript on the frontend and Laravel and Node.js on the backend, with deep schema design experience in PostgreSQL and MySQL.",
      "I review AI-generated code every day in Claude Code and Codex and catch the subtle failures before they ship, including an agent-written resolver that looked correct but skipped an ownership check and would have exposed one user's data to another. I helped set my team's written standards for agent work, and I explain technical judgment clearly in writing.",
    ],
    experience: {
      "Cardinal Financial":
        "Six years on the web team at a nationwide mortgage lender. Helped set the team's standards for AI coding agents, writing shared Claude Code skills and CLAUDE.md rules, and used Claude Code and Codex daily in production code, reviewing every change before it shipped. Migrated the marketing sites from WordPress to Next.js and PostgreSQL (sebonic.com live before I left), built a Vue 3 sales dialer with two other developers, and wrote tests across PHPUnit, Pest, Vitest, and Playwright.",
    },
    featuredProjects: ["ClassFindr", "Artemis 2 Mission", "Podwobble"],
    skillsOrder: ["Data", "Frontend", "AI", "Testing"],
  },

  legacylawyers: {
    company: "Legacy Lawyers",
    title: "Full-Stack Engineer",
    focus: "Internal Tools / Integrations / Secure Data",
    headline:
      "I build internal tools for businesses where the data is confidential and access has to be locked down.",
    summary: [
      "Seventeen years building internal tools and web applications for regulated businesses, mostly mortgage lenders. I've built single sign-on and role-based access across company systems, connected third-party platforms through their REST APIs, and designed the databases underneath.",
      "I spent ten years as the go-to technology person at Total Mortgage, running the servers, fixing what broke, and working directly with non-technical staff to figure out what they needed. I build with Vue, React, Laravel, and Node.js on PostgreSQL and MySQL, and use Claude Code and Codex daily, reviewing everything they produce.",
    ],
    experience: {
      "Total Mortgage Services":
        "Ten years as the go-to technology person at a mortgage lender. Built and integrated authentication across company systems, including enterprise single sign-on with SAML, OpenID Connect, and LDAP, administered the Linux production environment, and was the point person for production issues across the application, database, and server layers. Led the modernization of TotalMortgage.com from ASP Classic to Laravel and Vue, co-built the Embr marketing portal, and led two developers and a designer.",
    },
    featuredProjects: [
      "Company Intranet Hub",
      "Embr Marketing Portal",
      "Sales Dialer App",
      "TotalMortgage.com",
    ],
    skillsOrder: ["Auth", "Backend", "Data", "Infrastructure"],
  },

  google: {
    company: "Google",
    title: "Senior Software Engineer",
    focus: "LLM Features & Full-Stack",
    headline:
      "I design, build, and launch software products, including LLM-powered features on the Anthropic and OpenAI APIs.",
    summary: [
      "Seventeen years designing, building, and launching software products, including LLM-powered features built on the Anthropic and OpenAI APIs with tool calling, structured output, and vision-based document understanding. I work hands-on with AI models every day, reviewing and correcting model-produced output, and helped set my team's standards for how AI coding agents were used and checked.",
      "I build internal tools that make teams faster, and I've owned architecture and technical direction as the lead of a development team. I work across TypeScript, React, Vue, Node.js, PHP, and SQL, with Python for scripting.",
    ],
    experience: {
      "Cardinal Financial":
        "Six years on the web team at a nationwide mortgage lender. Integrated the Anthropic and OpenAI APIs into application features using function calling, structured JSON output, and vision-based document understanding. Helped set the team's standards for AI coding agents, writing shared Claude Code skills and CLAUDE.md rules, and used Claude Code and Codex daily in production, reviewing every agent-produced change before it shipped. Migrated the marketing sites from WordPress to Next.js and PostgreSQL, and built a Vue 3 sales dialer with two other developers.",
    },
    featuredProjects: ["ClassFindr", "Podwobble", "Passtime"],
    skillsOrder: [
      "AI",
      "Infrastructure",
      "Frontend",
      "Backend",
      "Data",
      "Testing",
      "Auth",
    ],
  },
};
