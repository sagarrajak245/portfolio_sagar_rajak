import { motion } from 'framer-motion'
import React from 'react'
import { Achi } from '../constants/index'
function Achievements() {
  return (
    <div >
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}}


        className='my-20 text-center text-4xl underline decoration-1'>Achievements</motion.h1>
        <div>
            {Achi.map((ach, index) => (
            <div key={index} className='mb-8  flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                <motion.p 
                
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}
                
                className='mb-2 text-sm text-neutral-400'>{ach.year}</motion.p>
                </div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1.5}}
                
                
                className='w-full max-w-xl  lg:w-3/4'>
                <h6 className='mb-2 font-semibold'>{ach.title}  
                </h6>
                <p className='mb-4 text-neutral-400'>{ach.description}</p>
               
                </motion.div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Achievements
