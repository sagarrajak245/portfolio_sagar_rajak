import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import GlassCard from '../ui/GlassCard';

const Resume = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-cyber">
            <span className="bg-stone-600 bg-clip-text md:text-6xl bg-gradient-to-r text-transparent from-stone-100 to-stone-600 ">
              Resume
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Download or preview my complete resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GlassCard className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-cyber rounded-full flex items-center justify-center">
                <FileText className="text-white" size={36} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Sagar Rajak - Resume
              </h3>

              <p className="text-gray-300 mb-6">
                Full-Stack Developer & AI Enthusiast
              </p>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400 mb-8">
                <div>
                  <strong className="text-cyber-blue">Experience:</strong> 2+ years
                </div>
                <div>
                  <strong className="text-cyber-purple">Education:</strong> B.E. AI & DS
                </div>
                <div>
                  <strong className="text-cyber-pink">Projects:</strong> 20+ completed
                </div>
                <div>
                  <strong className="text-cyber-green">CGPA:</strong> 9.2/10
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Download Button */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1eQGtiwthkigWOudRfsdSnGWErzLIU4ge"
                className="px-8 py-4 bg-black-900 border-2 border-violet-200 text-cyan-500 font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              {/* Preview Button */}
              <motion.a
                href="https://drive.google.com/file/d/1eQGtiwthkigWOudRfsdSnGWErzLIU4ge/view"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-violet-200 text-purple-600 font-semibold rounded-full hover:bg-purple-500 hover:text-white
 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} />
                Preview Resume
              </motion.a>
            </div>


            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                Last updated: December 2025
              </p>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};

export default Resume;
