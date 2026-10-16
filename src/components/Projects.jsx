/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { PROJECT_FILTERS, PROJECTS } from "../constants";
import ProjectCover from "../ui/ProjectCover";
import SectionHeading from "../ui/SectionHeading";

const MAX_CHIPS = 6;

function Cover({ project }) {
  if (project.cover) {
    return <ProjectCover variant={project.cover} title={project.title} />;
  }
  // Screenshots come in every aspect ratio. Show the whole image, and fill
  // the frame behind it with a blurred copy so nothing is cropped or boxed.
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface">
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-125 object-cover opacity-50 blur-2xl"
      />
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain p-3 drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

function Links({ project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost px-4 py-2"
          aria-label={`${project.title} source code on GitHub`}
        >
          <FaGithub size={15} aria-hidden="true" />
          Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost px-4 py-2"
          aria-label={`Live demo of ${project.title}`}
        >
          <ExternalLink size={15} aria-hidden="true" />
          Live demo
        </a>
      )}
    </div>
  );
}

function Chips({ tech, limit = MAX_CHIPS }) {
  const shown = tech.slice(0, limit);
  const rest = tech.length - shown.length;
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech used">
      {shown.map((t) => (
        <li key={t} className="chip">
          {t}
        </li>
      ))}
      {rest > 0 && <li className="chip">+{rest}</li>}
    </ul>
  );
}

function FeaturedCard({ project }) {
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[1.1fr_1fr]">
      <div className="aspect-[16/10] border-b border-line lg:aspect-auto lg:border-b-0 lg:border-r">
        <Cover project={project} />
      </div>
      <div className="flex flex-col gap-5 p-6 sm:p-8">
        <p className="text-sm text-signal">Featured project · {project.category}</p>
        <h3 className="-mt-2 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="text-lg leading-relaxed text-text/85">{project.summary}</p>
        <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
              {h}
            </li>
          ))}
        </ul>
        <Chips tech={project.tech} limit={8} />
        <div className="mt-auto pt-2">
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-[#2E3A5C]">
      <div className="aspect-[16/10] border-b border-line">
        <Cover project={project} />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs text-muted">{project.category}</p>
          <h3 className="mt-1 text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-text/80">{project.summary}</p>
        <ul className="space-y-2 text-sm leading-relaxed text-muted">
          {project.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal/70" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-4 pt-2">
          <Chips tech={project.tech} />
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);

  return (
    <div className="section">
      <SectionHeading title="Projects">
        Agents, backends and models I&apos;ve built outside work. Each one links to its source.
      </SectionHeading>

      <div role="tablist" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {PROJECT_FILTERS.map((f) => {
          const count = f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length;
          const selected = filter === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                selected
                  ? "border-signal bg-signal/10 text-white"
                  : "border-line text-muted hover:border-[#2E3A5C] hover:text-white"
              }`}
            >
              {f}
              <span className={`ml-2 text-xs ${selected ? "text-signal" : "text-muted/70"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className={p.featured ? "md:col-span-2 lg:col-span-3" : ""}
            >
              {p.featured ? <FeaturedCard project={p} /> : <ProjectCard project={p} />}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Projects;
