/* eslint-disable react/prop-types */
// Small architecture sketches for projects that don't have a good screenshot.
// Drawn with the same tokens as the hero agent graph.

const C = {
  ink: "#0B0F1C",
  surface: "#121829",
  node: "#161C33",
  line: "#2A3452",
  text: "#E7E9F2",
  muted: "#8B92AB",
  signal: "#5CE1E6",
  violet: "#A78BFA",
};

const SANS = "Inter, sans-serif";
const MONO = '"JetBrains Mono", monospace';

function Node({ x, y, w = 84, h = 30, label, accent = C.line, fill = C.node, size = 11 }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={accent} strokeWidth="1.2" />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fill={C.text} fontSize={size} fontFamily={SANS} fontWeight="500">
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, color = C.signal }) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const a = 5;
  const p1 = `${x2 - a * Math.cos(angle - 0.5)},${y2 - a * Math.sin(angle - 0.5)}`;
  const p2 = `${x2 - a * Math.cos(angle + 0.5)},${y2 - a * Math.sin(angle + 0.5)}`;
  return (
    <g stroke={color} strokeWidth="1.2" fill="none" opacity="0.8">
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray="3 3" />
      <polyline points={`${p1} ${x2},${y2} ${p2}`} />
    </g>
  );
}

function IntelliClaim() {
  return (
    <g>
      <g transform="translate(18 74)">
        <rect width="46" height="56" rx="5" fill={C.node} stroke={C.line} />
        {[14, 22, 30, 38].map((y) => (
          <line key={y} x1="9" x2={y === 38 ? 26 : 37} y1={y} y2={y} stroke={C.muted} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        ))}
        <text x="23" y="72" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily={SANS}>claim</text>
      </g>
      <Arrow x1={70} y1={102} x2={92} y2={102} />
      <Node x={96} y={44} w={92} label="Query agent" />
      <Node x={96} y={87} w={92} label="Retrieval agent" accent={C.violet} />
      <Node x={96} y={130} w={92} label="Decision agent" />
      <Arrow x1={142} y1={75} x2={142} y2={86} />
      <Arrow x1={142} y1={118} x2={142} y2={129} />
      <g transform="translate(206 84)">
        <ellipse cx="22" cy="6" rx="22" ry="6" fill={C.node} stroke={C.violet} />
        <path d="M0 6 v24 a22 6 0 0 0 44 0 v-24" fill={C.node} stroke={C.violet} />
        <text x="22" y="48" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily={SANS}>policy RAG</text>
      </g>
      <Arrow x1={204} y1={102} x2={190} y2={102} color={C.violet} />
      <Arrow x1={190} y1={145} x2={262} y2={145} />
      <g transform="translate(264 133)">
        <rect width="46" height="24" rx="12" fill={C.signal} opacity="0.15" stroke={C.signal} />
        <text x="23" y="16" textAnchor="middle" fill={C.signal} fontSize="10" fontFamily={SANS} fontWeight="600">approve</text>
      </g>
    </g>
  );
}

function Rag() {
  const docs = ["PDF", "CSV", "DOCX", "TXT"];
  return (
    <g>
      {docs.map((d, i) => (
        <g key={d} transform={`translate(20 ${36 + i * 34})`}>
          <rect width="48" height="26" rx="5" fill={C.node} stroke={C.line} />
          <text x="24" y="17" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily={MONO}>{d}</text>
        </g>
      ))}
      {docs.map((d, i) => (
        <Arrow key={d} x1={72} y1={49 + i * 34} x2={97} y2={100} color={C.muted} />
      ))}
      <g transform="translate(100 78)">
        <ellipse cx="30" cy="7" rx="30" ry="7" fill={C.node} stroke={C.violet} />
        <path d="M0 7 v30 a30 7 0 0 0 60 0 v-30" fill={C.node} stroke={C.violet} />
        <text x="30" y="32" textAnchor="middle" fill={C.text} fontSize="10" fontFamily={SANS}>vectors</text>
      </g>
      <Arrow x1={164} y1={100} x2={196} y2={100} />
      <Node x={200} y={40} w={100} label="Research" />
      <Node x={200} y={85} w={100} label="Answer" accent={C.signal} />
      <Node x={200} y={130} w={100} label="Critique" />
      <Arrow x1={250} y1={71} x2={250} y2={84} />
      <Arrow x1={250} y1={116} x2={250} y2={129} />
    </g>
  );
}

function Voice() {
  const bars = [10, 22, 38, 54, 30, 62, 44, 70, 36, 50, 26, 58, 40, 20, 46, 30, 14, 8];
  return (
    <g>
      <g transform="translate(24 100)">
        {bars.map((h, i) => (
          <rect key={i} x={i * 9} y={-h / 2} width="5" height={h} rx="2.5" fill={i < 9 ? C.signal : C.violet} opacity={0.35 + (h / 70) * 0.65} />
        ))}
      </g>
      <g transform="translate(196 52)">
        <rect width="104" height="36" rx="12" fill={C.node} stroke={C.line} />
        <text x="52" y="23" textAnchor="middle" fill={C.text} fontSize="14" fontFamily={SANS}>नमस्ते!</text>
      </g>
      <g transform="translate(196 112)">
        <rect width="104" height="36" rx="12" fill={C.signal} opacity="0.12" stroke={C.signal} />
        <text x="52" y="23" textAnchor="middle" fill={C.signal} fontSize="11" fontFamily={MONO}>STT → LLM → TTS</text>
      </g>
    </g>
  );
}

