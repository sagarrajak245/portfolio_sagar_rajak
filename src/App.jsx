



// import { useEffect, useState } from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {

  // const [theme, setTheme] = useState('light');

  // // Load saved theme from localStorage on component mount
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(savedTheme);
  // }, []);

  // // Apply theme class to the body
  // useEffect(() => {
  //   document.body.className = theme;
  // }, [theme]);

  // // Toggle theme and save to localStorage
  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme); 
  // };



  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative'>  
      {/* Background layers */}
      <div className='fixed top-0 -z-10 min-h-screen w-full  '>
        
      <div className="absolute top-0 z-[-2] min-h-screen w-full bg-neutral-950  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(150,90,198,0.30),rgba(255,255,255,0))]"></div>
        
        </div> 
   
      
      {/* Main content */}
      <div className='container mx-auto px-8'>  
        <Navbar  />   
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Achievements />
        <br /> <br />
        <Contact />
      </div>
    </div>
  )
}

export default App    


// import React from 'react'
// import About from './components/About'
// import Hero from './components/Hero'
// import Navbar from './components/Navbar'

// function App() {
//   return (
//     <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative'> 
//       {/* Background layer */}
//       <div className='fixed top-0 left-0 w-full h-full z-[-1] bg-neutral-950'></div>
//       <div className='absolute top-0 left-0 w-full min-h-full z-[-2] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(150,9,198,0.28),rgba(255,255,255,0))]'></div>
      
//       {/* Main content */}
//       <div className='container mx-auto px-8'>
//         <Navbar />
//         <Hero />
//         <About />
//       </div>
//     </div>
//   )
// }

// export default App 
