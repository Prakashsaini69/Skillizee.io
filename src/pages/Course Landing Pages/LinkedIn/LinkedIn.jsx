import React from 'react';
import DotPattern from './DotPattern';
import { Typewriter } from 'react-simple-typewriter';
import StickyBox from 'react-sticky-box';
import * as Accordion from '@radix-ui/react-accordion';
import animationData from '../../../assets/animation.json';
import Lottie from 'lottie-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Marquee from 'react-fast-marquee';
import SlantedScrollingBanner from "./SlantedScrollingBanner";
import Footer from "../../../components/common/Footer";
import ProfileCard from './ProfileCard';

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
    heading: '10+ Hours',
    subtext: 'Video Duration',
  },
  {
    icon: '💯',
    heading: 'Refund Policy',
    subtext: '100% No Questions',
  },
  {
    icon: '🔊',
    heading: 'English',
    subtext: 'Available In',
  },
  {
    icon: '💬',
    heading: 'Q&A Sessions',
    subtext: 'Group Live',
  },
];

function ProblemsFacedSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-8 mb-8">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Sliding Arrows Card */}
        <div className="bg-blue-100 rounded-3xl p-8 flex flex-col justify-end min-h-[340px] relative shadow-md">
          {/* Sliding Arrows */}
          <div className="absolute top-10 left-0 w-full h-32 overflow-hidden pointer-events-none select-none">
            <Marquee gradient={false} speed={30} pauseOnHover={false} className="w-full h-32 overflow-hidden">
              {Array.from({ length: 8 }).map((_, i) => (
                <img
                  key={i}
                  src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753353221/down-arrow_emvfxk.png"
                  alt="Arrow"
                  className="w-28 h-28 mx-2 opacity-80"
                  style={{ transform: 'rotate(-30deg)' }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <img
                  key={i + 100}
                  src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753353221/down-arrow_emvfxk.png"
                  alt="Arrow"
                  className="w-28 h-28 mx-2 opacity-80"
                  style={{ transform: 'rotate(-30deg)' }}
                />
              ))}
            </Marquee>
          </div>
          <div className="mt-32" />
          <div className="mt-auto">
            <div className="font-bold text-lg text-[#0a2540] mb-1">Unable to expand your network</div>
            <div className="text-[#0a2540] text-base">Learn to leverage the LinkedIn algorithm to expand your professional network.</div>
          </div>
        </div>
        {/* Right: Animated Heading and Cards */}
        <div className="flex flex-col gap-4 h-full">
          {/* Typing Animation Heading Card */}
          <div className="bg-blue-100 rounded-3xl p-6 shadow-md">
            <div className="text-4xl md:text-5xl font-bold text-[#1890b7] mb-2">
              <Typewriter
                words={["Hi everyone...|", "in this post...|", "Uhhhhhhhh|"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </div>
            <div className="font-bold text-lg text-[#0a2540] mb-1">Can’t think of new content ideas</div>
            <div className="text-[#0a2540] text-base">Understand how to set up a content system so you never run out of ideas and create consistent content.</div>
          </div>
          {/* Bottom Cards Row as 2-col grid, with gap between cards */}
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Struggle to get visibility card (square, white, border, visible icons, infinite loop) */}
            <div className="bg-white border border-blue-200 rounded-2xl shadow-md p-2 flex flex-col items-center h-full justify-center">
              <div className="flex items-center justify-center mb-2 w-full overflow-hidden">
                <Marquee gradient={false} speed={30} pauseOnHover={false} className="w-full">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center text-2xl mx-1"
                    >👍</div>
                  ))}
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i + 100}
                      className="w-10 h-10 flex items-center justify-center text-2xl mx-1"
                    >👍</div>
                  ))}
                </Marquee>
              </div>
              <div className="font-bold text-base text-[#0a2540] text-center leading-tight">Struggle to get<br />visibility!</div>
            </div>
            {/* Monetize card (rectangle) */}
            <div className="bg-blue-100 rounded-2xl shadow-md p-4 flex flex-col items-start h-full justify-center">
              <div className="font-bold text-base text-[#0a2540] mb-1">Finding it difficult to monetize your content and generate consistent leads</div>
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

