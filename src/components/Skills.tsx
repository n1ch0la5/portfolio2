"use client";

import { useProfile } from "@/lib/variant";

export default function Skills() {
  const { skills } = useProfile();

  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Skills</h2>

        <div className="border border-white/10 bg-white/5">
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-3 border-b border-white/10 px-8 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
            >
              <p className="pt-1.5 font-mono text-xs uppercase tracking-wider text-gray-500">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
