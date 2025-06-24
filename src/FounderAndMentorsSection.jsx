import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillAssessmentBanner from "./SkillAssessmentBanner";

const FOUNDERS = [
  // {
  //   name: "Ankur Warikoo",
  //   img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749025694/12123123_yqbgdf.png",
  // },
  // {
  //   name: "Ankur Warikoo 2",
  //   img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749110579/1742362591517_y57c6u.png",
  // },
  {
    name: "Ankur Warikoo 3",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749110579/1735758197204_lcgskh.png",
  },
  // {
  //   name: "Ankur Warikoo 3",
  //   img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749110579/1744177634720_gojnjp.png",
  // },
];

const MENTORS = [
  {
    name: "Lata Rawat",
    title: "Child Psychologist",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020680/Rectangle_235_hfqbff.png",
    company: "Cambridge Court Group of Schools",
    logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749021131/CCGS_itd2lq.svg",
    logoClassName: "h-8 w-auto", // Uncomment and adjust this to change this logo's size
  },
  {
    name: "Alanna Lazarowich",
    title: "Guest Faculty",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020679/Rectangle_236_mnoxxq.png",
    company: "Kellogg",
    logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749021131/Kellogg_rcwtvl.svg",
    logoClassName: "h-16 w-32", // Increased size for Kellogg
  },
  {
    name: "Kartik Vyas",
    title: "Engagement Manager",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020678/Rectangle_237_xgbima.png",
    company: "McKinsey & Company",
    logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863233/6_mk1ggk.png",
    logoClassName: "h-16 w-32", // Increased size for McKinsey
  },
  {
    name: "Richie Gandhi",
    title: "Head of Business Development",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749020677/Rectangle_238_ktcbb7.png",
    company: "Pinnacle",
    logo: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1749021130/Pinnacle_jysxgf.svg",
    logoClassName: "h-10 w-24", // Example: adjust as needed
  },
];

const founderText = {
  title: "About the founder",
  desc1:
    "Dr. Aarna Singh Rawat is an educator, entrepreneur, and changemaker. She is the founder of SkilliZee, India's first Harvard-style experiential learning program for K-12 students, focused on building META skills like critical thinking, emotional intelligence, and adaptability.",
  desc2:
    "A graduate of ISB and Northwestern University's Kellogg School of Management, Aarna leads seven K-12 schools and a college, impacting over 13,000 students.",
  desc3:
    "She has been recognized nationally, winning The Economic Times' Women Entrepreneur of the Year 2024 and Most Innovative Ed-Tech Founder 2023 by Kitekrafts. She introduced TED-Ed in Indian schools and collaborates with global experts to make future-ready learning a reality—one skill at a time.",
};

const founderVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.5 } },
};

const mentorVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function FounderAndMentorsSection() {
  const [founderIdx, setFounderIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setFounderIdx((prev) => (prev + 1) % FOUNDERS.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [founderIdx]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
      <SkillAssessmentBanner />
      {/* Founder Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-12 md:min-h-[340px]">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            About the <span className="text-[#00308A]">founder</span>
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-4">{founderText.desc1}</p>
          <p className="text-gray-700 text-base md:text-lg">{founderText.desc2}</p>
          <br />
          <p className="text-gray-700 text-base md:text-lg">{founderText.desc3}</p>
        </div>
        {/* Right: Founder Image with Blob */}
        <div className="relative flex-1 flex items-center justify-center min-w-[260px] min-h-[260px] h-full md:h-[340px]">
          {/* Background SVG image behind founder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749027064/Group2_zizk22.svg"
              alt=""
              className="z-0 w-[260px] h-[260px] object-contain"
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 8, -8, 0],
                filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="relative z-10 flex items-center justify-center w-[260px] h-[260px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={founderIdx}
                src={FOUNDERS[founderIdx].img}
                alt={FOUNDERS[founderIdx].name}
                variants={founderVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-60 h-60 object-contain"
                style={{ borderRadius: 24 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* Mentors Heading */}
      <h3 className="text-2xl md:text-3xl font-bold text-center text-[#00308A] mb-8">Meet Our Mentors</h3>
      {/* Mentors Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {MENTORS.map((mentor, i) => (
          <motion.div
            key={mentor.name}
            className="flex flex-col items-center gap-0"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={mentorVariants}
            whileHover={{ scale: 1.07, boxShadow: "0 0 24px rgb(253, 186, 87), 0 0 32px rgb(255, 183, 68)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* White card with mentor image */}
            <motion.div
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center w-full pt-6 pb-0 px-6"
              style={{ minHeight: 260 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: i * 0.18, duration: 0.6 } }}
              exit={{ opacity: 0, y: 40 }}
            >
              <img src={mentor.img} alt={mentor.name} className="w-full h-44 object-contain mb-0" />
            </motion.div>
            {/* Blue card with name and company, pops out below */}
            <motion.div
              className="w-[90%] bg-[#00308A] rounded-xl flex flex-col items-center py-3 px-2 shadow-lg -mt-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              whileHover={{ scale: 1.08, boxShadow: "0 0 16px #fff, 0 0 32px #377dff" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.25 + i * 0.18, duration: 0.6 }}
            >
              <span className="text-white font-bold text-base mb-1">{mentor.name}</span>
              <span className="text-blue-100 text-xs mb-2">{mentor.title}</span>
              <div className="flex items-center gap-2 w-full">
                <div className="w-full max-w-xs h-16 flex items-center justify-center bg-white rounded px-4">
                  <img
                    src={mentor.logo}
                    alt={mentor.company}
                    className={`max-h-full object-contain ${mentor.logoClassName || ''}`}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 