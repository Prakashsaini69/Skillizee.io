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
import { FeatureCarousel } from '../../../components/ui/feature-carousel';
import { cn } from "../../../lib/utils";
import { Marquee as MagicMarquee } from "../../../components/magicui/marquee";


const logoAnim = `
@keyframes goodGumLogoZoom {
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
    subtext: 'Internship Duration',
  },
  {
    icon: '💚',
    heading: 'Grades 6–12',
    subtext: 'Student Eligibility',
  },
  {
    icon: '🌱',
    heading: 'Eco Projects',
    subtext: 'Real-world',
  },
  {
    icon: '🏅',
    heading: 'Certificate',
    subtext: 'Green Brand Builder',
  },
];



function SlantedBanner() {
  return (
    <div className="w-full mt-12 flex justify-center items-center">
      <div
        className="w-full border-0"
        style={{
          background: '#53a184',
          clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full flex justify-center" style={{ paddingTop: '12px' }}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="text-white text-3xl md:text-5xl font-bold mb-4" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            "Be Gud. Be Bold. Be the Voice."
          </div>
          <div className="text-white text-2xl md:text-3xl italic mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            Create a lasting impact with GudGum’s eco-friendly mission. Build a website, pitch ideas, and grow as a changemaker!
          </div>
          <div className="text-white text-2xl md:text-4xl font-bold italic" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            Build a Greener World
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{ paddingBottom: '12px' }}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
      </div>
    </div>
  );
}

function SneakPeekBanner() {
  return (
    <div className="w-full mt-8 md:mt-12 flex justify-center items-center">
      <div
        className="w-full"
        style={{
          background: '#53a184',
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full" style={{ paddingTop: '12px' }}>
          <div className="w-full h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-8 md:py-16 px-4 text-center">
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 px-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            Sneak Peek Into The Internship
          </div>
          <div className="flex justify-center w-full px-2">
            <div className="rounded-2xl overflow-hidden shadow-lg mx-auto w-full" style={{ maxWidth: 640 }}>
              <iframe
                width="100%"
                height="360"
                src="https://share.synthesia.io/embeds/videos/eef8e0cf-4465-42ce-a1fe-56452c976b68"
                title="Sneak Peek Into The Course"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px] sm:h-[240px] md:h-[360px]"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{ paddingBottom: '12px' }}>
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
          background: '#53a184',
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
        }}
      >
        {/* Top parallel line */}
        <div className="w-full" style={{ paddingTop: '12px' }}>
          <div className="w-full h-0.5 bg-white opacity-70" />
        </div>
        <div className="flex flex-col items-center justify-center py-8 md:py-16 px-4 text-center">
          <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 px-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
            Still not convinced?
          </div>
          <div className="flex justify-center w-full px-2">
            <div className="rounded-2xl overflow-hidden shadow-lg mx-auto w-full" style={{ maxWidth: 640 }}>
              <iframe
                width="100%"
                height="360"
                src="https://www.youtube.com/embed/rpWzlsUiapI"
                title="Still not convinced?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[200px] sm:h-[240px] md:h-[360px]"
              ></iframe>
            </div>
          </div>
        </div>
        {/* Bottom parallel line */}
        <div className="w-full flex justify-center" style={{ paddingBottom: '12px' }}>
          <div className="w-[98%] h-0.5 bg-white opacity-70" />
        </div>
      </div>
    </div>
  );
}

function CurriculumSection() {
  const modules = [
    {
      title: 'GudGum’s Roots',
      subtitle: 'MODULE 1  |  INTRO',
      color: 'bg-blue-100',
      content: `Why does GudGum exist? Learn the truth about plastic chewing gum and why biodegradable, chicle-based gum matters. Includes a video pitch and visuals of gum litter and chicle harvesting. 
      Activity: Design a green gum package using Figma.`
    },
    {
      title: 'Vision & Mission',
      subtitle: 'MODULE 2  |  BRAND ETHOS',
      color: 'bg-yellow-50',
      content: `Discover GudGum’s playful, eco-core messaging: “Chew Gud, Feel Gud, Do Gud”. Understand what makes a sustainable brand resonate with the modern consumer.`
    },
    {
      title: 'Product Identity',
      subtitle: 'MODULE 3  |  BIODIVERSITY',
      color: 'bg-cyan-100',
      content: `What sets GudGum apart? Explore natural flavors and compostable packaging. Activity: Create an eco-customer persona using our embedded template.`
    },
    {
      title: 'Team & Challenges',
      subtitle: 'MODULE 4  |  ENTREPRENEUR STORIES',
      color: 'bg-blue-100',
      content: `Meet founders Mayank & Bhuvan Nagori. Discuss obstacles like pricing and consumer education. Why sustainability means real challenges and creative solutions!`
    },
    {
      title: 'Market & Audience',
      subtitle: 'MODULE 5  |  MARKET RESEARCH',
      color: 'bg-yellow-50',
      content: `Who are GudGum’s consumers? Dive into India’s 2,000+ crore gum market and identify the eco-segments driving change. Activity: Startup cost calculator for a green brand.`
    },
    {
      title: 'Competitive Analysis',
      subtitle: 'MODULE 6  |  STRATEGY',
      color: 'bg-cyan-100',
      content: `How does GudGum compete? Perform a SWOT analysis vs major brands like Orbit. Visualize what makes GudGum’s plastic-free USP unique.`
    },
    {
      title: 'Marketing & Future',
      subtitle: 'MODULE 7  |  STORYTELLING',
      color: 'bg-blue-100',
      content: `Join #GudMove sustainability campaigns and pitch your own ideas for global eco-impact. See how 75% of sustainable brands thrive using creative social stories!`
    },
    {
      title: 'Be a Green Brand Builder',
      subtitle: 'BONUS  |  DIGITAL BADGE',
      color: 'bg-green-100',
      content: `Complete the internship, earn your digital badge, and share your “eco-brand” on GudGum’s digital wall!`
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* Left: Sticky animated icon and heading */}
        <StickyBox offsetTop={120} offsetBottom={40} className="h-full">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start sticky top-32 mb-8 lg:mb-0">
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-[#532c56] text-center lg:text-left mb-2 px-2">Self-paced modules, watch anytime, anywhere.</div>
            <svg height="16" width="220" className="mb-4" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#53a184" strokeWidth="3" fill="none" />
            </svg>
            {/* Lottie Animation */}
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 200, height: 200 }}
              className="hidden lg:block"
            />
            <Lottie
              animationData={animationData}
              loop
              autoplay
              style={{ width: 150, height: 150 }}
              className="block lg:hidden"
            />
          </div>
        </StickyBox>
        {/* Right: Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-3 md:gap-4 w-full">
          {modules.map((mod, i) => (
            <Accordion.Item key={i} value={mod.title} className={`rounded-2xl border overflow-hidden ${mod.color}`} style={{ borderColor: '#53a184' }} >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full px-4 md:px-6 py-4 md:py-6 text-left cursor-pointer group focus:outline-none">
                  <div>
                    <div className="uppercase text-xs tracking-widest text-[#532c56] opacity-80 mb-1">{mod.subtitle}</div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#532c56]">{mod.title}</div>
                  </div>
                  <span className="text-2xl md:text-3xl text-[#532c56] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 text-[#532c56] text-sm md:text-base animate-fade-in">
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

function FoundersCollaborationSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-8 md:mt-16 mb-8 md:mb-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#532c56] mb-3 md:mb-4 px-2">Meet the Founders</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Three passionate entrepreneurs coming together to bring you the ultimate sustainable branding experience
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-16 min-h-[350px] md:min-h-[450px]">
          {/* First Founder Card */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-[280px] sm:w-[320px] h-[400px] sm:h-[450px]">
              <ProfileCard
                name="Mayank Nagori"
                title="Founder & CEO"
                handle="mayanknagori"
                status="LinkedIn  "
                contactText="Connect"
                avatarUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754112154/Package_Registration_6_k6hgxh.png"
                socialIconUrl="https://media.licdn.com/dms/image/v2/C4E03AQGosyjmynOc5A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517470941882?e=1756944000&v=beta&t=233TtMaovExSthOa3FoRpY6SELS5B1DVtDO3rykzm0o"
                linkedinUrl="https://www.linkedin.com/in/mayank-b-nagori-52084491/"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                avatarSize="75%"
                miniAvatarSize="40px"
                iconUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png"
              />
            </div>
          </div>

          {/* Second Founder Card */}
          <div className="w-full lg:w-auto flex justify-center">
            <div className="w-[280px] sm:w-[320px] h-[400px] sm:h-[450px]">
              <ProfileCard
                name="Bhuvan Nagori"
                title="Co-Founder & CTO"
                handle="bhuvannagori"
                status="LinkedIn"
                contactText="Connect"
                avatarUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754114779/Package_Registration_5_v01vc3.svg"
                socialIconUrl="https://media.licdn.com/dms/image/v2/D5603AQG8UzGTm41Edg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1705389002805?e=1756944000&v=beta&t=c4Ziv3cGxEdRWwmDmRY4gLzmrtktNSsDGW1eXeV43Ok"
                linkedinUrl="https://www.linkedin.com/in/bhuvan-nagori-7640501b4/"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                avatarSize="75%"
                miniAvatarSize="40px"
                iconUrl="https://res.cloudinary.com/dpstp4ovd/image/upload/v1753523789/Untitled_design_11_auyc6a.png"
              />
            </div>
          </div>

          
        </div>
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
        <h2 className="text-4xl md:text-5xl font-bold text-[#532c56] text-center">Course Instructors</h2>
        <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#53a184" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Main Instructor */}
        <div className="rounded-3xl shadow-lg p-0 flex flex-col justify-between min-h-[520px] relative overflow-hidden" style={{ backgroundColor: '#9fcdbc' }}>
          <div className="flex flex-col h-full">
            {/* Text/Stats */}
            <div className="flex-1 p-8 flex flex-col justify-center z-10">
              <div className="text-2xl md:text-3xl font-bold text-[#532c56] mb-2">Instructed By<br />Ankur Warikoo</div>
              <div className="mt-6 mb-6">
                <div className="text-[#532c56] text-2xl md:text-3xl font-bold">15.7 Million+</div>
                <div className="text-[#532c56] text-sm mb-3">followers across<br />social platforms</div>
                <div className="text-[#532c56] text-2xl md:text-3xl font-bold">10.2 Million+</div>
                <div className="text-[#532c56] text-sm mb-3">monthly impressions<br />on LinkedIn</div>
                <div className="text-[#532c56] text-2xl md:text-3xl font-bold">2.5 Million+</div>
                <div className="text-[#532c56] text-sm">followers on LinkedIn</div>
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
          <div className="absolute left-0 right-0 bottom-0 bg-[#532c56] text-white text-center text-base font-medium rounded-b-3xl py-3 px-4" style={{ letterSpacing: 0.2, zIndex: 10 }}>
            Ankur is 1 of the only 4 people in the world with 2 Million+ followers on YouTube, Instagram, and LinkedIn each!
          </div>
        </div>
        {/* Right: Guest Instructors */}
        <div className="flex flex-col h-full min-h-[520px] gap-6">
          {/* Shreya Pattar */}
          <div className="relative bg-gradient-to-br from-[#532c56] to-[#53a184] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">
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
          <div className="bg-gradient-to-br from-[#532c56] to-[#53a184] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">
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
          <div className="bg-gradient-to-br from-[#532c56] to-[#53a184] rounded-2xl shadow-lg p-6 flex items-center gap-4 flex-1 min-h-0">
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



function OurPromiseSection() {
  // Placeholder badge image (replace with your actual badge if available)
  const badgeImg = 'https://res.cloudinary.com/dpstp4ovd/image/upload/v1754126899/Package_Registration_9_pcmzjm.svg'; // Use your badge image URL
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-12 bg-transparent px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-0">
        {/* Left: Badge */}
        <div className="flex justify-center items-center">
          <div className="relative flex flex-col items-center">
            <img src={badgeImg} alt="Our Promise Badge" className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain drop-shadow-xl animate-zoom-in-out" style={{ borderRadius: '24px' }} />
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex flex-col items-start justify-center">
          <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#532c56] mb-4 md:mb-6 leading-tight px-2">
            No-nonsense Approach.<br />
            <span className="text-[#53a184]">Practical Delivery.</span><br />
            Risk-free Investment.
          </div>
          <div className="mb-3 md:mb-4">
            <span className="text-[#53a184] font-bold text-base md:text-lg">Lifetime Access</span>
            <span className="block text-[#222] text-sm md:text-base">Get access forever on a one-time payment and watch anytime, anywhere as per your convenience.</span>
          </div>
          <div className="mb-3 md:mb-4">
            <span className="text-[#53a184] font-bold text-base md:text-lg">100% Refund Policy</span>
            <span className="block text-[#222] text-sm md:text-base">Cancel anytime within 14 days of purchase and get a full refund, no questions asked.</span>
          </div>
          <div className="mb-3 md:mb-4">
            <span className="text-[#53a184] font-bold text-base md:text-lg">Free Upgrades</span>
            <span className="block text-[#222] text-sm md:text-base">Gain all future updates, additions and changes made to the course at no additional cost.</span>
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
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-20 bg-transparent px-4">
      <div className="w-full flex flex-col items-center mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#532c56] text-center px-2">Pricing Plans</h2>
        <svg height="16" width="220" className="mt-1" viewBox="0 0 220 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10" stroke="#53a184" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={
              `relative flex flex-col items-center rounded-2xl border transition-all duration-200 shadow-lg px-4 sm:px-6 md:px-8 py-6 md:py-10 bg-white scale-[0.99] ` +
              (plan.highlight
                ? 'bg-gradient-to-br from-[#532c56] to-[#1a2a4f] text-white border-blue-200 z-10 scale-105 shadow-2xl'
                : 'border-blue-100 text-[#532c56] bg-white')
            }
            style={{ minHeight: 480, boxShadow: plan.highlight ? '0 8px 32px 0 rgba(0,0,0,0.12)' : undefined }}
          >
            {/* Ribbon */}
            {plan.ribbon && (
              <div className="absolute top-0 right-0 text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-2xl shadow-md rotate-12 z-20" style={{ backgroundColor: '#53a184', transform: 'translateY(-50%) translateX(30%) rotate(18deg)' }}>
                {plan.ribbon}
              </div>
            )}
            {/* Icon */}
            <div className={plan.highlight ? 'text-2xl md:text-3xl mb-3' : 'text-2xl md:text-3xl mb-3'} style={{ color: plan.highlight ? 'white' : '#53a184' }}>{plan.icon}</div>
            {/* Plan Name */}
            <div className={plan.highlight ? 'text-base md:text-lg font-bold mb-1 text-white' : 'text-base md:text-lg font-bold mb-1 text-[#532c56]'}>{plan.name}</div>
            <div className={plan.highlight ? 'text-xs md:text-sm mb-4 text-white/80' : 'text-xs md:text-sm mb-4 text-[#888]'}>{plan.subtitle}</div>
            {/* Price */}
            <div className={plan.highlight ? 'text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white' : 'text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-[#532c56]'}>{plan.price}</div>
            {/* Features */}
            <ul className="w-full flex-1 flex flex-col gap-1 mb-4 md:mb-6">
              {plan.features.map((f, idx) => (
                <li key={f.text} className={
                  'flex items-center gap-2 text-xs md:text-sm ' +
                  (f.available
                    ? (plan.highlight ? 'text-white' : 'text-[#532c56]')
                    : (plan.highlight ? 'text-white/50' : 'text-[#bbb] line-through'))
                }>
                  {f.available
                    ? <span className="text-green-500 text-base md:text-lg">✔</span>
                    : <span className="text-red-400 text-base md:text-lg">✖</span>
                  }
                  {f.text}
                </li>
              ))}
            </ul>
            {/* Button */}
            <button
              className={
                'w-full rounded-full py-2 md:py-3 text-sm md:text-base font-bold transition-all duration-200 ' +
                (plan.highlight
                  ? 'bg-white text-[#532c56] hover:bg-[#9fcdbc]'
                  : 'text-white hover:bg-[#9b53a1]')
              }
              style={{ backgroundColor: plan.highlight ? 'white' : '#53a184' }}
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
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#532c56" strokeWidth="2" /><path d="M12 6v6l4 2" stroke="#532c56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      title: "How long will it take to get access to the course?",
      content: "Your credentials to access the course will be delivered to your inbox within 5–10 minutes of your purchase. Please check your promotions/updates tab and spam folder as well.",
    },
    {
      // Time commitment
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#532c56" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /></svg>
      ),
      title: "What is the time commitment required for the course?",
      content: "The course is self-paced and will require 10+ hours. If you have the Premium version, you’ll also have access to bonus content and monthly live group Q&A sessions.",
    },
    {
      // Language
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#532c56" strokeWidth="2" /><path d="M8 15h8M9 9h6M12 6v12" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /></svg>
      ),
      title: "Which language is the course in?",
      content: "The course is available in English with subtitiles. The primary language of the course is in English and there maybe some discussions and banter in Hindi. Rest assured, all videos have English subtitles.",
    },
    {
      // LinkedIn account
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="currentColor" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#532c56" /><path d="M7 17v-7h3v7m-1.5-8.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm6.25 8.25v-3.5c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75v3.5m3.5 0v-7h3v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ),
      title: "Do I need to have a LinkedIn account for this course?",
      content: "To make the most of this course and to action your learnings, we highly recommend you to have a LinkedIn account. The course is designed to be relevant for all LinkedIn accounts, irrespective of the number of followers or connections.",
    },
    {
      // Individual or team
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="3" stroke="#532c56" strokeWidth="2" /><circle cx="16" cy="8" r="3" stroke="#532c56" strokeWidth="2" /><path d="M2 20v-2a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2" stroke="#532c56" strokeWidth="2" /></svg>
      ),
      title: "Is this course only for individual creators?",
      content: "Both individuals and/or a group/team of a creator(s) working together can enroll into the course.",
    },
    {
      // Live interaction
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#532c56" strokeWidth="2" /><path d="M15 10v4M9 10v4M12 8v8" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /></svg>
      ),
      title: "Does the course come with any live interaction?",
      content: "Yes, the premium version of this course consists of live group Q&A sessions with Ankur Warikoo.",
    },
    {
      // Q&A session schedule
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#532c56" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /><path d="M12 14v2m0 0h2m-2 0h-2" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /></svg>
      ),
      title: "When will the live group Q&A sessions be held?",
      content: "The live group Q&A sessions are held monthly. The date and time of these sessions are updated at the start of every month and available on the course platform. You will also receive WhatsApp notifications about the session details for the first six months of your enrollment.",
    },
    {
      // Recordings
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#532c56" strokeWidth="2" /><circle cx="12" cy="12" r="3" stroke="#532c56" strokeWidth="2" /></svg>
      ),
      title: "Will the recording of the live group Q&A sessions be available?",
      content: "Yes, the monthly live group Q&A session recordings are available with lifetime access. The recording of the session is added to the course and available on the course platform within one week of the session.",
    },
    {
      // Community
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" stroke="#532c56" strokeWidth="2" /><path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" stroke="#532c56" strokeWidth="2" /></svg>
      ),
      title: "What is the community experience in the course?",
      content: "The Premium version of the course includes exclusive access to a virtual chat based community that WebVeda does not moderate. It is a student space where you can interact with other course students, ask questions, and build a network with like-minded students in this community.",
    },
    {
      // Certificate
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="2" stroke="#532c56" strokeWidth="2" /><path d="M7 17v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" stroke="#532c56" strokeWidth="2" /></svg>
      ),
      title: "Does the course come with a certificate of completion?",
      content: "Yes, a signed digital certificate is available to the students after successful completion of the course.",
    },
    {
      // Doubt clearing
      icon: (
        <svg className="w-8 h-8 text-[#532c56] mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#532c56" strokeWidth="2" /><path d="M9 9a3 3 0 1 1 6 0c0 1.5-1.5 2-1.5 2s-1.5.5-1.5 2v1" stroke="#532c56" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="17" r="1" fill="#532c56" /></svg>
      ),
      title: "How can I clear my doubts during the course, if I have any?",
      content: "The Premium version of this course consists of monthly live group Q&A sessions with Ankur Warikoo where you can ask your questions. Additionally, you can also use the virtual course community available in the Premium version inside the course platform to ask questions and learn with other students.",
    },
  ];
  return (
    <section className="w-full min-h-[600px] py-12 md:py-24 px-4 flex flex-col items-center justify-center bg-white relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'3.5\' fill=\'white\' stroke=\'%23e5e7eb\' stroke-dasharray=\'2 2\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Sticky Heading */}
        <StickyBox offsetTop={120} offsetBottom={40}>
          <div className="flex flex-col items-start mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#532c56] mb-2 px-2">Frequently Asked<br />Questions</h2>
            <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#53a184" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </StickyBox>
        {/* Accordion */}
        <Accordion.Root type="single" collapsible className="flex flex-col gap-3 md:gap-4 w-full">
          {faqs.map((faq, i) => {
            const colorClasses = ['bg-cyan-100', 'bg-yellow-50', 'bg-blue-100'];
            const bgColor = colorClasses[i % colorClasses.length];
            return (
              <Accordion.Item key={i} value={faq.title} className={`rounded-2xl border overflow-hidden ${bgColor}`} style={{ borderColor: '#53a184' }} >
              <Accordion.Header>
                <Accordion.Trigger className="flex justify-between items-center w-full px-4 md:px-6 py-4 md:py-6 text-left cursor-pointer group focus:outline-none">
                  <div className="flex flex-col items-start">
                    <div className="w-6 h-6 md:w-8 md:h-8 mb-2">{faq.icon}</div>
                    <div className="text-lg sm:text-xl md:text-2xl text-black font-semibold">{faq.title}</div>
                  </div>
                  <span className="text-2xl md:text-3xl text-[#532c56] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 md:px-6 pb-4 md:pb-6 text-[#532c56] text-sm md:text-base animate-fade-in">
                {faq.content}
              </Accordion.Content>
            </Accordion.Item>
            );
          })}
        </Accordion.Root>
        <style>{`
          @keyframes fade-in { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: none; } }
          .animate-fade-in { animation: fade-in 0.5s; }
        `}</style>
      </div>
    </section>
  );
}

function FeatureCarouselSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-transparent px-4">
      <div className="w-full flex flex-col items-center mb-6 md:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#532c56] text-center px-2">About Gud Gum</h2>
        <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#53a184" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-[24px] md:rounded-[34px] bg-neutral-700 p-1 md:p-2">
          <div className="relative z-10 grid w-full gap-4 md:gap-8 rounded-[20px] md:rounded-[28px] bg-neutral-950 p-1 md:p-2">
            <FeatureCarousel
              title="Interactive Course Features"
              description="Experience the comprehensive learning journey with hands-on projects and expert guidance"
              image={{
                image: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1754116268/GudGum_-_1_wcywzd.svg",
                step2Image: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1754121019/TheirProduct_sre4pw.svg",
                step3Image: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1754122973/Package_Registration_7_zixca7.svg",
                step4Image: "https://res.cloudinary.com/dpstp4ovd/image/upload/v1754122973/Package_Registration_7_zixca7.svg",
                alt: "GudGum Course Features",
              }}
              bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const reviews = [
    {
      name: "Aisha Sharma",
      username: "@aisha_sharma",
      body: "This internship opened my eyes to the power of sustainable branding. Working on GudGum's mission to eliminate plastic waste was inspiring and impactful!",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      username: "@rahul_verma",
      body: "I learned how to craft compelling visuals that tell an eco-friendly story. GudGum's vision is a game-changer for the planet.",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Priya Menon",
      username: "@priya_menon",
      body: "The hands-on experience with real environmental issues made me rethink branding. I'm proud to contribute to a plastic-free future!",
      img: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Vikash Rao",
      username: "@vikash_rao",
      body: "GudGum's internship not only improved my design skills but helped my school become plastic-free! Highly recommended.",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Zara Khan",
      username: "@zara_khan",
      body: "Creating sustainable brand strategies for GudGum taught me the importance of purpose-driven design. Amazing experience!",
      img: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
      name: "Arjun Patel",
      username: "@arjun_patel",
      body: "The eco-friendly packaging design project was challenging but rewarding. GudGum's commitment to sustainability is inspiring.",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
    },
    {
      name: "Meera Singh",
      username: "@meera_singh",
      body: "Working on GudGum's social media campaigns helped me understand how to communicate environmental messages effectively.",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
    },
    {
      name: "Karan Malhotra",
      username: "@karan_malhotra",
      body: "The internship gave me real-world experience in sustainable marketing. GudGum's mission resonates with my values.",
      img: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      name: "Ananya Reddy",
      username: "@ananya_reddy",
      body: "I learned to create compelling content that promotes eco-friendly products. GudGum's approach is innovative and necessary.",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      name: "Rohan Gupta",
      username: "@rohan_gupta",
      body: "The hands-on projects with GudGum taught me how to balance creativity with environmental responsibility. Great learning experience!",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    username,
    body,
  }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className="rounded-full" width="32" height="32" alt="" src={img} />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-transparent px-4">
      <div className="w-full flex flex-col items-center mb-6 md:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#532c56] text-center px-2">What Our Students Say</h2>
        <svg height="16" width="260" className="mt-1" viewBox="0 0 260 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10 Q12 2 22 10 T42 10 T62 10 T82 10 T102 10 T122 10 T142 10 T162 10 T182 10 T202 10 T218 10 T238 10 T258 10" stroke="#53a184" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <MagicMarquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </MagicMarquee>
        <MagicMarquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </MagicMarquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
}


