/* eslint-disable react/jsx-no-undef */
import {
  FaChartBar,
  FaFigma, FaGitAlt,
  FaJava, FaJs,
  FaLink,
  FaNode, FaPython
} from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithubactions,
  SiJenkins,
  SiLangchain,
  SiLinux,
  SiMongodb, SiMysql, SiNumpy, SiPandas,
  SiPostgresql,
  SiPytorch,
  SiRedis,
  SiRedux,
  SiScikitlearn,
  SiSpring,
  SiSqlite,
  SiTypescript
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import llmicon from "../assets/LLm.jpg";
import crewaiicon from "../assets/crewai.png";
import Carousel from '../ui/Carousel';

export default function Technologies() {

  const skillCategories = [
    {
      title: 'Languages & Libraries',
      items: [
        { icon: <TbBrandCpp className="text-blue-500" />, title: 'C/C++', description: 'Compiled languages' },
        { icon: <FaPython className="text-yellow-300" />, title: 'Python', description: 'High-level scripting' },
        { icon: <FaJava className="text-orange-500" />, title: 'Java', description: 'Enterprise-ready' },
        { icon: <FaJs className="text-yellow-400" />, title: 'JavaScript', description: 'Dynamic web language' },
        { icon: <SiTypescript className="text-blue-500" />, title: 'TypeScript', description: 'Typed superset of JS' },
        { icon: <SiDart className="text-cyan-500" />, title: 'Dart', description: 'Flutter language' },
        { icon: <SiMysql className="text-blue-400" />, title: 'SQL', description: 'Structured Query Language' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { icon: <RiReactjsFill className="text-cyan-500" />, title: 'React.js', description: 'UI Library' },
        { icon: <SiRedux className="text-purple-500" />, title: 'Redux', description: 'State Management' },
        { icon: <RiTailwindCssFill className="text-blue-700" />, title: 'Tailwind CSS', description: 'Utility-first CSS' },
        { icon: <SiFirebase className="text-orange-500" />, title: 'Firebase', description: 'BAAS & hosting' },
        { icon: <FaFigma className="text-pink-500" />, title: 'Figma', description: 'Design Tool' },
        { icon: <span className="text-white">ShadCN</span>, title: 'ShadCN', description: 'UI Component Library' },
        { icon: <span className="text-white">DaisyUI</span>, title: 'DaisyUI', description: 'Tailwind Components' },
        { icon: <span className="text-white">Canva</span>, title: 'Canva', description: 'Graphic Design' },
      ],
    },
    {
      title: 'Backend & DevOps',
      items: [
        { icon: <FaNode className="text-green-400" />, title: 'Node.js', description: 'JavaScript Runtime' },
        { icon: <SiExpress className="text-gray-300" />, title: 'Express.js', description: 'Node framework' },
        { icon: <SiFlask className="text-gray-300" />, title: 'Flask', description: 'Python microframework' },
        { icon: <SiSpring className="text-green-500" />, title: 'Spring Boot', description: 'Java backend framework' },
        { icon: <SiDocker className="text-blue-500" />, title: 'Docker', description: 'Containerization' },
        { icon: <SiRedis className="text-red-500" />, title: 'Redis', description: 'In-memory datastore' },
        { icon: <SiJenkins className="text-red-400" />, title: 'Jenkins', description: 'CI/CD automation' },
        { icon: <SiGithubactions className="text-white" />, title: 'GitHub Actions', description: 'Workflow automation' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { icon: <SiMongodb className="text-green-600" />, title: 'MongoDB', description: 'NoSQL Database' },
        { icon: <SiPostgresql className="text-blue-500" />, title: 'PostgreSQL', description: 'Advanced Relational DB' },
        { icon: <SiMysql className="text-blue-400" />, title: 'MySQL', description: 'Relational Database' },
        { icon: <SiSqlite className="text-gray-400" />, title: 'SQLite', description: 'Embedded SQL DB' },
      ],
    },
    {
      title: 'AI/ML',
      items: [
        { icon: <SiNumpy className="text-blue-500" />, title: 'Numpy', description: 'Numerical computing' },
        { icon: <SiPandas className="text-green-500" />, title: 'Pandas', description: 'Data manipulation' },
        { icon: <SiScikitlearn className="text-yellow-500" />, title: 'Scikit-learn', description: 'Machine Learning' },
        { icon: <FaChartBar className="text-cyan-400" />, title: 'Seaborn', description: 'Statistical plots' },
        { icon: <SiPytorch className="text-orange-500" />, title: 'PyTorch', description: 'Deep learning' },

        { icon: <img src={llmicon} alt="LLM" className="h-[28px] w-[28px] rounded-sm" />, title: 'LLMs', description: 'Large Language Models' },
        { icon: <img src={crewaiicon} alt="CrewAI" className="h-[28px] w-[28px] rounded-sm" />, title: 'CrewAI', description: 'Agent Framework' },
        { icon: <SiLangchain className="text-green-400" />, title: 'LangChain', description: 'RAG Framework' },
      ],
    },
    {
      title: 'Mobile & Others',
      items: [
        { icon: <SiFlutter className="text-cyan-500" />, title: 'Flutter', description: 'Mobile Framework' },
        { icon: <span className="text-white">Provider</span>, title: 'Provider', description: 'Flutter State Mgmt' },
        { icon: <FaLink className="text-orange-700" />, title: 'REST APIs', description: 'Web Services' },
        { icon: <FaGitAlt className="text-orange-700" />, title: 'Git', description: 'Version Control' },
        { icon: <SiLinux className="text-yellow-300" />, title: 'Linux', description: 'Operating System' },
      ],
    },
  ];

  return (
    <section id="technologies" className="py-20 px-6  text-white">
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-white to-stone-700 bg-clip-text text-transparent">
        Skills & Tech Stack
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-stone-400">
              {category.title}
            </h3>
            <Carousel
              items={category.items}
              baseWidth={320}
              autoplay
              autoplayDelay={3000}
              loop
            />
          </div>
        ))}
      </div>
    </section>
  );
}
