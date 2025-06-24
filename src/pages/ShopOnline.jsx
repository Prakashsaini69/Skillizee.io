import React from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

export default function ShopOnline() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#00308A] text-center mb-8"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Shop Online
        </motion.h1>
        <motion.div
          className="mb-12 text-lg text-gray-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore our curated collection of learning kits, books, and exclusive SkilliZee merchandise. Shop with confidence and bring the SkilliZee experience home!
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
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Learning Kits</h2>
            <p className="text-gray-700">Hands-on kits for science, robotics, and creativity. Perfect for curious minds and future innovators.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Books & Resources</h2>
            <p className="text-gray-700">A selection of books and guides to inspire learning, growth, and exploration at every age.</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Merchandise</h2>
            <p className="text-gray-700">Show your SkilliZee pride with exclusive t-shirts, bags, and accessories. Limited edition drops available!</p>
          </motion.div>
          <motion.div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300" whileHover={{ scale: 1.03 }}>
            <h2 className="text-2xl font-bold text-[#00308A] mb-2">Gift Cards</h2>
            <p className="text-gray-700">Give the gift of learning! SkilliZee gift cards are perfect for birthdays, holidays, and special occasions.</p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 