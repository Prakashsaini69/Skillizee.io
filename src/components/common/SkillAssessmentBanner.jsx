import React, { useState } from "react";

export default function SkillAssessmentBanner() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="w-full rounded-3xl bg-blue-100 flex flex-col md:flex-row items-center justify-between px-6 pt-8 md:pt-10 my-10 mb-20 shadow-sm relative overflow-hidden">
      <div className="flex-1 pb-8 md:pb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">
          Discover Your <span className="text-[#00308A]">Skill Assessment</span> Report
        </h2>
        <p className="text-[#00308A] text-base md:text-lg mb-6">
          Get a detailed analysis of your <span className="font-semibold">personality</span>, <span className="font-semibold">skills</span>, and <span className="font-semibold">career fit</span>. Uncover your strengths and areas for growth to make informed career decisions!
        </p>
        <button
          className="mt-2 px-6 py-3 bg-[#00308A] text-white font-bold rounded-xl shadow hover:bg-blue-600 transition-all text-lg"
          onClick={() => setShowPopup(true)}
        >
          Take the Test
        </button>
      </div>
      {/* Illustration with two overlapping images */}
      <div className="flex-1 flex justify-center items-end gap-4 mt-6 md:mt-0 relative min-h-[180px] md:min-h-[260px]">
        {/* Small image (left, lower, bigger and closer) */}
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749028233/SkillReport-1_b93psf.png"
          alt="Skill Report Example 1"
          className="w-32 md:w-56 shadow-lg rounded-lg z-20 mb-0 md:absolute md:left-8 md:bottom-0"
          style={{ boxShadow: '0 4px 16px rgba(55,125,255,0.10)' }}
        />
        {/* Large image (right, higher) */}
        <img
          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749028234/SkillReport-2_ut0uyc.png"
          alt="Skill Report Example 2"
          className="w-40 md:w-80 shadow-xl rounded-lg z-20 md:absolute md:right-0 md:top-0"
          style={{ boxShadow: '0 8px 32px rgba(55,125,255,0.13)' }}
        />
      </div>
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="bg-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center animate-popup"
            style={{ minWidth: 320, minHeight: 180 }}
          >
            <svg className="w-16 h-16 mb-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#00308A" strokeWidth="2" fill="#e0e7ff" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
            <h3 className="text-2xl font-bold text-[#00308A] mb-2">Coming Soon!</h3>
            <p className="text-gray-700 mb-6 text-center">Skill Assessment Test will be available soon. Stay tuned!</p>
            <button
              className="mt-2 px-6 py-2 bg-[#00308A] text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
          <style>{`
            @keyframes popup {
              0% { opacity: 0; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-popup {
              animation: popup 0.35s cubic-bezier(.4,2,.6,1) both;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
