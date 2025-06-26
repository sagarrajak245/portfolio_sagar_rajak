import { motion } from 'framer-motion';
import { Brain, Cloud, Code2, Database, Palette, Smartphone } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '../ui/AnimatedCounter';
import GlareCard from '../ui/GlareCard';
import MetallicIcon from '../ui/MetallicIcon';
import TextPressure from '../ui/TextPressure';
import ThreadBackground from '../ui/ThreadBackground';
import TrueFocus from '../ui/TrueFocus';

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages & Libraries',
      skills: ['C/C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Dart', 'HTML', 'CSS', 'SQL'],
      color: 'cyber-blue'
    },
    {
      icon: Palette,
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'Tailwind CSS', 'ShadCN', 'DaisyUI', 'Firebase', 'Figma', 'Canva'],
      color: 'cyber-purple'
    },
    {
      icon: Cloud,
      title: 'Backend & DevOps',
      skills: ['Node.js', 'Express.js', 'Flask', 'Spring Boot', 'Docker', 'Redis', 'Jenkins', 'GitHub Actions'],
      color: 'cyber-pink'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
      color: 'cyber-green'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      skills: ['Numpy', 'Pandas', 'Scikit-learn', 'Seaborn', 'PyTorch', 'Statsmodels', 'LLMs', 'CrewAI', 'LangChain'],
      color: 'cyber-blue'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Others',
      skills: ['Flutter', 'Provider', 'REST APIs', 'Git', 'Linux'],
      color: 'cyber-purple'
    }
  ];

  const colorMap = {
    'cyber-blue': {
      bg: 'bg-cyber-blue/20',
      text: 'text-cyber-blue',
      border: 'border-cyber-blue/30',
      hover: 'hover:bg-cyber-blue/30'
    },
    'cyber-purple': {
      bg: 'bg-cyber-purple/20',
      text: 'text-cyber-purple',
      border: 'border-cyber-purple/30',
      hover: 'hover:bg-cyber-purple/30'
    },
    'cyber-pink': {
      bg: 'bg-cyber-pink/20',
      text: 'text-cyber-pink',
      border: 'border-cyber-pink/30',
      hover: 'hover:bg-cyber-pink/30'
    },
    'cyber-green': {
      bg: 'bg-cyber-green/20',
      text: 'text-cyber-green',
      border: 'border-cyber-green/30',
      hover: 'hover:bg-cyber-green/30'
    }
  };

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <ThreadBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TrueFocus>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
              <TextPressure
                text="Skills & Tech Stack"
                className="bg-gradient-cyber bg-clip-text text-transparent"
              />
            </h2>
          </TrueFocus>

          <div className="flex justify-center gap-8 mb-12">
            <TrueFocus>
              <GlareCard className="text-center" glareColor="rgba(8, 145, 178, 0.4)">
                <div className="text-3xl font-bold text-cyber-blue font-cyber mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Technologies</div>
              </GlareCard>
            </TrueFocus>
            <TrueFocus>
              <GlareCard className="text-center" glareColor="rgba(124, 58, 237, 0.4)">
                <div className="text-3xl font-bold text-cyber-purple font-cyber mb-2">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-gray-300">Categories</div>
              </GlareCard>
            </TrueFocus>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const { bg, text, border, hover } = colorMap[category.color] || {};

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <TrueFocus>
                  <GlareCard className="h-full" glareColor="rgba(255,255,255,0.1)">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-full ${bg} mr-4`}>
                        <MetallicIcon Icon={category.icon} size={24} color={category.color} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + skillIndex * 0.05
                          }}
                          whileHover={{ scale: 1.1 }}
                          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer ${bg} ${text} ${border} ${hover}`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </GlareCard>
                </TrueFocus>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
