import React, { useState, useEffect } from 'react';

import { Typewriter } from 'react-simple-typewriter';

import StickyBox from 'react-sticky-box';

import * as Accordion from '@radix-ui/react-accordion';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/navigation';

import 'swiper/css/pagination';

import Marquee from 'react-fast-marquee';

import SlantedScrollingBanner from "./SlantedScrollingBanner";
import SignupModal from "./SignupModal";

import Footer from "../../../components/common/Footer";

import { Testimonials } from "../../../components/eldoraui/testimonials";
import { Award, Briefcase, TrendingUp } from 'lucide-react';
import Modal from "../../../components/ui/modal";
import CourseTimeline from "../../../components/ui/course-timeline";

// Helper component for list items to keep the main component clean
const ListItem = ({ children }) => (
  <li className="text-lg text-gray-800 font-bold">{children}</li>
);

// The main component that replicates the image with the requested fixes
const InvestmentHighlight = () => {
  return (
    <div className="bg-transparent flex items-center justify-center p-4 font-sans">
      {/* Main container with yellow background and rounded corners.
          overflow-hidden is key to clip the children's corners. */}
      <div className="bg-[#E6F0FF] rounded-3xl max-w-4xl w-full shadow-lg overflow-hidden border border-blue-200">

        {/* Header section with blue background. It is now the first child,
            so it sticks to the top. The parent's overflow-hidden property
            will handle clipping the top corners. */}
        <div className="bg-[#0a2540] text-white text-center shadow-xl py-4 px-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why <span className="text-blue-400">Model #2</span> Is The Smartest Investment For YOU
          </h2>
        </div>

        {/* Content section with padding and relative positioning for the dots. */}
        <div className="pt-6 px-8 pb-8 relative">
          {/* Decorative dots in the background */}
          <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-30">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-300 rounded-full"></div>
            ))}
          </div>

          {/* Content section with two columns */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
            {/* Left Column with updated styles */}
            <ul className="space-y-2">
              <ListItem>1. 4-In-1 Power Learning Combo</ListItem>
              <ListItem>2. Limited Seats For Brand Internship</ListItem>
              <ListItem>3. Learn From Real Brands Like Starbucks & GudGum</ListItem>
            </ul>

            {/* Right Column with updated styles */}
            <ul className="space-y-2">
              <ListItem>4. Get Certified</ListItem>
              <ListItem>5. Build Your College Ready Portfolio</ListItem>
              <ListItem>6. Mini MBA For Students</ListItem>
              <ListItem>
                7. All-In-One Value - <span className="bg-white px-2 py-1 rounded text-gray-800">Just ₹2550/-</span> + GST
              </ListItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the checkmark icon
const CheckIconCTA = () => (
  <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

// Data for the different bundles
const bundles = [
  { 
    id: 'bundle1', 
    name: 'Bundle 1', 
    price: 1770, 
    url: 'https://rzp.io/rzp/6Z1qXVf2'
  },
  { 
    id: 'bundle2', 
    name: 'Bundle 2', 
    price: 2550, 
    url: 'https://rzp.io/rzp/o0q43hlB'
  },
];

// Enrollment CTA Component
const EnrollmentCTA = () => {
  // State to track the currently selected bundle, defaulting to Bundle 2
  const [selectedBundle, setSelectedBundle] = useState(bundles[1]);

  // Handler for when the user changes the selection
  const handleBundleChange = (event) => {
    const bundleId = event.target.value;
    const newBundle = bundles.find(b => b.id === bundleId);
    setSelectedBundle(newBundle);
  };

  return (
    <div className="flex items-center justify-center p-4 font-sans">
      {/* Increased max-w-5xl for an even wider, more landscape feel */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <div className="p-8 md:p-12">

          {/* Urgency Alert */}
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-center mb-6 animate-pulse">
            <p className="font-bold text-lg">🚨 Limited Seats Available – Enroll Before It's Too Late!</p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Give Your Child a Competitive Edge Before College
          </h1>

          {/* Sub-headline */}
          <p className="text-gray-300 text-center text-lg mb-8">
            This is a unique chance to gain invaluable life skills and real-world business exposure.
          </p>

          {/* Feature List */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckIconCTA />
              <p className="text-gray-300"><span className="font-semibold text-white">Essential Life Skills:</span> Develop confidence, leadership, and critical thinking.</p>
            </div>
            <div className="flex items-start">
              <CheckIconCTA />
              <p className="text-gray-300"><span className="font-semibold text-white">Business Exposure:</span> Understand the fundamentals of entrepreneurship and finance.</p>
            </div>
            <div className="flex items-start">
              <CheckIconCTA />
              <p className="text-gray-300"><span className="font-semibold text-white">Future-Proof Advantage:</span> Stand out on college applications and beyond.</p>
            </div>
          </div>

          {/* Pricing and Button Container */}
          <div className="bg-gray-700/50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Bundle Selector */}
            <div className="w-full md:w-auto">
                <label htmlFor="bundle-select" className="text-gray-400 text-sm mb-1 block">Select Your Bundle</label>
                <select 
                    id="bundle-select"
                    value={selectedBundle.id}
                    onChange={handleBundleChange}
                    className="bg-gray-800 border border-gray-600 text-white text-lg rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3.5"
                >
                    {bundles.map(bundle => (
                        <option key={bundle.id} value={bundle.id}>
                            {bundle.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Dynamic Price Display */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">Investment</p>
              <p className="text-white font-bold text-3xl">₹{selectedBundle.price} <span className="text-lg font-normal text-gray-400">+ GST</span></p>
            </div>
            
            {/* CTA Button as a Link */}
            <a 
              href={selectedBundle.url}
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead', {
                    content_name: 'Reserve My Seat Now Button',
                    content_category: 'CTA',
                    value: 1,
                    currency: 'INR'
                  });
                }
              }}
              className="w-full text-center md:w-auto bg-indigo-600 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/50 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              📌 Reserve My Seat Now
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

const logoAnim = `

@keyframes linkedinLogoZoom {

  0%, 100% {

    transform: scale(1) rotate(15deg);

  }

  50% {

    transform: scale(1.15) rotate(0deg);

  }

}

`;

const infoCards = [

  {

    icon: '▶️',

    heading: '17+ Hours',
    subtext: 'Video Duration',

  },

  {

    icon: '💯',

    heading: 'Lifetime Access',
    subtext: 'Access Forever',
  },

  {

    icon: '🔊',

    heading: 'English',

    subtext: 'Available In',

  },


];

function ProblemsFacedSection() {

  return (

    <section className="w-full flex flex-col items-center justify-center mt-8 mb-8 px-4 md:px-0">

      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Left: Sliding Arrows Card */}

        <div className="bg-blue-100 rounded-3xl p-8 flex flex-col justify-end min-h-[340px] relative shadow-md">

          {/* Lottie Animation */}

          <div className="absolute top-10 left-0 w-full h-32 flex items-center justify-center pointer-events-none select-none">

            <div className="w-64 h-64 flex items-center justify-center">
              <iframe
                src="https://lottie.host/embed/3e34bbf2-da74-4028-b5ab-d66442edcfb1/bhui7QdHv4.lottie"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>

          </div>

          <div className="mt-32" />

          <div className="mt-auto">

            <div className="font-bold text-lg text-[#0a2540] mb-1">Feeling Lost on Where to Start?</div>
            <div className="text-[#0a2540] text-base">For the student who feels overwhelmed and is constantly asking "What now? What's next?" but struggles to find a clear direction or a first step to take.</div>
          </div>

        </div>

        {/* Right: Animated Heading and Cards */}

        <div className="flex flex-col gap-4 h-full">

          {/* Typing Animation Heading Card */}

          <div className="bg-blue-100 rounded-3xl p-6 shadow-md">

            <div className="text-4xl md:text-5xl font-bold text-[#1890b7] mb-2">

              <Typewriter

                words={["Overthinking...|", "Can't decide|", "Stuck again|"]}

                loop={0}

                cursor

                cursorStyle="|"

                typeSpeed={70}

                deleteSpeed={50}

                delaySpeed={1200}

              />

            </div>

            <div className="font-bold text-lg text-[#0a2540] mb-1">Caught in a Cycle of Overthinking</div>
            <div className="text-[#0a2540] text-base">You find it difficult to make decisions because you're stuck analyzing every possibility, which leads to stress and inaction instead of progress.</div>
          </div>

          {/* Bottom Cards Row as 2-col grid, with gap between cards */}

          <div className="grid grid-cols-2 gap-4 h-full">

            {/* Struggle to get visibility card (square, white, border, visible icons, infinite loop) */}

            <div className="bg-white border border-blue-200 rounded-2xl shadow-md p-2 flex flex-col items-center h-full justify-center">

              <div className="flex items-center justify-center mb-2 w-full overflow-hidden">

                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <iframe
                    src="https://lottie.host/embed/1a29bea5-be7d-404c-a9f4-f062a253482a/BNWl6TF1uT.lottie"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    style={{ border: 'none' }}
                  />
                </div>

              </div>

              <div className="font-bold text-base text-[#0a2540] text-center leading-tight">Questioning if You're<br />Good Enough</div>
            </div>

            {/* Monetize card (rectangle) */}

            <div className="bg-blue-100 rounded-2xl shadow-md p-4 flex flex-col items-start h-full justify-center">

              <div className="font-bold text-base text-[#0a2540] mb-1">Struggling to make authentic choices under peer pressure.</div>
            </div>

          </div>

        </div>

      </div>

      {/* Animations */}

      <style>{`

        @keyframes slide-arrows {

          0% { transform: translateX(0); }

          100% { transform: translateX(-50%); }

        }

        .animate-slide-arrows {

          animation: slide-arrows 6s linear infinite;

        }

        @keyframes infinite-slide-icons {

          0% { transform: translateX(0); }

          100% { transform: translateX(-50%); }

        }

        .animate-infinite-slide-icons {

          animation: infinite-slide-icons 5s linear infinite;

        }

      `}</style>

    </section>

  );

}



// --- Font Import ---
const FontStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
    `}
  </style>
);

function MotivationalQuote() {
    return (
        <div className="w-full mt-12 flex justify-center items-center">
            <div className="relative bg-transparent rounded-2xl p-8 flex items-center justify-center text-center max-w-7xl" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>
                {/* Dotted pattern background */}
                <div 
                    className="absolute top-0 left-0 h-full w-1/4"
                    style={{
                        backgroundImage: 'radial-gradient(#D6E4FF 2px, transparent 2px)',
                        backgroundSize: '16px 16px',
                    }}
                ></div>
                
                <div className="relative z-10">
                    <div className="relative inline-block">
                         <svg className="absolute -left-10 -top-2 w-8 h-8 text-gray-800" viewBox="0 0 100 100">
                            <path d="M85,20 C70,20 30,50 30,80 L15,70 M30,80 L45,70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-2xl text-gray-700" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>EVERY TIME</p>
                        <p className="text-2xl text-gray-700" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>YOU STEP OUTSIDE YOUR</p>
                        <p className="text-2xl text-gray-700" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>COMFORT ZONE,</p>
                        <svg className="absolute -right-10 -top-2 w-8 h-8 text-gray-800" viewBox="0 0 100 100">
                            <path d="M15,20 C30,20 70,50 70,80 L55,70 M70,80 L85,70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mt-2" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>YOUR</h2>
                    <h2 className="text-5xl font-bold text-gray-900" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>COMFORT ZONE</h2>
                    <h2 className="text-5xl font-bold text-gray-900" style={{fontFamily: "'Patrick Hand', 'Comic Sans MS', cursive, sans-serif"}}>EXPANDS.</h2>
                </div>
            </div>
        </div>
    );
}











// Inline SVG icons for the Warikoo section
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>

);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm6-11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);



// Reusable info card
const InfoCard = ({ cardData, onViewContent }) => {
  const { imageUrl, tags, title, logoUrl, logoName, rating, reviews, details } = cardData;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col space-y-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '650 / 440' }}>
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => {
          const palette = [
            { bg: '#E6F0FF', text: '#0B3B8A' },
            { bg: '#FFF3E0', text: '#8A4F00' },
            { bg: '#E7F8F0', text: '#0F5132' },
            { bg: '#F3E8FF', text: '#5B21B6' },
            { bg: '#FFE4E6', text: '#9F1239' },
          ];
          const colors = palette[index % palette.length];
          const lower = String(tag.text || '').toLowerCase();
          let backgroundColor = tag.bgColor || colors.bg;
          let color = tag.textColor || colors.text;
          // Specific styles for Internship and Case Study tags
          if (lower.includes('internship')) {
            backgroundColor = '#E6F0FF';
            color = '#0B3B8A';
          } else if (lower.includes('case study')) {
            backgroundColor = '#FFF3E0';
            color = '#8A4F00';
          }
          return (
            <span
              key={index}
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor, color }}
            >
              {tag.text}
            </span>
          );
        })}
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-left leading-snug flex-grow">{title}</h3>
      </div>

      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-1">
          <StarIcon />
          <span className="text-sm text-gray-600">({rating} {reviews})</span>
        </div>
      </div>

      {/* View Content Button with Logo */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 md:space-x-4 ml-2 md:ml-3">
          <div className="h-14 w-14 md:h-16 md:w-16 relative overflow-visible">
            <img src={logoUrl} alt={`${logoName} logo`} className="h-full w-full object-contain transform scale-125 md:scale-150 origin-center" />
          </div>
          <span className="text-gray-800 font-semibold text-sm md:text-base">{logoName}</span>
        </div>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105 text-sm md:text-base"
          onClick={() => onViewContent(title)}
        >
          View Content
        </button>
      </div>

      <hr className="border-gray-200" />

      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <CalendarIcon />
          <span>{details.item1}</span>
        </div>
        <div className="flex items-center space-x-2">
          <ClockIcon />
          <span>{details.item2}</span>
        </div>
        <div className="flex items-center space-x-2">
          <UsersIcon />
          <span>{details.item3}</span>
        </div>
      </div>
    </div>
  );
};

// Banner component
const AnkurWarikooBanner = () => {
  return (
    <div className="bg-blue-50 rounded-2xl p-4 md:p-8 col-span-1 md:col-span-3 relative overflow-hidden">
      {/* Mobile Layout - Stacked vertically on small screens */}
      <div className="md:hidden flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img 
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755070650/AnkurWarikoText_wnrovn.svg" 
            alt="#AnkurWarikoo" 
            className="h-16 md:h-20 flex-shrink-0" 
          />
          <p className="bg-black text-white px-4 py-2 rounded-lg inline-block font-semibold text-sm">
            Entrepreneur | Author | Mentor | Youth Icon
          </p>
          <p className="text-lg text-gray-700 text-center">
            For every student who's ever wondered <span className="font-bold">What now? What next?</span>
          </p>
        </div>

        {/* Book Component and Skillizee Powered Section - Side by side on mobile */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            {/* Book Component */}
            <div className="rounded-2xl border-4 border-[#0B4D9A] bg-white px-3 py-2 shadow-sm flex items-center gap-2">
              <img 
                src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755071168/BookImage_pvstv1.svg" 
                alt="Beyond the Syllabus Book" 
                className="h-20 w-auto transform hover:scale-110 transition-transform duration-300" 
              />
              <div className="text-[#0B4D9A] font-extrabold leading-none text-lg">
                FREE<br />BOOK
              </div>
            </div>

            {/* Skillizee Powered Section */}
            <div className="bg-white border border-blue-200 rounded-xl p-2 inline-flex flex-col items-center">
              <img 
                src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png" 
                alt="Skillizee" 
                className="h-8 w-8 object-contain" 
              />
              <p className="text-xs text-gray-600 mt-1">Powered by</p>
              <p className="font-semibold text-gray-800 text-xs">Skillizee</p>
            </div>
          </div>
        </div>

        {/* Ankur Warikoo Image - Centered on mobile */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754999107/AnkurWarikoImage_jjwmw7.svg"
            alt="Ankur Warikoo"
            className="h-48 md:h-64 w-auto object-contain"
          />
        </div>

        {/* Accreditation Section */}
        <div className="text-center">
          <h4 className="font-semibold text-gray-800 mb-3 text-sm">Accreditation & Collaborations</h4>
          <div className="flex flex-wrap justify-center gap-3 items-center">
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752663818/Group_1618872730_lqcxsn.svg" alt="IIT Bombay" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752663819/Group_1618872732_jmddsr.svg" alt="BITS Hyderabad" className="h-8 object-contain" />
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752664029/stem_png_3_hhgux7.svg" alt="STEM" className="h-12 object-contain" />
            <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755077708/BestInStem_qqfiuq.svg" alt="Best of Stem" className="h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original layout for larger screens */}
      <div className="hidden md:block relative">
        {/* Book Component - Absolutely positioned */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="rounded-2xl border-4 border-[#0B4D9A] bg-white px-4 py-3 shadow-sm flex items-center gap-4">
            <img 
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755071168/BookImage_pvstv1.svg" 
              alt="Beyond the Syllabus Book" 
              className="h-40 w-auto transform hover:scale-110 transition-transform duration-300" 
            />
            <div className="text-[#0B4D9A] font-extrabold leading-none text-4xl whitespace-nowrap">
              FREE<br />BOOK
            </div>
          </div>
        </div>

        {/* Ankur Warikoo Image - Absolutely positioned */}
        <div className="absolute right-72 bottom-0 z-20">
          <img
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754999107/AnkurWarikoImage_jjwmw7.svg"
            alt="Ankur Warikoo"
            className="h-96 w-auto object-contain"
          />
        </div>

        {/* Content - Left side */}
        <div className="relative z-30 flex-1 space-y-8 max-w-2xl">
          <div className="flex flex-row items-start gap-6">
            <img 
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755070650/AnkurWarikoText_wnrovn.svg" 
              alt="#AnkurWarikoo" 
              className="h-20 flex-shrink-0" 
            />
            <div className="mt-2">
              <p className="bg-black text-white px-4 py-2 rounded-lg inline-block font-semibold">
                Entrepreneur | Author | Mentor | Youth Icon
              </p>
              <p className="mt-4 text-xl text-gray-700">
                For every student who's ever <br />wondered <span className="font-bold">What now? What next?</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start gap-6">
            <div className="bg-white border border-blue-200 rounded-xl p-3 inline-flex flex-col items-center flex-shrink-0">
              <img 
                src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png" 
                alt="Skillizee" 
                className="h-14 w-14 object-contain" 
              />
              <p className="text-xs text-gray-600 mt-2">Powered by</p>
              <p className="font-semibold text-gray-800">Skillizee</p>
            </div>
            <div className="mt-2">
              <h4 className="font-semibold text-gray-800 mb-2">Accreditation & Collaborations</h4>
              <div className="flex flex-wrap gap-4 items-center">
                <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png" alt="IIT Bombay" className="h-12 object-contain" />
                <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png" alt="BITS Hyderabad" className="h-12 object-contain" />
                <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1752664029/stem_png_3_hhgux7.svg" alt="STEM" className="h-12 object-contain" />
                <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755077708/BestInStem_qqfiuq.svg" alt="Best of Stem" className="h-12 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card data definitions
const card1Data = {
  imageUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755076706/Internship_3_1_idnajz.svg',
  tags: [
    { text: 'Internship', bgColor: '#FFFFFF', textColor: '#000000', position: { top: '1rem', left: '1rem' } },
    { text: 'GET BRAND CERTIFIED', bgColor: '#FFD700', textColor: '#000000', position: { top: '3.5rem', left: '1rem' } }
  ],
  title: 'GudGum Virtual Internship',
  logoUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg',
  rating: '4.8',
  reviews: 'Reviews',
  details: { item1: '05', item2: '11h 20m', item3: '2680' }
};

const card2Data = {
  imageUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755077110/Starbucks_unphne.svg',
  tags: [{ text: 'Case Study', bgColor: '#FFFFFF', textColor: '#000000', position: { bottom: '1rem', left: '1rem' } }],
  title: 'How Starbucks became a 80$ billion industry',
  logoUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755080136/skillizee_logo_egnukd.svg',
  rating: '4.5',
  reviews: 'Reviews',
  details: { item1: '07', item2: '17h 10m', item3: '3219' }
};

const card3Data = {
  imageUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755076648/Masterclass_hm9229.svg',
  tags: [
    { text: 'Who can Attend : Students from Grades 6-12', bgColor: '#4A90E2', textColor: '#FFFFFF', position: { top: '1rem', right: '1rem' } }
  ],
  title: 'Ankur Warikoo Masterclass',
  logoUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755080136/skillizee_logo_egnukd.svg',
  rating: '4.8',
  reviews: 'Reviews',
  details: { item1: '05', item2: '11h 20m', item3: '2680' }
};

// Wrapper section to render cards + banner
function WarikooSection() {
  return (
    <section className="w-full flex justify-center pt-4 pb-0 px-2 -mb-12 md:-mb-16">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scale-[0.75] origin-top bg-[#E6F0FF] border border-blue-200 rounded-3xl p-4 md:p-6">
        <InfoCard cardData={card1Data} />
        <InfoCard cardData={card2Data} />
        <InfoCard cardData={card3Data} />
        <AnkurWarikooBanner />
      </div>

    </section>

  );

}





function CourseInstructorsSection() {

  // Placeholder images (replace with real ones as needed)

  const ankurImg = 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1753427841/AnkurWariko_tkfjbk.avif';

  const shreyaImg = 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1700000000/shreya_pattar.png';

  const vaibhavImg = 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1700000000/vaibhav_sisinty.png';

  const vedikaImg = 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1700000000/vedika_bhaia.png';

  return (

    <section className="w-full flex flex-col items-center justify-center py-16 scale-[1.08]">

      <div className="w-full flex flex-col items-center mb-8">

        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] text-center">Course Instructors</h2>

        <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">

          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#1890b7" strokeWidth="3" fill="none" />

        </svg>

      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

        {/* Left: Main Instructor */}

        <div className="bg-[#e6f0fa] rounded-3xl shadow-lg p-0 flex flex-col justify-between min-h-[520px] relative overflow-hidden">

          <div className="flex flex-col h-full">

            {/* Text/Stats */}

            <div className="flex-1 p-8 flex flex-col justify-center z-10">

              <div className="text-2xl md:text-3xl font-bold text-[#0a2540] mb-2">Instructed By<br />Ankur Warikoo</div>

              <div className="mt-6 mb-6">

                <div className="text-[#1976b2] text-2xl md:text-3xl font-bold">15.7 Million+</div>

                <div className="text-[#0a2540] text-sm mb-3">followers across<br />social platforms</div>

                <div className="text-[#1976b2] text-2xl md:text-3xl font-bold">10.2 Million+</div>

                <div className="text-[#0a2540] text-sm mb-3">monthly impressions<br />on LinkedIn</div>

                <div className="text-[#1976b2] text-2xl md:text-3xl font-bold">2.5 Million+</div>

                <div className="text-[#0a2540] text-sm">followers on LinkedIn</div>

              </div>

            </div>

            {/* Image absolutely positioned */}

            <img

              src={ankurImg}

              alt="Ankur Warikoo"

              className="hidden md:block absolute right-0 bottom-0 h-[21.6rem] object-contain"

              style={{

                right: '-72px', // Slide image to the right, partially hidden

                margin: 0,

                background: 'none',

                borderRadius: 0,

                boxShadow: 'none',

                zIndex: 5,

              }}

            />

            {/* Mobile image below text */}

            <img

              src={ankurImg}

              alt="Ankur Warikoo"

              className="block md:hidden w-full h-auto object-contain z-20 mt-4"

              style={{

                maxHeight: '17.3rem',

                margin: 0,

                background: 'none',

                borderRadius: 0,

                boxShadow: 'none',

              }}

            />

          </div>

          {/* Bottom Banner */}

          <div className="absolute left-0 right-0 bottom-0 bg-[#0a2540] text-white text-center text-base font-medium rounded-b-3xl py-3 px-4" style={{ letterSpacing: 0.2, zIndex: 10 }}>

            Ankur is 1 of the only 4 people in the world with 2 Million+ followers on YouTube, Instagram, and LinkedIn each!

          </div>

        </div>

        {/* Right: Guest Instructors */}

        <div className="flex flex-col h-full min-h-[520px] gap-6">

          {/* Shreya Pattar */}

          <div className="relative bg-gradient-to-br from-[#1976b2] to-[#0a2540] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">

            {/* Ribbon */}

            <div className="absolute -top-5 left-4 bg-[#5b7fff] text-white text-xs font-bold px-4 py-1 rounded-lg shadow-md rotate-[-8deg] z-20">Special Guest Lectures!</div>

            <div className="flex-1">

              <div className="flex items-center gap-2 mb-1">

                <span className="text-white font-bold text-lg">Shreya Pattar</span>

                <span className="text-[#5bcbff]">✔</span>

                <span className="text-white text-sm">@shreyapattar</span>

              </div>

              <div className="text-white text-sm">Founder of a personal branding agency, Shreya shares insights on building engagement.</div>

            </div>

            <img src={shreyaImg} alt="Shreya Pattar" className="w-18 h-18 object-cover rounded-2xl ml-4" />

          </div>

          {/* Vaibhav Sisinty */}

          <div className="bg-gradient-to-br from-[#1976b2] to-[#0a2540] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">

            <div className="flex-1">

              <div className="flex items-center gap-2 mb-1">

                <span className="text-white font-bold text-lg">Vaibhav Sisinty</span>

                <span className="text-[#5bcbff]">✔</span>

                <span className="text-white text-sm">@vaibhavsisinty</span>

              </div>

              <div className="text-white text-sm">An entrepreneur and marketing consultant, Vaibhav helps you leverage your profile for professional growth.</div>

            </div>

            <img src={vaibhavImg} alt="Vaibhav Sisinty" className="w-18 h-18 object-cover rounded-2xl ml-4" />

          </div>

          {/* Vedika Bhaia */}

          <div className="bg-gradient-to-br from-[#1976b2] to-[#0a2540] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">

            <div className="flex-1">

              <div className="flex items-center gap-2 mb-1">

                <span className="text-white font-bold text-lg">Vedika Bhaia</span>

                <span className="text-[#5bcbff]">✔</span>

                <span className="text-white text-sm">@vedikabhaia</span>

              </div>

              <div className="text-white text-sm">A LinkedIn strategist, Vedika guides you through the basics of building a personal brand online.</div>

            </div>

            <img src={vedikaImg} alt="Vedika Bhaia" className="w-18 h-18 object-cover rounded-2xl ml-4" />

          </div>

        </div>

      </div>

    </section>

  );

}


function FAQSection() {

  const faqs = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "What is the time commitment required for the course?",
      content: "The course is self-paced and will require 10+ hours. You'll also have access to bonus content and monthly live group Q&A sessions.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M8 15h8M9 9h6M12 6v12" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "Which language is the course in?",
      content: "The course is available in English with subtitles. The primary language of the course is in English and there maybe some discussions and banter in Hindi. Rest assured, all videos have English subtitles.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M15 10v4M9 10v4M12 8v8" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "Does the course come with any live interaction?",
      content: "Yes, this course consists of live group Q&A sessions with our mentors.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "When will the live group Q&A sessions be held?",
      content: "The live group Q&A sessions are held monthly. The date and time of these sessions are updated at the start of every month and available on the course platform. You will also receive WhatsApp notifications about the session details for the first six months of your enrollment.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="#1976b2" strokeWidth="2"/><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "What is the community experience in the course?",
      content: "The course includes exclusive access to a virtual chat based community that Skillizee does not moderate. It is a student space where you can interact with other course students, ask questions, and build a network with like-minded students in this community.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "Does the course come with a certificate of completion?",
      content: "Yes, a signed digital certificate is available to the students after successful completion of the course.",
    },

    {
      icon: (
        <svg className="w-6 h-6 text-[#1976b2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2-1.5 2s-1.5.5-1.5 2v1" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="#1976b2"/></svg>
      ),
      title: "How can I clear my doubts during the course, if I have any?",
      content: "This course consists of monthly live group Q&A sessions with our mentors where you can ask your questions. Additionally, you can also use the virtual course community available inside the course platform to ask questions and learn with other students.",
    },

    {

      // Q&A session schedule

      icon: (

        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1976b2" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#1976b2" strokeWidth="2" strokeLinecap="round" /><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round" /></svg>

      ),

      title: "When will the live group Q&A sessions be held?",

      content: "The live group Q&A sessions are held monthly. The date and time of these sessions are updated at the start of every month and available on the course platform. You will also receive WhatsApp notifications about the session details for the first six months of your enrollment.",

    },

    {

      // Recordings

      icon: (

        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#1976b2" strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke="#1976b2" strokeWidth="2" /></svg>

      ),

      title: "Will the recording of the live group Q&A sessions be available?",

      content: "Yes, the monthly live group Q&A session recordings are available with lifetime access. The recording of the session is added to the course and available on the course platform within one week of the session.",

    },

    {

      // Community

      icon: (

        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="#1976b2" strokeWidth="2" /><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" stroke="#1976b2" strokeWidth="2" /></svg>

      ),

      title: "What is the community experience in the course?",

      content: "The Premium version of the course includes exclusive access to a virtual chat based community that WebVeda does not moderate. It is a student space where you can interact with other course students, ask questions, and build a network with like-minded students in this community.",

    },

    {

      // Certificate

      icon: (

        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#1976b2" strokeWidth="2" /><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#1976b2" strokeWidth="2" /></svg>

      ),

      title: "Does the course come with a certificate of completion?",

      content: "Yes, a signed digital certificate is available to the students after successful completion of the course.",

    },

    {

      // Doubt clearing

      icon: (

        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2" /><path d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2-1.5 2s-1.5.5-1.5 2v1" stroke="#1976b2" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="17" r="1" fill="#1976b2" /></svg>

      ),

      title: "How can I clear my doubts during the course, if I have any?",

      content: "The Premium version of this course consists of monthly live group Q&A sessions with Ankur Warikoo where you can ask your questions. Additionally, you can also use the virtual course community available in the Premium version inside the course platform to ask questions and learn with other students.",

    },

  ];

  return (

    <section className="w-full min-h-[600px] py-24 px-4 md:px-0 flex flex-col items-center justify-center bg-white relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\' stroke=\'%23e5e7eb\' stroke-dasharray=\'2 2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0">

        {/* Sticky Heading - Only on Desktop */}
        {/* Sticky Heading - Sticky on Desktop, Normal on Mobile */}
        <StickyBox offsetTop={120} offsetBottom={40} className="hidden md:block">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-2">Frequently Asked<br />Questions</h2>
            <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#1890b7" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </StickyBox>

        {/* Mobile Heading - Non-sticky */}
        <div className="md:hidden">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-2">Frequently Asked<br />Questions</h2>
            <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#1890b7" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>

        {/* Accordion */}

        <Accordion.Root type="single" collapsible className="flex flex-col gap-3 md:gap-4 w-full">

          {faqs.map((faq, i) => (

            <Accordion.Item key={i} value={faq.title} className={`rounded-xl md:rounded-2xl border border-blue-200 overflow-hidden bg-blue-50`} >

              <Accordion.Header>

                <Accordion.Trigger className="flex justify-between items-center w-full px-4 md:px-6 py-4 md:py-6 text-left cursor-pointer group focus:outline-none">

                  <div className="flex flex-col items-start">

                    <div className="w-5 h-5 md:w-6 md:h-6">
                      {faq.icon}
                    </div>

                    <div className="text-lg md:text-2xl text-black font-semibold">{faq.title}</div>

                  </div>

                  <span className="text-2xl md:text-3xl text-[#1976b2] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>

                </Accordion.Trigger>

              </Accordion.Header>

              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 text-[#0a2540] text-sm md:text-base animate-fade-in">

                {faq.content}

              </Accordion.Content>

            </Accordion.Item>

          ))}

        </Accordion.Root>

        <style>{`

          @keyframes fade-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }

          .animate-fade-in { animation: fade-in 0.5s; }

        `}</style>

      </div>

    </section>

  );

}





const LinkedIn = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Timeline data for each course
  const timelineData = {
    gudgum: [
      {
        week: "Module 1",
        title: "Introduction to Sustainable Branding",
        description: "Learn the fundamentals of sustainable branding and understand GudGum's mission.",
        activities: [
          "Brand analysis and research",
          "Understanding sustainable packaging",
          "Market research on eco-friendly products"
        ],
        duration: "30 Minutes",
        outcome: "Complete understanding of sustainable branding principles"
      },
      {
        week: "Module 2",
        title: "Product Development & Innovation",
        description: "Explore the product development process and innovation strategies.",
        activities: [
          "Product lifecycle analysis",
          "Innovation brainstorming sessions",
          "Prototype development"
        ],
        duration: "30 Minutes",
        outcome: "Develop innovative product concepts"
      },
      {
        week: "Module 3",
        title: "Marketing & Campaign Strategy",
        description: "Create comprehensive marketing campaigns for sustainable products.",
        activities: [
          "Campaign ideation and planning",
          "Social media strategy development",
          "Content creation for eco-conscious audience"
        ],
        duration: "30 Minutes",
        outcome: "Complete marketing campaign portfolio"
      },
      {
        week: "Module 4",
        title: "Business Model & Strategy",
        description: "Understand the business model and strategic planning for sustainable ventures.",
        activities: [
          "Business model canvas creation",
          "Financial planning and projections",
          "Strategic roadmap development"
        ],
        duration: "30 Minutes",
        outcome: "Comprehensive business strategy document"
      },
      {
        week: "Module 5",
        title: "Final Project & Presentation",
        description: "Present your complete sustainable branding project and receive feedback.",
        activities: [
          "Final project compilation",
          "Presentation preparation",
          "Peer review and feedback"
        ],
        duration: "30 Minutes",
        outcome: "Professional portfolio and presentation skills"
      }
    ],
    starbucks: [
      {
      week: "Module 1",
      title: "Starbucks Foundation & History",
      description: "Explore Starbucks' journey from a small coffee shop to a global brand.",
      activities: [
      "Company history research",
      "Founder's vision analysis",
      "Early business model study"
      ],
      duration: "30 Minutes",
      outcome: "Understanding of Starbucks' foundation"
      },
      {
      week: "Module 2",
      title: "Brand Strategy & Positioning",
      description: "Analyze Starbucks' brand strategy and market positioning.",
      activities: [
      "Brand positioning analysis",
      "Target audience identification",
      "Competitive landscape study"
      ],
      duration: "30 Minutes",
      outcome: "Comprehensive brand strategy understanding"
      },
      {
      week: "Module 3",
      title: "Global Expansion Strategy",
      description: "Study Starbucks' international expansion and localization strategies.",
      activities: [
      "Market entry strategies",
      "Cultural adaptation analysis",
      "Global supply chain study"
      ],
      duration: "30 Minutes",
      outcome: "Global business expansion insights"
      },
      {
      week: "Module 4",
      title: "Innovation & Digital Transformation",
      description: "Explore Starbucks' digital initiatives and innovation strategies.",
      activities: [
      "Digital platform analysis",
      "Mobile app strategy study",
      "Customer experience innovation"
      ],
      duration: "30 Minutes",
      outcome: "Digital transformation knowledge"
      },
      {
      week: "Module 5",
      title: "Sustainability & Social Impact",
      description: "Understand Starbucks' commitment to sustainability and social responsibility.",
      activities: [
      "Sustainability initiatives analysis",
      "Social impact programs study",
      "ESG reporting review"
      ],
      duration: "30 Minutes",
      outcome: "Sustainability and CSR understanding"
      },
      {
      week: "Module 6",
      title: "Financial Performance & Growth",
      description: "Analyze Starbucks' financial performance and growth strategies.",
      activities: [
      "Financial statement analysis",
      "Revenue model study",
      "Growth strategy evaluation"
      ],
      duration: "30 Minutes",
      outcome: "Financial analysis skills"
      },
      {
      week: "Module 7",
      title: "Future Strategy & Case Study",
      description: "Develop a comprehensive case study and future strategy recommendations.",
      activities: [
      "Case study compilation",
      "Future strategy recommendations",
      "Presentation preparation"
      ],
      duration: "30 Minutes",
      outcome: "Complete case study and strategic insights"
      }
      ],
    masterclass: [
      {
        week: "Week 1",
        title: "Personal Branding Fundamentals",
        description: "Learn the basics of personal branding and why it matters in today's digital world.",
        activities: [
          "Personal brand assessment",
          "Core values identification",
          "Target audience analysis"
        ],
        duration: "3-4 hours",
        outcome: "Clear personal brand foundation"
      },
      {
        week: "Week 2",
        title: "Content Creation & Strategy",
        description: "Master the art of creating engaging content that resonates with your audience.",
        activities: [
          "Content strategy development",
          "Writing techniques practice",
          "Visual content creation"
        ],
        duration: "4-5 hours",
        outcome: "Content creation skills"
      },
      {
        week: "Week 3",
        title: "Social Media Mastery",
        description: "Learn to leverage social media platforms for maximum impact and engagement.",
        activities: [
          "Platform-specific strategies",
          "Engagement optimization",
          "Analytics and measurement"
        ],
        duration: "5-6 hours",
        outcome: "Social media expertise"
      },
      {
        week: "Week 4",
        title: "Networking & Relationship Building",
        description: "Build meaningful connections and grow your professional network effectively.",
        activities: [
          "Networking strategies",
          "Relationship building techniques",
          "Collaboration opportunities"
        ],
        duration: "4-5 hours",
        outcome: "Strong professional network"
      },
      {
        week: "Week 5",
        title: "Monetization & Career Growth",
        description: "Turn your personal brand into opportunities and advance your career.",
        activities: [
          "Monetization strategies",
          "Career advancement planning",
          "Portfolio development"
        ],
        duration: "5-6 hours",
        outcome: "Career growth roadmap"
      }
    ]
  };

  // Local card data for cloned Warikoo section
  const warikooCard1Data = {
    imageUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755076706/Internship_3_1_idnajz.svg',
    tags: [
      { text: 'Internship', bgColor: '#FFFFFF', textColor: '#000000', position: { top: '1rem', left: '1rem' } },
      { text: 'GET BRAND CERTIFIED', bgColor: '#FFD700', textColor: '#000000', position: { top: '3.5rem', left: '1rem' } }
    ],
    title: 'GudGum Virtual Internship',
    logoUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg',
    rating: '4.8',
    reviews: 'Reviews',
    details: { item1: '05', item2: '11h 20m', item3: '2680' }
  };

  const warikooCard3Data = {
    imageUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755076648/Masterclass_hm9229.svg',
    tags: [
      { text: 'Who can Attend : Students from Grades 6-12', bgColor: '#4A90E2', textColor: '#FFFFFF', position: { top: '1rem', right: '1rem' } }
    ],
    title: 'Ankur Warikoo Masterclass',
    logoUrl: 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1755080136/skillizee_logo_egnukd.svg',
    rating: '4.8',
    reviews: 'Reviews',
    details: { item1: '05', item2: '11h 20m', item3: '2680' }
  };

  const handleViewContent = (title) => {
    if (title.includes('GudGum')) {
      setActiveModal('gudgum');
    } else if (title.includes('Starbucks')) {
      setActiveModal('starbucks');
    } else if (title.includes('Masterclass')) {
      setActiveModal('masterclass');
    }
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getModalContent = () => {
    switch (activeModal) {
      case 'gudgum':
        return {
          title: 'GudGum Virtual Internship Timeline',
          description: 'Explore the comprehensive 5-week journey of the GudGum Sustainable Branding Internship. Each week focuses on different aspects of sustainable business and branding.',
          data: timelineData.gudgum
        };
      case 'starbucks':
        return {
          title: 'Starbucks Case Study Timeline',
          description: 'Dive deep into Starbucks\' journey from a small coffee shop to an $80 billion global empire. This 7-week case study covers all aspects of their success story.',
          data: timelineData.starbucks
        };
      case 'masterclass':
        return {
          title: 'Ankur Warikoo Masterclass Timeline',
          description: 'Join Ankur Warikoo in this comprehensive 5-week masterclass on personal branding and career growth. Learn from one of India\'s most successful entrepreneurs.',
          data: timelineData.masterclass
        };
      default:
        return null;
    }
  };

  return (

    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 ">

      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '984512286401857');
            fbq('track', 'PageView');
          `
        }}
      />
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src="https://www.facebook.com/tr?id=984512286401857&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <style>{logoAnim}</style>

      <div

        className="w-full max-w-4xl rounded-3xl shadow-xl flex flex-col items-center relative overflow-hidden bg-white mt-8"

        style={{ minHeight: '480px', padding: '32px 0' }}

      >

        {/* Background image only on bottom half, edge-to-edge */}

        <div

          className="absolute left-0 right-0 bottom-0 w-full z-0 pointer-events-none"

          style={{

            height: '50%',

            backgroundImage: 'url(https://res.cloudinary.com/dpstp4ovd/image/upload/v1748863808/123123123123_nhewwk.svg)',

            backgroundRepeat: 'no-repeat',

            backgroundPosition: 'center 50%', // move image up

            backgroundSize: 'cover',

            transform: 'scaleY(-1)',

          }}

        />

        {/* Content */}

        <div className="relative z-10 w-full flex flex-col items-center px-2 pt-6 pb-4">

          <h1 className="text-4xl md:text-4xl font-bold text-center text-[#00308A] mb-2">Making Students <span style={{ textDecoration: 'line-through' }}>BOOK SMART</span> LIFE SMART</h1>
          <p className="text-lg md:text-xl text-center font-bold text-[#00308A] mb-3">The Ultimate Guide bundle for Teenagers</p>
          <div className="flex gap-6 justify-center items-center mb-5">

            <span className="flex items-center gap-2 text-base md:text-lg text-[#00308A]"><span role="img" aria-label="enrolled">🎓</span> 2,937+ Enrolled</span>

            <span className="flex items-center gap-2 text-base md:text-lg text-[#00308A]"><span role="img" aria-label="star">⭐</span> 4.88 Course Rating</span>

          </div>



          {/* LinkedIn logo, no background, animated, smaller */}

          <div className="relative z-20 flex justify-center items-center" style={{ margin: '0 0 18px 0' }}>

            <img

              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755170155/Package_Registration_25_uvvqnu.svg"

              alt="LinkedIn Logo"

              className="w-56 h-56 object-contain"

              style={{

                animation: 'linkedinLogoZoom 4s ease-in-out infinite',

                pointerEvents: 'none',

                userSelect: 'none',

                background: 'none',

                borderRadius: 0,

                boxShadow: 'none',

              }}

            />

          </div>

          {/* Info cards row, icon left, subtext above heading */}

          <div className="relative z-40 w-full flex flex-wrap gap-4 justify-center items-center mt-4">

            {infoCards.map((card, i) => (

              <div

                key={i}

                className="border border-blue-200 rounded-2xl shadow p-2 flex flex-row items-center min-w-[120px] max-w-[160px] gap-2 text-white"

                style={{ background: 'rgba(255,255,255,0.35)' }}

              >

                <span className="text-xl flex-shrink-0">{card.icon}</span>

                <div className="flex flex-col items-start">

                  <span className="text-xs mb-0.5">{card.subtext}</span>

                  <span className="font-bold text-sm">{card.heading}</span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Problems Faced Heading */}

      <div className="w-full flex flex-col items-center mt-12 mb-2 px-4 md:px-0">

        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] text-center">Who is it for?</h2>
        <svg height="16" width="220" className="mt-1" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">

          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#1890b7" strokeWidth="3" fill="none" />

        </svg>

      </div>

      {/* Problems Faced Section */}

      <ProblemsFacedSection />

      {/* Slanted Banner */}

      {/* Top divider line */}
      <div className="w-full max-w-7xl mx-auto h-px bg-gray-300 mb-8"></div>

      <MotivationalQuote />

      {/* Bottom divider line */}
      <div className="w-full max-w-7xl mx-auto h-px bg-gray-300 mt-8"></div>

      {/* Bundled Experience Section - Complete */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-2 md:px-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] text-center mb-2">THE BUNDLED EXPERIENCE</h2>
        <p className="text-[#0a2540] text-center max-w-3xl mb-12">For Students Who Want To Gain Real-World Exposure, Tech Skills, And Life Insights— All In One Pack!</p>
        
        {/* Bundle #1 */}
        <div className="w-full max-w-7xl mb-4 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#0a2540] text-center mb-4">Bundle #1 – The Power Pack Experience</h3>
          
          <div className="w-full scale-[0.75] origin-top bg-[#E6F0FF] border border-blue-200 rounded-3xl overflow-hidden">
            {/* Cards Section */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 md:pt-6 px-2 md:px-6">
              <InfoCard cardData={warikooCard1Data} onViewContent={handleViewContent} />
              <InfoCard cardData={warikooCard3Data} onViewContent={handleViewContent} />
            </div>
            
            {/* Ankur Warikoo Banner Section */}
            <div className="p-4 md:p-6">
              <AnkurWarikooBanner />
            </div>
          </div>
        </div>
        
        {/* Bundle #1 CTA - Outside the bundle section */}
        <div className="w-full flex justify-center mb-6">
          <CTAComponent 
            ctaUrl="https://rzp.io/rzp/6Z1qXVf2" 
            originalPrice="₹3550+ GST"
            offerPrice="₹1770+ GST"
          />
        </div>
        
        {/* Bundle #2 */}
        <div className="w-full max-w-7xl mt-[8rem]">
          <h3 className="text-xl md:text-2xl font-bold text-[#0a2540] text-center mb-6">Bundle #2 – The Complete Experience</h3>
          
          <div className="w-full scale-[0.75] origin-top bg-[#E6F0FF] border border-blue-200 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:p-6">
              <InfoCard cardData={card1Data} onViewContent={handleViewContent} />
              <InfoCard cardData={card2Data} onViewContent={handleViewContent} />
              <InfoCard cardData={card3Data} onViewContent={handleViewContent} />
              <AnkurWarikooBanner />
            </div>
          </div>
          
          {/* Bundle #2 CTA */}
          <div className="mt-6 flex justify-center ">
            <CTAComponent 
              ctaUrl="https://rzp.io/rzp/o0q43hlB" 
              originalPrice="₹4550+ GST"
              offerPrice="₹2550+ GST"
            />
          </div>
        </div>
      </section>

      {/* Investment Highlight Component */}
      <div className="mt-8">
        <InvestmentHighlight />
      </div>

      {/* Course Instructors Section */}

      {/* <CourseInstructorsSection /> */}


      {/* Student Testimonials Section */}

      <div className="mb-16">
        <Testimonials />
      </div>

      {/* Enrollment CTA Component */}
      <div className="mb-16">
        <EnrollmentCTA />
      </div>

      {/* FAQ Section */}

      <FAQSection />

      {/* Footer */}

      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">

        <Footer />

      </div>

      {/* Modal */}
      {activeModal && getModalContent() && (
        <Modal
          isOpen={!!activeModal}
          onClose={closeModal}
          title={getModalContent().title}
          animation="scale"
          size="xl"
        >
          <CourseTimeline
            title={getModalContent().title}
            description={getModalContent().description}
            timelineData={getModalContent().data}
          />
        </Modal>
      )}

      {/* Signup Modal Component */}
      <SignupModal />

    </div>

  );

};



export default LinkedIn;

// CTA helpers
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500 mr-3 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const FeatureItem = ({ children }) => (
  <li className="flex items-center text-gray-700 dark:text-gray-300">
    <CheckIcon />
    <span>{children}</span>
  </li>
);

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) return;
    timerComponents.push(
      <div key={interval} className="text-center">
        <span className="text-2xl font-bold text-gray-800 dark:text-white">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-gray-500 dark:text-gray-400 block">{interval}</span>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-2 my-4">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="col-span-4 text-center text-red-500 font-semibold">Time's up!</span>
      )}
    </div>
  );
};

