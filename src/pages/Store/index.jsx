import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import StoreInternships from "./StoreInternships";
import StoreCourses from "./StoreCourses";
import StoreSPBLs from "./StoreSPBLs";
import StoreCaseStudies from "./StoreCaseStudies";
import StoreFAQTabs from "./StoreFAQTabs";
import Footer from "../../components/common/Footer";
import StoreMemberships from "./StoreMemberships";
import HeroSection from "./HeroSection";
import MembershipCard from "../../components/common/MembershipCard";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navLinks = [
  { id: "internship", label: "Internship" },
  { id: "short-courses", label: "Short Courses" },
  { id: "sbpl", label: "SBPL" },
  { id: "case-studies", label: "Case Studies" },
  { id: "packages", label: "Packages" },
  { id: "membership", label: "Membership" },
];

const gradeGroups = ["all", "4-6", "7-12"];
const mainMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Store() {
  const [selectedGradeGroup, setSelectedGradeGroup] = useState("all");
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const placeholderRef = useRef(null);
  // Remove: const [mainMenuOpen, setMainMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;
    const hero = heroRef.current;
    const placeholder = placeholderRef.current;
    if (!nav || !hero || !placeholder) return;
    gsap.set(nav, { position: "relative", top: 0, left: "", transform: "", width: "100%", maxWidth: "100%" });
    gsap.set(placeholder, { height: 0 });
    const initialNavHeight = nav.offsetHeight;
    let isSticky = false;
    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "bottom top",
      end: "bottom top",
      onEnter: () => {
        if (!isSticky) {
          isSticky = true;
          gsap.to(placeholder, { height: initialNavHeight, duration: 0.3, ease: "power2.out" });
          gsap.set(nav, { left: "50%", transform: "translateX(-50%)" });
          gsap.to(nav, { position: "fixed", top: "1rem", width: "calc(100% - 2rem)", maxWidth: "calc(72rem - 2rem)", height: initialNavHeight, duration: 0.3, ease: "power2.out", onComplete: () => { nav.classList.add("sticky-active"); } });
        }
      },
      onLeaveBack: () => {
        if (isSticky) {
          isSticky = false;
          gsap.to(placeholder, { height: 0, duration: 0.3, ease: "power2.out" });
          gsap.set(nav, { left: "", transform: "" });
          gsap.to(nav, { position: "relative", top: 0, width: "100%", maxWidth: "100%", height: initialNavHeight, duration: 0.3, ease: "power2.out", onComplete: () => { nav.classList.remove("sticky-active"); } });
        }
      },
    });
    // Smooth scroll for nav links
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
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: offsetPosition, autoKill: false },
            ease: "power2.out"
          });
        }
      }
    };
    nav.addEventListener("click", handleNavClick);
    return () => {
      trigger.kill();
      nav.removeEventListener("click", handleNavClick);
    };
  }, []);

  // Mobile menu scroll handler
  // Remove: const handleMobileCategoryClick = (id) => {
  // Remove:   const el = document.getElementById(id);
  // Remove:   if (el) {
  // Remove:     const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
  // Remove:     const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
  // Remove:     window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  // Remove:   }
  // Remove: };

  // Add a state to store the mobile bar height
  const [mobileBarHeight, setMobileBarHeight] = useState(0);
  const mobileBarRef = useRef(null);
  const [mobileBarSticky, setMobileBarSticky] = useState(false);

  useEffect(() => {
    if (mobileBarRef.current) {
      setMobileBarHeight(mobileBarRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (mobileBarRef.current) {
        setMobileBarHeight(mobileBarRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!mobileBarRef.current || !heroRef.current) return;
    let trigger;
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      trigger = ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'bottom top',
        end: 'bottom top',
        onEnter: () => setMobileBarSticky(true),
        onLeaveBack: () => setMobileBarSticky(false),
      });
    });
    return () => { if (trigger) trigger.kill(); };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden">
      {/* Normal Hero Section (scrolls away with page) */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      {/* Scrollable Content - Starts after viewport height */}
      <div className="relative z-20 bg-white" style={{ marginTop: '2rem' }}>
        {/* Mobile Category Bar (Sticky on scroll, GSAP logic) */}
        <div ref={mobileBarRef}
          className={`sm:hidden ${mobileBarSticky
            ? 'fixed top-0 left-0 right-0 z-[110] bg-white/60 backdrop-blur-xl border border-white/30 shadow-md mx-2 rounded-xl mt-2 max-w-screen-sm mx-auto'
            : 'relative bg-white mx-2 mt-2'} px-3 sm:px-4 py-3 transition-all duration-300`}
        >
          <Menu as="div" className="relative w-full">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#00308A] text-base sm:text-lg">Categories</span>
              <Menu.Button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white shadow font-semibold text-[#00308A] focus:outline-none text-sm sm:text-base">
                <span>Browse</span>
                <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00308A]" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 -translate-y-2"
              enterTo="transform opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 translate-y-0"
              leaveTo="transform opacity-0 -translate-y-2"
            >
              <Menu.Items className="absolute left-0 right-0 mt-2 w-full origin-top bg-white rounded-b-xl shadow-lg ring-1 ring-black/5 focus:outline-none z-[120]">
                <div className="py-2">
                  {navLinks.map(link => (
                    <Menu.Item key={link.id}>
                      {({ active }) => (
                        <button
                          onClick={() => {
                            const el = document.getElementById(link.id);
                            if (el) {
                              const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
                              const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                              window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                            }
                          }}
                          className={`w-full text-left px-3 sm:px-4 py-2 rounded font-semibold text-[#00308A] text-sm sm:text-base ${active ? 'bg-blue-50' : ''}`}
                        >
                          {link.label}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* Placeholder to prevent content jump */}
        <div className="sm:hidden" style={{ height: mobileBarSticky ? mobileBarHeight : 0 }} />
        {/* Main Menu Slide-in (Mobile Only) */}
        {/* Remove the motion.div for the main menu slide-in (mobile only) that has an empty animate prop. */}
        {/* Only keep the Headless UI Menu for the category dropdown in the mobile header. */}
        {/* Do not render the motion.div for the main menu in this file. */}
        {/* Desktop Nav Bar */}
        <div className="w-full max-w-6xl px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8 mx-auto">
          <style>{`
            .glassmorphism-bg {
              border-radius: 1rem;
              background: transparent;
              backdrop-filter: blur(24px) saturate(160%);
              -webkit-backdrop-filter: blur(24px) saturate(160%);
              box-shadow: 0 8px 32px 0 rgba(31,38,135,0.18);
              border: none;
              z-index: 40;
              width: calc(100% - 2rem);
              max-width: calc(72rem - 2rem);
              transition: box-shadow 0.3s cubic-bezier(.4,0,.2,1), background 0.3s cubic-bezier(.4,0,.2,1), border 0.3s cubic-bezier(.4,0,.2,1);
              overflow: hidden;
            }
            .glassmorphism-bg.sticky-active {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(32px) saturate(180%);
              -webkit-backdrop-filter: blur(32px) saturate(180%);
              box-shadow: 0 16px 48px 0 rgba(31,38,135,0.25);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
          `}</style>
          {/* Placeholder to prevent content jump */}
          <div ref={placeholderRef} aria-hidden="true" className="hidden sm:block" />
          <nav
            ref={navRef}
            className="glassmorphism-bg flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-2 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg max-w-full hidden sm:flex"
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
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#00308A] mb-4">Internships</h2>
            <StoreInternships gradeGroup={selectedGradeGroup} />
          </section>
          <section className="scroll-mt-32 mt-8 sm:mt-12" id="short-courses">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#00308A] mb-4">Short Courses</h2>
            <StoreCourses gradeGroup={selectedGradeGroup} />
          </section>
          <section className="scroll-mt-32 mt-8 sm:mt-12" id="sbpl">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#00308A] mb-4">SBPLs</h2>
            <StoreSPBLs gradeGroup={selectedGradeGroup} />
          </section>
          <section className="scroll-mt-32 mt-8 sm:mt-12" id="case-studies">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#00308A] mb-4">Case Studies</h2>
            <StoreCaseStudies gradeGroup={selectedGradeGroup} />
          </section>
          <section className="scroll-mt-32 mt-8 sm:mt-12" id="packages">
            {/* <StoreMemberships /> */}
          </section>
          <section className="scroll-mt-32 mt-8 sm:mt-12" id="membership">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 sm:mb-10 px-4 sm:px-0" style={{ color: "#00308A" }}>Premium Membership</h2>
            <div className="flex justify-center">
              <MembershipCard />
            </div>
          </section>
          <section className="scroll-mt-32" id="faq">
            <StoreFAQTabs />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
} 