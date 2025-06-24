import React, { useState, useMemo } from "react";
import HeroSection from "../components/store/HeroSection";
import CategoryNav from "../components/store/CategoryNav";
import CourseCategorySection from "../components/store/CourseCategorySection";
import PromoBanner from "../components/store/PromoBanner";
import SearchAndFilter from "../components/store/SearchAndFilter";
import WhyChooseUs from "../components/store/WhyChooseUs";
import Testimonials from "../components/store/Testimonials";
import LearningJourney from "../components/store/LearningJourney";
import Instructors from "../components/store/Instructors";
import MembershipPlans from "../components/store/MembershipPlans";
import FaqAccordion from "../components/store/FaqAccordion";
import ContactBar from "../components/store/ContactBar";
import FloatingCTAs from "../components/store/FloatingCTAs";
import Preloader from "../components/store/Preloader";
import CourseCard from "../components/store/CourseCard";

const gradeGroups = ["4-6 Grade", "7-12 Grade"];
const categories = ["Internships", "SBPLs", "Short Courses", "Masterclasses"];
const courseData = {
  "4-6 Grade": {
    Internships: [
      {
        title: "Junior Data Analyst Internship",
        desc: "Analyze fun datasets and present your findings!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Young Web Developer Internship",
        desc: "Build your first website and show it to the world!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "Creative Animation Internship",
        desc: "Create fun animations and learn design basics!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Mini Game Developer Internship",
        desc: "Build your own mini games and share with friends!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
    ],
    SBPLs: [
      {
        title: "Community Helper Project",
        desc: "Design a campaign to help your neighborhood!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Eco Warriors Project",
        desc: "Create a plan to save the environment!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Kindness Campaign",
        desc: "Spread kindness in your school and community!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Tech for Good",
        desc: "Use technology to solve real-world problems!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
    ],
    "Short Courses": [
      {
        title: "Intro to Coding",
        desc: "Learn the basics of coding with games and puzzles.",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Fun with Math",
        desc: "Explore math with fun activities and challenges!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Science Explorers",
        desc: "Discover science with cool experiments!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Art & Creativity",
        desc: "Unleash your creativity with art projects!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    Masterclasses: [
      {
        title: "Young Innovators Masterclass",
        desc: "Invent and present your own creative solution!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Public Speaking Masterclass",
        desc: "Become a confident speaker and leader!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Robotics Masterclass",
        desc: "Build and program your own robots!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Design Thinking Masterclass",
        desc: "Solve problems creatively with design thinking!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
  },
  "7-12 Grade": {
    Internships: [
      {
        title: "Data Analysis Internship",
        desc: "Hands-on data cleaning, visualization, and reporting tasks.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Web Dev Internship",
        desc: "Build real client websites using HTML, CSS, and JavaScript.",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "AI Research Internship",
        desc: "Explore artificial intelligence and machine learning!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Startup Internship",
        desc: "Work with real startups and learn entrepreneurship!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    SBPLs: [
      {
        title: "Startup Pitch Challenge",
        desc: "Develop a business plan and pitch in front of judges.",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
      {
        title: "Social Impact Project",
        desc: "Lead a project to create positive change!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Tech for Good",
        desc: "Use technology to solve real-world problems!",
        img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
        color: "from-blue-200 to-purple-200",
      },
      {
        title: "Community Helper Project",
        desc: "Design a campaign to help your neighborhood!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
    ],
    "Short Courses": [
      {
        title: "Intro to Python",
        desc: "A fast-paced course to write your first Python scripts.",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Creative Writing",
        desc: "Express yourself and write amazing stories!",
        img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        color: "from-green-200 to-blue-200",
      },
      {
        title: "Math Mastery",
        desc: "Master advanced math concepts with fun challenges!",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Science Explorers",
        desc: "Discover science with cool experiments!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
    Masterclasses: [
      {
        title: "AI & ML Masterclass",
        desc: "Deep dive into machine learning algorithms and projects.",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        color: "from-purple-200 to-blue-200",
      },
      {
        title: "Entrepreneurship Masterclass",
        desc: "Learn how to start and grow your own business!",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        color: "from-green-300 to-blue-200",
      },
      {
        title: "Public Speaking Masterclass",
        desc: "Become a confident speaker and leader!",
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        color: "from-pink-200 to-yellow-200",
      },
      {
        title: "Design Thinking Masterclass",
        desc: "Solve problems creatively with design thinking!",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        color: "from-yellow-200 to-pink-200",
      },
    ],
  },
};

export default function CourseStorePage() {
  // State for grade, category, and search
  const [grade, setGrade] = useState("7-12 Grade");
  const [category, setCategory] = useState("Internships");
  const [search, setSearch] = useState("");

  // Filtered cards
  const filteredCards = useMemo(() => {
    const all = courseData[grade][category] || [];
    if (!search.trim()) return all;
    return all.filter(c => c.title.toLowerCase().includes(search.trim().toLowerCase()));
  }, [grade, category, search]);

  return (
    <div className="bg-white min-h-screen text-[#00308A]">
      <Preloader />
      <HeroSection />
      <CategoryNav categories={categories} />
      <div className="relative z-10">
        <SearchAndFilter />
        <PromoBanner />
        <section className="py-8 px-4 max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center md:justify-between mb-8 items-center">
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold border-2 transition-all duration-300 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-200 ${
                    category === cat
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-600 scale-105"
                      : "bg-white text-[#00308A] border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <select
              value={grade}
              onChange={e => setGrade(e.target.value)}
              className="px-4 py-2 rounded-full border-2 border-blue-300 bg-white text-[#00308A] font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 cursor-pointer"
            >
              {gradeGroups.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 rounded-full border-2 border-blue-200 bg-white text-[#00308A] font-semibold shadow focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-w-[220px]"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredCards.map((card, i) => (
              <CourseCard
                key={card.title + i}
                course={{
                  title: card.title,
                  image: card.img,
                  desc: card.desc,
                  badge: i === 0 ? "Best Seller" : undefined,
                  rating: (4.5 + (i % 2) * 0.2).toFixed(2),
                  duration: "60 min",
                  tags: [category],
                  price: 999,
                  originalPrice: 1699,
                }}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>
        <WhyChooseUs />
        <Testimonials />
        <LearningJourney />
        <Instructors />
        <MembershipPlans />
        <FaqAccordion />
        <ContactBar />
        <FloatingCTAs />
      </div>
    </div>
  );
} 