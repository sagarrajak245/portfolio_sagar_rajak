/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HERO } from "../constants";
import { APPS } from "./apps";

const CORNER = {
  tl: "md:left-10 md:top-20 md:text-left",
  tr: "md:right-10 md:top-20 md:text-right",
  bl: "md:bottom-10 md:left-10 md:text-left",
  br: "md:bottom-10 md:right-10 md:text-right",
};

function AppIcon({ app, onFocusApp }) {
  return (
    <Link
      to={app.path}
      onMouseEnter={() => onFocusApp?.(app.id)}
      onFocus={() => onFocusApp?.(app.id)}
      onMouseLeave={() => onFocusApp?.(null)}
      onBlur={() => onFocusApp?.(null)}
      className={`group block border border-line bg-surface/70 p-4 transition-colors hover:border-phos/70 md:absolute md:border-0 md:bg-transparent md:p-2 ${CORNER[app.corner]}`}
    >
      <span className="block text-xs text-phos/60 group-hover:text-phos">{app.file}</span>
      <span className="glow mt-1 block font-pixel text-2xl text-bright md:text-4xl lg:text-5xl">{app.title}</span>
      <span className="mt-1 block text-xs text-muted transition-opacity md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
        {app.blurb}
      </span>
    </Link>
  );
}

function Desktop({ onFocusApp }) {
  useEffect(() => {
    document.title = `${HERO.name} · ${HERO.role}`;
  }, []);

  return (
    <main
      id="main"
      className="relative flex min-h-[100svh] flex-col px-4 pb-8 pt-20 md:block md:px-0 md:pb-0 md:pt-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 48%, rgba(92,225,230,0.14), transparent 45%), radial-gradient(rgba(127,243,247,0.10) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 22px 22px",
        }}
      />

      <section className="relative flex flex-col items-center text-center md:absolute md:inset-0 md:justify-center">
        <p className="text-xs tracking-[0.3em] text-phos/80 md:text-sm">{HERO.role.toLowerCase()}</p>
        <h1 className="glow mt-3 font-pixel text-[clamp(3rem,11vw,9.5rem)] font-semibold leading-[0.9] text-bright">
          {HERO.name}
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-text/80">{HERO.proof}</p>
        {/* The 3D bot mounts beside the name in phase 2. */}
        <div id="bot-anchor" className="h-0 w-0" />
      </section>

      <nav aria-label="Apps" className="relative mt-10 grid grid-cols-2 gap-3 md:static md:mt-0 md:block">
        {APPS.map((app) => (
          <AppIcon key={app.id} app={app} onFocusApp={onFocusApp} />
        ))}
      </nav>
    </main>
  );
}

export default Desktop;
