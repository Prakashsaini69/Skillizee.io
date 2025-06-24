import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    review: "I have met Aarna, and her vision for education is what schools need today. SkilliZee is a platform that nurtures real-world leadership, not just test scores. It cultivates young minds to think, reflect, and grow — exactly the skills we look for in global leaders.",
    parent: "Alanna Lazarowich",
    child: "Guest Professor, Kellogg University",
    designation: "",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    review: "In a world where skill gaps show up well before employment, SkilliZee bridges them right at the school level. It's data-driven, strategic, and scalable — a model every institution should explore.",
    parent: "Kartik Vyas",
    child: "Engagement Manager, McKinsey & Company",
    designation: "",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    review: "At startups, we value thinkers and doers — and SkilliZee is creating them from Grade 4. It's rare to find an educational solution that's so aligned with the real-world pace and problem-solving mindset.",
    parent: "Utkarsh Verma",
    child: "Ex-Director at Zepto & Swiggy",
    designation: "",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    review: "SkilliZee doesn't just build skills — it builds brands. Each student becomes a unique story of growth, ready for top universities and beyond — and that's smart positioning by any school's standards.",
    parent: "Kiran Padeda",
    child: "Professor of Marketing, Indian School of Business (ISB)",
    designation: "",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    review: "At LinkedIn, we see the growing need for early, authentic skill-building. SkilliZee's approach to creating lifetime learner profiles is a brilliant step toward preparing future-ready individuals.",
    parent: "Henry Lee",
    child: "LinkedIn | Enterprise Talent & Learning Solutions | Youth and Students",
    designation: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
];

const variants = {
  initial: { opacity: 0, x: 0, y: 0 },
  animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 0, y: 0, transition: { duration: 0.4 } },
};

export default function ParentTestimonialCard() {
  const [index, setIndex] = useState(0);
  const testimonial = TESTIMONIALS[index];

  const handlePrev = () => setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  // Auto-advance every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 4500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full max-w-sm min-h-[400px] rounded-2xl bg-gradient-to-br from-[#377DFF] to-[#1A2980] p-6 flex flex-col justify-between shadow-xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex flex-col h-full"
        >
          
          <p className="text-white/90 text-base leading-relaxed mb-4 mt-2">“{testimonial.review}”</p>
          <div className="mt-auto flex flex-col gap-1 mb-8">
            <span className="text-white font-semibold text-sm">{testimonial.parent} <br></br>
            <span className="text-white/60 font-normal">(Parent of {testimonial.child})</span>
            </span>
            <span className="text-blue-100 text-xs">{testimonial.designation}</span>
          </div>
          <motion.img
            src={testimonial.image}
            alt={testimonial.parent}
            className="absolute bottom-0 right-[-15px] w-40 h-auto object-contain"
            // variants={variants}
          />
        </motion.div>
      </AnimatePresence>
      {/* Navigation Buttons */}
      <div className="absolute left-4 bottom-4 flex gap-2 z-10">
        <button
          onClick={handlePrev}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white text-lg focus:outline-none"
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 15L8 10L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white text-lg focus:outline-none"
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
} 