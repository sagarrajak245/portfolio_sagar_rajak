/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import useReducedMotion from "../ui/useReducedMotion";

const LINES = [
  { status: "OK", label: "orchestrator", value: "6 agents online" },
  { status: "OK", label: "redis-streams.drv", value: "consumers ready" },
  { status: "OK", label: "dlq.sys", value: "0 messages lost" },
  { status: "OK", label: "voice.ai (stt/tts)", value: "ready" },
  { status: "OK", label: "pytorch.ko", value: "loaded" },
  { status: "!!", label: "chai.sys", value: "running low" },
  { status: "..", label: "mounting apps", value: "4 / 4" },
];

const STEP_MS = 190;

function Boot({ onEnter }) {
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? LINES.length : 0);
  const done = shown >= LINES.length;

  useEffect(() => {
    if (done) return undefined;
    const t = setTimeout(() => setShown((n) => n + 1), STEP_MS);
    return () => clearTimeout(t);
  }, [shown, done]);

  // Any key or tap enters, even mid-boot.
  useEffect(() => {
    const enter = (e) => {
      if (e.key === "Tab") return;
      onEnter();
    };
    window.addEventListener("keydown", enter);
    return () => window.removeEventListener("keydown", enter);
  }, [onEnter]);

  const progress = Math.round((shown / LINES.length) * 100);

  return (
    <div
      className="fixed inset-0 z-40 flex cursor-pointer items-center justify-center bg-ink px-4"
      onClick={onEnter}
      role="presentation"
    >
      <div className="w-full max-w-xl">
        <div className="border border-phos/70 bg-surface/60 px-6 py-7 text-center shadow-[6px_6px_0_0_rgba(167,139,250,0.55)]">
          <p className="glow font-pixel text-5xl font-semibold tracking-wide text-bright sm:text-6xl">SAGAR/OS</p>
          <p className="mt-3 text-xs tracking-[0.2em] text-phos/80">version 26.1 · Mumbai, IN</p>
          <div className="mt-6 flex h-2.5 gap-1" aria-hidden="true">
            {["bg-violet/80", "bg-violet", "bg-signal/70", "bg-signal", "bg-phos", "bg-bright"].map((c, i) => (
              <span key={c} className={`flex-1 ${progress >= (i + 1) * 16 ? c : "bg-line"}`} />
            ))}
          </div>
        </div>

        <div
          className="mt-5 border border-phos/40 px-5 py-4 text-[13px] leading-7 sm:text-sm"
          role="status"
          aria-label="System boot log"
        >
          {LINES.map((line, i) => (
            <p key={line.label} className={`flex items-baseline ${i < shown ? "" : "invisible"}`}>
              <span className={line.status === "!!" ? "text-violet" : "text-phos"}>[ {line.status} ]</span>
              <span className="ml-2 text-text">{line.label}</span>
              <span className="leader" aria-hidden="true" />
              <span className={line.status === "!!" ? "text-violet" : "text-phos/90"}>{line.value}</span>
            </p>
          ))}
        </div>

        <button
          type="button"
          onClick={onEnter}
          className={`mx-auto mt-6 block text-sm tracking-[0.18em] text-phos ${done ? "animate-blink" : "opacity-0"}`}
        >
          ▮ press any key to enter ▮
        </button>
      </div>
    </div>
  );
}

export default Boot;
