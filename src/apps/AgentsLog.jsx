/* eslint-disable react/prop-types */
import { FileText } from "lucide-react";
import { useRef, useState } from "react";
import { botStore } from "../bot/botStore";
import { sound } from "../os/sound";
import { RESUME_URL } from "../constants";
import { COMMITS, LANES } from "../constants/gitlog";

const ROW = 44;
const GRAPH_W = 60;
const LAST = COMMITS.length - 1;
const laneX = (lane) => 12 + lane * 16;

// Where each side branch merges back (its top) and forks off main (its bottom).
const SPANS = LANES.map((_, lane) => ({
  top: COMMITS.findIndex((c) => c.merge === lane),
  bottom: COMMITS.findLastIndex((c) => c.lane === lane),
}));

// Lanes that carry on below row `r`, used to continue the graph past an
// expanded commit on small screens.
const continuing = (r) =>
  LANES.map((_, lane) => (lane === 0 ? r < LAST : SPANS[lane].top <= r && r < SPANS[lane].bottom));

// Stable short hash from the message, so links and screenshots don't shift.
function shortHash(text) {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) h = Math.imul(h ^ text.charCodeAt(i), 0x01000193);
  return (h >>> 0).toString(16).padStart(8, "0").slice(0, 7);
}

const HASHES = COMMITS.map((c) => shortHash(c.msg));

function GraphCell({ r, selected }) {
  const commit = COMMITS[r];
  const H = ROW;
  const x0 = laneX(0);
  const paths = [];

  paths.push(<line key="main" x1={x0} x2={x0} y1={r === 0 ? H / 2 : 0} y2={r === LAST ? H / 2 : H} stroke={LANES[0].color} />);

  for (let lane = 1; lane < LANES.length; lane += 1) {
    const { top, bottom } = SPANS[lane];
    const x = laneX(lane);
    const stroke = LANES[lane].color;
    if (r === top) {
      paths.push(<path key={lane} d={`M${x} ${H} C${x} ${H * 0.6} ${x0} ${H * 0.75} ${x0} ${H / 2}`} stroke={stroke} fill="none" />);
    } else if (r > top && r < bottom) {
      paths.push(<line key={lane} x1={x} x2={x} y1={0} y2={H} stroke={stroke} />);
    } else if (r === bottom) {
      paths.push(
        <path key={lane} d={`M${x} 0 L${x} ${H / 2} C${x} ${H * 0.8} ${x0} ${H * 0.75} ${x0} ${H}`} stroke={stroke} fill="none" />
      );
    }
  }

  const cx = laneX(commit.lane);
  const color = LANES[commit.lane].color;
  return (
    <svg width={GRAPH_W} height={H} viewBox={`0 0 ${GRAPH_W} ${H}`} aria-hidden="true" className="shrink-0">
      <g strokeWidth="1.5" strokeLinecap="round">{paths}</g>
      {selected && <circle cx={cx} cy={H / 2} r="8" fill="none" stroke={color} strokeOpacity="0.5" />}
      {commit.merge ? (
        <circle cx={cx} cy={H / 2} r="4.5" fill="#070B14" stroke={color} strokeWidth="2" />
      ) : (
        <circle cx={cx} cy={H / 2} r="4" fill={color} />
      )}
    </svg>
  );
}

function Refs({ refs }) {
  if (!refs) return null;
  return refs.map((ref) => (
    <span
      key={ref}
      className={`mr-2 shrink-0 border px-1.5 text-[11px] ${
        ref.startsWith("HEAD") ? "border-phos/70 text-phos" : "border-violet/60 text-violet"
      }`}
    >
      {ref}
    </span>
  ));
}

