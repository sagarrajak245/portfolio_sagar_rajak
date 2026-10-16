import { AIVIUE, EXPERIENCES } from "./index";

// Career as a `git log --graph`, newest first. Lane 0 is main (the career
// line); side branches are jobs that ran alongside it and merged back.
// `bot` is what the guide says when a commit is selected.
const [KINZY, COLEGION] = EXPERIENCES;
const [SDR, SCREENING, PLATFORM, CONTROL, EVENTS, VOICE] = AIVIUE.contributions;

export const LANES = [
  { name: "main", color: "#7FF3F7" },
  { name: "kinzy-club", color: "#A78BFA" },
  { name: "ai-colegion", color: "#8FA3C7" },
];

const aiviue = { org: AIVIUE.company, role: "Agentic AI Engineer, founding team", tech: AIVIUE.tech };
const kinzy = { org: "Kinzy Club", role: KINZY.role, date: KINZY.period, tech: KINZY.tech };
const colegion = { org: COLEGION.company, role: COLEGION.role, tech: COLEGION.tech };

export const COMMITS = [
  {
    lane: 0,
    refs: ["HEAD -> main"],
    msg: "ship: MVP to Hitachi, Orange Antelopes and Tapplent",
    date: AIVIUE.period,
    ...aiviue,
    body: AIVIUE.lead,
    bot: "This is HEAD. The MVP he built is what three paying clients run on.",
  },
  {
    lane: 0,
    merge: 2,
    msg: "merge: ai-colegion into main",
    date: "May 2026",
    ...colegion,
    body: "Wrapped up nearly three years as Technical Officer. The teaching fed straight back into how he explains systems.",
  },
  {
    lane: 0,
    refs: ["tag: v1.0"],
    msg: "release: B.E. in AI & Data Science",
    date: "Jan 2026",
    org: "VESIT, Mumbai",
    role: "Graduated",
    body: "Graduated with a CGPA of 9.14 out of 10, while already working full time on the founding team at Aiviue.",
    tech: ["Deep learning", "Data science", "Distributed systems"],
    bot: "He shipped production agents before his degree was even done.",
  },
  { lane: 0, msg: "feat(voice): in-house multilingual voice AI", date: "2026", ...aiviue, title: VOICE.title, body: VOICE.body, bot: "The voice stack replaced a third-party vendor. Calls now run on his own STT, TTS and LangGraph." },
  { lane: 0, msg: "feat(core): event-driven backend on Redis Streams", date: "2026", ...aiviue, title: EVENTS.title, body: EVENTS.body, bot: "Idempotent consumers and a dead-letter queue. Zero lost messages so far." },
  { lane: 0, msg: "feat(ops): six-agent control plane", date: "2026", ...aiviue, title: CONTROL.title, body: CONTROL.body, bot: "Six agents watching spend, profit and anomalies across tenants." },
  { lane: 0, msg: "feat(platform): orchestrator and domain agents", date: "2025", ...aiviue, title: PLATFORM.title, body: PLATFORM.body, bot: "One orchestrator, many specialists. That's roughly how I work too." },
  { lane: 0, msg: "feat(screening): candidate screening agents", date: "2025", ...aiviue, title: SCREENING.title, body: SCREENING.body },
  { lane: 0, msg: "feat(sdr): autonomous sales development agents", date: "2025", ...aiviue, title: SDR.title, body: SDR.body, bot: "The SDR agents cut manual marketing effort by 60%." },
  {
    lane: 0,
    msg: "join: Aiviue founding team",
    date: "Nov 2025",
    ...aiviue,
    body: "Joined Aiviue, an AI video-led hiring platform, as its agentic AI engineer and went on to write about 90% of the MVP.",
  },
  {
    lane: 0,
    merge: 1,
    msg: "merge: kinzy-club into main",
    ...kinzy,
    date: "Feb 2025",
    body: `${KINZY.role} at Kinzy Club, a subsidiary of Redscope Inc. Four months of making a Spring Boot backend faster and safer.`,
  },
  {
    lane: 0,
    msg: "win: Smart India Hackathon 2024 finalist",
    date: "Dec 2024",
    org: "Smart India Hackathon",
    role: "National finalist",
    body: "Built Drona, a learning platform with AI-generated content, personalised roadmaps and analytics, under the Smart Education theme.",
    tech: ["LLMs", "React", "Node.js"],
    bot: "Drona was an AI tutor. He's been building agents for a while.",
  },
  { lane: 1, msg: "feat(auth): JWT auth with MockMvc coverage", ...kinzy, body: KINZY.points[3] },
  { lane: 1, msg: "feat(jobs): run-once distributed jobs with ShedLock", ...kinzy, body: KINZY.points[2] },
  { lane: 1, msg: "feat(feed): Redis feed with partial indexing", ...kinzy, body: KINZY.points[1] },
  {
    lane: 1,
    msg: "perf(db): index 42 hot queries, 10 ms to 2 ms",
    ...kinzy,
    date: "Nov 2024",
    body: KINZY.points[0],
    bot: "42 queries went from 10 ms to 2 ms. He likes a good EXPLAIN plan.",
  },
  {
    lane: 0,
    msg: "contrib: GirlScript Summer of Code",
    date: "2024",
    org: "GirlScript Summer of Code",
    role: "Open-source contributor",
    body: "Contributed React and Node.js features and REST APIs to open-source projects.",
    tech: ["React", "Node.js", "REST"],
  },
  {
    lane: 2,
    msg: "teach: 350+ students in Flutter, ML and agents",
    ...colegion,
    date: "2023 – 2026",
    body: COLEGION.points[1],
    bot: "350 students. Some of them learned CrewAI from him.",
  },
  { lane: 2, msg: "lead: three MERN club projects", ...colegion, date: "Aug 2023", body: COLEGION.points[0] },
  {
    lane: 0,
    msg: "join: CSI VESIT as Jr. Technical Officer",
    date: "2023",
    org: "CSI VESIT",
    role: "Jr. Technical Officer",
    body: "Ran OpenCV and MERN workshops, and the Hidden Cypher, Sherlock and Watson events.",
    tech: ["OpenCV", "MERN"],
  },
  {
    lane: 0,
    msg: "init: B.E. in AI & Data Science",
    date: "2022",
    org: "VESIT, Mumbai",
    role: "Student",
    body: "Started the degree after scoring in the 97.25th percentile in MHT-CET.",
    tech: ["Python", "C / C++", "Maths"],
  },
];
