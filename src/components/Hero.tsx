import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-cyan-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <p className="mb-4 text-lg font-medium text-violet-400">
          Hey there, I&apos;m
        </p>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-300 sm:text-3xl">
          {personalInfo.title}
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
          {personalInfo.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-violet-500/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-12 flex gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-violet-400"
            aria-label="GitHub"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-500 transition-colors hover:text-violet-400"
            aria-label="Email"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
