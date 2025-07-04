import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&q=80",
  "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&q=80",
];

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export default function ImageSlideshowCard() {
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [index]);
  return (
    <div className="relative w-full h-full min-h-[180px] rounded-2xl bg-gray-100 flex items-center justify-center shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={IMAGES[index]}
          alt="Student or event"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
} 