// `git show` for one commit.
function CommitDetail({ r }) {
  const c = COMMITS[r];
  return (
    <div className="text-sm">
      <p className="text-[13px]">
        <span className="text-muted">commit </span>
        <span className="text-phos">{HASHES[r]}</span>
        <span className="ml-2 text-muted">on {LANES[c.lane].name}</span>
      </p>
      <dl className="mt-1 grid grid-cols-[4.5rem_1fr] text-[13px]">
        <dt className="text-muted">Author</dt>
        <dd className="text-text">
          Sagar Rajak <span className="text-muted">at</span> {c.org}
        </dd>
        <dt className="text-muted">Role</dt>
        <dd className="text-text">{c.role}</dd>
        <dt className="text-muted">Date</dt>
        <dd className="text-text">{c.date}</dd>
      </dl>
      <div className="mt-4 border-l border-phos/30 pl-4">
        <h2 className="font-mono text-base text-bright">{c.title ?? c.msg}</h2>
        <p className="mt-2 max-w-prose font-sans text-[15px] leading-relaxed text-text/85">{c.body}</p>
      </div>
      {c.tech && (
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech used">
          {c.tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AgentsLog() {
  const [sel, setSel] = useState(0);
  const buttons = useRef([]);

  const select = (r, focus = false) => {
    const next = Math.max(0, Math.min(LAST, r));
    setSel(next);
    sound.play("select");
    if (focus) buttons.current[next]?.focus();
    const line = COMMITS[next].bot;
    if (line) botStore.say(line);
  };

  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, j: 1, ArrowUp: -1, k: -1 }[e.key];
    if (step) {
      e.preventDefault();
      select(sel + step, true);
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault();
      select(e.key === "Home" ? 0 : LAST, true);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-40 pt-10 sm:px-6 md:pb-24">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="glow font-pixel text-5xl text-bright md:text-6xl">Experience</h1>
          <p className="mt-3 text-sm text-muted">
            <span className="text-phos">$</span> git log --graph --all
          </p>
        </div>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <FileText size={16} aria-hidden="true" />
          Résumé (PDF)
        </a>
      </header>

      <p className="mt-6 max-w-2xl font-sans text-[15px] leading-relaxed text-text/80">
        My career as a commit history. Main is the career line; side jobs branched off and merged back. Pick a commit to
        read it, or use the arrow keys.
      </p>

      <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,1fr)_380px]">
        <ol aria-label="Career commits, newest first" onKeyDown={onKeyDown} className="border-y border-line">
          {COMMITS.map((c, r) => {
            const on = r === sel;
            return (
              <li key={HASHES[r]}>
                <button
                  ref={(el) => {
                    buttons.current[r] = el;
                  }}
                  type="button"
                  aria-current={on ? "true" : undefined}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(r)}
                  className={`flex h-11 w-full items-center pr-3 text-left text-[13px] transition-colors ${
                    on ? "bg-raised text-bright" : "text-text/85 hover:bg-surface hover:text-bright"
                  }`}
                >
                  <GraphCell r={r} selected={on} />
                  <span className={`mr-3 shrink-0 ${on ? "text-phos" : "text-muted"}`}>{HASHES[r]}</span>
                  <Refs refs={c.refs} />
                  <span className="min-w-0 truncate">{c.msg}</span>
                  <span className="ml-auto hidden shrink-0 pl-4 text-muted sm:inline">{c.date}</span>
                </button>

                {/* Small screens read the commit in place; the graph keeps running beside it. */}
                {on && (
                  <div className="relative py-4 pr-3 md:hidden" style={{ paddingLeft: GRAPH_W + 4 }}>
                    {continuing(r).map(
                      (keep, lane) =>
                        keep && (
                          <span
                            key={lane}
                            aria-hidden="true"
                            className="absolute inset-y-0 w-[1.5px]"
                            style={{ left: laneX(lane) - 0.75, background: LANES[lane].color }}
                          />
                        )
                    )}
                    <CommitDetail r={r} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <aside aria-live="polite" className="hidden md:block">
          <div className="sticky top-28 border border-line bg-surface p-5">
            <CommitDetail r={sel} />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default AgentsLog;
