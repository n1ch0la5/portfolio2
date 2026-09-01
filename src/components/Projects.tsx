import Image from "next/image";
import { projects, sideProjects, type Project } from "@/data/resume";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.title}
      className="group overflow-hidden border border-white/10 bg-white/5"
    >
      {project.image ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
          {project.badge && (
            <span className="absolute right-3 top-3 bg-emerald-500/90 px-3 py-1 font-mono text-xs font-semibold text-white">
              {project.badge}
            </span>
          )}
        </div>
      ) : project.icon === "chat" ? (
        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#0a1530]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
            <svg
              className="h-10 w-10 text-[#0a1530]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 4h16a2 2 0 012 2v10a2 2 0 01-2 2h-8.5l-4.2 3.36A1 1 0 016 20.56V18H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 6.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm4 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
        </div>
      ) : (
        <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
      )}

      <div className="p-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors hover:text-blue-400"
              aria-label={`Visit ${project.title}`}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}
        </div>
        <p className="mb-6 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-gray-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          Featured Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Just for Fun
            </h2>
            <p className="mt-3 text-gray-400">
              Side projects I built for the love of it.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sideProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
