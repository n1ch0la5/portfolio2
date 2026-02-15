import Image from "next/image";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              {/* Image with gradient overlay, or fallback gradient bar */}
              {project.image ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"
                  />
                  {project.badge && (
                    <span className="absolute right-3 top-3 rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white">
                      {project.badge}
                    </span>
                  )}
                </div>
              ) : (
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />
              )}

              <div className="p-8">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 transition-colors hover:text-violet-400"
                      aria-label={`Visit ${project.title}`}
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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
                      className={`rounded-full bg-gradient-to-r ${project.gradient} px-3 py-1 text-xs font-semibold text-white`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
