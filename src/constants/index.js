import aqi from "../assets/projects/aqi.png";
import dashboard from "../assets/projects/dashboard.png";
import fraud from "../assets/projects/fraud.png";
import gdp from "../assets/projects/gdp.png";
import postify from "../assets/projects/postify.png";
import webrtc from "../assets/projects/webrtc.png";
import yolo from "../assets/projects/yolo.png";

// Swap to the Google Drive link once it's shared:
// view:     https://drive.google.com/file/d/<ID>/view
// download: https://drive.google.com/uc?export=download&id=<ID>
export const RESUME_URL = "/resume.pdf";

export const CONTACT = {
  email: "sagarrajak245@gmail.com",
  phone: "+91 86691 01264",
  location: "Mumbai, India",
};

export const SOCIALS = {
  github: "https://github.com/sagarrajak245",
  linkedin: "https://www.linkedin.com/in/sagar-rajak-4b970b290/",
  leetcode: "https://leetcode.com/u/sagarrajak245/",
  x: "https://twitter.com/Sagar00043",
};

export const HERO = {
  name: "Sagar Rajak",
  role: "Agentic AI & Backend Engineer",
  pitch:
    "I build multi-agent LLM systems that run on fault-tolerant, event-driven backends — and I understand the machine learning underneath them.",
  proof: "Founding engineer at Aiviue, shipping to Hitachi, Orange Antelopes and Tapplent.",
};

export const ABOUT = {
  paragraphs: [
    "I'm a founding engineer at Aiviue, an AI video-led hiring platform, where I've written about 90% of the MVP: the agents, the backend they run on, and the workflows that tie them together. My day-to-day is turning manual sales, screening and ops work into autonomous systems that can be trusted in production.",
    "Before that I was a backend engineer at Kinzy Club, tuning PostgreSQL and building Redis-backed feeds on Spring Boot. I studied Artificial Intelligence and Data Science at VESIT, Mumbai, so the models inside my agents aren't a black box to me — I've trained CNNs, worked on detection and tracking, and taught ML to over a hundred students.",
  ],
  focus: [
    {
      title: "Agentic systems",
      body: "Orchestrators, specialised domain agents and tool use with LangGraph and CrewAI. RAG over messy documents, context engineering, and tracing with LangFuse.",
    },
    {
      title: "Backend & distributed systems",
      body: "FastAPI, PostgreSQL and Redis Streams with idempotent consumers, dead-letter queues and at-least-once delivery. Observability with Prometheus and Grafana.",
    },
    {
      title: "ML & deep learning",
      body: "PyTorch, CNNs, RNNs and Transformers; YOLO-based detection and tracking; classical ML for fraud, forecasting and regression problems.",
    },
  ],
  facts: [
    { label: "Degree", value: "B.E. AI & Data Science, VESIT" },
    { label: "CGPA", value: "9.14 / 10" },
    { label: "Graduated", value: "January 2026" },
    { label: "Based in", value: "Mumbai, India" },
  ],
};

export const AIVIUE = {
  company: "Aiviue",
  role: "Agentic AI Engineer · Founding team",
  period: "Nov 2025 – Present",
  lead: "Owned about 90% of the MVP codebase — architecture, backend infrastructure and agentic workflows — for an AI video-generation hiring platform. Shipped the product that landed Hitachi, Orange Antelopes and Tapplent as paying clients.",
  contributions: [
    {
      title: "Autonomous sales development agents",
      body: "Multi-channel SDR automation across LinkedIn, email and WhatsApp: AI lead enrichment, qualification, personalised outreach and webhook-secured tracking in one pipeline. Cut manual marketing effort by 60%.",
    },
    {
      title: "Candidate screening agents",
      body: "Agents that engage candidates sourced from social and digital channels, run WhatsApp screening, normalise and evaluate answers, score them, and structure profiles for hiring decisions.",
    },
    {
      title: "Agentic platform architecture",
      body: "Orchestrators, specialised domain agents, event models and automated workflows across the Admin and Candidate modules, with coordinated execution and monitoring.",
    },
    {
      title: "Six-agent control plane",
      body: "Admin, Spend, Profitability, Warning, Broadcast and BulkOps agents covering cost attribution, anomaly detection, predictive analytics and automated remediation across tenants.",
    },
    {
      title: "Event-driven backend",
      body: "FastAPI, PostgreSQL and Redis Streams with idempotent consumers, dead-letter queues, schema versioning and transactional acks — at-least-once processing with zero data-loss incidents.",
    },
    {
      title: "In-house voice AI",
      body: "Replaced third-party voice orchestration with our own stack: multilingual STT/TTS, LangGraph agent workflows, real-time telephony and session lifecycle management for low-latency calls.",
    },
  ],
  tech: ["Python", "FastAPI", "LangGraph", "PostgreSQL", "Redis Streams", "STT / TTS", "WhatsApp API", "Docker"],
};

