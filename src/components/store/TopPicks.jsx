import React from "react";
import { motion } from "framer-motion";

export default function TopPicks() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749295366/best-value_pvul1r.gif" alt="lightning" className="w-21 h-20 mb-2" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00308A] mb-2">Top Picks</h2>
        <p className="text-lg text-[#00308A] mb-8">Student-approved and trusted by parents</p>
      </motion.div>
      <motion.div
        className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721296.png" alt="course" className="w-32 h-32 rounded-2xl bg-[#00CFFF] p-2" />
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-yellow-400 text-2xl">★ ★ ★ ★ ☆</span>
            <span className="text-[#00308A] font-semibold">4.65 out of 5</span>
          </div>
          <h3 className="text-2xl font-bold text-[#00308A]">Coding Champion II</h3>
          <p className="text-[#00308A]">Advanced Coding Course for Kids (Grades 2 to 3)</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">60 min</span>
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">Live 1:1 Sessions</span>
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">Age 6-8</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 min-w-[120px]">
          <span className="line-through text-gray-400 text-lg">$5499</span>
          <span className="text-3xl font-extrabold text-[#00308A]">$4199</span>
          <span className="text-xs text-[#00308A]">150 Sessions ( x $28 per session )</span>
          <button className="mt-2 px-6 py-2 bg-purple-500 text-white font-bold rounded-full shadow hover:bg-purple-600 transition-all text-lg">Learn More</button>
        </div>
      </motion.div>
    </section>
  );
} 