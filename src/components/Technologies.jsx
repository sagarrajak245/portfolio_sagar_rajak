import { motion } from 'framer-motion';
import React from 'react';
import { FaFigma, FaGitAlt, FaHtml5, FaJava, FaNode, FaPython } from 'react-icons/fa';
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase, SiFlutter, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const iconVariants=(duration)=>({
  hidden:{
    y:-10,
    opacity:0
  },

  animate:{
y:[10,-10],
transition:{
    duration:duration,
    ease:"linear",
    repeat:Infinity,
    repeatType:"reverse"
}
    
  }

})


function Technologies() {
  return (
    <div className='border-b   border-neutral-800 pb-25'>
        <motion.h1

        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        
        className=' my-20 text-center text-4xl  underline decoration-1' >Technologies</motion.h1>
      <motion.div
      
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
        transition={{duration:1, delay:0.5}}

      
      className=' flex flex-wrap items-center justify-center gap-4'>
<motion.div  
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"


className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaHtml5 className='text-7xl text-orange-700' />
</motion.div>
<motion.div  
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiTailwindCssFill className='text-7xl text-blue-700' />
</motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"


className='rounded-2xl border-4 border-neutral-800 p-4'>
<RiReactjsFill className='text-7xl text-cyan-500' />
</motion.div>
<motion.div  
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"


className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMongodb className='text-7xl text-green-600'/>
</motion.div>
<motion.div  

variants={iconVariants(2.5)} 
initial="initial"
animate="animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaNode className='text-7xl text-silver'  />
</motion.div>
<motion.div 

variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiMysql   className='text-7xl text-blue-400'/>
</motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFirebase  className='text-7xl text-orange-500' />
</motion.div>
<motion.div  

variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<SiFlutter className='text-7xl text-cyan-500'/> 
</motion.div>

<motion.div  
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"
className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaFigma className='bg-gradient-to-r from-red-500 to-blue-500 text-7xl mt-1 mb-1 p-1'/></motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'> 
<TbBrandCpp className='text-7xl text-white-500'/>
</motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'> 
<FaPython  className='text-7xl text-yellow-300'/>
</motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'> 
<FaJava className='text-7xl text-orange-500' />
</motion.div>
<motion.div 
variants={iconVariants(2.5)} 
initial="initial"
animate="animate"

className='rounded-2xl border-4 border-neutral-800 p-4'>
<FaGitAlt className='text-7xl text-orange-700'/>
</motion.div>


</motion.div>
      </div>
   
  )
}

export default Technologies
