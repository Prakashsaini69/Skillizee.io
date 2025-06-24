import React from "react";

export default function SkillAssessmentBanner() {
  return (
    <div className="w-full rounded-3xl bg-blue-100 flex flex-col md:flex-row items-center justify-between px-6 pt-8 md:pt-10 my-10 mb-20 shadow-sm relative overflow-hidden">
      <div className="flex-1 pb-8 md:pb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Discover Your <span className="text-[#377DFF]">Skill Assessment</span> Report
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Get a detailed analysis of your <span className="font-semibold">personality</span>, <span className="font-semibold">skills</span>, and <span className="font-semibold">career fit</span>. Uncover your strengths and areas for growth to make informed career decisions!
        </p>
        <button className="mt-2 px-6 py-3 bg-[#377DFF] text-white font-bold rounded-xl shadow hover:bg-blue-600 transition-all text-lg">
          Take the Test
        </button>
      </div>
      {/* Illustration with two overlapping images */}
      <div className="flex-1 flex justify-end mt-6 md:mt-0 relative min-h-[180px] md:min-h-[260px]">
        {/* Small image (left, lower, bigger and closer) */}
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749028233/SkillReport-1_b93psf.png"
          alt="Skill Report Example 1"
          className="absolute left-8 bottom-0 w-40 md:w-56 shadow-lg rounded-lg z-20 -mb-2"
          style={{ boxShadow: '0 4px 16px rgba(55,125,255,0.10)' }}
        />
        {/* Large image (right, higher) */}
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749028234/SkillReport-2_ut0uyc.png"
          alt="Skill Report Example 2"
          className="absolute right-0 top-0 w-48 md:w-80 shadow-xl rounded-lg z-20"
          style={{ boxShadow: '0 8px 32px rgba(55,125,255,0.13)' }}
        />
      </div>
    </div>
  );
}
