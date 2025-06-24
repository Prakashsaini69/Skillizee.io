import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/store/HeroSection";
import CategoryNav from "../components/store/CategoryNav";
import StoreCourses from "../components/store/StoreCourses";
import StoreSPBLs from "../components/store/StoreSPBLs";
import StoreInternships from "../components/store/StoreInternships";
import StoreMemberships from "../components/store/StoreMemberships";
import StoreFeatured from "../components/store/StoreFeatured";
import StoreTestimonials from "../components/store/StoreTestimonials";
import StoreFAQ from "../components/store/StoreFAQ";

export default function Store() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-100 min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <CategoryNav />
      <div id="courses"><StoreCourses /></div>
      <div id="spbls"><StoreSPBLs /></div>
      <div id="internships"><StoreInternships /></div>
      <div id="memberships"><StoreMemberships /></div>
      <StoreFeatured />
      <StoreTestimonials />
      <StoreFAQ />
    </div>
  );
} 