import React, { useState } from "react";
// Lottie-player CDN is used in HTML, but in React, we can use <lottie-player> as a web component or fallback to images if SSR fails.
// For now, we use <lottie-player> as in your HTML, and Tailwind for styling.
import { motion } from "framer-motion";

// Import data from existing store components
import StoreInternships from "../components/store/StoreInternships";
import StoreCourses from "../components/store/StoreCourses";
import StoreSPBLs from "../components/store/StoreSPBLs";
import StoreCaseStudies from "../components/store/StoreCaseStudies";
import StoreFAQTabs from "../components/store/StoreFAQTabs";
import Footer from "../Footer";
import StoreMemberships from "../components/store/StoreMemberships";

const navLinks = [
  { id: "internship", label: "Internship" },
  { id: "short-courses", label: "Short Courses" },
  { id: "sbpl", label: "SBPL" },
  { id: "case-studies", label: "Case Studies" },
  { id: "packages", label: "Packages" },
  { id: "membership", label: "Membership" },
];

const gradeGroups = ["all", "4-6", "7-12"];

export default function StoreV2() {
  const [selectedGradeGroup, setSelectedGradeGroup] = useState("all");

  // Smooth scroll for nav links (robust, only for nav bar links)
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handler = (e) => {
      // Only handle clicks on nav bar links
      const anchor = e.target.closest('a');
      if (anchor && nav.contains(anchor) && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').slice(1);
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 120; // Adjusted for taller nav bar
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };
    nav.addEventListener("click", handler);
    return () => nav.removeEventListener("click", handler);
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#1F2937] font-['Spline_Sans'],['Noto_Sans'],sans-serif">
      {/* Hero Section without Lottie backgrounds */}
      <section className="relative w-full">
        <div className="flex min-h-[560px] flex-col items-center justify-center gap-6 bg-gradient-to-br from-blue-50 to-purple-50 p-4 text-center relative overflow-hidden rounded-b-xl">
          <div className="z-10 flex flex-col gap-4 max-w-3xl">
            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-6xl text-[#00308A]">
              Ignite Curiosity, Fuel Futures
            </h1>
            <h2 className="text-base font-normal leading-normal text-[#4B5563] sm:text-lg">
              Explore a world of learning designed for young minds. From coding to creativity, we offer courses that spark passion and build essential skills for tomorrow's leaders.
            </h2>
          </div>
          <motion.a 
            href="#short-courses" 
            className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#00308A] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="truncate">Explore Courses</span>
          </motion.a>
        </div>
      </section>
      {/* Sticky Search/Filter Bar and Category Nav */}
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <style>{`
          .glassmorphism-bg {
            border-radius: 1rem;
            background: rgba(255,255,255,0.45);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            box-shadow: 0 4px 24px 0 rgba(31,38,135,0.10);
          }
        `}</style>
        <div className="sticky top-6 z-40 mb-8 bg-transparent">
          <div
            ref={navRef}
            className="glassmorphism-bg flex items-center justify-between gap-3 sm:gap-6 overflow-x-visible pb-0 no-scrollbar rounded-2xl p-2 px-6"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-10 flex-1">
              {navLinks.map(link => (
                <motion.a
                  key={link.id}
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4B5563] pb-3 pt-3 px-2 whitespace-nowrap hover:text-[#00308A] hover:border-b-[#00308A]/100 transition-all rounded-2xl"
                  href={`#${link.id}`}
                  whileHover={{ scale: 1.03 }}
                >
                  <p className="text-lg font-semibold tracking-[0.015em]">{link.label}</p>
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-1 bg-white/60 rounded-full p-1 shadow-inner ml-4">
              {gradeGroups.map(group => (
                <motion.button
                  key={group}
                  onClick={() => setSelectedGradeGroup(group)}
                  className={`px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-300 ${
                    selectedGradeGroup === group
                      ? 'bg-[#00308A] text-white shadow'
                      : 'text-blue-900/80 hover:bg-white/80'
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {group === "all" ? "All" : group}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* Sections */}
        <section className="scroll-mt-32" id="internship">
          <StoreInternships gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32" id="short-courses">
          <StoreCourses gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32" id="sbpl">
          <StoreSPBLs gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32" id="case-studies">
          <StoreCaseStudies gradeGroup={selectedGradeGroup} />
        </section>
        {/* Packages section - custom, as not present in current components */}
        <section className="scroll-mt-32" id="packages">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-8 text-[#1F2937]">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80)' }}></div>
              <div className="flex flex-1 flex-col items-start justify-between p-5 gap-3">
                <div>
                  <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#1F2937]">Tech Explorer Pack</h3>
                  <p className="text-[#4B5563] text-sm leading-normal mt-1">Includes: 1 Short Course (AI for Beginners), 1 Internship (Web Developer Internship), 1 SBPL (Startup Pitch Challenge).</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-[#4B5563]">
                    <span>4.8 (Avg. Rating)</span>
                    <span>5.2k Enrolled</span>
                  </div>
                  <p className="text-xl font-bold text-[#00308A] mt-2">₹449 <span className="text-sm text-[#4B5563] line-through">₹497</span></p>
                </div>
                <motion.button 
                  className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="truncate">Explore Package</span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)' }}></div>
              <div className="flex flex-1 flex-col items-start justify-between p-5 gap-3">
                <div>
                  <h3 className="text-lg font-bold leading-tight tracking-[-0.015em] text-[#1F2937]">Creative Genius Bundle</h3>
                  <p className="text-[#4B5563] text-sm leading-normal mt-1">Includes: 1 Short Course (Creative Animation), 1 Internship (AI Research Internship), 1 SBPL (Eco Warriors Project).</p>
                  <div className="flex items-center justify-between mt-3 text-xs text-[#4B5563]">
                    <span>4.9 (Avg. Rating)</span>
                    <span>4.6k Enrolled</span>
                  </div>
                  <p className="text-xl font-bold text-[#00308A] mt-2">₹399 <span className="text-sm text-[#4B5563] line-through">₹477</span></p>
                </div>
                <motion.button 
                  className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="truncate">Explore Package</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="scroll-mt-32" id="membership">
          <StoreMemberships />
        </section>
        <section className="scroll-mt-32" id="faq">
          <StoreFAQTabs />
        </section>
      </div>
      <Footer />
    </div>
  );
} 