function SlantedBanner() {
  return (
    <div className="w-full mt-12 flex justify-center items-center">
      <div
        className="w-full border-0"
        style={{
          background: '#0071a1',
          clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full flex justify-center" style={{paddingTop: '12px'}}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="text-white text-3xl md:text-5xl font-bold mb-4" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
            “Grow Professionally Through LinkedIn”
          </div>
          <div className="text-white text-2xl md:text-3xl italic mb-2" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
            Build A Network. Grow Visibility.
          </div>
          <div className="text-white text-2xl md:text-4xl font-bold italic" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
            Generate Leads!
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{paddingBottom: '12px'}}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
      </div>
    </div>
  );
}

function SneakPeekBanner() {
  return (
    <div className="w-full mt-12 flex justify-center items-center">
      <div
        className="w-full"
        style={{
          background: '#0573a6',
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full" style={{paddingTop: '12px'}}>
          <div className="w-full h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="text-white text-4xl md:text-5xl font-bold mb-10" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
            Sneak Peek Into The Course
          </div>
          <div className="flex justify-center w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg mx-auto" style={{maxWidth: 640, width: '100%'}}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/U53zrUaDlgY"
                title="Sneak Peek Into The Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[240px] md:h-[360px]"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{paddingBottom: '12px'}}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
      </div>
    </div>
  );
}

function NextSneakPeekBanner() {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="w-full"
        style={{
          background: '#0573a6',
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full" style={{paddingTop: '12px'}}>
          <div className="w-full h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="text-white text-4xl md:text-5xl font-bold mb-10" style={{textShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
            Still not convinced?
          </div>
          <div className="flex justify-center w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg mx-auto" style={{maxWidth: 640, width: '100%'}}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/rpWzlsUiapI"
                title="Still not convinced?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[240px] md:h-[360px]"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{paddingBottom: '12px'}}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
      </div>
    </div>
  );
}

function CurriculumSection() {
  const modules = [
    { title: 'Introspection', subtitle: 'MODULE 1  |  1 HOUR', color: 'bg-blue-100', content: 'Content for Introspection.' },
    { title: 'Target Audience', subtitle: 'MODULE 2  |  2 HOURS', color: 'bg-yellow-50', content: 'Content for Target Audience.' },
    { title: 'Creation Process', subtitle: 'MODULE 3  |  2 HOURS', color: 'bg-cyan-100', content: 'Content for Creation Process.' },
    { title: 'LinkedIn Analytics', subtitle: 'MODULE 4  |  2 HOURS', color: 'bg-blue-100', content: 'Content for LinkedIn Analytics.' },
    { title: 'Personal Branding', subtitle: 'MODULE 5  |  2 HOURS', color: 'bg-yellow-50', content: 'Content for Personal Branding.' },
    { title: 'Monetization', subtitle: 'MODULE 6  |  2 HOURS', color: 'bg-cyan-100', content: 'Content for Personal Branding.' },
    { title: 'Bonus Content', subtitle: 'FREE ADD ONS', color: 'bg-blue-100', content: 'Content for Personal Branding.' },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Sticky animated icon and heading */}
        <StickyBox offsetTop={120} offsetBottom={40} className="h-full">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start sticky top-32">
            <div className="text-2xl md:text-3xl font-medium text-[#0a2540] text-center md:text-left mb-2">Self-paced modules, watch anytime, anywhere.</div>
            <svg height="16" width="220" className="mb-4" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#1890b7" strokeWidth="3" fill="none"/>
            </svg>
            {/* Lottie Animation */}
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 264, height: 264 }}
            />
          </div>
        </StickyBox>
        {/* Right: Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-4 w-full">
          {modules.map((mod, i) => (
            <Accordion.Item key={i} value={mod.title} className={`rounded-2xl border border-blue-100 overflow-hidden ${mod.color}`} >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-6 text-left cursor-pointer group focus:outline-none">
                  <div>
                    <div className="uppercase text-xs tracking-widest text-[#0a2540] opacity-80 mb-1">{mod.subtitle}</div>
                    <div className="text-2xl font-bold text-[#0a2540]">{mod.title}</div>
                  </div>
                  <span className="text-3xl text-[#0a2540] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-[#0a2540] text-base animate-fade-in">
                {mod.content}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <style>{`
          @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
          .animate-bounce-slow { animation: bounce-slow 2.5s infinite cubic-bezier(.68,-0.55,.27,1.55); }
          @keyframes fade-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }
          .animate-fade-in { animation: fade-in 0.5s; }
        `}</style>
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
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#1890b7" strokeWidth="3" fill="none"/>
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
          <div className="absolute left-0 right-0 bottom-0 bg-[#0a2540] text-white text-center text-base font-medium rounded-b-3xl py-3 px-4" style={{letterSpacing: 0.2, zIndex: 10}}>
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

function FoundersCollaborationSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-16 mb-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">Meet the Founders</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two industry experts coming together to bring you the ultimate LinkedIn mastery experience
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 min-h-[450px]">
          {/* First Founder Card */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-[320px] h-[450px]">
              <ProfileCard
                name="Dr. Aarna Rawat"
                title="Founder & CEO"
                handle="aarnasingh"
                status="Online"
                contactText="Connect"
                avatarUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1749110579/1735758197204_lcgskh.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact Aarna clicked')}
                avatarSize="75%"
                miniAvatarSize="40px"
                iconUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png "
              />
            </div>
          </div>
          
          {/* Collaboration Icon */}
          <div className="hidden lg:flex items-center justify-center mx-12">
            <img 
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753524272/cooperation_sd1a1i.png" 
              alt="Collaboration Icon" 
              className="w-30 h-30 object-contain drop-shadow-lg"
            />
          </div>
          
          {/* Second Founder Card */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-[320px] h-[450px]">
              <ProfileCard
                name="Ankur Warikoo"
                title="Course Instructor"
                handle="ankurwarikoo"
                status="Online"
                contactText="Connect"
                avatarUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753427841/AnkurWariko_tkfjbk.avif"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact Ankur clicked')}
                avatarSize="70%"
                miniAvatarSize="48px"
                iconUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523205/Untitled_design_8_illsmm.png"
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Collaboration Icon */}
        <div className="lg:hidden flex justify-center mt-8">
          <img 
            src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753524272/cooperation_sd1a1i.png" 
            alt="Collaboration Icon" 
            className="w-21 h-21 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

function StudentTestimonialsSection() {
  // Placeholder avatars and testimonials
  const avatars = [
    'https://randomuser.me/api/portraits/men/32.jpg',
    'https://randomuser.me/api/portraits/men/33.jpg',
    'https://randomuser.me/api/portraits/men/34.jpg',
    'https://randomuser.me/api/portraits/women/35.jpg',
    'https://randomuser.me/api/portraits/women/36.jpg',
    'https://randomuser.me/api/portraits/men/37.jpg',
  ];
  const testimonials = [
    {
      text: 'I must commend the course for its content, which has been meticulously crafted. One of the highlights for me was learning how to perform my own analytics.',
      name: 'Poorva Panwalkar',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      stats: [
        { value: '98%', label: 'Increase in searches' },
        { value: '62%', label: 'Increase in profile views' },
        { value: '4X', label: 'Increase in impressions' },
      ],
    },
    {
      text: 'This course nudged me to think about why I am doing this, who my audience is, and what really matters. It went into great depth about how LinkedIn works and its algorithm.',
      name: 'Sahil Bansal',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      stats: [
        { value: '84%', label: 'Increase in searches' },
        { value: '2X', label: 'Increase in impressions' },
        { value: '1.5X', label: 'Increase in engagements' },
      ],
    },
    {
      text: 'This course reignited my passion for writing, helping me create a structured process. In the first month, I achieved over 600,000 impressions and generated several inbound leads, showcasing its impact.',
      name: 'Parth Parikh',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      stats: [
        { value: '237K', label: 'Increase in impressions' },
        { value: '31%', label: 'More search appearances' },
        { value: '2X', label: 'Increase in Profile views' },
      ],
    },
    {
      text: "The course was a great learning experience. It corrected some of the myths I had about LinkedIn’s growth. I learnt the importance of Personal Branding and how one should go about it.",
      name: "Sanjay Ahuja",
      avatar: "https://randomuser.me/api/portraits/men/47.jpg",
      stats: [
        { value: "77%", label: "More search appearances" },
        { value: "19%", label: "Increase in profile views" },
        { value: "3X", label: "Increase in impressions" },
      ],
    },
    {
      text: "I loved the detail and clarity the team brought to the course. For anyone looking for insights and an approach towards LinkedIn, I’d highly recommend this course",
      name: "Tara Kapur",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      stats: [
        { value: "44%", label: "Increase in impressions" },
        { value: "14%", label: "Increase in profile views" },
        { value: "23%", label: "More search appearances" },
      ],
    },
    {
      text: "I joined the course to understand LinkedIn content creation. It provides an honest perspective on the process, the emotions involved, and the common challenges one might face.",
      name: "Sonam Mahajan",
      avatar: "https://randomuser.me/api/portraits/women/49.jpg",
      stats: [
        { value: "3X", label: "Increase in impressions" },
        { value: "20%", label: "Increase in profile views" },
        { value: "3X", label: "More search appearances" },
      ],
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-transparent">
      {/* Top Row: Banner left, Avatars right */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        {/* Banner left */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0" style={{minWidth: 220}}>
          <div className="bg-[#0573a6] text-white rounded-2xl px-8 py-4 mb-2 shadow-lg text-left flex flex-col items-start justify-center" style={{fontFamily: 'inherit'}}>
            <span className="text-4xl font-bold">2,937+</span>
            <span className="text-xl font-semibold mt-1" style={{fontFamily: 'Roasted Chicken, cursive'}}>
              students have taken this course!
            </span>
          </div>
        </div>
        {/* Avatars right */}
        <div className="flex gap-12 flex-nowrap justify-end w-full md:w-auto">
          {avatars.map((src, i) => (
            <div key={i} className="w-16 h-16 rounded-full border-4 border-white shadow-lg relative overflow-hidden flex items-center justify-center bg-blue-100 animate-zoom-in-out">
              <img src={src} alt="avatar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#000" fillOpacity="0.3"/><polygon points="16,13 28,20 16,27" fill="#fff"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel */}
      <div className="w-full max-w-5xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[#e6f0fa] rounded-3xl shadow-lg p-5 flex flex-col h-full min-h-[420px] relative" style={{backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '18px 18px'}}>
                {/* Top: Description */}
                <div className="flex-1 flex flex-col justify-start">
                  <div className="text-[#0a2540] text-lg font-medium">{t.text}</div>
                </div>
                {/* Bottom: User info, separator, insights */}
                <div className="flex flex-col space-y-0 w-full mt-6">
                  <div className="flex gap-3 min-h-[56px] items-center">
                    <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow" />
                    <span className="font-bold text-[#0a2540] text-lg">{t.name}</span>
                  </div>
                  <div className="w-full flex justify-center my-3">
                    <div className="h-0.5 w-11/12 bg-[#bcd2e6] rounded-full" />
                  </div>
                  <div className="flex justify-between gap-4 w-full">
                    {t.stats.map((s, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <span className="text-[#111] font-bold text-xl">{s.value}</span>
                        <span className="text-xs text-[#0a2540] text-center font-medium">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper pagination will be styled below */}
        <style>{`
          .swiper-pagination {
            position: static !important;
            margin-top: 32px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
      <style>{`
        @keyframes zoomInOut {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.13); }
        }
        .animate-zoom-in-out {
          animation: zoomInOut 2.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function OurPromiseSection() {
  // Placeholder badge image (replace with your actual badge if available)
  const badgeImg = 'https://framerusercontent.com/images/B8LOfz4fDe6nrnYG0lt4E6KHUM.png'; // Use your badge image URL
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 bg-transparent scale-[0.8]">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-0">
        {/* Left: Badge */}
        <div className="flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <img src={badgeImg} alt="Our Promise Badge" className="w-72 h-72 object-contain drop-shadow-xl animate-zoom-in-out" style={{borderRadius: '32px'}} />
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex flex-col items-start justify-center">
          <div className="text-3xl md:text-4xl font-semibold text-[#0a2540] mb-6 leading-tight">
            No-nonsense Approach.<br />
            <span className="text-blue-500">Practical Delivery.</span><br />
            Risk-free Investment.
          </div>
          <div className="mb-4">
            <span className="text-blue-500 font-bold text-lg">Lifetime Access</span>
            <span className="block text-[#222] text-base">Get access forever on a one-time payment and watch anytime, anywhere as per your convenience.</span>
          </div>
          <div className="mb-4">
            <span className="text-blue-500 font-bold text-lg">100% Refund Policy</span>
            <span className="block text-[#222] text-base">Cancel anytime within 14 days of purchase and get a full refund, no questions asked.</span>
          </div>
          <div className="mb-4">
            <span className="text-blue-500 font-bold text-lg">Free Upgrades</span>
            <span className="block text-[#222] text-base">Gain all future updates, additions and changes made to the course at no additional cost.</span>
          </div>
        </div>
      </div>
      
    </section>
  );
}

function PricingPlansSection() {
  const plans = [
    {
      icon: '📄',
      name: 'Basic Plan',
      subtitle: 'English | Notes Only',
      price: '₹1,959/-',
      features: [
        { text: '6 Live Group Sessions', available: false },
        { text: 'Course Upgrades at Zero Cost', available: false },
        { text: 'Course Virtual Community', available: false },
        { text: 'Pre-recorded Video Lectures', available: false },
        { text: 'Assignment & Evaluation Guide', available: false },
        { text: 'PDF Course Notes', available: true },
        { text: 'Certificate of Completion', available: true },
      ],
      button: 'Enroll Now',
      note: '100% Refund | Lifetime Access',
      highlight: false,
    },
    {
      icon: '⭐',
      name: 'Premium Plan',
      subtitle: 'English | Access Everything',
      price: '₹2,359/-',
      features: [
        { text: '6 Live Group Sessions', available: true },
        { text: 'Course Upgrades at Zero Cost', available: true },
        { text: 'Course Virtual Community', available: true },
        { text: 'Pre-recorded Video Lectures', available: true },
        { text: 'Assignment & Evaluation Guide', available: true },
        { text: 'PDF Course Notes', available: true },
        { text: 'Certificate of Completion', available: true },
      ],
      button: 'Enroll Now',
      note: '100% Refund | Lifetime Access',
      highlight: true,
      ribbon: 'BEST VALUE',
    },
    {
      icon: '🕒',
      name: 'Standard Plan',
      subtitle: 'English | Videos & Notes',
      price: '₹2,159/-',
      features: [
        { text: '6 Live Group Sessions', available: false },
        { text: 'Course Upgrades at Zero Cost', available: false },
        { text: 'Course Virtual Community', available: false },
        { text: 'Pre-recorded Video Lectures', available: true },
        { text: 'Assignment & Evaluation Guide', available: true },
        { text: 'PDF Course Notes', available: true },
        { text: 'Certificate of Completion', available: true },
      ],
      button: 'Enroll Now',
      note: '100% Refund | Lifetime Access',
      highlight: false,
    },
  ];
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 bg-transparent">
      <div className="w-full flex flex-col items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] text-center">Pricing Plans</h2>
        <svg height="16" width="220" className="mt-1" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#1890b7" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={
              `relative flex flex-col items-center rounded-2xl border transition-all duration-200 shadow-lg px-8 py-10 bg-white scale-[0.99] ` +
              (plan.highlight
                ? 'bg-gradient-to-br from-[#0a2540] to-[#1a2a4f] text-white border-blue-200 z-10 scale-105 shadow-2xl'
                : 'border-blue-100 text-[#0a2540] bg-white')
            }
            style={{ minHeight: 560, boxShadow: plan.highlight ? '0 8px 32px 0 rgba(0,0,0,0.12)' : undefined }}
          >
            {/* Ribbon */}
            {plan.ribbon && (
              <div className="absolute top-0 right-0 bg-blue-400 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl shadow-md rotate-12 z-20" style={{transform: 'translateY(-50%) translateX(30%) rotate(18deg)'}}>
                {plan.ribbon}
              </div>
            )}
            {/* Icon */}
            <div className={plan.highlight ? 'text-3xl mb-3' : 'text-3xl mb-3 text-blue-500'}>{plan.icon}</div>
            {/* Plan Name */}
            <div className={plan.highlight ? 'text-lg font-bold mb-1 text-white' : 'text-lg font-bold mb-1 text-[#0a2540]'}>{plan.name}</div>
            <div className={plan.highlight ? 'text-sm mb-4 text-white/80' : 'text-sm mb-4 text-[#888]'}>{plan.subtitle}</div>
            {/* Price */}
            <div className={plan.highlight ? 'text-3xl font-bold mb-6 text-white' : 'text-3xl font-bold mb-6 text-[#0a2540]'}>{plan.price}</div>
            {/* Features */}
            <ul className="w-full flex-1 flex flex-col gap-1 mb-6">
              {plan.features.map((f, idx) => (
                <li key={f.text} className={
                  'flex items-center gap-2 text-sm ' +
                  (f.available
                    ? (plan.highlight ? 'text-white' : 'text-[#0a2540]')
                    : (plan.highlight ? 'text-white/50' : 'text-[#bbb] line-through'))
                }>
                  {f.available
                    ? <span className="text-green-500 text-lg">✔</span>
                    : <span className="text-red-400 text-lg">✖</span>
                  }
                  {f.text}
                </li>
              ))}
            </ul>
            {/* Button */}
            <button
              className={
                'w-full rounded-full py-3 text-base font-bold transition-all duration-200 ' +
                (plan.highlight
                  ? 'bg-white text-[#0a2540] hover:bg-blue-100'
                  : 'bg-blue-500 text-white hover:bg-blue-600')
              }
            >
              {plan.button}
            </button>
            {/* Note */}
            <div className={plan.highlight ? 'text-xs text-white/80 mt-2' : 'text-xs text-[#888] mt-2'}>{plan.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      // Access time
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M12 6v6l4 2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: "How long will it take to get access to the course?",
      content: "Your credentials to access the course will be delivered to your inbox within 5–10 minutes of your purchase. Please check your promotions/updates tab and spam folder as well.",
    },
    {
      // Time commitment
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "What is the time commitment required for the course?",
      content: "The course is self-paced and will require 10+ hours. If you have the Premium version, you’ll also have access to bonus content and monthly live group Q&A sessions.",
    },
    {
      // Language
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M8 15h8M9 9h6M12 6v12" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "Which language is the course in?",
      content: "The course is available in English with subtitiles. The primary language of the course is in English and there maybe some discussions and banter in Hindi. Rest assured, all videos have English subtitles.",
    },
    {
      // LinkedIn account
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="currentColor" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1976b2"/><path d="M7 17v-7h3v7m-1.5-8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm6.25 8.25v-3.5c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75v3.5m3.5 0v-7h3v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: "Do I need to have a LinkedIn account for this course?",
      content: "To make the most of this course and to action your learnings, we highly recommend you to have a LinkedIn account. The course is designed to be relevant for all LinkedIn accounts, irrespective of the number of followers or connections.",
    },
    {
      // Individual or team
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" stroke="#1976b2" strokeWidth="2"/><circle cx="16" cy="8" r="3" stroke="#1976b2" strokeWidth="2"/><path d="M2 20v-2a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "Is this course only for individual creators?",
      content: "Both individuals and/or a group/team of a creator(s) working together can enroll into the course.",
    },
    {
      // Live interaction
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M15 10v4M9 10v4M12 8v8" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "Does the course come with any live interaction?",
      content: "Yes, the premium version of this course consists of live group Q&A sessions with Ankur Warikoo.",
    },
    {
      // Q&A session schedule
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "When will the live group Q&A sessions be held?",
      content: "The live group Q&A sessions are held monthly. The date and time of these sessions are updated at the start of every month and available on the course platform. You will also receive WhatsApp notifications about the session details for the first six months of your enrollment.",
    },
    {
      // Recordings
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#1976b2" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "Will the recording of the live group Q&A sessions be available?",
      content: "Yes, the monthly live group Q&A session recordings are available with lifetime access. The recording of the session is added to the course and available on the course platform within one week of the session.",
    },
    {
      // Community
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="#1976b2" strokeWidth="2"/><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "What is the community experience in the course?",
      content: "The Premium version of the course includes exclusive access to a virtual chat based community that WebVeda does not moderate. It is a student space where you can interact with other course students, ask questions, and build a network with like-minded students in this community.",
    },
    {
      // Certificate
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#1976b2" strokeWidth="2"/><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#1976b2" strokeWidth="2"/></svg>
      ),
      title: "Does the course come with a certificate of completion?",
      content: "Yes, a signed digital certificate is available to the students after successful completion of the course.",
    },
    {
      // Doubt clearing
      icon: (
        <svg className="w-8 h-8 text-[#1976b2] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1976b2" strokeWidth="2"/><path d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2-1.5 2s-1.5.5-1.5 2v1" stroke="#1976b2" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="#1976b2"/></svg>
      ),
      title: "How can I clear my doubts during the course, if I have any?",
      content: "The Premium version of this course consists of monthly live group Q&A sessions with Ankur Warikoo where you can ask your questions. Additionally, you can also use the virtual course community available in the Premium version inside the course platform to ask questions and learn with other students.",
    },
  ];
  return (
    <section className="w-full min-h-[600px] py-24 px-2 md:px-0 flex flex-col items-center justify-center bg-white relative" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\' stroke=\'%23e5e7eb\' stroke-dasharray=\'2 2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat'}}>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Sticky Heading */}
        <StickyBox offsetTop={120} offsetBottom={40}>
          <div className="flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-2">Frequently Asked<br/>Questions</h2>
            <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#1890b7" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </StickyBox>
        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-4 w-full">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={faq.title} className={`rounded-2xl border border-blue-200 overflow-hidden bg-blue-50`} >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full px-6 py-6 text-left cursor-pointer group focus:outline-none">
                  <div className="flex flex-col items-start">
                    {faq.icon}
                    <div className="text-2xl text-black font-semibold">{faq.title}</div>
                  </div>
                  <span className="text-3xl text-[#1976b2] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-6 pb-6 text-[#0a2540] text-base animate-fade-in">
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
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 ">
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
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#00308A] mb-2">Learn To LinkedIn</h1>
          <p className="text-lg md:text-xl text-center font-bold text-[#00308A] mb-3">The Ultimate LinkedIn Mastery Course</p>
          <div className="flex gap-6 justify-center items-center mb-5">
            <span className="flex items-center gap-2 text-base md:text-lg text-[#00308A]"><span role="img" aria-label="enrolled">🎓</span> 2,937+ Enrolled</span>
            <span className="flex items-center gap-2 text-base md:text-lg text-[#00308A]"><span role="img" aria-label="star">⭐</span> 4.88 Course Rating</span>
          </div>
          
          {/* LinkedIn logo, no background, animated, smaller */}
          <div className="relative z-20 flex justify-center items-center" style={{ margin: '0 0 18px 0' }}>
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753341296/8379992_ke4jfx.png"
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
      <div className="w-full flex flex-col items-center mt-12 mb-2">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] text-center">Problems Faced</h2>
        <svg height="16" width="220" className="mt-1" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#1890b7" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      {/* Problems Faced Section */}
      <ProblemsFacedSection />
      {/* Slanted Banner */}
      <SlantedBanner />
      {/* Curriculum Section */}
      <CurriculumSection />
      {/* Founders Collaboration Section */}
      <FoundersCollaborationSection />
      {/* Course Instructors Section */}
      <CourseInstructorsSection />
      {/* Sneak Peek Banner */}
      <SneakPeekBanner />
      {/* Student Testimonials Section */}
      <StudentTestimonialsSection />
      {/* Our Promise Section */}
      <OurPromiseSection />
      {/* Slanted Scrolling Banner */}
      <SlantedScrollingBanner className="mt-12" />
      {/* Pricing Plans Section */}
      <PricingPlansSection />
      {/* Still not convinced? */}
      <NextSneakPeekBanner />
      {/* FAQ Section */}
      <FAQSection />
      {/* Footer */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
        <Footer />
      </div>
    </div>
  );
};

export default LinkedIn; 