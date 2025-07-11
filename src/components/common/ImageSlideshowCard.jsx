import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235785/IMG_0272_kciihj.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235786/IMG_0241_lrvcmr.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235788/IMG_3747_gn9peb.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235791/IMG_E8169_qocimx.jpg",
  "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752235796/IMG_0378_f9t9i8.jpg",
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