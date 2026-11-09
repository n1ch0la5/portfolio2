"use client";

import { useProfile } from "@/lib/variant";

export default function Experience() {
  const { experience } = useProfile();

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 md:block md:left-8" />

          <div className="flex flex-col gap-10">
            {experience.map((job) => (
              <div key={job.company + job.period} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 hidden h-5 w-5 rounded-full border-4 border-gray-950 bg-blue-500 md:block" />

                <div className="border border-white/10 bg-white/5 p-8">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <p className="text-gray-400">
                        {job.company}{" "}
                        <span className="text-gray-600">· {job.location}</span>
                      </p>
                    </div>
                    <span className="bg-blue-500/10 px-4 py-1 font-mono text-xs text-blue-400">
                      {job.period}
                    </span>
                  </div>

                  <p className="leading-relaxed text-gray-400">{job.summary}</p>

                  <p className="mt-5 font-mono text-xs text-gray-500">
                    <span className="text-gray-400">Tools:</span>{" "}
                    {job.tools.join(" · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
