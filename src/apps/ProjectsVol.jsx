/* eslint-disable react/prop-types */
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useMemo } from "react";
import { FaGithub } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { botStore } from "../bot/botStore";
import { PROJECT_FILTERS, PROJECTS } from "../constants";
import { BOT_LINES } from "../constants/bot";
import ProjectCover from "../ui/ProjectCover";

const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const pad = (n) => String(n).padStart(2, "0");

function Cover({ project }) {
  return (
    <figure className="aspect-[16/9] overflow-hidden border border-line bg-surface">
      {project.cover ? (
        <ProjectCover variant={project.cover} title={project.title} />
      ) : (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      )}
    </figure>
  );
}

function Viewer({ project }) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 className="text-xl text-bright md:text-2xl">{project.title}</h2>
        <span className="text-xs text-violet">{project.category}</span>
      </div>
      <p className="mt-3 max-w-prose font-sans text-[15px] leading-relaxed text-text/85">{project.summary}</p>
      <div className="mt-6">
        <Cover project={project} />
      </div>
      <ul className="mt-4 max-w-prose space-y-2 font-sans text-sm leading-relaxed text-text/75">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3">
            <span aria-hidden="true" className="font-mono text-phos">
              &gt;
            </span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech used">
        {project.tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <ExternalLink size={16} aria-hidden="true" />
            Open live demo
          </a>
        )}
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <FaGithub size={16} aria-hidden="true" />
          Source on GitHub
        </a>
      </div>
    </article>
  );
}

function ProjectsVol() {
  const [params, setParams] = useSearchParams();
  const filter = PROJECT_FILTERS.includes(params.get("f")) ? params.get("f") : "All";
  const list = useMemo(() => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)), [filter]);
  const found = list.findIndex((p) => slug(p.title) === params.get("p"));
  const index = found === -1 ? 0 : found;
  const project = list[index];

  const update = (next) => {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => (v ? p.set(k, v) : p.delete(k)));
    setParams(p, { replace: true });
  };

  const show = (i) => {
    const next = list[(i + list.length) % list.length];
    update({ p: slug(next.title) });
    const line = BOT_LINES.projects[next.title];
    if (line) botStore.say(line);
  };

  const pickFilter = (f) => {
    const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
    update({ f: f === "All" ? null : f, p: null });
    botStore.say(BOT_LINES.filter(count, f));
  };

  // Arrow keys flip through the current filter, unless focus is in the filter bar.
  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.("[data-filters]")) return;
      if (e.key === "ArrowRight") show(index + 1);
      if (e.key === "ArrowLeft") show(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-40 pt-10 sm:px-6 md:pb-24">
      <header>
        <h1 className="glow font-pixel text-5xl text-bright md:text-6xl">Projects</h1>
        <p className="mt-3 text-sm text-muted">
          <span className="text-phos">$</span> mount projects.vol
          <span className="ml-3 text-text/70">{PROJECTS.length} builds</span>
        </p>
      </header>

      <div
        data-filters
        role="group"
        aria-label="Filter projects"
        className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={f === filter}
            onClick={() => pickFilter(f)}
            className={`btn shrink-0 py-1.5 text-[13px] ${
              f === filter ? "border-phos bg-phos/10 text-bright" : "border-line text-muted hover:border-phos/60 hover:text-text"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav aria-label="Projects in this filter" className="order-2 md:order-1">
          <ol className="border-t border-line md:sticky md:top-28">
            {list.map((p, i) => {
              const on = i === index;
              return (
                <li key={p.title} className="border-b border-line">
                  <button
                    type="button"
                    aria-current={on ? "true" : undefined}
                    onClick={() => show(i)}
                    className={`flex w-full items-baseline gap-3 px-2 py-2.5 text-left text-[13px] transition-colors ${
                      on ? "bg-raised text-bright" : "text-text/80 hover:bg-surface hover:text-bright"
                    }`}
                  >
                    <span className={on ? "text-phos" : "text-muted"}>{pad(i + 1)}</span>
                    <span className="min-w-0 flex-1">{p.title}</span>
                    {p.featured && <span className="text-[11px] text-violet">featured</span>}
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <section aria-label="Selected project" className="order-1 min-w-0 md:order-2">
          <Viewer key={project.title} project={project} />
          <div className="mt-8 flex items-center gap-3 border-t border-line pt-4 text-sm">
            <button type="button" onClick={() => show(index - 1)} className="btn-ghost px-3" aria-label="Previous project">
              <ChevronLeft size={16} aria-hidden="true" />
              Prev
            </button>
            <span className="text-muted">
              <span className="text-bright">{pad(index + 1)}</span> / {pad(list.length)}
            </span>
            <button type="button" onClick={() => show(index + 1)} className="btn-ghost px-3" aria-label="Next project">
              Next
              <ChevronRight size={16} aria-hidden="true" />
            </button>
            <span className="ml-auto hidden text-xs text-muted md:inline">← → to flip</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectsVol;
