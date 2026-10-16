import { ArrowUpRight } from "lucide-react";
import { ACHIEVEMENTS } from "../constants";

function Achievements() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        Certifications & recognition
      </h2>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        {ACHIEVEMENTS.map((a) => (
          <li key={a.title} className="bg-ink">
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start justify-between gap-4 p-5 transition-colors hover:bg-surface"
            >
              <div>
                <p className="font-medium text-white">{a.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{a.description}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2 text-sm text-muted">
                {a.year}
                <ArrowUpRight
                  size={16}
                  aria-label="Open certificate"
                  className="transition-colors group-hover:text-signal"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
