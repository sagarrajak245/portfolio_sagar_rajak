import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RESUME_URL, SOCIALS } from "../constants";
import { sound, useSoundEnabled } from "./sound";

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

const fmt = (d) =>
  `${d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric" })} · ${d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;

// S toggles sound anywhere, unless someone is typing.
function useSoundKey() {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() !== "s" || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target.closest?.("input, textarea, select, [contenteditable='true']")) return;
      sound.toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
}

function MenuBar() {
  const now = useClock();
  const soundOn = useSoundEnabled();
  useSoundKey();

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-11 items-stretch border-b border-phos/30 bg-ink/85 text-[13px] backdrop-blur-sm">
      <Link
        to="/"
        className="glow flex items-center border-r border-phos/30 px-4 font-pixel text-lg font-semibold text-bright"
        aria-label="S/OS desktop"
      >
        S/OS
      </Link>
      <nav aria-label="Quick links" className="flex items-center gap-1 px-2">
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="px-2 py-1 text-phos/80 hover:text-bright">
          resume.pdf
        </a>
        <a
          href={SOCIALS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden px-2 py-1 text-phos/80 hover:text-bright sm:block"
        >
          github
        </a>
        <a
          href={SOCIALS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden px-2 py-1 text-phos/80 hover:text-bright sm:block"
        >
          linkedin
        </a>
      </nav>
      <div className="ml-auto flex items-stretch">
        <p className="hidden items-center gap-2 border-l border-phos/30 px-4 text-phos/80 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-phos shadow-[0_0_8px_#7FF3F7]" aria-hidden="true" />
          online
        </p>
        <button
          type="button"
          onClick={sound.toggle}
          aria-pressed={soundOn}
          aria-label="Sound effects"
          title="Sound effects (S)"
          className="flex items-center gap-2 border-l border-phos/30 px-3 text-phos/80 hover:text-bright"
        >
          {soundOn ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
          <span className="hidden lg:inline">{soundOn ? "sound on" : "sound off"}</span>
        </button>
        <p className="flex items-center border-l border-phos/30 px-4 text-phos/80">
          <time dateTime={now.toISOString()}>{fmt(now)}</time>
        </p>
      </div>
    </header>
  );
}

export default MenuBar;
