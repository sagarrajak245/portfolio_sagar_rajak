import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { CONTACT, HERO, RESUME_URL } from "../constants";
import AgentGraph from "../ui/AgentGraph";

const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

function Hero() {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-32 sm:px-6 md:pt-40 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
      <div>
        <motion.p {...rise(0)} className="text-sm font-medium text-signal">
          {HERO.role}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-4 text-[clamp(3rem,9vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.035em] text-white"
          style={{ fontVariationSettings: '"opsz" 96' }}
        >
          {HERO.name}
        </motion.h1>

        <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-text/85 md:text-xl">
          {HERO.pitch}
        </motion.p>

        <motion.div {...rise(0.24)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FileText size={16} aria-hidden="true" />
            Resume
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-ghost">
            <Mail size={16} aria-hidden="true" />
            Email me
          </a>
        </motion.div>

        <motion.p {...rise(0.32)} className="mt-10 flex items-center gap-3 text-sm text-muted">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          {HERO.proof}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <AgentGraph />
      </motion.div>
    </div>
  );
}

export default Hero;