function CTAComponent({ ctaUrl = "#", originalPrice = "₹4550+ GST", offerPrice = "₹2550+ GST" }) {
  const earlyBirdDeadline = "2025-08-30T23:59:59";
  return (
    <section className="w-full flex items-center justify-center p-3 font-sans scale-[0.85] md:scale-[0.9] origin-top mt-[-20rem] md:mt-[-12rem]">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="lg:flex lg:items-center">
          <div className="p-4 md:p-6 lg:w-1/2">
            <div className="text-center lg:text-left mb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">Unlock Your Potential</h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">Join our exclusive bundle and get access to career-defining opportunities.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
              <h2 className="text-base font-semibold text-gray-800 dark:text-white mb-3">What's Included in the Bundle:</h2>
              <ul className="space-y-3">
                <FeatureItem>LIVE Webinar with Mr. Ankur Warikoo</FeatureItem>
                <FeatureItem>Brand Endorsed INTERNSHIP - GudGum</FeatureItem>
                <FeatureItem>FREE "Beyond the syllabus" Hardcopy Book</FeatureItem>
              </ul>
            </div>
          </div>
          <div className="p-4 md:p-6 lg:w-1/2">
            <div className="border-2 border-dashed border-yellow-400 dark:border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl text-center mb-4">
              <h3 className="font-bold text-yellow-600 dark:text-yellow-400 text-xs uppercase">Early Bird Offer Ends Soon!</h3>
              <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">(until 30th August, 2025 ONLY)</p>
              <CountdownTimer targetDate={earlyBirdDeadline} />
              <div className="flex items-center justify-center space-x-3">
                <span className="text-lg md:text-xl font-medium text-gray-500 dark:text-gray-400 line-through">{originalPrice}</span>
                <span className="text-3xl md:text-4xl font-extrabold text-green-600 dark:text-green-400">{offerPrice}</span>
              </div>
            </div>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead', {
                    content_name: 'ENROLL NOW Button',
                    content_category: 'CTA',
                    value: 1,
                    currency: 'INR'
                  });
                }
              }}
              className="block w-full text-center bg-blue-600 text-white font-bold text-base md:text-lg py-3 px-5 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              ENROLL NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}