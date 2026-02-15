import { about } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {about.summary.map((paragraph, i) => (
              <p
                key={i}
                className="mb-6 text-lg leading-relaxed text-gray-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {about.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="mb-1 text-sm font-medium uppercase tracking-wider text-gray-500">
                  {item.label}
                </p>
                <p className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-2xl font-bold text-transparent">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
