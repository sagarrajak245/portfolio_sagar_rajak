/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { botStore } from "../bot/botStore";
import { HERO } from "../constants";
import { APPS } from "./apps";
import PixelPortrait from "./PixelPortrait";
import { sound } from "./sound";

const CORNER = {
  tl: "md:left-10 md:top-20 md:text-left",
  tr: "md:right-10 md:top-20 md:text-right",
  bl: "md:bottom-10 md:left-10 md:text-left",
  br: "md:bottom-10 md:right-10 md:text-right",
};

function AppIcon({ app }) {
  const focus = (id) => botStore.focus(id);
  return (
    <Link
      to={app.path}
      data-app={app.id}
      onMouseEnter={() => {
        focus(app.id);
        sound.play("hover");
      }}
      onFocus={() => focus(app.id)}
      onMouseLeave={() => focus(null)}
      onBlur={() => focus(null)}
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

function Desktop() {
  const from = useLocation().state?.from;

  useEffect(() => {
    document.title = `${HERO.name} · ${HERO.role}`;
    return () => botStore.focus(null);
  }, []);

  // After Esc out of an app, keyboard focus lands back on that app's icon.
  useEffect(() => {
    if (from) document.querySelector(`[data-app="${from}"]`)?.focus({ preventScroll: true });
  }, [from]);

  return (
    <main id="main" className="relative flex min-h-[100svh] flex-col px-4 pb-8 pt-20 md:block md:px-0 md:pb-0 md:pt-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 48%, rgba(92,225,230,0.14), transparent 45%), radial-gradient(rgba(127,243,247,0.10) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 22px 22px",
        }}
      />

      <PixelPortrait />

      <section className="relative flex flex-col items-center text-center md:absolute md:inset-0 md:justify-center">
        <p className="text-xs tracking-[0.3em] text-phos/80 md:text-sm [text-shadow:0_0_6px_#070B14,0_0_2px_#070B14]">
          {HERO.role.toLowerCase()}
        </p>
        <h1 className="glow mt-3 font-pixel text-[clamp(3rem,11vw,9.5rem)] font-semibold leading-[0.9] text-bright">
          {HERO.name}
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-text/80 [text-shadow:0_0_6px_#070B14,0_0_2px_#070B14]">
          {HERO.proof}
        </p>
        {/* The guide bot (src/bot) measures this spot and stands on it. */}
        <div id="bot-anchor" className="h-36 w-full md:h-0 md:w-0" />
      </section>

      <nav aria-label="Apps" className="relative mt-4 grid grid-cols-2 gap-3 md:static md:mt-0 md:block">
        {APPS.map((app) => (
          <AppIcon key={app.id} app={app} />
        ))}
      </nav>
    </main>
  );
}

export default Desktop;
