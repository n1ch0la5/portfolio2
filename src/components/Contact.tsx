import { personalInfo } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-12 text-center sm:p-16">
          {/* Background accent */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-600/10 blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-gray-400">
              I&apos;m always open to discussing new opportunities, interesting
              projects, or ways to collaborate. Drop me a line!
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-violet-500/40"
            >
              Send Me an Email
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors hover:text-violet-400"
              >
                {personalInfo.email}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="transition-colors hover:text-violet-400"
              >
                {personalInfo.phone}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-violet-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
