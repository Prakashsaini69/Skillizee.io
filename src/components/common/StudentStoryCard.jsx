import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stories = [
  {
    name: "Satvik",
    action: "TRANSFORMED",
    actionColor: "#00308A",
    headline: "HIS PASSION INTO IMPACT",
    age: 10,
    pronounce: "HE",
    achievements: [
      {
        text: "Launched an online platform where people can explore unique eco-friendly stationery, made with sustainable materials. Every product is crafted with attention to detail and environmental care."
      },
      { text: "Created engaging tutorials to help kids learn about recycling and upcycling everyday objects into useful tools for school and home." },
      { text: "Published a digital magazine featuring stories and interviews with young inventors, aiming to inspire creativity and problem-solving." },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1753694845/10_znj7f0.svg", // Replace with your combined image
  },
  {
    name: "Daksh",
    action: "REVOLUTIONIZED",
    actionColor: "#00308A",
    headline: "THE WAY KIDS LEARN",
    age: 13,
    pronounce: "HE",
    achievements: [
      { text: "Designed a prototype for a mobile app where kids can learn through interactive, gamified experiences that make education fun and engaging." },
      { text: "Integrated quizzes, rewards, and challenges to motivate young learners and help them track their progress." },
      { text: "Developed colorful animations and playful characters to create an immersive learning environment tailored for children." },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1753694845/12_ryjvnh.svg", // Replace with your combined image
  },
  {
    name: "Manya",
    action: "CRAFTED  ",
    actionColor: "#00308A",
    headline: "INNOVATION FOR FOOD LOVERS",
    age: 12,
    pronounce: "SHE",
    achievements: [
      { text: "Developed a website featuring an amazing UI where users can instantly generate the recipe for any dish, simply by searching its name." },
      { text: "Designed interactive features that help users customize ingredient options, making the experience personal and engaging for cooks of all skill levels." },
      { text: "Added helpful cooking tips and techniques, empowering fellow young chefs to try out global cuisines from the comfort of their homes." },
    ],
    mainImage: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1753694845/11_y32dfg.svg", // Replace with your combined image
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
              <div className="text-lg font-bold text-gray-900 mb-2 mt-2 uppercase tracking-wide">AT THE AGE OF {story.age} {story.pronounce} Has</div>
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