import React from "react";
import { motion } from "framer-motion";

const resources = [
  {
    name: "IIMB",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863231/3_lm529o.png",
  },
  {
    name: "ISB",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863232/4_puxwiv.png",
  },
  {
    name: "McKinsey",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863233/6_mk1ggk.png",
  },
  {
    name: "Google",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863230/1_nrqbpw.png",
    style: { height: "65px" },
  },
  {
    name: "MIT",
    img: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863232/5_edeyds.png",
  },
];

export default function Resources() {
  return (
    <section className="py-12 sm:py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-[#00308A] mb-8 sm:mb-10 px-2 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        We Bring Resources &amp; Development from
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-16">
        {resources.map((r, i) => (
          <motion.div
            key={r.name}
            whileHover={{ scale: 1.13, rotate: 2 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg flex items-center justify-center w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
          >
            <img
              src={r.img}
              alt={r.name}
              className="max-h-16 max-w-20 sm:max-h-18 sm:max-w-22 md:max-h-22 md:max-w-28 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 