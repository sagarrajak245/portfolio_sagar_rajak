import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../constants/index'; // adjust path as needed
import GlassCard from '../ui/GlassCard';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
            <span className="bg-gradient-to-r  from-stone-100 to-stone-500  bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-cyber opacity-30"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-cyber-gradient rounded-full border-4 border-gray-900 shadow-lg"></div>

                <div className="ml-20">
                  <GlassCard className="group rounded-none z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1  transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="text-cyan-400" size={20} />
                          <span className="text-cyan-400 font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin size={16} />
                          <span className="text-sm">Remote / Onsite</span>
                        </div>
                      </div>
                    </div>

                    {/* NEW: description as bullet points */}
                    <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed space-y-2">
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-cyber-blue/20 text-white  font-extralight rounded-full border border-cyber-blue/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
