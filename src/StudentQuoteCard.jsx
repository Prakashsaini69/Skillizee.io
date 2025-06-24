import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUOTES = [
  { quote: "More helpful than I could have imagined.", name: "Subhadip Santara" },
  { quote: "I loved the hands-on projects!", name: "Aarav Singh" },
  { quote: "The teachers made learning fun.", name: "Meera Patel" },
];

const variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
};

export default function StudentQuoteCard() {
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [index]);
  const quote = QUOTES[index];
  return (
    <div className="relative w-full h-full min-h-[180px] rounded-2xl bg-[#377DFF] flex flex-col items-center justify-center shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mb-2">
            <text x="0" y="32" fontSize="32" fill="#fff" fontWeight="bold">“”</text>
          </svg>
          <span className="text-white text-xl font-semibold text-center px-4">{quote.quote}</span>
          <span className="mt-3 text-white/80 text-base font-medium">{quote.name}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 