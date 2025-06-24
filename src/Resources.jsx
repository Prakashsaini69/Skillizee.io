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
    <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-[#377DFF] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        We Bring Resources &amp; Development from
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
        {resources.map((r, i) => (
          <motion.div
            key={r.name}
            whileHover={{ scale: 1.13, rotate: 2 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg flex items-center justify-center w-40 h-40"
          >
            <img
              src={r.img}
              alt={r.name}
              className="max-h-22 max-w-28 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
} 