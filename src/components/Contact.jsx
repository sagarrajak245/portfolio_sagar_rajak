import { motion } from 'framer-motion'

import { CONTACT } from '../constants'

function Contact() {
  return (
    <div  className=' border-b border-neutral-200 pb-20'>
    <motion.h1 
    
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1}}
    
    className='my-10 text-center font-thin text-4xl'>
        Get in Touch...</motion.h1>   
        <div  className='text-center font-thin  tracking-tighter'>
            <motion.p
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}

            transition={{duration:1}}
            
            className='my-4 text-silver  '>
{CONTACT.Address}
            </motion.p>

            <motion.p  
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            
            className='my-4  text-silver '>Mobile no : {CONTACT.phoneNo} </motion.p>
            <motion.div     
            
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}

            transition={{duration:1}}
            
            >
        <span >email address :    <a href="#"  className='  text-silver '>{CONTACT.email}</a>
        </span> 
        </motion.div>   
        </div> 
      
    </div>
  )
}

export default Contact

