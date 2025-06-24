import React from "react";

export default function FloatingCTAs() {
  return (
    <>
      {/* Sticky Enroll on mobile */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <button className="bg-gradient-to-r from-[#0ea5e9] to-[#a21caf] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition text-lg">Enroll Now</button>
      </div>
      {/* Sticky Filter on desktop */}
      <div className="hidden md:block fixed top-1/2 right-6 z-40">
        <button className="bg-white/90 text-[#00308A] font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition border border-[#0ea5e9]">Filter</button>
      </div>
    </>
  );
} 