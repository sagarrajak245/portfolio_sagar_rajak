// What the guide bot says. Desktop lines introduce an app; route tips cycle
// when the visitor clicks "next" on the docked bot.
export const BOT_LINES = {
  greet: "Hi, I'm Sagar's orchestrator agent. Pick an app and I'll walk you through it.",
  apps: {
    agents: "agents.log is his work history. At Aiviue he wrote about 90% of the MVP, me included.",
    projects: "projects.vol holds 13 builds: multi-agent systems, backends in C++ and FastAPI, and vision models.",
    profile: "profile.sys covers who he is, the stack he reaches for, and his certifications.",
    contact: "contact.app opens a channel. Email reaches him fastest.",
  },
  routes: {
    "/agents": [
      "This is a git log of his career. Each commit is a piece of work that shipped.",
      "The SDR agents cut manual marketing effort by 60%.",
      "Redis Streams with idempotent consumers and a dead-letter queue: zero lost messages.",
    ],
    "/projects": [
      "Filter by Agentic AI, Backend, ML & vision or Web.",
      "IntelliClaim is a team of agents that reads the policy before deciding a claim.",
      "MiniRedis is a Redis-like server he wrote from scratch in C++.",
    ],
    "/profile": [
      "B.E. in AI & Data Science from VESIT, CGPA 9.14.",
      "He trains the models too: CNNs, YOLO tracking, fraud detection.",
    ],
    "/contact": ["Email is the fastest way to reach him. I'll pass it on."],
  },
  lost: "That process doesn't exist. Press Esc to go back to the desktop.",
};
