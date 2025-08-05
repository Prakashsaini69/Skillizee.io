import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg" 
            alt="GudGum Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-[#0a2540] mb-4">
          Loading GudGum Internship
        </h2>
        <p className="text-gray-600 mb-8">
          Preparing your sustainable branding journey...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <p className="text-sm text-gray-500">
          {Math.round(progress)}%
        </p>

        {/* Loading Spinner */}
        <div className="mt-6">
          <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader; 