import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = '',
  hover = true,
  ...rest
}) => {
  const baseClasses =
    'glass-card backdrop-blur-md bg-glass-white border border-white/20 rounded-2xl p-6 shadow-lg shadow-black/20';
  const hoverClasses = hover
    ? 'hover:bg-white/[0.07] hover:border-white/30 transition-all duration-300'
    : '';

  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
