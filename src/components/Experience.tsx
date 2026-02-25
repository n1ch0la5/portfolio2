import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block md:left-8" />

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 hidden h-5 w-5 rounded-full border-4 border-gray-950 bg-violet-500 md:block" />

                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-400">
                        {job.company}{" "}
                        <span className="text-gray-600">· {job.type}</span>
                      </p>
                    </div>
                    <span className="rounded-full bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
