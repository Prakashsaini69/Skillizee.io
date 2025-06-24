import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import ActionBanners from "./ActionBanners";
import Resources from "./Resources";
import Courses from "./Courses";
import StudentLandscape from "./StudentLandscape";
import ParentTestimonialCard from "./ParentTestimonialCard";
import CombinedShowcaseSection from "./CombinedShowcaseSection";
import PartnerSection from "./PartnerSection";
import FounderAndMentorsSection from "./FounderAndMentorsSection";
import SkillProjectSlider from "./SkillProjectSlider";
import MembershipPlans from "./MembershipPlans";
import Footer from "./Footer";
import Faq from "./Faq";
import "./index.css";
import { motion } from "framer-motion";
import Store from "./pages/Store";
import WallOfFame from "./pages/WallOfFame";
import SummerCamp from "./pages/SummerCamp";
import LearnMore from "./pages/LearnMore";
import ShopOnline from "./pages/ShopOnline";

function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ background: '#00308A' }}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1746694511/Skillizee_WHITE_logo1_f5hpbh.png" alt="SkilliZee Logo" className="h-10 drop-shadow-lg" />
          <span className="font-bold text-xl text-[#00308A] tracking-tight"></span>
        </div>
        <nav className="hidden md:flex gap-6 text-white font-medium text-base justify-center items-center">
          <Link to="/summer-camp" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/summer-camp" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Summer Camp</Link>
          <Link to="/wall-of-fame" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/wall-of-fame" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Wall of Fame</Link>
          <Link to="/store" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/store" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Our Programs</Link>
          <Link to="/learn-more" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/learn-more" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Learn More</Link>
          <Link to="/shop-online" className={`px-4 py-1.5 rounded-full hover:text-purple-600 transition ${location.pathname === "/shop-online" ? "bg-white/20 text-[#FFD700] font-bold" : ""}`}>Shop Online</Link>
          <a href="https://login.skillizee.io/t/u/activeCourses" target="_blank" rel="noopener noreferrer" className="bg-[#00308A] text-white px-4 py-1.5 rounded-full shadow hover:bg-purple-600 transition">Dashboard</a>
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
      <ActionBanners /> 
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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/wall-of-fame" element={<WallOfFame />} />
        <Route path="/summer-camp" element={<SummerCamp />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/shop-online" element={<ShopOnline />} />
        <Route path="*" element={<div className='min-h-screen flex flex-col justify-center items-center text-2xl text-[#00308A]'>404 - Page Not Found<Footer /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
