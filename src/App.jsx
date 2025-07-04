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
import { motion } from "framer-motion";
import WallOfFame from "./pages/WallOfFame/WallOfFame";
import Store from "./pages/Store";

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
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1746694511/Skillizee_WHITE_logo1_f5hpbh.png" alt="SkilliZee Logo" className="h-10 drop-shadow-lg" />
        </div>
        <nav className="hidden md:flex gap-6 text-white font-medium text-base justify-center items-center">
          <Link to="/" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Home</Link>
          <Link to="/wall-of-fame" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/wall-of-fame" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Wall of Fame</Link>
          {/* <Link to="/store" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/store" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Our Programs</Link> */}
          {/* <Link to="/course-store" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/course-store" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Course Store</Link> */}
          <Link to="/store" element={<Store />} className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/store" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Store</Link>
          <a href="https://login.skillizee.io/s/authenticate" target="_blank" rel="noopener noreferrer" className="bg-[#00308A] text-white px-4 py-1.5 rounded-full shadow hover:bg-purple-600 transition">Dashboard</a>
        </nav>
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
        {/* <Route path="/store" element={<StoreV2 />} />
        <Route path="/course-store" element={<CourseStorePage />} /> */}
        <Route path="/wall-of-fame" element={<WallOfFame />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<div className='min-h-screen flex flex-col justify-center items-center text-2xl text-[#00308A]'>404 - Page Not Found<Footer /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
