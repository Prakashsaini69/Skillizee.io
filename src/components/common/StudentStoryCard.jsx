import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stories = [
  {
    name: "Eleanor",
    action: "BROUGHT",
    actionColor: "#00308A",
    headline: "CREATIVITY TO HER FAMILY'S BUSINESS",
    age: 10,
    achievements: [
      {
        text: (
          <>Built a website and marketing materials for her family's bee far, <br /><a href="#" className="underline">Hive Hideaway</a>, and expanded the product line to "Adopt a Hive" subscription and farm tours – which made over $1500</>
        ),
      },
      { text: "Wrote a book that educates kids about the natural world" },
      { text: "Building a website and blog to teach kids about space travel, and working to land an interview with her role model, Neil de Grasse Tyson" },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752832707/6691475f8163d78ea014dac5_Eleanor_Student_Story_with_Product-min_kbcwvc.webp", // Replace with your combined image
  },
  {
    name: "Millie",
    action: "WROTE",
    actionColor: "#00308A",
    headline: "A NEWSLETTER & BOOK ON NATURE & SUSTAINABILITY",
    age: 12,
    achievements: [
      { text: "Created her own blog and newsletter, Adventures of a Young Naturalist" },
      { text: "Interviewed conservationists, professors, and nonprofit directors to share their work" },
      { text: "Published a book that educates kids about the natural world" },
      { text: "Had her blog featured by Harvard Business Publishing after covering the Mt. Everest teamwork simulation" },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752832695/6691475ea1fa17ba48849c4e_Frame_175-min_jufneg.webp", // Replace with your combined image
  },
  {
    name: "Matthew",
    action: "CREATED",
    actionColor: "#00308A",
    headline: "& SOLD HIS OWN SPACE-THEMED COLORING BOOKS",
    age: 11,
    achievements: [
      { text: "Created Spacecraft Designs, a company that sells coloring books on Etsy with 34+ sales" },
      { text: "Built video games and videos using AI" },
      { text: "Wrote a book that educates kids about the natural world" },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1752832707/6691475e26c1206d3319f922_Mathew_Student_Story_with_Product_1-min_t1n5pj.webp", // Replace with your combined image
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 400 : -400,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.5, type: "spring" },
  },
  exit: (direction) => ({
    x: direction < 0 ? 400 : -400,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.5, type: "spring" },
  }),
};

export default function StudentStoryCard() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const story = stories[index];

  const paginate = (newDirection) => {
    setIndex(([prev, _]) => {
      let next = prev + newDirection;
      if (next < 0) next = stories.length - 1;
      if (next >= stories.length) next = 0;
      return [next, newDirection];
    });
  };

  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 flex items-center justify-center rounded-3xl shadow-lg py-10 relative overflow-hidden min-h-[560px] min-w-[340px] bg-[#ffffff] transition-shadow duration-300 group hover:shadow-[0_0_0_4px_#00308A,0_10px_32px_rgba(0,48,138,0.15)]">
      {/* Left Arrow (vertically centered) */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#00308A] hover:bg-[#00308A] text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg z-10 hidden md:flex"
        aria-label="Previous story"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      {/* Slide Content (image + text) */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[500px] h-full bg-[#ffffff]">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col md:flex-row items-center justify-center w-full h-full relative"
            style={{ minHeight: 500, minWidth: 340 }}
          >
            {/* Images */}
            <div className="md:mr-8 flex-shrink-0 bg-[#fffffff]">
              <img
                src={story.mainImage}
                alt={story.name}
                className="rounded-2xl w-[340px] h-[340px] object-cover"
                // style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              />
            </div>
            {/* Text */}
            <div className="flex-1 flex flex-col items-start justify-center max-w-2xl pl-0 md:pl-8 mt-10 md:mt-0 h-full">
              <div className="text-lg font-semibold text-gray-800 mb-1">{story.name}</div>
              <div className="text-5xl md:text-6xl font-extrabold mb-2" style={{ color: story.actionColor, lineHeight: 1 }}>{story.action}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ lineHeight: 1.1 }}>{story.headline}</div>
              <div className="text-lg font-bold text-gray-900 mb-2 mt-2 uppercase tracking-wide">AT THE AGE OF {story.age}{story.name === "Matthew" ? ", MATTHEW HAS:" : story.name === "Millie" ? ", SHE HAS:" : ", SHE HAS:"}</div>
              <ul className="space-y-4">
                {story.achievements.map((ach, i) => (
                  <li key={i} className="flex items-start gap-2 text-lg md:text-xl text-gray-800">
                    <span className="mt-1">
                      <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="2" fill="none"/><path d="M8 12l2 2 4-4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{ach.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Right Arrow (vertically centered) */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#00308A] hover:bg-[#00308A] text-white rounded-xl w-14 h-14 flex items-center justify-center shadow-lg z-10 hidden md:flex"
        aria-label="Next story"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </section>
  );
} 