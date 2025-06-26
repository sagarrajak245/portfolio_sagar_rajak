import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, Trophy } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';

const Timeline = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const colorMap = {
    'cyber-blue': {
      bg: 'bg-cyber-blue',
      text: 'text-cyber-blue',
      shadow: 'shadow-cyber-blue/50',
      badge: 'bg-cyber-blue/20 border-cyber-blue/30'
    },
    'cyber-purple': {
      bg: 'bg-cyber-purple',
      text: 'text-cyber-purple',
      shadow: 'shadow-cyber-purple/50',
      badge: 'bg-cyber-purple/20 border-cyber-purple/30'
    },
    'cyber-green': {
      bg: 'bg-cyber-green',
      text: 'text-cyber-green',
      shadow: 'shadow-cyber-green/50',
      badge: 'bg-cyber-green/20 border-cyber-green/30'
    },
    'cyber-pink': {
      bg: 'bg-cyber-pink',
      text: 'text-cyber-pink',
      shadow: 'shadow-cyber-pink/50',
      badge: 'bg-cyber-pink/20 border-cyber-pink/30'
    }
  };

  const timelineEvents = [
    {
      year: '2026',
      title: 'B.E. Graduation',
      subtitle: 'VESIT, Mumbai',
      description: 'Expected graduation in Artificial Intelligence and Data Science with CGPA 9.2',
      icon: GraduationCap,
      color: 'cyber-blue',
      type: 'education'
    },
    {
      year: '2024',
      title: 'Backend Developer',
      subtitle: 'Kinzy Club Pvt Ltd',
      description: 'Led backend development with Spring Boot, Docker, and Redis optimization',
      icon: Briefcase,
      color: 'cyber-purple',
      type: 'work'
    },
    {
      year: '2024',
      title: 'Smart India Hackathon Finalist',
      subtitle: 'National Competition',
      description: 'Advanced to finals with Drona LMS Platform project',
      icon: Trophy,
      color: 'cyber-green',
      type: 'achievement'
    },
    {
      year: '2023',
      title: 'Sr. Technical Officer',
      subtitle: 'AI-Colegion',
      description: 'Conducted Flutter/ML workshops for 180+ students, led MERN stack mentorship',
      icon: Briefcase,
      color: 'cyber-pink',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Jr. Technical Officer',
      subtitle: 'CSI VESIT',
      description: 'Managed CSI AI app, conducted OpenCV workshops, hosted technical events',
      icon: Code,
      color: 'cyber-blue',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Open Source Contributor',
      subtitle: 'GirlScript Summer of Code',
      description: 'Contributed to multiple OSS projects using React, Tailwind, and MongoDB',
      icon: Code,
      color: 'cyber-purple',
      type: 'project'
    },
    {
      year: '2022',
      title: 'Started B.E. Journey',
      subtitle: 'VESIT, Mumbai',
      description: 'Began studies in Artificial Intelligence and Data Science',
      icon: GraduationCap,
      color: 'cyber-green',
      type: 'education'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
            <span className="bg-gradient-to-r from-stone-100 to-purple-800 bg-clip-text text-transparent">
              Career Timeline
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            My journey through education, work experiences, and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const colors = colorMap[event.color] || {};

              return (
                <motion.div
                  key={`${event.year}-${event.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      className={`w-12 h-12 ${colors.bg} rounded-full border-4 border-gray-900 flex items-center justify-center shadow-lg ${colors.shadow}`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <event.icon className="text-white" size={20} />
                    </motion.div>
                  </div>

                  {/* Timeline content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <GlassCard className="group">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-2xl font-bold font-cyber ${colors.text}`}>
                          {event.year}
                        </span>
                        <span className={`px-2 py-1 text-xs ${colors.badge} ${colors.text} rounded-full`}>
                          {event.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors duration-300">
                        {event.title}
                      </h3>

                      <h4 className={`${colors.text} font-semibold mb-3`}>
                        {event.subtitle}
                      </h4>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <GlassCard className="inline-block">
            <h3 className="text-xl font-bold text-white mb-4">Journey Continues...</h3>
            <p className="text-gray-300">
              Always learning, always growing, always building the future
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
