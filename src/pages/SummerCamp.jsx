import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

export default function SummerCamp() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#00308A] text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Summer Camp
        </motion.h1>
        <motion.div
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join our immersive Summer Camp experience! Explore new skills, make friends, and have fun with hands-on activities, workshops, and challenges designed for future leaders.
        </motion.div>
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
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Workshops</h2>
            <p className="text-gray-700">Participate in interactive workshops on coding, entrepreneurship, design thinking, and more. Led by industry experts and passionate mentors.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Fun Activities</h2>
            <p className="text-gray-700">Enjoy team-building games, creative challenges, and outdoor adventures. Every day brings something new and exciting!</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Skill Showcases</h2>
            <p className="text-gray-700">Show off your new skills in our end-of-camp showcase. Present projects, win awards, and celebrate your achievements with friends and family.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Mentorship</h2>
            <p className="text-gray-700">Get personalized guidance from experienced mentors. Build confidence, leadership, and a growth mindset for the future.</p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 