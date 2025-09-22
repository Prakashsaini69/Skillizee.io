"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

// --- Data: team members ---
const people = [
  {
    id: 1,
    name: "Arjun Vaidya",
    role: "Founder of Dr. Vaidya's",
    profile: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1758392599/Untitled_design_9_rhqrjt.svg",
    instagram: "https://www.instagram.com/abvaidya/",
  },
  {
    id: 2,
    name: "Smit Thakkar",
    role: "One of India's Top Financial Creator",
    profile: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1758392598/Untitled_design_10_gtdddg.svg",
    instagram: "https://www.instagram.com/iam_smitthakkar/",
  },
  {
    id: 3,
    name: "RJ Arjun",
    role: "Radio jockey at 93.5 Red FM",
    profile: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1758392428/Untitled_design_8_cx5bux.svg",
    instagram: "https://www.instagram.com/rjarjunkapage/",
  },
  {
    id: 4,
    name: "Ankur Warikoo",
    role: "Entrepreneur & Author",
    profile: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1758392945/Untitled_design_12_tcjiyk.svg",
    instagram: "https://www.instagram.com/ankurwarikoo/",
  },
  {
    id: 5,
    name: "Abhishek Sharma",
    role: "Standup Comedian",
    profile: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1758392595/Untitled_design_11_qsxkde.svg",
    instagram: "https://www.instagram.com/abhisheksharma6060?igsh=MTlhMGprNXM3eXllag%3D%3D",
  },
];

// --- Utility for fallback images ---
const safeImage = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.target as HTMLImageElement;
  target.src = "https://placehold.co/100x100/E0E7FF/4338CA?text=Error";
};

// --- Custom hook for mobile detection ---
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const checkScreenSize = (): void => setIsMobile(window.innerWidth < breakpoint);
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [breakpoint]);
  
  return isMobile;
};

// --- Main Component ---
export default function OrbitCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const isMobile = useIsMobile();

  const containerRadius = isMobile ? 160 : 250;
  const profileSize = isMobile ? 60 : 90;
  const containerSize = isMobile ? 320 : containerRadius * 2 + 120;

  // Calculate rotation for each profile
  const getRotation = React.useCallback(
    (index: number): number => (index - activeIndex) * (360 / people.length),
    [activeIndex]
  );

  // Navigation
  const next = () => setActiveIndex((i) => (i + 1) % people.length);
  const prev = () => setActiveIndex((i) => (i - 1 + people.length) % people.length);

  const handleProfileClick = React.useCallback((index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  }, [activeIndex]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft') prev();
      else if (event.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-rotation
  React.useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div 
      className="flex flex-col items-center p-2 md:p-4 relative min-h-[400px] md:min-h-[500px] transition-colors duration-300"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

      <div
        className="relative flex items-center justify-center"
        style={{ width: containerSize, height: containerSize }}
      >

        {/* Active Person Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={people[activeIndex].id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            className="z-10 bg-white backdrop-blur-sm shadow-xl rounded-xl p-2 md:p-6 w-40 md:w-64 text-center border border-gray-200"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              src={people[activeIndex].profile}
              alt={people[activeIndex].name}
              onError={safeImage}
              className="w-12 h-12 md:w-24 md:h-24 rounded-full mx-auto -mt-8 md:-mt-16 border-4 border-white object-cover shadow-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <h2 className="mt-2 text-base md:text-lg font-bold text-gray-800">
                {people[activeIndex].name}
              </h2>
              <div className="flex items-center justify-center text-xs md:text-sm text-gray-600 mt-1">
                <Briefcase size={12} className="mr-1" /> 
                <span className="truncate">{people[activeIndex].role}</span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex justify-center items-center mt-3 space-x-2"
            >
              <button
                onClick={prev}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={16} className="text-gray-700" />
              </button>
              <a 
                href={people[activeIndex].instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors inline-block"
              >
                Connect
              </a>
              <button
                onClick={next}
                className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={16} className="text-gray-700" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Profiles with Counter-Rotation */}
        {people.map((p, i) => {
          const rotation = getRotation(i);
          const isActive = i === activeIndex;
          
          return (
            <motion.div
              key={p.id}
              animate={{
                transform: `rotate(${rotation}deg) translateY(-${containerRadius}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: isActive ? 0 : Math.abs(i - activeIndex) * 0.05
              }}
              style={{
                width: profileSize,
                height: profileSize,
                position: "absolute",
                top: `calc(50% - ${profileSize / 2}px)`,
                left: `calc(50% - ${profileSize / 2}px)`,
                zIndex: isActive ? 20 : 10,
              }}
            >
              {/* Counter-rotation to keep image upright */}
              <motion.div
                animate={{ rotate: -rotation }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
                className="w-full h-full"
              >
                <motion.img
                  src={p.profile}
                  alt={p.name}
                  onError={safeImage}
                  onClick={() => handleProfileClick(i)}
                  whileHover={{ 
                    scale: 1.15,
                    boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full h-full object-cover rounded-full cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "border-4 border-indigo-500 shadow-lg" 
                      : "border-2 border-gray-300 hover:border-indigo-400"
                  }`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {people.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex 
                ? "bg-indigo-600" 
                : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
