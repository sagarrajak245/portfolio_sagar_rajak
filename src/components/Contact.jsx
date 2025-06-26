import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import { useState } from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import { RiTwitterXLine } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

import { CONTACT } from '../constants';
import GlassIcons from '../ui/GlassIcons';

const socialItems = [
  {
    icon: <FaLinkedin className="text-white text-xl" />,
    color: 'blue',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sagar-rajak-4b970b290/'
  },
  {
    icon: <FaGithub className="text-white text-xl" />,
    color: 'indigo',
    label: 'GitHub',
    url: 'https://github.com/sagarrajak245'
  },
  {
    icon: <RiTwitterXLine className="text-white text-xl" />,
    color: 'cyan',
    label: 'Twitter',
    url: 'https://twitter.com/Sagar00043'
  },
  {
    icon: <FaInstagram className="text-white text-xl" />,
    color: 'pink',
    label: 'Instagram',
    url: 'https://www.instagram.com/sagarrajak003'
  },
  {
    icon: <SiLeetcode className="text-white text-xl" />,
    color: 'orange',
    label: 'LeetCode',
    url: 'https://leetcode.com/u/sagarrajak245/'
  },
  {
    icon: <IoNewspaperOutline className="text-white text-xl" />,
    color: 'purple',
    label: 'Resume',
    url: 'https://drive.google.com/file/d/1eQGtiwthkigWOudRfsdSnGWErzLIU4ge/view?usp=sharing'
  }
];

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div id="contact" className="border-b border-neutral-200 pb-20 px-6">
      {/* Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center font-semibold md:text-6xl text-4xl "
      >
        Get in Touch...
      </motion.h1>

      {/* Contact Info */}
      <div className="text-center font-thin tracking-tighter space-y-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 text-silver"
        >
          <MapPin size={20} className="text-cyber-blue" />
          <p>{CONTACT.Address}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 text-silver"
        >
          <Phone size={20} className="text-cyber-purple" />
          <p>Mobile no: {CONTACT.phoneNo}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 text-silver cursor-pointer hover:text-cyber-green transition-colors duration-300"
          onClick={handleEmailCopy}
        >
          <Mail size={20} className="text-cyber-pink" />
          <span>{CONTACT.email}</span>
          {emailCopied ? (
            <Check size={18} className="text-cyber-green" />
          ) : (
            <Copy size={18} className="text-gray-400" />
          )}
        </motion.div>

        {/* Glass Icons */}
        <div className="flex justify-between my-20">
          <GlassIcons items={socialItems} />
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto mt-20">
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-xl border border-white/20 shadow-xl shadow-cyan-400/10">
          <h2 className="text-center text-2xl text-purple-600 font-semibold mb-8">Send a Message</h2>

          <form
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10 mix-blend-overlay"></div>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10 mix-blend-overlay"></div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent transition-all duration-300 resize-none"
              />
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-white/10 mix-blend-overlay"></div>
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-400/90 to-purple-600/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Send Message
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
