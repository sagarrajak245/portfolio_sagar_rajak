import pro8 from "../assets/projects/aqi.png";
import pro7 from "../assets/projects/crew_ai.png";
import pro5 from "../assets/projects/gdp.png";
import pro1 from "../assets/projects/pro1.png";
import pro2 from "../assets/projects/pro2.png";
import pro4 from "../assets/projects/pro4.jpg";
import pro6 from "../assets/projects/pro6.jpg";

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
    description: `• Built secure JWT-based authentication with interceptors and route protection for high user traffic.
• Enhanced PostgreSQL performance by resolving full scans, adding indexes, and optimizing queries.
• Implemented Redis-backed scalable feed system using partial active indexing to lower DB load.
• Dockerized microservices and scheduled distributed tasks with node locking to avoid conflicts
• Developed node scheduler for server in distributed system wrote unit test .`,
    technologies: ["Spring Boot", "Maven", "Docker", "Redis", "JOOQ", "PostgreSQL", "Spring-Scheduler"],
    certificate: ""
  },

  {
    year: "Aug 2023 - Present",
    role: "SR.Technical officer",
    company: "AI Colegion",
    description: `•Served as a technical officer, collaborating with members on MERN stack projects.
• Conducted a Flutter workshop for 180+ students, contributing as an instructor.
• Led a Machine Learning workshop for 100+ students, teaching foundational ML concepts`,
    technologies: ["Javascript", "React.js", "figma", "mongoDB", "Multi agent AI system", "flutter"],
  },
  {
    year: " July 2023- July 2024",
    role: "JR.Technical officer",
    company: "CSI VESIT",
    description: `• Collaborated with the team to manage an AI-powered CSI app.

• Conducted a workshop on OpenCV for ~180 students; served as a Teaching Assistant.

• Led and conducted workshops on MERN Stack Development.

• Organized technical events such as Hidden Cypher, Sherlock, and Watson.`,
    technologies: ["HTML", "CSS", "Express.js", "mongoDB", "open cv "],
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Opensource Contributor",
    company: "Girl Script Summer of code",
    description: `contributed to open source projects and developed web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to define project requirements and timelines.`,
    technologies: ["reactjs", "mongoDB", "Html", "Tailwind css"],
  },

];

export const PROJECTS = [
  {
    title: "Twitter clone web app",
    image: pro1,
    github: "https://github.com/sagarrajak245/fullstackproject-Twitterclone",
    description:
      `• Developed a full-stack web application clone of twitter Created UI using Reactjs frame work.
• Created login/signup page added authentication and authorization using jwt token, added the create post like post
add follower and your personal profile and many other features used mongoDB to collect user data
• Used react query for endpoint connections and api calling,Set up the server and routing using express js and nodejs`,
    technologies: ["HTML", "CSS", "React-js", "Node.js", "MongoDB", "Express.js", "Tailwind css", "react-query"],
  },
  {
    title: "Expense tracker App",
    image: pro2,
    github: "https://github.com/sagarrajak245/flutter_projects/tree/master",
    description:
      "An application for keeping the record of expenses , with features such as monthly spent, total income, graphical representation of expenses and progress tracking.",
    technologies: ["Dart", "flutter", "provider"],
  },

  {
    title: "Brain wave AI ui project ",
    image: pro4,
    github: "https://github.com/sagarrajak245/reactjs_uiproject_brainwave",
    description:
      "A frontend project using react js ,tailwind  css. developed attractive ui and applied some cool feature fully futuristic look",
    technologies: ["HTML", "CSS", "React-js", "Tailwind css"],
  },


  {
    title: "Portfolio Website",
    image: pro6,
    github: "https://github.com/sagarrajak245/portfolio_1",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind css", "daisy-ui"],
  },

  {
    title: "Gdp Analysis (1960 to 2024)",
    image: pro5,
    github: "https://github.com/sagarrajak245/ML-project-_4_steps",
    description:
      `•Analyzed and visualized GDP per capita trends of 180+ countries from 1960 to 2022; highlighted global economic
disparities in 2022 using bar charts.
• Predicted 2023 GDP per capita using Linear Regression and Random Forest; evaluated using MAE, RMSE, and R2
Score.
• Clustered countries based on predicted 2023 GDP using K-Means; visualized economic groupings via PCA;
optimized with Silhouette Score.
• Conducted leadership-based GDP trend analysis for India; calculated CAGR for each Prime Minister and modeled
future growth using Logistic Regression.
• Created timeline visualization mapping India’s GDP growth under various political regimes; evaluated predictive
model with accuracy and confusion matrix`,
    technologies: ["numpy", "pandas", "matplotlib", "seaborn", "scikit-learn", "statsmodels"],
  },
  {
    title: "Crew Ai multiagent system",
    image: pro7,
    github: "https://github.com/sagarrajak245/crewai_project",
    description:
      `• Developed Multi-agents system using crew ai library, agent where acting as researcher ,writer and editor.
• Created research,writing,editing automated system using LLM models and Crewai library`,
    technologies: ["openai", "claude", "crew ai framework", "python", "jupyter notebook", "scraping-tools"],
  },
  {
    title: " Air Quality Index (AQI) Prediction System ",
    image: pro8,
    github: "https://github.com/sagarrajak245/AQI_Predictor/tree/main",
    description:
      `🔍 End-to-end ML-powered web application for real-time AQI prediction.

🧠 R used for training an XGBoost regression model on historical pollutant data.

🔗 Flask serves as a backend API that interfaces with the R model via subprocess.

💻 Streamlit frontend provides an interactive UI for user inputs and result display.

📊 Real-time prediction of AQI based on input levels of PM2.5, PM10, NO2, and more.

🌍 Cross-language integration between Python and R ensures modular design.

📈 Visualizations using Plotly to show historical AQI trends and predicted values.

🚀 Designed with a clean architecture, making it easy to deploy and scale.`,
    technologies: ["R",
      "XGBoost",
      "Caret",
      "jsonlite",
      "Python",
      "Flask",
      "Streamlit",
      "Plotly",
      "REST API",
      "Subprocess (Python ↔ R)",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "HTML/CSS",
      "Git",
      "GitHub"],
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

