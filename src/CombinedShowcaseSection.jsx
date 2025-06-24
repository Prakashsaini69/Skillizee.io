import React from "react";
import { motion } from "framer-motion";
import ParentTestimonialCard from "./ParentTestimonialCard";
import StudentLandscape from "./StudentLandscape";
import StudentQuoteCard from "./StudentQuoteCard";
import ImageSlideshowCard from "./ImageSlideshowCard";

export default function CombinedShowcaseSection() {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto px-2 md:px-20 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#377DFF] mb-8 text-center">From the students of SkilliZee</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 md:h-[520px]">
        {/* Left: Parent Testimonial, portrait */}
        <div className="row-span-2 col-span-1 h-full">
          <div className="h-full w-full flex items-stretch">
            <ParentTestimonialCard />
          </div>
        </div>
        {/* Top right: StudentLandscape, landscape */}
        <div className="col-span-2 row-span-1">
          <div className="h-full w-full flex items-stretch">
            <StudentLandscape />
          </div>
        </div>
        {/* Bottom right: Two cards side by side */}
        <div className="col-span-2 row-span-1 grid grid-cols-2 gap-4 mt-2">
          <StudentQuoteCard />
          <ImageSlideshowCard />
        </div>
      </div>
    </motion.section>
  );
} 