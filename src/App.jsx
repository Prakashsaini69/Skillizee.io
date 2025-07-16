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
// import Lanyard from "./components/ui/Lanyard";

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
          <a href="https://login.skillizee.io/s/authenticate" target="_blank" rel="noopener noreferrer" className="bg-[#00308A] text-white px-4 py-1.5 rounded-full shadow hover:bg-purple-600 transition">Dashboard</a>
        </nav>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <MobileMainMenu />
        </div>
        {/* Lanyard Card removed as per user request */}
      </div>
    </header>
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
        <Route path="*" element={<div className='min-h-screen flex flex-col justify-center items-center text-2xl text-[#00308A]'>404 - Page Not Found<Footer /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
