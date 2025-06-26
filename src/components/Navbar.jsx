
// import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// import { RiTwitterXLine } from "react-icons/ri";
import SocialMediaLinks from './SocialMediaLinks';
// import Swapicons from './Swapicons';




function Navbar() {
  return (
    <>
      <nav className='mb-20 flex items-center justify-between py-2'>
        <div className='flex flex-shrink-0 items-center p'>

        </div>
        <div className='m-6 h-auto item-center text-2xl flex gap-4 justify-center'>
          <SocialMediaLinks />
        </div>
      </nav>
      {/* Underline below navbar
      <hr className="border-t-1 border-gray-300 " /> */}
    </>
  )
}

export default Navbar