function CrewAI() {
  return (
    <g>
      {[
        { x: 22, label: "Researcher" },
        { x: 120, label: "Writer" },
        { x: 218, label: "Editor" },
      ].map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x + 40} cy="78" r="20" fill={C.node} stroke={i === 1 ? C.signal : C.violet} strokeWidth="1.4" />
          <circle cx={n.x + 40} cy="72" r="6" fill={i === 1 ? C.signal : C.violet} opacity="0.8" />
          <path d={`M${n.x + 29} ${88} a11 9 0 0 1 22 0`} fill={i === 1 ? C.signal : C.violet} opacity="0.8" />
          <text x={n.x + 40} y="122" textAnchor="middle" fill={C.text} fontSize="11" fontFamily={SANS} fontWeight="500">{n.label}</text>
          {i < 2 && <Arrow x1={n.x + 64} y1={78} x2={n.x + 114} y2={78} />}
        </g>
      ))}
      <g transform="translate(110 140)">
        <rect width="100" height="28" rx="6" fill={C.node} stroke={C.line} />
        {[10, 17].map((y) => (
          <line key={y} x1="10" x2={y === 17 ? 60 : 88} y1={y} y2={y} stroke={C.muted} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        ))}
      </g>
    </g>
  );
}

function Observability() {
  const pts = [8, 22, 16, 30, 26, 44, 36, 58, 40, 50, 64, 54, 70];
  const path = pts.map((v, i) => `${i === 0 ? "M" : "L"}${i * 16} ${80 - v}`).join(" ");
  return (
    <g>
      <g transform="translate(22 30)">
        <rect width="216" height="98" rx="8" fill={C.node} stroke={C.line} />
        <text x="12" y="18" fill={C.muted} fontSize="10" fontFamily={SANS}>p95 latency</text>
        <g transform="translate(12 10)">
          <path d={`${path} L192 88 L0 88 Z`} fill={C.signal} opacity="0.08" />
          <path d={path} fill="none" stroke={C.signal} strokeWidth="1.6" />
        </g>
      </g>
      {[
        { label: "metrics", c: C.signal },
        { label: "logs", c: C.violet },
        { label: "traces", c: C.text },
      ].map((p, i) => (
        <g key={p.label} transform={`translate(250 ${30 + i * 34})`}>
          <rect width="52" height="26" rx="6" fill={C.node} stroke={C.line} />
          <circle cx="11" cy="13" r="3" fill={p.c} />
          <text x="19" y="17" fill={C.text} fontSize="10" fontFamily={SANS}>{p.label}</text>
        </g>
      ))}
      <g transform="translate(22 140)">
        {Array.from({ length: 24 }, (_, i) => (
          <rect key={i} x={i * 11.5} y={30 - ((i * 7) % 26) - 4} width="7" height={((i * 7) % 26) + 4} rx="1.5" fill={C.violet} opacity="0.45" />
        ))}
      </g>
    </g>
  );
}

function MiniRedis() {
  const lines = [
    { p: ">", t: 'SET user:42 "sagar"', c: C.text },
    { p: "", t: "OK", c: C.signal },
    { p: ">", t: "EXPIRE user:42 60", c: C.text },
    { p: "", t: "(integer) 1", c: C.signal },
    { p: ">", t: "LPUSH queue job:7", c: C.text },
    { p: ">", t: "TTL user:42", c: C.text },
    { p: "", t: "(integer) 59", c: C.signal },
  ];
  return (
    <g>
      <g transform="translate(24 22)">
        <rect width="272" height="156" rx="10" fill={C.ink} stroke={C.line} />
        <rect width="272" height="22" rx="10" fill={C.node} />
        <rect y="12" width="272" height="10" fill={C.node} />
        {[14, 26, 38].map((x) => (
          <circle key={x} cx={x} cy="11" r="3.5" fill={C.line} />
        ))}
        <text x="136" y="15" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily={MONO}>mini-redis :6379</text>
        {lines.map((l, i) => (
          <text key={i} x="14" y={44 + i * 17} fill={l.c} fontSize="11" fontFamily={MONO}>
            <tspan fill={C.violet}>{l.p ? "> " : "  "}</tspan>
            {l.t}
          </text>
        ))}
      </g>
    </g>
  );
}

const VARIANTS = {
  intelliclaim: IntelliClaim,
  rag: Rag,
  voice: Voice,
  crewai: CrewAI,
  observability: Observability,
  miniredis: MiniRedis,
};

export default function ProjectCover({ variant, title }) {
  const Art = VARIANTS[variant];
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" role="img" aria-label={`Diagram of ${title}`}>
      <defs>
        <pattern id={`pc-grid-${variant}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="#1F2740" />
        </pattern>
        <radialGradient id={`pc-glow-${variant}`} cx="70%" cy="20%" r="80%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill={C.surface} />
      <rect width="320" height="200" fill={`url(#pc-grid-${variant})`} />
      <rect width="320" height="200" fill={`url(#pc-glow-${variant})`} />
      {Art && <Art />}
    </svg>
  );
}
