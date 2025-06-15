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
    title: " ATS Best Technical speaker",
    year: "2022-2023",
    certificate: "https://drive.google.com/file/d/1KnJcGgiWZh6FeI-YHohjEdvRZ6cmK80j/view?usp=sharing",

    description: "I got ATS best technical speaker award. I proposed solution on optical specs and future of it also i talked about how to enhance its use with bionic eyes",

  },

  {
    title: " Dalal Street ",
    year: "2022-2023",
    certificate: "https://drive.google.com/file/d/1H8eG2mUQ4KQS8k0ov242UcIj3nw_fIOw/view?usp=sharing",

    description: "It was fun event where you have to show your stock market skills.. learnt many things over there about market and got all basics covered ..our team was in top 15.. ",

  },

  {
    title: "SIH-2024",
    year: "2023-2024",
    certificate: "https://drive.google.com/file/d/11joQAOfic0QfkFDkM0eqqHTxXo6_pwed/view?usp=sharing",
    description: `Qualified for Smart India Hackathon 2024 under the Smart Education theme with Problem Statement ID: 1615. Our team, GURU-DEVS, developed a full-fledged LMS platform named "Drona" to streamline and enhance the learning and teaching experience. Drona focuses on centralized resource management, progress tracking with data visualizations, AI-powered content creation, and personalized learning path generation. It integrates APIs from Udemy, Coursera, and edX, along with GenAI tools like LangChain and Hugging Face, to dynamically generate content and roadmaps. The platform also includes features like an event planner, student analytics, and real-time recommendations—offering a holistic solution for modern educational needs.`
  }


];
