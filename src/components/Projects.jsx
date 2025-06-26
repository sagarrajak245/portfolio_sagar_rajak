import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

function Projects() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1

        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}


        className='my-20 text-center md:text-6xl font-semibold text-4xl'>Projects</motion.h1>
      <div>
        {PROJECTS.map((pro, index) => (
          <div key={index} className='mb-8 flex  flex-wrap lg:justify-center' >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}

              className='w-full lg:w-1/4'>
              <img src={pro.image}
                width={180}
                height={200}
                className='mb-6 rounded'
                alt={pro.title} />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}


              className='w-full max-w-full  lg:w-3/4'>
              <h6 className='mb-4 font-semibold flex items-center justify-between'>
                {pro.title}
                {pro.github && (
                  <a
                    href={pro.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-block rounded bg-purple-700 px-3 py-1 text-sm text-white hover:bg-purple-800 transition"
                  >
                    GitHub
                  </a>
                )}
              </h6>

              <p className='mb-4 text-neutral-400'>{pro.description}</p>
              {pro.technologies.map((tech, index) => (
                <span key={index} className='mr-2  text-purple-500 rounded bg-neutral-900 px-2 py-1 text-sm font-medium'>{tech}</span>

              ))}
            </motion.div>




          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
