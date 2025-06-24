import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

export default function LearnMore() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#00308A] text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Learn More
        </motion.h1>
        <motion.div
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover how SkilliZee is shaping the next generation of leaders, innovators, and problem solvers. Our approach blends real-world skills, emotional intelligence, and a growth mindset to empower students for the future.
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
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Our Mission</h2>
            <p className="text-gray-700">To nurture young minds with the skills, confidence, and mindset needed to thrive in a rapidly changing world. We focus on critical thinking, creativity, and real-world problem solving.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Futuristic Learning</h2>
            <p className="text-gray-700">Our curriculum is designed to be adaptive, interactive, and forward-thinking. We use the latest technology and teaching methods to ensure every student is future-ready.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Personalized Growth</h2>
            <p className="text-gray-700">Every learner is unique. Our platform personalizes the learning journey, helping students discover their strengths and passions through hands-on projects and mentorship.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Community & Support</h2>
            <p className="text-gray-700">Join a vibrant community of learners, mentors, and industry leaders. We provide ongoing support, networking, and opportunities for real-world impact.</p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 