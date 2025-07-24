import React from 'react';
import DotPattern from '../components/ui/DotPattern';
import { Typewriter } from 'react-simple-typewriter';
import StickyBox from 'react-sticky-box';
import * as Accordion from '@radix-ui/react-accordion';
import animationData from '../assets/animation.json';
import Lottie from 'lottie-react';

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
          <div className="absolute top-10 left-0 w-full flex overflow-hidden h-32 pointer-events-none select-none">
            <div className="flex flex-nowrap animate-slide-arrows gap-8 w-max">
              {[...Array(2)].flatMap(() =>
                Array.from({ length: 8 }).map((_, i) => (
                  <img
                    key={i + Math.random()}
                    src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753353221/down-arrow_emvfxk.png"
                    alt="Arrow"
                    className="w-32 h-32 mx-2 opacity-80"
                    style={{
                      transform: 'rotate(-30deg)', // Adjust rotation degree here
                    }}
                  />
                ))
              )}
            </div>
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
                <div className="flex flex-nowrap animate-infinite-slide-icons gap-2 w-max">
                  {[...Array(2)].flatMap(() =>
                    Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i + Math.random()}
                        className="w-10 h-10 flex items-center justify-center text-2xl mx-1"
                      >👍</div>
                    ))
                  )}
                </div>
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

function CurriculumSection() {
  const modules = [
    { title: 'Introspection', subtitle: 'MODULE 1  |  1 HOUR', color: 'bg-blue-100', content: 'Content for Introspection.' },
    { title: 'Target Audience', subtitle: 'MODULE 2  |  2 HOURS', color: 'bg-yellow-50', content: 'Content for Target Audience.' },
    { title: 'Creation Process', subtitle: 'MODULE 3  |  2 HOURS', color: 'bg-cyan-100', content: 'Content for Creation Process.' },
    { title: 'LinkedIn Analytics', subtitle: 'MODULE 4  |  2 HOURS', color: 'bg-blue-100', content: 'Content for LinkedIn Analytics.' },
    { title: 'Personal Branding', subtitle: 'MODULE 5  |  2 HOURS', color: 'bg-yellow-50', content: 'Content for Personal Branding.' },
    { title: 'Monetization', subtitle: 'MODULE 6  |  2 HOURS', color: 'bg-yellow-50', content: 'Content for Personal Branding.' },
    { title: 'Bonus Content', subtitle: 'FREE ADD ONS', color: 'bg-yellow-50', content: 'Content for Personal Branding.' },
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
              style={{ width: 220, height: 220 }}
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
    </div>
  );
};

export default LinkedIn; 