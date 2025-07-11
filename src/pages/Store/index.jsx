import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StoreInternships from "./StoreInternships";
import StoreCourses from "./StoreCourses";
import StoreSPBLs from "./StoreSPBLs";
import StoreCaseStudies from "./StoreCaseStudies";
import StoreFAQTabs from "./StoreFAQTabs";
import Footer from "../../components/common/Footer";
import StoreMemberships from "./StoreMemberships";
import HeroSection from "./HeroSection";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";

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
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const hero = heroRef.current;
    if (!nav || !hero) return;

    // Set navHeight for placeholder
    setNavHeight(nav.offsetHeight);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      const navHeightLocal = nav.offsetHeight;
      setNavHeight(navHeightLocal);
      // Sticky if scrolled past hero section
      if (currentScrollY > heroBottom - navHeightLocal) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const handleNavClick = (e) => {
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    nav.addEventListener("click", handleNavClick);
    window.addEventListener('resize', () => setNavHeight(nav.offsetHeight));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      nav.removeEventListener("click", handleNavClick);
      window.removeEventListener('resize', () => setNavHeight(nav.offsetHeight));
    };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div className="w-full max-w-6xl px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 mx-auto">
        <style>{`
          .glassmorphism-bg {
            border-radius: 1rem;
            background: transparent;
            backdrop-filter: blur(24px) saturate(160%);
            -webkit-backdrop-filter: blur(24px) saturate(160%);
            box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
            border: none;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 2rem);
            max-width: calc(72rem - 2rem);
            transition: top 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s cubic-bezier(.4,0,.2,1), background 0.3s cubic-bezier(.4,0,.2,1), border 0.3s cubic-bezier(.4,0,.2,1);
            position: relative;
            z-index: 40;
          }
          .glassmorphism-bg.sticky {
            position: fixed;
            top: 1rem;
            background: transparent;
            backdrop-filter: blur(32px) saturate(180%);
            -webkit-backdrop-filter: blur(32px) saturate(180%);
            box-shadow: 0 16px 48px 0 rgba(31,38,135,0.25);
            border: none;
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from {
              top: -100px;
              opacity: 0;
            }
            to {
              top: 1rem;
              opacity: 1;
            }
          }
          .nav-placeholder {
            height: 0;
            transition: height 0.3s cubic-bezier(.4,0,.2,1);
          }
          .nav-placeholder.active {
            height: ${navHeight}px;
          }
        `}</style>
        {/* Placeholder div to prevent content jump when navbar becomes sticky */}
        <div className={`nav-placeholder${isSticky ? ' active' : ''}`}></div>
        <nav
          ref={navRef}
          className={`glassmorphism-bg flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg transition-all duration-300 max-w-full${isSticky ? ' sticky' : ''}`}
          style={{overflowX: 'auto', WebkitOverflowScrolling: 'touch'}}
        >
          <div className="flex gap-2 overflow-x-auto whitespace-nowrap w-full sm:w-auto pb-2 sm:pb-0">
            {navLinks.map(link => (
              <HoverBorderGradient
                key={link.id}
                as="a"
                href={`#${link.id}`}
                className="px-3 sm:px-4 py-2 rounded-full font-semibold text-[#00308A] bg-white focus:bg-white focus:text-[#00308A] transition-all duration-200 shadow-sm text-sm sm:text-base"
                duration={1.2}
                style={{ background: 'white' }}
              >
                {link.label}
              </HoverBorderGradient>
            ))}
          </div>
          <select
            value={selectedGradeGroup}
            onChange={e => setSelectedGradeGroup(e.target.value)}
            className="px-3 sm:px-4 py-2 rounded-full border-2 border-blue-300 bg-white text-[#00308A] font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer text-sm sm:text-base mt-2 sm:mt-0"
          >
            {gradeGroups.map(g => (
              <option key={g} value={g}>{g === "all" ? "All Grades" : g}</option>
            ))}
          </select>
        </nav>
        <section className="scroll-mt-32" id="internship">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00308A] mb-4">Internships</h2>
          <StoreInternships gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32 mt-12" id="short-courses">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00308A] mb-4">Short Courses</h2>
          <StoreCourses gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32 mt-12" id="sbpl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00308A] mb-4">SBPLs</h2>
          <StoreSPBLs gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32 mt-12" id="case-studies">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00308A] mb-4">Case Studies</h2>
          <StoreCaseStudies gradeGroup={selectedGradeGroup} />
        </section>
        <section className="scroll-mt-32 mt-12" id="packages">
          <h2 className="text-xl sm:text-2xl font-bold text-[#00308A] mb-4">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-6 md:p-10 ">
            <motion.div
              className="flex flex-col md:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
            >
              <div className="w-full md:w-2/5 h-40 md:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80)' }}></div>
              <div className="flex flex-1 flex-col items-start justify-between p-3 sm:p-5 gap-2 sm:gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] text-[#1F2937]">Tech Explorer Pack</h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-normal mt-1">Includes: 1 Short Course (AI for Beginners), 1 Internship (Web Developer Internship), 1 SBPL (Startup Pitch Challenge).</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3 text-xs text-[#4B5563]">
                    <span>4.8 (Avg. Rating)</span>
                    <span>5.2k Enrolled</span>
                  </div>
                  <p className="text-base sm:text-xl font-bold text-[#00308A] mt-2">₹449 <span className="text-xs sm:text-sm text-[#4B5563] line-through">₹497</span></p>
                </div>
                <motion.button
                  className="min-w-[84px] max-w-full md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-3 sm:px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors"
                >
                  <span className="truncate">Explore Package</span>
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col md:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50"
            >
              <div className="w-full md:w-2/5 h-40 md:h-auto bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80)' }}></div>
              <div className="flex flex-1 flex-col items-start justify-between p-3 sm:p-5 gap-2 sm:gap-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] text-[#1F2937]">Creative Genius Bundle</h3>
                  <p className="text-[#4B5563] text-xs sm:text-sm leading-normal mt-1">Includes: 1 Short Course (Creative Animation), 1 Internship (AI Research Internship), 1 SBPL (Eco Warriors Project).</p>
                  <div className="flex items-center justify-between mt-2 sm:mt-3 text-xs text-[#4B5563]">
                    <span>4.9 (Avg. Rating)</span>
                    <span>4.6k Enrolled</span>
                  </div>
                  <p className="text-base sm:text-xl font-bold text-[#00308A] mt-2">₹399 <span className="text-xs sm:text-sm text-[#4B5563] line-through">₹477</span></p>
                </div>
                <motion.button
                  className="min-w-[84px] max-w-full md:max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-3 sm:px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors"
                >
                  <span className="truncate">Explore Package</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="scroll-mt-32 mt-12" id="membership">
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