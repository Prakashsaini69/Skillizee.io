import React, { useState } from "react";
import { motion } from "framer-motion";
import StoreInternships from "./StoreInternships";
import StoreCourses from "./StoreCourses";
import StoreSPBLs from "./StoreSPBLs";
import StoreCaseStudies from "./StoreCaseStudies";
import StoreFAQTabs from "./StoreFAQTabs";
import Footer from "../../components/common/Footer";
import StoreMemberships from "./StoreMemberships";
import HeroSection from "./HeroSection";

const navLinks = [
  { id: "internship", label: "Internship" },
  { id: "short-courses", label: "Short Courses" },
  { id: "sbpl", label: "SBPL" },
  { id: "case-studies", label: "Case Studies" },
  { id: "packages", label: "Packages" },
  { id: "membership", label: "Membership" },
];

const gradeGroups = ["all", "4-6", "7-12"];

export default function Store() {
  const [selectedGradeGroup, setSelectedGradeGroup] = useState("all");
  const navRef = React.useRef(null);
  React.useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handler = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && nav.contains(anchor) && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href').slice(1);
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = nav.offsetHeight + 16;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    };
    nav.addEventListener("click", handler);
    const onScroll = () => {
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      nav.removeEventListener("click", handler);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        <style>{`
          .glassmorphism-bg {
            border-radius: 1rem;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(24px) saturate(160%);
            -webkit-backdrop-filter: blur(24px) saturate(160%);
            box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
            border: 2px solid rgba(0,48,138,0.13);
            transition: background 0.3s, border 0.3s, box-shadow 0.3s;
          }
          .glassmorphism-bg.scrolled {
            background: rgba(255,255,255,0.92);
            border: 2.5px solid #FFD700;
            box-shadow: 0 12px 40px 0 rgba(31,38,135,0.22);
          }
        `}</style>
        <nav ref={navRef} className="glassmorphism-bg sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 px-6 py-3 mb-8 shadow-lg">
          <div className="flex gap-2">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} className="px-4 py-2 rounded-full font-semibold text-[#00308A] hover:bg-[#FFD700] hover:text-[#00308A] transition-all duration-200">
                {link.label}
              </a>
            ))}
          </div>
          <select
            value={selectedGradeGroup}
            onChange={e => setSelectedGradeGroup(e.target.value)}
            className="px-4 py-2 rounded-full border-2 border-blue-300 bg-white text-[#00308A] font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer"
          >
            {gradeGroups.map(g => (
              <option key={g} value={g}>{g === "all" ? "All Grades" : g}</option>
            ))}
          </select>
        </nav>
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
        <section className="scroll-mt-32" id="packages">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-8 text-[#1F2937]">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 ">
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
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
                >
                  <span className="truncate">Explore Package</span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
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