export const EXPERIENCES = [
  {
    company: "Kinzy Club Pvt Ltd",
    note: "Subsidiary of Redscope Inc.",
    role: "Backend Engineer",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Removed sequential scans on 42 high-traffic queries with targeted indexes, taking average latency from 10 ms to 2 ms.",
      "Built a Redis-backed feed using partial active indexing to take load off the database.",
      "Ran distributed jobs with Spring Scheduler and ShedLock so each task executes once across nodes.",
      "Shipped JWT authentication with interceptors and route protection, covered by JUnit and MockMvc tests.",
    ],
    tech: ["Spring Boot", "PostgreSQL", "Redis", "JOOQ", "Docker", "JUnit"],
  },
  {
    company: "AI-Colegion",
    role: "Technical Officer",
    period: "Aug 2023 – May 2026",
    points: [
      "Led three MERN-stack club projects.",
      "Taught 350+ students across workshops on Flutter (180+), machine learning (100+) and agentic AI with CrewAI (80+).",
    ],
    tech: ["CrewAI", "Machine Learning", "Flutter", "MERN"],
  },
];

export const PROJECT_FILTERS = ["All", "Agentic AI", "Backend", "ML & vision", "Web"];

export const PROJECTS = [
  {
    title: "IntelliClaim",
    category: "Agentic AI",
    featured: true,
    summary: "A multi-agent system that adjudicates insurance claims against the actual policy text, and shows its reasoning live.",
    highlights: [
      "Orchestrator hands claims to query-understanding, document-retrieval and decision agents built with CrewAI and LangChain on Groq.",
      "RAG over unstructured policy documents with ChromaDB and spaCy, so every decision cites the clause it relied on.",
      "Socket.IO dashboard streams each agent's step so adjusters can see why a claim was approved or flagged.",
    ],
    tech: ["CrewAI", "LangChain", "Groq", "ChromaDB", "Flask", "React", "Socket.IO"],
    github: "https://github.com/sagarrajak245/IntelliClaim-A-Multi-Agent-AI-System-for-Insurance-Adjudication",
    cover: "intelliclaim",
  },
  {
    title: "RAG pipelines, three ways",
    category: "Agentic AI",
    summary: "Basic, multi-agent and multi-format RAG built side by side to compare how each holds up.",
    highlights: [
      "Multi-agent variant runs research → answer → critique agents over the retrieved context.",
      "Enhanced pipeline ingests PDF, TXT, CSV and DOCX with LCEL chains and a refinement pass.",
    ],
    tech: ["LangChain", "LangGraph", "Groq", "Vector store", "Python"],
    github: "https://github.com/sagarrajak245/SimpleRag-MultiAgentRag-MultiFormatRag_pipelines",
    cover: "rag",
  },
  {
    title: "Postify",
    category: "Agentic AI",
    summary: "A Chrome extension that turns course certificates in your inbox into ready-to-post LinkedIn and X updates.",
    highlights: [
      "Scans Gmail through OAuth2 and extracts issuer, title and completion date from certificate emails.",
      "Drafts posts with GPT-4, Grok and Gemini side by side, then schedules or publishes in one click.",
    ],
    tech: ["React", "TypeScript", "Gmail API", "GPT-4", "Gemini", "Grok"],
    github: "https://github.com/sagarrajak245/postify_chrome_extension",
    image: postify,
  },
  {
    title: "Hindi voice assistant",
    category: "Agentic AI",
    summary: "A real-time voice chat that listens, thinks and replies in Hindi.",
    highlights: [
      "Speech-to-text with Deepgram, responses from Gemini, and natural Hindi speech from ElevenLabs.",
      "Choice of voices and a push-to-talk interface, deployed as a live demo.",
    ],
    tech: ["Deepgram", "Gemini", "ElevenLabs", "Node.js", "React"],
    github: "https://github.com/sagarrajak245/Hindi-Convo-Bot",
    demo: "https://hindi-convo-bot-frontend.onrender.com/",
    cover: "voice",
  },
  {
    title: "CrewAI content crew",
    category: "Agentic AI",
    summary: "A researcher, writer and editor agent that hand work to each other to produce finished articles.",
    highlights: [
      "Each agent has its own role, tools and scraping access; the crew passes drafts down the chain.",
    ],
    tech: ["CrewAI", "OpenAI", "Claude", "Python"],
    github: "https://github.com/sagarrajak245/crewai_project",
    cover: "crewai",
  },
  {
    title: "FastAPI observability stack",
    category: "Backend",
    summary: "Metrics, logs and traces for a FastAPI service, wired end to end and load-tested.",
    highlights: [
      "Prometheus metrics, Loki logs and Tempo traces, all explored from Grafana dashboards.",
      "Locust load tests to watch request rate and latency move under pressure.",
    ],
    tech: ["FastAPI", "Prometheus", "Grafana", "Loki", "Tempo", "Locust"],
    github: "https://github.com/sagarrajak245/Observability-Stack-using-Prometheus-Grafana-Loki-and-Tempo.-",
    cover: "observability",
  },
  {
    title: "MiniRedis",
    category: "Backend",
    summary: "A Redis-like in-memory key-value server written from scratch in C++.",
    highlights: [
      "Strings, lists and hashes with TTL expiry, rename and flush.",
      "Mutex-guarded multi-threaded access, plus DUMP/LOAD persistence to disk.",
    ],
    tech: ["C++", "Multithreading", "Persistence"],
    github: "https://github.com/sagarrajak245/mini-redis",
    cover: "miniredis",
  },
  {
    title: "Real-time object detection over WebRTC",
    category: "ML & vision",
    summary: "Stream a phone camera to the browser and run YOLO detection on it live.",
    highlights: [
      "Two inference modes: in-browser WASM for light devices, server-side YOLOv8 for accuracy.",
      "Under 100 ms latency in server mode and 10–30 FPS, with frame-queue backpressure.",
      "One-command Docker setup with ngrok and a QR code to pair the phone.",
    ],
    tech: ["WebRTC", "YOLOv8", "ONNX Runtime", "WASM", "FastAPI", "Docker"],
    github: "https://github.com/sagarrajak245/Real-time-WebRTC-VLM-Multi-Object-Detection",
    image: webrtc,
  },
  {
    title: "Player tracking & re-identification",
    category: "ML & vision",
    summary: "Keeps every player's ID stable in sports footage, even after they leave the frame and come back.",
    highlights: [
      "Compared ByteTrack, DeepSORT and StrongSORT with OSNet appearance embeddings.",
    ],
    tech: ["YOLOv8", "DeepSORT", "StrongSORT", "OSNet", "OpenCV"],
    github: "https://github.com/sagarrajak245/player_analysis_using_yolo",
    image: yolo,
  },
  {
    title: "Fraud detection in payments",
    category: "ML & vision",
    summary: "Flags fraudulent transactions in a 6.3M-row dataset where fraud is extremely rare.",
    highlights: [
      "SMOTE for class imbalance, XGBoost and Random Forest, explained with SHAP.",
      "AUPRC of 0.9979 on the held-out set.",
    ],
    tech: ["XGBoost", "SMOTE", "SHAP", "scikit-learn", "Pandas"],
    github: "https://github.com/sagarrajak245/Fraud_transaction_detection_in_payment_app",
    image: fraud,
  },
  {
    title: "AQI prediction",
    category: "ML & vision",
    summary: "Predicts air quality from pollutant levels, with history and forecast charts.",
    highlights: [
      "XGBoost model trained in R, served through a Flask API with a Streamlit front end.",
    ],
    tech: ["R", "XGBoost", "Flask", "Streamlit", "Plotly"],
    github: "https://github.com/sagarrajak245/AQI_Predictor",
    image: aqi,
  },
  {
    title: "GDP per capita, 1960–2023",
    category: "ML & vision",
    summary: "Six decades of GDP data across 215+ countries, with forecasts and clustering.",
    highlights: [
      "Linear Regression and Random Forest forecasts, K-Means clusters visualised with PCA.",
    ],
    tech: ["Pandas", "scikit-learn", "Statsmodels", "Seaborn"],
    github: "https://github.com/sagarrajak245/GDP-Analysis-1960-2023",
    image: gdp,
  },
  {
    title: "ADmyBRAND Insights",
    category: "Web",
    summary: "An analytics dashboard for marketing agencies with live campaign metrics and exports.",
    highlights: [
      "Interactive charts, campaign tables, PDF/CSV export and light and dark themes.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Recharts"],
    github: "https://github.com/sagarrajak245/AD_MyBrand_Dashboard",
    demo: "https://admybranddashboard-mu.vercel.app/",
    image: dashboard,
  },
];

