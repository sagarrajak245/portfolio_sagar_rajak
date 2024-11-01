import { motion } from 'framer-motion'
import portfoliopic from '../assets/sprofile2.png'
import { HERO_CONTENT } from '../constants/index'


const container=(delay)=>({

    hidden:{x:-100,opacity:0},
    visible:{
       x:0, opacity:1,
         transition:{
              delay:delay,
              duration:0.5
         }
    }
})







function Hero() {

  return (
    <div className='border-b border-neutral-900  pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
<div className='w-full lg:w-1/2'>  
<div className='flex flex-col items-center lg:items-start'>
<motion.h1  
variants={container(0)}  
initial="hidden" 
animate="visible"

className='pb-16 text-6xl font-thin  tracking-tight lg:mt-16
lg:text-8xl'>Sagar Rajak</motion.h1>   

<motion.span
variants={container(0.5)}  
initial="hidden" 
animate="visible"

className='ml-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
bg-clip-text text-4xl tracking-tight text-transparent'> 
     Full stack developer 
</motion.span>
  <motion.p
  variants={container(1)}  
  initial="hidden" 
  animate="visible"
  
  
  className='ml-2 my-2 max-w-xl py-6 font-thin tracking-tighter'> 
    {HERO_CONTENT} 
    
    </motion.p>      
</div>

</div>
{/* <div className='w-full lg:w-1/2 lg:p-8 '> 
<div className='flex justify-center'>
    <img src={portfoliopic} alt="profilepic" className='border-none rounded-full  '/>  

</div>


</div> */} 


<div className='w-full lg:w-1/2 lg:p-8'>
      <div className='flex justify-center'> 
        <motion.img
initial={{x:100,opacity:0}}
animate={{x:0,opacity:1}}
transition={{delay:1.2,duration:1.2}} 




          src={portfoliopic}
          alt="profilepic"
          className=' rounded-full border border-gray-300
                     sm:w-full sm:border-none
                     md:w-3/4 md:border-2
                     '
        />
      </div>
    </div>



      </div>
  
    </div>
  )
}

export default Hero
