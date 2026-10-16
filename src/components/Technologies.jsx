import { SKILLS } from "../constants";
import SectionHeading from "../ui/SectionHeading";

export default function Technologies() {
  return (
    <div className="section">
      <SectionHeading title="Skills">
        The tools I reach for, grouped by the kind of problem they solve.
      </SectionHeading>

      <dl className="divide-y divide-line border-y border-line">
        {SKILLS.map((s) => (
          <div key={s.group} className="grid gap-4 py-6 md:grid-cols-[260px_1fr] md:gap-10">
            <dt className="font-display text-lg font-semibold text-white">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li key={item} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-text/85">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
