import pro8 from "../assets/projects/aqi.png";
import pro7 from "../assets/projects/crew_ai.png";
import dashboard from "../assets/projects/dashboard.png";
import fraud from "../assets/projects/fraud.png";
import pro5 from "../assets/projects/gdp.png";
import Postify from "../assets/projects/postify.png";
import pro1 from "../assets/projects/pro1.png";
import pro2 from "../assets/projects/pro2.png";
import pro4 from "../assets/projects/pro4.jpg";
import pro6 from "../assets/projects/pro6.jpg";
import yolo from "../assets/projects/yolo.png";



export const HERO_CONTENT = `I'm a passionate Full-Stack Developer with expertise in building scalable webapps. I also explore Machine Learning and AI agents to craft intelligent, data-driven solutions. I thrive on turning ideas into impactful digital experiences`;

export const ABOUT_TEXT = ` Hi, I'm Sagar Rajak, a third-year B.E. student in Artificial Intelligence and Data Science at VESIT, Mumbai with Current Cgpa of 9.2 . I'm a passionate Full-Stack Developer and AI enthusiast with a strong foundation in MERN stack, Flutter, and modern database systems like MongoDB, MySQL, and PostgreSQL.

Beyond full-stack development, I have hands-on experience in Machine Learning, Time Series Analysis, and LLM-powered applications. I've built intelligent systems using CrewAI, LangChain, and Flask-based LLM backends to automate workflows like research, writing, and social media post generation.

I've conducted ML workshops, mentored peers, and delivered practical projects—from classifying Spotify hits with logistic regression to building GDP predictors using clustering and regression models. I actively explore how AI agents and LLMs can solve real-world challenges and enhance productivity.

I'm always excited to take on new challenges, collaborate with forward-thinking teams, and contribute to innovative tech solutions that make an impact.`;

export const EXPERIENCES = [
  {
    year: "4 Nov(2024) - 4 Feb(2025)",
    role: "Backend Developer",
    company: "Kinzy club pvt Ltd",
    description: [
      "Built secure JWT-based authentication with interceptors and route protection for high user traffic.",
      "Enhanced PostgreSQL performance by resolving full scans, adding indexes, and optimizing queries.",
      "Implemented Redis-backed scalable feed system using partial active indexing to lower DB load.",
      "Dockerized microservices and scheduled distributed tasks with node locking to avoid conflicts.",
      "Developed node scheduler for server in distributed system and wrote unit tests."
    ],
    technologies: ["Spring Boot", "Maven", "Docker", "Redis", "JOOQ", "PostgreSQL", "Spring-Scheduler"],
    certificate: ""
  },
  {
    year: "Aug 2023 - Present",
    role: "SR.Technical officer",
    company: "AI Colegion",
    description: [
      "Served as a technical officer, collaborating with members on MERN stack projects.",
      "Conducted a Flutter workshop for 180+ students, contributing as an instructor.",
      "Led a Machine Learning workshop for 100+ students, teaching foundational ML concepts."
    ],
    technologies: ["Javascript", "React.js", "Figma", "MongoDB", "Multi agent AI system", "Flutter"]
  },
  {
    year: "July 2023 - July 2024",
    role: "JR.Technical officer",
    company: "CSI VESIT",
    description: [
      "Collaborated with the team to manage an AI-powered CSI app.",
      "Conducted a workshop on OpenCV for ~180 students; served as a Teaching Assistant.",
      "Led and conducted workshops on MERN Stack Development.",
      "Organized technical events such as Hidden Cypher, Sherlock, and Watson."
    ],
    technologies: ["HTML", "CSS", "Express.js", "MongoDB", "OpenCV"]
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Opensource Contributor",
    company: "Girl Script Summer of code",
    description: [
      "Contributed to open source projects and developed web applications using JavaScript, React.js, and Node.js.",
      "Designed and implemented RESTful APIs for data communication.",
      "Collaborated with cross-functional teams to define project requirements and timelines."
    ],
    technologies: ["React.js", "MongoDB", "HTML", "Tailwind CSS"]
  }
];


