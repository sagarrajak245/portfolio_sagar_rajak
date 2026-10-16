import { useSyncExternalStore } from "react";

// Tiny synthesized blips, so the site ships no audio files. Browsers only
// allow audio after a user gesture, so the context is created on first use
// from a click or key handler and stays silent until then.
const KEY = "sagaros.sound";

// Each cue is a short run of square/triangle notes: [frequency Hz, start s, length s].
const CUES = {
  hover: { wave: "triangle", gain: 0.035, notes: [[1320, 0, 0.03]] },
  select: { wave: "square", gain: 0.03, notes: [[880, 0, 0.04]] },
  open: { wave: "square", gain: 0.035, notes: [[660, 0, 0.05], [990, 0.05, 0.07]] },
  close: { wave: "square", gain: 0.035, notes: [[990, 0, 0.05], [660, 0.05, 0.07]] },
  boot: { wave: "triangle", gain: 0.05, notes: [[440, 0, 0.08], [660, 0.08, 0.08], [880, 0.16, 0.14]] },
  toggle: { wave: "triangle", gain: 0.04, notes: [[1040, 0, 0.05]] },
};

function initialEnabled() {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) return saved === "1";
  } catch {
    /* storage blocked: fall through to the default */
  }
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let enabled = initialEnabled();
let ctx = null;
const listeners = new Set();

function context() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

export const sound = {
  get: () => enabled,
  subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  },
  toggle() {
    enabled = !enabled;
    try {
      localStorage.setItem(KEY, enabled ? "1" : "0");
    } catch {
      /* not remembered this time */
    }
    listeners.forEach((fn) => fn());
    if (enabled) sound.play("toggle");
  },
  play(name) {
    const cue = CUES[name];
    if (!enabled || !cue) return;
    // Hover never unlocks audio on its own; it only plays once a click or key has.
    if (name === "hover" && !ctx) return;
    const ac = context();
    if (!ac) return;
    const t0 = ac.currentTime + 0.005;
    cue.notes.forEach(([freq, start, len]) => {
      const osc = ac.createOscillator();
      const amp = ac.createGain();
      osc.type = cue.wave;
      osc.frequency.value = freq;
      amp.gain.setValueAtTime(cue.gain, t0 + start);
      amp.gain.exponentialRampToValueAtTime(0.0001, t0 + start + len);
      osc.connect(amp).connect(ac.destination);
      osc.start(t0 + start);
      osc.stop(t0 + start + len + 0.02);
    });
  },
};

export function useSoundEnabled() {
  return useSyncExternalStore(sound.subscribe, sound.get);
}
