/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const MetallicIcon = ({
  Icon,
  size = 24,
  className = '',
  color = 'cyber-blue'
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.1,
        rotateY: 15,
        rotateX: 5,
      }}
      transition={{ duration: 0.3 }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${color} to-${color}/60 rounded-lg blur-sm opacity-50`}
        style={{ transform: 'translateZ(-2px)' }}
      />
      <Icon
        size={size}
        className={`relative z-10 text-${color} drop-shadow-lg`}
        style={{
          filter: 'drop-shadow(0 0 8px currentColor)',
          textShadow: '0 0 10px currentColor',
        }}
      />
    </motion.div>
  );
};

export default MetallicIcon;