export const PROJECTS = [
  {
    title: "Twitter clone web app",
    image: pro1,
    github: "https://github.com/sagarrajak245/fullstackproject-Twitterclone",
    description: [
      "Developed a full-stack Twitter clone with React.js for UI.",
      "Implemented login/signup with JWT-based authentication.",
      "Features include creating posts, liking posts, following users, personal profiles.",
      "Used MongoDB for user data storage.",
      "Set up API endpoints using Express.js and Node.js.",
      "Used React Query for API calls and caching."
    ],
    technologies: ["HTML", "CSS", "React-js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "React Query"],
  },
  {
    title: "Expense Tracker App",
    image: pro2,
    github: "https://github.com/sagarrajak245/flutter_projects/tree/master",
    description: [
      "Mobile app to track daily expenses.",
      "Shows monthly spending, total income, and progress tracking.",
      "Includes graphical charts of expenses."
    ],
    technologies: ["Dart", "Flutter", "Provider"],
  },
  {
    title: "Brainwave AI UI Project",
    image: pro4,
    github: "https://github.com/sagarrajak245/reactjs_uiproject_brainwave",
    description: [
      "Frontend UI project built with React.js and Tailwind CSS.",
      "Designed a futuristic look with responsive design.",
      "Implemented smooth animations and interactions."
    ],
    technologies: ["HTML", "CSS", "React-js", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: pro6,
    github: "https://github.com/sagarrajak245/portfolio_1",
    description: [
      "Personal portfolio website.",
      "Showcases projects, skills, and contact information.",
      "Built with React and Tailwind CSS with Daisy UI components."
    ],
    technologies: ["HTML", "CSS", "React", "Tailwind CSS", "Daisy UI"],
  },
  {
    title: "GDP Analysis (1960 to 2024)",
    image: pro5,
    github: "https://github.com/sagarrajak245/ML-project-_4_steps",
    description: [
      "Analyzed GDP per capita trends for 180+ countries (1960–2022).",
      "Predicted 2023 GDP using Linear Regression and Random Forest.",
      "Evaluated models with MAE, RMSE, and R² score.",
      "Clustered countries using K-Means and visualized with PCA.",
      "Conducted GDP trend analysis for India by Prime Ministers.",
      "Created timeline visualizations of India's GDP growth."
    ],
    technologies: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Statsmodels"],
  },
  {
    title: "Crew AI Multi-Agent System",
    image: pro7,
    github: "https://github.com/sagarrajak245/crewai_project",
    description: [
      "Developed a multi-agent system using the CrewAI library.",
      "Agents act as researcher, writer, and editor.",
      "Automated research, writing, and editing using LLM models."
    ],
    technologies: ["OpenAI", "Claude", "CrewAI Framework", "Python", "Jupyter Notebook", "Scraping Tools"],
  },
  {
    title: "Air Quality Index (AQI) Prediction System",
    image: pro8,
    github: "https://github.com/sagarrajak245/AQI_Predictor/tree/main",
    description: [
      "End-to-end ML-powered web app for real-time AQI prediction.",
      "XGBoost regression model trained in R on historical data.",
      "Flask API connects Python with R subprocess.",
      "Streamlit frontend for interactive user input and results.",
      "Real-time prediction of AQI based on pollutant levels.",
      "Integrated Plotly for historical and predicted AQI visualizations.",
      "Designed modular architecture for easy deployment."
    ],
    technologies: [
      "R", "XGBoost", "Caret", "JSONLite", "Python", "Flask",
      "Streamlit", "Plotly", "REST API", "Subprocess", "Pandas",
      "NumPy", "Scikit-learn", "HTML/CSS", "Git", "GitHub"
    ],
  },
  {
    title: "Postify – AI-Powered Chrome Extension",
    image: Postify, // Add relevant image import if available
    github: "https://github.com/sagarrajak245/postify_chrome_extension",
    description: [
      "Developed a productivity-focused Chrome Extension that automates certificate scanning from Gmail.",
      "Parsed course metadata and generated LinkedIn/Twitter posts using GPT-4, Grok, and Gemini.",
      "Integrated Gmail, LinkedIn, and Twitter APIs for a complete certificate-to-social pipeline."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "GPT-4", "Grok", "Gemini", "Gmail API"],
  },
  {
    title: "Player Tracking & Re-identification System",
    image: yolo, // Add relevant image import if available
    github: "https://github.com/sagarrajak245/computer_vision_project",
    description: [
      "Built a sports analytics system to track players in real-time from videos.",
      "Ensured consistent IDs even after players exited and re-entered the frame.",
      "Implemented ByteTrack, DeepSORT, and StrongSORT with OSNet embeddings."
    ],
    technologies: ["YOLOv8", "ByteTrack", "DeepSORT", "StrongSORT", "OSNet", "Python", "OpenCV"],
  },
  {
    title: "Financial Fraud Detection in Transactions",
    image: fraud, // Add relevant image import if available
    github: "https://github.com/sagarrajak245/Fraud_transaction_detection_in_payment_app",
    description: [
      "Developed a real-time fraud detection system on 6.3M+ transactions with extreme class imbalance.",
      "Used SMOTE for balancing and XGBoost/Random Forest for classification.",
      "Achieved AUPRC of 0.9979 with zero false positives/negatives."
    ],
    technologies: ["Python", "XGBoost", "SMOTE", "SHAP", "Scikit-learn", "Pandas", "NumPy"],
  },
  {
    title: "ADmyBRAND Insights Dashboard",
    image: dashboard, // Add relevant image import if available
    github: "https://github.com/yourusername/admybrand-insights",
    description: [
      "A modern, real-time analytics dashboard for digital marketing agencies with advanced data visualization and responsive design.",
      "Features include interactive charts (line, bar, pie, scatter), campaign analytics, real-time metrics, AI bot assistant, export to PDF/CSV/JSON, and profile management.",
      "Built with Vite, TypeScript, React, Tailwind CSS (shadcn/ui), Recharts, and Framer Motion, implementing glassmorphism UI and light/dark mode."
    ],
    technologies: [
      "React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Recharts",
      "Framer Motion", "Lucide React", "jsPDF", "Papa Parse"
    ],
  },

];


export const CONTACT = {
  Address: "New mumbai, Maharashtra, India.",
  phoneNo: "8669101264 ",
  email: "sagarrajak245@gmail.com",
};

export const Achi = [
  {
    title: "NVIDIA: Fundamentals of Deep Learning",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1b5GTJIk7YtOARbjzR70SVVo0MvIScKAa/view?usp=sharing",
    description: "Completed NVIDIA’s foundational course on Deep Learning, covering neural networks, backpropagation, and training techniques."
  },
  {
    title: "NVIDIA: Anomaly Detection",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1Er0zjG9nt0QDCEUEhPjHAog3zXQSaAJT/view?usp=sharing",
    description: "Learned anomaly detection techniques using deep learning frameworks for predictive maintenance and outlier detection."
  },
  {
    title: "MATLAB: Machine Learning",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1IjJwyilrh12g_97X2fBR0moeGJqEKmso/view?usp=sharing",
    description: "Completed MATLAB’s certification on core machine learning concepts including classification and regression models."
  },
  {
    title: "MATLAB: Data Visualization",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1bH-est_CXCEc_8z25bK4Dc0B2yVzwgZl/view?usp=sharing",
    description: "Gained skills in effective data visualization techniques using MATLAB’s graphical libraries and data plotting features."
  },
  {
    title: "AWS: Cloud Fundamentals",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1iW5GLNuFDVheNOnObZRkLUdQArKstc5F/view?usp=sharing",
    description: "Understood the foundational services and architecture of AWS Cloud including EC2, S3, Lambda, and IAM."
  },
  {
    title: "Flutter Fundamentals - Udemy",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1hmT7Vb8wz8oLoIyEipzlEXRrsu6vFI5l/view?usp=sharing",
    description: "Completed a beginner-to-advanced course on Flutter, covering widgets, state management, and UI development."
  },
  {
    title: "Web Development Complete Course - Udemy",
    year: "2023",
    certificate: "https://drive.google.com/file/d/1WmgxCjcDUYdxHOm-VkhfdnfyaJgDbgDL/view?usp=drive_link",
    description: "Completed full-stack web development training with HTML, CSS, JavaScript, React, Node.js, and MongoDB."
  },
  {
    title: "Smart India Hackathon 2024 Finalist",
    year: "2023–2024",
    certificate: "https://drive.google.com/file/d/11joQAOfic0QfkFDkM0eqqHTxXo6_pwed/view?usp=sharing",
    description: `Finalist at Smart India Hackathon 2024 under the Smart Education theme. Developed "Drona" — a full-fledged LMS platform with AI-powered content generation, roadmap creation, and analytics.`
  },
  {
    title: "ATS Best Technical Speaker – Awakening the Scientist",
    year: "2022–2023",
    certificate: "https://drive.google.com/file/d/1KnJcGgiWZh6FeI-YHohjEdvRZ6cmK80j/view?usp=sharing",
    description: "Received award for presenting innovative ideas on optical specs and enhancing vision using bionic eye technology."
  },
  {
    title: "Dalal Street Finalist – Trade Game",
    year: "2022–2023",
    certificate: "https://drive.google.com/file/d/1H8eG2mUQ4KQS8k0ov242UcIj3nw_fIOw/view?usp=sharing",
    description: "Secured a top-15 spot nationally in a stock market simulation competition demonstrating analytical and trading skills."
  },
  {
    title: "MHT-CET State Rank – Top 5000",
    year: "2021",
    certificate: "",  // No link available in resume
    description: "Achieved a top 5000 state-level rank among 300,000+ students in the MHT-CET entrance exam for engineering."
  }

];

