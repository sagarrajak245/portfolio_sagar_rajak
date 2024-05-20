import React from 'react';
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { RiTwitterXLine } from "react-icons/ri";
import logo from '../assets/dev.png';
import SocialMediaLinks from './SocialMediaLinks';

function Navbar( ) { 
  return (
    <nav className='   mb-20   flex  items-center justify-between    py-2'>
<div className='flex flex-shrink-0 items-center  '>
<img src={logo} className='ml-2  h-14 w-auto pl-2' alt="logo" />
</div> 
<div className='m-6 h-auto item-center text-2xl flex gap-4 justify-center'>
    <SocialMediaLinks/> 
{/* 
<button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded">
          Toggle Theme
        </button> */}

</div>




    </nav>
  )
}

export default Navbar 

