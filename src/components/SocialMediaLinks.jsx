

// import resume from "..assets/sagarrajak_resume.pdf";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoNewspaperOutline } from "react-icons/io5";
import { RiTwitterXLine } from 'react-icons/ri';
import { SiLeetcode } from "react-icons/si";

function SocialMediaLinks() {
  return (
    <div className='m-6 h-auto text-2xl flex gap-4 justify-center items-center'>
      <a href="https://www.linkedin.com/in/sagar-rajak-4b970b290/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300">
        <FaLinkedin />
      </a>
      <a href="https://github.com/sagarrajak245" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Sagar00043"  target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300">
        <RiTwitterXLine />
      </a>
      <a href="https://www.instagram.com/sagarrajak003" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300">
        <FaInstagram /> 
      </a>

<a  href=" https://leetcode.com/u/sagarrajak245/"  target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300" >

<SiLeetcode />
</a>
<a  href={"https://drive.google.com/file/d/1Pu_2SkmOZ9h9tX3sToB_3XEs6SGAV3Xj/view?usp=sharing"}  target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400 transition-colors duration-300" >

<IoNewspaperOutline />
</a>

    </div>
  );
}

export default SocialMediaLinks; 

// "https://drive.google.com/drive/u/0/folders/1lo9t36Olet0_6KJhpVvVzMTmcZiclEOa"