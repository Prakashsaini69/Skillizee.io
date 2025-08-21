import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import Resources from "./components/common/Resources";
import Courses from "./Courses";
import StudentLandscape from "./components/common/StudentLandscape";
import ParentTestimonialCard from "./components/common/ParentTestimonialCard";
import CombinedShowcaseSection from "./components/common/CombinedShowcaseSection";
import PartnerSection from "./components/common/PartnerSection";
import FounderAndMentorsSection from "./components/common/FounderAndMentorsSection";
import SkillProjectSlider from "./components/common/SkillProjectSlider";
import MembershipPlans from "./components/common/MembershipPlans";
import Footer from "./components/common/Footer";
import Faq from "./components/common/Faq";
import "./index.css";
import { motion, AnimatePresence } from "framer-motion";
import WallOfFame from "./pages/WallOfFame/WallOfFame";
import Store from "./pages/Store";
import LinkedIn from "./pages/Course Landing Pages/LinkedIn/LinkedIn";
import GudgumV2 from "./pages/Course Landing Pages/GudgumV2/GudgumV2";
import DemoComponents from "./pages/DemoComponents";
import StudentStoryCard from "./components/common/StudentStoryCard";
import CaseStudyIndex from "./pages/Case Study";
import CaseStudyPage from "./pages/Case Study/CaseStudyPage";
import { getCaseStudyBySlug } from "./pages/Case Study/caseStudyData";

// Dashboard button styles
const dashboardButtonStyles = `
  .dashboard-button {
    --stone-50: #fafaf9;
    --stone-800: #292524;
    --yellow-400: #00308A;

    font-size: 0.875rem;
    cursor: pointer;
    position: relative;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    line-height: 1;
    padding: 1px;
    transform: translate(-3px, -3px);
    outline: 2px solid transparent;
    outline-offset: 5px;
    border-radius: 9999px;
    background-color: var(--stone-800);
    color: #ffff;
    transition:
      transform 150ms ease,
      box-shadow 150ms ease;
    text-align: center;
    box-shadow:
      0.4px 0.4px 0 0 var(--stone-800),
      0.8px 0.8px 0 0 var(--stone-800),
      1.2px 1.2px 0 0 var(--stone-800),
      1.6px 1.6px 0 0 var(--stone-800),
      2px 2px 0 0 var(--stone-800),
      2.4px 2.4px 0 0 var(--stone-800),
      0 0 0 2px var(--stone-50),
      0.4px 0.4px 0 2px var(--stone-50),
      0.8px 0.8px 0 2px var(--stone-50),
      1.2px 1.2px 0 2px var(--stone-50),
      1.6px 1.6px 0 2px var(--stone-50),
      2px 2px 0 2px var(--stone-50),
      2.4px 2.4px 0 2px var(--stone-50),
      2.8px 2.8px 0 2px var(--stone-50),
      3.2px 3.2px 0 2px var(--stone-50);
    text-decoration: none;
    display: inline-block;
  }

  .dashboard-button:hover {
    transform: translate(0, 0);
    box-shadow: 0 0 0 2px var(--stone-50);
  }

  .dashboard-button:active,
  .dashboard-button:focus-visible {
    outline-color: var(--yellow-400);
  }

  .dashboard-button:focus-visible {
    outline-style: dashed;
  }

  .dashboard-button > div {
    position: relative;
    pointer-events: none;
    background-color: var(--yellow-400);
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 9999px;
  }

  .dashboard-button > div::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    opacity: 0.5;
    background-image: radial-gradient(
        rgb(255 255 255 / 80%) 20%,
        transparent 20%
      ),
      radial-gradient(rgb(255 255 255 / 100%) 20%, transparent 20%);
    background-position:
      0 0,
      4px 4px;
    background-size: 8px 8px;
    mix-blend-mode: hard-light;
    animation: dots 0.5s infinite linear;
  }

  .dashboard-button > div > span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    gap: 0.25rem;
    filter: drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.25));
  }

  .dashboard-button > div > span:active {
    transform: translateY(2px);
  }

  @keyframes dots {
    0% {
      background-position:
        0 0,
        4px 4px;
    }
    100% {
      background-position:
        8px 0,
        12px 4px;
    }
  }
`;

const mainMenuLinks = [
  { label: "Home", to: "/" },
  { label: "Store", to: "/store" },
  { label: "Dashboard", href: "https://login.skillizee.io/s/authenticate", external: true },
];

function MobileMainMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden focus:outline-none"
        aria-label={open ? "Close main menu" : "Open main menu"}
        onClick={() => setOpen((o) => !o)}
      >
        <div className="w-7 h-7 flex flex-col justify-center items-center relative">
          <span className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 my-1 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>
      {/* Slide-in menu (mobile only) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-[119] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#00308A] shadow-lg z-[120] flex flex-col pt-20 px-6 md:hidden"
            >
              {mainMenuLinks.map(link => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 px-2 text-lg font-semibold text-white hover:bg-blue-900 rounded transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block py-3 px-2 text-lg font-semibold text-white hover:bg-blue-900 rounded transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Header({ hide }) {
  const location = useLocation();
  const [visible, setVisible] = React.useState(true);
  React.useEffect(() => {
    let lastScroll = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < 40 || current < lastScroll);
      lastScroll = current;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <style>{dashboardButtonStyles}</style>
      <header
        className={`transition-opacity duration-500 ${hide || !visible ? 'opacity-0 pointer-events-none' : 'opacity-100'} z-50 shadow-lg`}
        style={{ background: '#00308A', position: 'relative' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752143212/SkilliZee_White_Trans.12_nqmvqx.png" alt="SkilliZee Logo" className="h-16 drop-shadow-lg" />
          </div>
          <nav className="hidden md:flex gap-6 text-white font-medium text-base justify-center items-center">
            <Link to="/" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Home</Link>
            <Link to="/store" element={<Store />} className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/store" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Store</Link>
            <a href="https://login.skillizee.io/s/authenticate" target="_blank" rel="noopener noreferrer" className="dashboard-button">
              <div><span>Dashboard</span></div>
            </a>
          </nav>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <MobileMainMenu />
          </div>
          {/* Lanyard Card removed as per user request */}
        </div>
      </header>
    </>
  );
}

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <Hero />
      <PartnerSection />
      <Resources />
      <Courses />
      <SkillProjectSlider />
      <MembershipPlans />
      <FounderAndMentorsSection />
      <StudentStoryCard />
      <CombinedShowcaseSection />
      <Faq />
      <Footer />
    </div>
  );
}

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <Router>
      <Header hide={hideHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wall-of-fame" element={<WallOfFame />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/bundle-registration" element={<LinkedIn />} />
        <Route path="/store/gudgum-v2" element={<GudgumV2 />} />
        <Route path="/demo" element={<DemoComponents />} />
        <Route path="/case-studies" element={<CaseStudyIndex />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<div className='min-h-screen flex flex-col justify-center items-center text-2xl text-[#00308F]'>404 - Page Not Found<Footer /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
