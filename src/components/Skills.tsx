import { skills } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-6 text-lg font-semibold">
                <span
                  className={`bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
                >
                  {group.category}
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300"
                  >
                    {skill.name}
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