export const SKILLS = [
  {
    group: "Agentic AI & LLMs",
    items: ["LangGraph", "LangChain", "CrewAI", "RAG", "Context engineering", "Tool calling", "LangFuse", "OpenAI / Gemini / Groq"],
  },
  {
    group: "Backend & distributed systems",
    items: ["FastAPI", "Flask", "Spring Boot", "Node.js", "Redis Streams", "Redis", "Docker", "REST & webhooks"],
  },
  {
    group: "ML & deep learning",
    items: ["PyTorch", "scikit-learn", "CNN / RNN", "Transformers", "YOLO", "OpenCV", "XGBoost", "Pandas"],
  },
  {
    group: "Data & vector stores",
    items: ["PostgreSQL", "MongoDB", "ChromaDB", "pgvector", "MySQL"],
  },
  {
    group: "Cloud, CI & observability",
    items: ["AWS (EC2, S3, Lambda)", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "Linux"],
  },
  {
    group: "Languages & frontend",
    items: ["Python", "Java", "C / C++", "SQL", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
  },
];

export const TIMELINE = [
  { year: "2026", title: "Graduated, B.E. AI & Data Science", place: "VESIT, Mumbai", note: "CGPA 9.14 / 10" },
  { year: "2025", title: "Agentic AI Engineer, founding team", place: "Aiviue", note: "Agents, event-driven backend and voice AI for an AI hiring platform." },
  { year: "2024", title: "Backend Engineer", place: "Kinzy Club", note: "PostgreSQL tuning, Redis feeds and distributed scheduling on Spring Boot." },
  { year: "2024", title: "Smart India Hackathon finalist", place: "National", note: "Built Drona, an LMS with AI content generation and learning roadmaps." },
  { year: "2024", title: "Open-source contributor", place: "GirlScript Summer of Code", note: "React and Node.js contributions and REST APIs." },
  { year: "2023", title: "Technical Officer", place: "AI-Colegion", note: "Ran Flutter, ML and agentic AI workshops for 350+ students." },
  { year: "2023", title: "Jr. Technical Officer", place: "CSI VESIT", note: "OpenCV and MERN workshops; ran Hidden Cypher, Sherlock and Watson events." },
  { year: "2022", title: "Started B.E. in AI & Data Science", place: "VESIT, Mumbai", note: "MHT-CET 97.25 percentile." },
];

export const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon 2024 finalist",
    year: "2024",
    link: "https://drive.google.com/file/d/11joQAOfic0QfkFDkM0eqqHTxXo6_pwed/view?usp=sharing",
    description: "Smart Education theme — built Drona, an LMS with AI content generation, roadmaps and analytics.",
  },
  {
    title: "NVIDIA: Fundamentals of Deep Learning",
    year: "2023",
    link: "https://drive.google.com/file/d/1b5GTJIk7YtOARbjzR70SVVo0MvIScKAa/view?usp=sharing",
    description: "Neural networks, backpropagation and training techniques.",
  },
  {
    title: "NVIDIA: Anomaly Detection",
    year: "2023",
    link: "https://drive.google.com/file/d/1Er0zjG9nt0QDCEUEhPjHAog3zXQSaAJT/view?usp=sharing",
    description: "Deep-learning approaches to outlier detection and predictive maintenance.",
  },
  {
    title: "AWS Cloud Fundamentals",
    year: "2023",
    link: "https://drive.google.com/file/d/1iW5GLNuFDVheNOnObZRkLUdQArKstc5F/view?usp=sharing",
    description: "Core AWS services and architecture: EC2, S3, Lambda and IAM.",
  },
  {
    title: "MATLAB: Machine Learning",
    year: "2023",
    link: "https://drive.google.com/file/d/1IjJwyilrh12g_97X2fBR0moeGJqEKmso/view?usp=sharing",
    description: "Classification and regression models.",
  },
  {
    title: "MATLAB: Data Visualization",
    year: "2023",
    link: "https://drive.google.com/file/d/1bH-est_CXCEc_8z25bK4Dc0B2yVzwgZl/view?usp=sharing",
    description: "Plotting and visual analysis of data.",
  },
  {
    title: "Flutter Fundamentals — Udemy",
    year: "2023",
    link: "https://drive.google.com/file/d/1hmT7Vb8wz8oLoIyEipzlEXRrsu6vFI5l/view?usp=sharing",
    description: "Widgets, state management and UI development.",
  },
  {
    title: "Web Development — Udemy",
    year: "2023",
    link: "https://drive.google.com/file/d/1WmgxCjcDUYdxHOm-VkhfdnfyaJgDbgDL/view?usp=drive_link",
    description: "Full-stack training with HTML, CSS, JavaScript, React, Node.js and MongoDB.",
  },
  {
    title: "Best Technical Speaker — Awakening the Scientist",
    year: "2022",
    link: "https://drive.google.com/file/d/1KnJcGgiWZh6FeI-YHohjEdvRZ6cmK80j/view?usp=sharing",
    description: "Presented ideas on optical specs and bionic-eye vision enhancement.",
  },
  {
    title: "Dalal Street finalist — trading game",
    year: "2022",
    link: "https://drive.google.com/file/d/1H8eG2mUQ4KQS8k0ov242UcIj3nw_fIOw/view?usp=sharing",
    description: "Top 15 nationally in a stock market simulation.",
  },
];
