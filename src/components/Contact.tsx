import { personalInfo } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden border border-white/10 bg-white/5 p-12 text-center sm:p-16">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
Get in touch
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-gray-400">
              I&apos;m open to full-time roles, contract work, and interesting
              projects. Email is the fastest way to reach me.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Email me
            </a>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 font-mono text-sm text-gray-500">
              <a
                href={`mailto:${personalInfo.email}`}
                className="transition-colors hover:text-blue-400"
              >
                {personalInfo.email}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={`tel:${personalInfo.phone}`}
                className="transition-colors hover:text-blue-400"
              >
                {personalInfo.phone}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
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
