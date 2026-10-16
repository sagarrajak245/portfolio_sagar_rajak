import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useReducedMotion from "./useReducedMotion";

// An orchestrator dispatching work to the agents I build at Aiviue,
// with each dispatch shown as a message on a Redis Stream.
const HUB = { x: 260, y: 190 };

const AGENTS = [
  { id: "sdr", label: "SDR agent", sub: "LinkedIn, email, chat", x: 100, y: 62 },
  { id: "screening", label: "Screening agent", sub: "score + structure", x: 420, y: 62 },
  { id: "control", label: "Control plane", sub: "6 agents, multi-tenant", x: 100, y: 318 },
  { id: "voice", label: "Voice agent", sub: "STT, LangGraph, TTS", x: 420, y: 318 },
];

const EVENTS = [
  { agent: "sdr", stream: "stream:sdr", verb: "XADD", body: "lead.enriched" },
  { agent: "screening", stream: "stream:screening", verb: "XADD", body: "candidate.scored" },
  { agent: "voice", stream: "stream:voice", verb: "XADD", body: "call.transcribed" },
  { agent: "control", stream: "stream:control", verb: "XADD", body: "spend.anomaly" },
  { agent: "sdr", stream: "stream:sdr", verb: "XADD", body: "reply.classified" },
  { agent: "screening", stream: "stream:screening", verb: "XADD", body: "profile.structured" },
  { agent: "control", stream: "stream:control", verb: "XADD", body: "remediation.applied" },
  { agent: "voice", stream: "stream:voice", verb: "XADD", body: "session.closed" },
];

const NODE_W = 150;
const NODE_H = 52;
const LOG_LINES = 4;
const BASE_ID = 1760598000000;

function entryId(tick) {
  return `${BASE_ID + tick * 137}-0`;
}

export default function AgentGraph() {
  const reduced = useReducedMotion();
  const [tick, setTick] = useState(LOG_LINES);

  useEffect(() => {
    if (reduced) return undefined;
    const t = setInterval(() => setTick((n) => n + 1), 1700);
    return () => clearInterval(t);
  }, [reduced]);

  const current = EVENTS[tick % EVENTS.length];
  const target = AGENTS.find((a) => a.id === current.agent);
  const log = Array.from({ length: LOG_LINES }, (_, i) => {
    const n = tick - (LOG_LINES - 1 - i);
    return { n, ...EVENTS[n % EVENTS.length] };
  });

  return (
    <figure
      className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur-sm"
      aria-label="Diagram: an orchestrator dispatching events over Redis Streams to SDR, screening, voice and control-plane agents"
    >
      <svg viewBox="0 0 520 380" className="block w-full" role="img" aria-hidden="true">
        <defs>
          <pattern id="ag-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#1F2740" />
          </pattern>
          <radialGradient id="ag-hub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="520" height="380" fill="url(#ag-grid)" />
        <circle cx={HUB.x} cy={HUB.y} r="90" fill="url(#ag-hub)" />

        {AGENTS.map((a) => {
          const active = a.id === current.agent;
          return (
            <g key={a.id}>
              <line
                x1={HUB.x}
                y1={HUB.y}
                x2={a.x}
                y2={a.y}
                stroke={active ? "#5CE1E6" : "#2A3452"}
                strokeWidth={active ? 1.6 : 1.2}
                strokeDasharray="3 5"
                style={{ transition: "stroke 300ms" }}
              />
              {!reduced && (
                <circle r="2" fill="#5CE1E6" opacity="0.35">
                  <animateMotion
                    dur={`${3.2 + (a.x + a.y) / 400}s`}
                    repeatCount="indefinite"
                    path={`M${HUB.x},${HUB.y} L${a.x},${a.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {!reduced && (
          <motion.circle
            key={tick}
            r="5"
            fill="#5CE1E6"
            initial={{ cx: HUB.x, cy: HUB.y, opacity: 1 }}
            animate={{ cx: target.x, cy: target.y, opacity: [1, 1, 0] }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 0 6px #5CE1E6)" }}
          />
        )}

        {AGENTS.map((a) => {
          const active = a.id === current.agent;
          return (
            <g key={a.id} transform={`translate(${a.x - NODE_W / 2} ${a.y - NODE_H / 2})`}>
              <rect
                width={NODE_W}
                height={NODE_H}
                rx="10"
                fill="#121829"
                stroke={active ? "#5CE1E6" : "#2A3452"}
                strokeWidth="1.2"
                style={{ transition: "stroke 300ms" }}
              />
              <circle cx="16" cy="19" r="3.5" fill={active ? "#5CE1E6" : "#3A4566"} style={{ transition: "fill 300ms" }} />
              <text x="28" y="23" fill="#E7E9F2" fontSize="13.5" fontFamily="Inter, sans-serif" fontWeight="600">
                {a.label}
              </text>
              <text x="16" y="40" fill="#8B92AB" fontSize="11" fontFamily="Inter, sans-serif">
                {a.sub}
              </text>
            </g>
          );
        })}

        <g transform={`translate(${HUB.x - 70} ${HUB.y - 30})`}>
          <rect width="140" height="60" rx="30" fill="#161C33" stroke="#A78BFA" strokeWidth="1.4" />
          <text x="70" y="27" textAnchor="middle" fill="#E7E9F2" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="600">
            Orchestrator
          </text>
          <text x="70" y="44" textAnchor="middle" fill="#A78BFA" fontSize="11" fontFamily='"JetBrains Mono", monospace'>
            redis streams
          </text>
        </g>
      </svg>

      <figcaption className="border-t border-line bg-ink/60 px-4 py-3 font-mono text-[11px] leading-6 sm:text-xs">
        {log.map((e, i) => {
          const latest = i === log.length - 1;
          return (
            <div
              key={e.n}
              className={`flex gap-3 whitespace-nowrap ${latest ? "text-text" : "text-muted/70"}`}
            >
              <span className="hidden text-muted/60 sm:inline">{entryId(e.n)}</span>
              <span className={latest ? "text-signal" : ""}>{e.stream}</span>
              <span>{e.verb}</span>
              <span className="truncate">{e.body}</span>
            </div>
          );
        })}
      </figcaption>
    </figure>
  );
}
