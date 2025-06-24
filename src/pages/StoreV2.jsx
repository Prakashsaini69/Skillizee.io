import React from "react";
// Lottie-player CDN is used in HTML, but in React, we can use <lottie-player> as a web component or fallback to images if SSR fails.
// For now, we use <lottie-player> as in your HTML, and Tailwind for styling.

const lottieUrls = [
  "https://lottie.host/a3590dda-a325-4670-8e0e-7b0f5096561a/qB5CbkYxT3.json",
  "https://lottie.host/94b60217-a0a7-42e9-8922-8b540e28a1f8/g8u5Xn6TqY.json",
  "https://lottie.host/1b51375f-a89a-4d8a-94a2-ec92117c94a2/B62vYh6rQ2.json",
  "https://lottie.host/074a30a9-c790-41d0-aa1f-13411a816d03/52f2oE98oK.json",
  "https://lottie.host/57dbf19c-f60f-407b-8764-6937795c55a7/G090K93t16.json"
];

// Import data from existing store components
import StoreInternships from "../components/store/StoreInternships";
import StoreCourses from "../components/store/StoreCourses";
import StoreSPBLs from "../components/store/StoreSPBLs";
import StoreFAQTabs from "../components/store/StoreFAQTabs";
import Footer from "../Footer";
import StoreMemberships from "../components/store/StoreMemberships";

const navLinks = [
  { id: "internship", label: "Internship" },
  { id: "short-courses", label: "Short Courses" },
  { id: "sbpl", label: "SBPL" },
  { id: "packages", label: "Packages" },
  { id: "membership", label: "Membership" },
];

export default function StoreV2() {
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
          const headerOffset = 80;
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
    <div className="bg-white min-h-screen text-[#1F2937] font-[\'Spline Sans\'],[\'Noto Sans\'],sans-serif">
      {/* Hero Section with Lottie backgrounds */}
      <section className="relative w-full">
        <div className="flex min-h-[560px] flex-col items-center justify-center gap-6 bg-white p-4 text-center relative overflow-hidden rounded-b-xl">
          <div className="absolute inset-0 grid grid-cols-5 grid-rows-3 gap-4 opacity-20 pointer-events-none">
            {lottieUrls.map((url, i) => (
              <lottie-player
                key={url}
                autoplay
                background="transparent"
                loop
                speed="1"
                src={url}
                style={{ width: "100%", height: "100%", gridColumn: (i === 1 ? 5 : i === 2 ? 3 : i === 3 ? 1 : i === 4 ? 5 : 1), gridRow: (i === 2 ? 2 : i === 3 ? 3 : i === 4 ? 3 : 1) }}
              />
            ))}
          </div>
          <div className="z-10 flex flex-col gap-4 max-w-3xl">
            <h1 className="text-4xl font-black leading-tight tracking-tighter sm:text-5xl md:text-6xl text-[#00308A]">
              Ignite Curiosity, Fuel Futures
            </h1>
            <h2 className="text-base font-normal leading-normal text-[#4B5563] sm:text-lg">
              Explore a world of learning designed for young minds. From coding to creativity, we offer courses that spark passion and build essential skills for tomorrow's leaders.
            </h2>
          </div>
          <a href="#short-courses" className="z-10 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#00308A] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-transform duration-300 ease-in-out hover:scale-105">
            <span className="truncate">Explore Courses</span>
          </a>
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
            className="glassmorphism-bg flex justify-center gap-3 sm:gap-10 overflow-x-auto pb-0 no-scrollbar rounded-2xl"
          >
            {navLinks.map(link => (
              <a
                key={link.id}
                className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#4B5563] pb-3 pt-3 px-2 whitespace-nowrap hover:text-[#00308A] hover:border-b-[#00308A]/100 transition-all rounded-2xl"
                href={`#${link.id}`}
              >
                <p className="text-lg font-semibold tracking-[0.015em]">{link.label}</p>
              </a>
            ))}
          </div>
        </div>
        {/* Sections */}
        <section className="scroll-mt-32" id="internship">
          <StoreInternships />
        </section>
        <section className="scroll-mt-32" id="short-courses">
          <StoreCourses />
        </section>
        <section className="scroll-mt-32" id="sbpl">
          <StoreSPBLs />
        </section>
        {/* Packages section - custom, as not present in current components */}
        <section className="scroll-mt-32" id="packages">
          <h2 className="text-2xl font-bold leading-tight tracking-tight px-4 pb-4 pt-8 text-[#1F2937]">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            <div className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50">
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
                <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors">
                  <span className="truncate">Explore Package</span>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch justify-start rounded-xl shadow-lg bg-[#F3F4F6] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-[#00308A]/50">
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
                <button className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#00308A] text-[#00308A] text-xs font-medium leading-normal hover:bg-[#00308A] hover:text-white transition-colors">
                  <span className="truncate">Explore Package</span>
                </button>
              </div>
            </div>
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