import { motion } from 'framer-motion';

import { EXPERIENCES } from '../constants/index';

function Experience() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}


        className='my-20 text-center  bg  md:text-6xl font-semibold bg-gradient-to-r from-stone-100 to-stone-700 bg-clip-text text-transparent text-4xl ' >
        Experience

      </motion.h1>
      <div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className='mb-8  flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}


              className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'> {exp.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}

              className='w-full max-w-xl  lg:w-3/4'>
              <h6 className='mb-2 font-semibold'> {exp.role} -
                <span className='text-purple-300  text-sm'> {exp.company}</span>
              </h6>
              <p className='mb-4 text-neutral-400'>{exp.description}</p>

              {exp.technologies.map((tech, index) => (
                <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-purple-800 text-sm font-medium'>
                  {tech}
                </span>


              ))}

            </motion.div>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Experience
