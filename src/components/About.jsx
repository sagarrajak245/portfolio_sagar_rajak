import { motion } from 'framer-motion';
import aboutme from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants/index';

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500 ml-2">Me</span>
      </h1>

      <div className="flex flex-wrap">
        {/* Left: Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutme}
              alt="about"
              className="rounded-xl max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </motion.div>

        {/* Right: Plain ABOUT_TEXT */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start px-6"
        >
          <div className="my-4 max-w-xl py-6 font-light tracking-tighter text-base md:text-lg leading-relaxed text-left">
            {ABOUT_TEXT}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