const GoodGum = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <style>{logoAnim}</style>
      <div
        className="w-full max-w-4xl rounded-3xl shadow-xl flex flex-col items-center relative overflow-hidden bg-white mt-4 md:mt-8 mx-4 md:mx-0"
        style={{ minHeight: '400px', padding: '24px 0' }}
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
        <div className="relative z-10 w-full flex flex-col items-center px-4 pt-4 pb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#532c56] mb-2 px-2">Inside GudGum</h1>
          <p className="text-base sm:text-lg md:text-xl text-center font-bold text-[#532c56] mb-3 px-2">Join the movement to combat plastic pollution and reimagine branding for a greener future.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-4 md:mb-5">
            <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-[#532c56]"><span role="img" aria-label="enrolled">🎓</span> 500+ Student Interns</span>
            <span className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-[#532c56]"><span role="img" aria-label="star">⭐</span> 4.95 Course Rating</span>
          </div>

          {/* LinkedIn logo, no background, animated, smaller */}
          <div className="relative z-20 flex justify-center items-center" style={{ margin: '0 0 18px 0' }}>
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754109295/Package_Registration_4_wvnxbn.svg"
              alt="GoodGum Logo"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
              style={{
                animation: 'goodGumLogoZoom 4s ease-in-out infinite',
                pointerEvents: 'none',
                userSelect: 'none',
                background: 'none',
                borderRadius: 0,
                boxShadow: 'none',
              }}
            />
          </div>
          {/* Info cards row, icon left, subtext above heading */}
          <div className="relative z-40 w-full flex flex-wrap gap-2 sm:gap-4 justify-center items-center mt-4">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="border rounded-2xl shadow p-2 flex flex-row items-center min-w-[100px] sm:min-w-[120px] max-w-[140px] sm:max-w-[160px] gap-2 text-white"
                style={{ background: 'rgba(255,255,255,0.35)', borderColor: '#53a184' }}
              >
                <span className="text-lg sm:text-xl flex-shrink-0">{card.icon}</span>
                <div className="flex flex-col items-start">
                  <span className="text-xs mb-0.5">{card.subtext}</span>
                  <span className="font-bold text-xs sm:text-sm">{card.heading}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     

      {/* Slanted Banner */}
      <SlantedBanner />
      {/* Meet the Founders Section */}
      <FoundersCollaborationSection />
      {/* Feature Carousel Section */}
      <FeatureCarouselSection />
      {/* Course Instructors Section */}
      {/* <CourseInstructorsSection /> */}
      {/* Sneak Peek Banner */}
      <SneakPeekBanner />
      {/* Curriculum Section */}
      <CurriculumSection />
      {/* Testimonials Section */}
      <TestimonialsSection />

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
      <div className="w-full relative left-1/2 right-1/2 -translate-x-1/2">
        <Footer />
      </div>
    </div>
  );
};

export default GoodGum; 