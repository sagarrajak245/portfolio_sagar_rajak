import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Achi } from "../constants";
import GlareHover from "../ui/GlareCard";

function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-12 text-center md:text-6xl text-4xl font-semibold bg-gradient-to-r from-stone-100 to-stone-700 bg-clip-text text-transparent"
      >
        Achievements
      </motion.h1>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2   gap-x-2 gap-y-4   place-items-center">
        {Achi.map((ach, index) => (
          <GlareHover
            key={index}
            width="100%"
            height="auto"
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className="w-full max-w-md p-6 rounded-xl"
          >
            <div className="text-left text-white space-y-3">
              <p className="text-sm text-purple-400">{ach.year}</p>
              <div className="flex items-start justify-between">
                <h4 className="font-bold text-lg">{ach.title}</h4>
                {ach.certificate && (
                  <a
                    href={ach.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-neutral-300 text-sm">{ach.description}</p>
            </div>
          </GlareHover>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
