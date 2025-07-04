import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/common/Footer";

const awards = [
  {
    title: "XPRESSION SHARK TANK",
    position: "1st Position",
    description: "",
    image: "/images/wall-of-fame-1.png"
  },
  {
    title: "BUSINESS PITCH COMPETITION",
    position: "3rd Position in Inter School Business",
    description: "",
    image: "/images/wall-of-fame-2.png"
  },
  {
    title: "FUTURE TECH OLYMPIAD 3.0",
    position: "Silver Medal",
    description: "",
    image: "/images/wall-of-fame-3.png"
  },
  {
    title: "TECHNOBUZZ IT QUIZ",
    position: "1st Position",
    description: "",
    image: "/images/wall-of-fame-4.png"
  },
  {
    title: "MED-INNOVATE 2025: IDEATHON AND STARTUP EXPO",
    position: "2nd Position",
    description: "",
    image: "/images/wall-of-fame-5.png"
  },
];

export default function WallOfFame() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#00308A] text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          WALL OF FAME
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {awards.map((award, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-xl bg-white flex flex-col md:flex-row items-center overflow-hidden border-2 border-[#00308A] hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={award.image} alt={award.title} className="w-full md:w-1/3 h-48 object-cover" />
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-[#00308A] mb-2">{award.title}</h2>
                <div className="text-lg font-semibold text-[#FFB800] mb-1">{award.position}</div>
                {award.description && <p className="text-gray-700">{award.description}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 