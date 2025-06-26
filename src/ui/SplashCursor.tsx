import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Splash {
  id: number;
  x: number;
  y: number;
}

const SplashCursor: React.FC = () => {
  const [splashes, setSplashes] = useState<Splash[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSplash: Splash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setSplashes(prev => [...prev, newSplash]);

      setTimeout(() => {
        setSplashes(prev => prev.filter(splash => splash.id !== newSplash.id));
      }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Splash Effects */}
      <AnimatePresence>
        {splashes.map((splash) => (
          <motion.div
            key={splash.id}
            className="fixed pointer-events-none z-40"
            style={{
              left: splash.x - 25,
              top: splash.y - 25,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-blue-400" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: 1,
                  x: Math.cos((i * Math.PI * 2) / 8) * 30,
                  y: Math.sin((i * Math.PI * 2) / 8) * 30,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Demo content to test the splash effect */}
      <div className="min-h-screen bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6">Click Anywhere to See Splash Effect</h1>
          <p className="text-gray-300 mb-4">
            The cursor remains normal while clicking creates beautiful splash animations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-3">Interactive Area 1</h2>
              <p className="text-gray-400">Click here to test the splash effect!</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-3">Interactive Area 2</h2>
              <p className="text-gray-400">Or click here for more splashes!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SplashCursor;