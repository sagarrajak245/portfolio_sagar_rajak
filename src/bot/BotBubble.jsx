/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const TYPE_MS = 16;

// Speech bubble that types its line out. Screen readers get the full line
// once through the live region; the typed copy is visual only.
function BotBubble({ line, open, style, reducedMotion }) {
  const [typed, setTyped] = useState(reducedMotion ? line.length : 0);

  useEffect(() => {
    setTyped(reducedMotion ? line.length : 0);
  }, [line, reducedMotion]);

  useEffect(() => {
    if (!open || typed >= line.length) return undefined;
    const t = setTimeout(() => setTyped((n) => n + 2), TYPE_MS);
    return () => clearTimeout(t);
  }, [open, typed, line]);

  return (
    <div
      className={`absolute w-max border border-phos/60 bg-surface/95 px-3 py-2 font-mono text-[12px] leading-snug text-text shadow-[4px_4px_0_0_rgba(167,139,250,0.45)] transition-opacity duration-200 ${
        open ? "opacity-100" : "opacity-0"
      }`}
      style={style}
    >
      <p className="sr-only" aria-live="polite">
        {open ? line : ""}
      </p>
      {/* The invisible full line sizes the box so it doesn't grow while typing. */}
      <p aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1">{line}</span>
        <span className="col-start-1 row-start-1">
          {line.slice(0, typed)}
          {typed < line.length && <span className="text-phos">▮</span>}
        </span>
      </p>
    </div>
  );
}

export default BotBubble;
