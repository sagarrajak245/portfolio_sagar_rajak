import { AIVIUE, EXPERIENCES } from "../constants";
import SectionHeading from "../ui/SectionHeading";

function Experience() {
  return (
    <div className="section">
      <SectionHeading title="Experience">
        Most of my work lives in production systems that real customers depend on.
      </SectionHeading>

      <article className="relative overflow-hidden rounded-3xl border border-line bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet/15 blur-3xl"
        />
        <div className="relative p-6 sm:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">{AIVIUE.company}</h3>
              <p className="mt-1 text-signal">{AIVIUE.role}</p>
            </div>
            <p className="text-sm text-muted">{AIVIUE.period}</p>
          </div>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text/90">{AIVIUE.lead}</p>

          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {AIVIUE.contributions.map((c) => (
              <div key={c.title} className="border-l border-line pl-5">
                <h4 className="font-display text-lg font-semibold text-white">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Aiviue stack">
            {AIVIUE.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {EXPERIENCES.map((exp) => (
          <article key={exp.company} className="flex flex-col rounded-3xl border border-line p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{exp.company}</h3>
              <p className="text-sm text-muted">{exp.period}</p>
            </div>
            <p className="mt-1 text-signal">
              {exp.role}
              {exp.note && <span className="text-muted"> — {exp.note}</span>}
            </p>
            <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-text/80">
              {exp.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {p}
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${exp.company} stack`}>
              {exp.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
