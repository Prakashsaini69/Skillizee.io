import React from "react";

export default function SearchAndFilter() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 items-center md:items-end sticky top-20 z-20 bg-white/10 rounded-2xl shadow backdrop-blur">
      <input
        type="text"
        placeholder="Search courses..."
        className="flex-1 px-4 py-2 rounded-lg border border-white/20 bg-white/80 text-[#00308A] placeholder:text-[#00308A]/60 font-semibold shadow"
      />
      <select className="px-4 py-2 rounded-lg border border-white/20 bg-white/80 text-[#00308A] font-semibold">
        <option>All Ages</option>
        <option>Kids</option>
        <option>Teens</option>
        <option>Adults</option>
      </select>
      <select className="px-4 py-2 rounded-lg border border-white/20 bg-white/80 text-[#00308A] font-semibold">
        <option>All Levels</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
      <select className="px-4 py-2 rounded-lg border border-white/20 bg-white/80 text-[#00308A] font-semibold">
        <option>Sort by Popularity</option>
        <option>Sort by Rating</option>
        <option>Sort by Price</option>
      </select>
    </section>
  );
} 