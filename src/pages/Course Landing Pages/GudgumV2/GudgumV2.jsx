import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from "../../../components/common/Footer";
import { GudgumTimeline } from "./GudgumTimeline";
import { InteractiveHoverButton } from "../../../components/magicui/interactive-hover-button";
import StickyBox from 'react-sticky-box';
import * as Accordion from '@radix-ui/react-accordion';
import { Testimonials } from "../../../components/eldoraui/testimonials";
import { HoverVideoPlayer } from "../../../components/ui/hover-video-player";
import Preloader from "../../../components/common/Preloader";
import LazyImage from "../../../components/common/LazyImage";



// Popup window function
const openEnrollmentPopup = () => {
  const url = 'https://login.skillizee.io/courses/Skillizee-x-GudGum-Internship-688093b21e8aec5c3378ca92';
  const width = 1200;
  const height = 800;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  
  const popup = window.open(
    url,
    'enrollmentPopup',
    `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no`
  );
  
  // Focus the popup
  if (popup) {
    popup.focus();
  }
};

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
                 <Accordion.Root type="single" collapsible className="flex flex-col gap-3 w-full">
           {faqs.map((faq, i) => (
             <Accordion.Item key={i} value={faq.title} className={`rounded-xl border border-blue-200 overflow-hidden bg-blue-50`} >
               <Accordion.Header>
                 <Accordion.Trigger className="flex justify-between items-center w-full px-4 py-4 text-left cursor-pointer group focus:outline-none">
                   <div className="flex flex-col items-start">
                     <div className="w-6 h-6 mb-1">{faq.icon}</div>
                     <div className="text-lg text-black font-semibold">{faq.title}</div>
                   </div>
                   <span className="text-2xl text-[#1976b2] group-data-[state=open]:rotate-45 transition-transform duration-300">+</span>
                 </Accordion.Trigger>
               </Accordion.Header>
               <Accordion.Content className="px-4 pb-4 text-[#0a2540] text-sm animate-fade-in">
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

const GudgumV2 = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-full" style={{backgroundColor: '#fffffe'}}>
      <Preloader onLoadingComplete={handleLoadingComplete} />
      {!isLoading && (
        <>
          {/* Hero Section */}
          <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Gradient White Overlay */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/dpstp4ovd/image/upload/v1754305699/Package_Registration_10_jibn7s.svg")',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          ></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 50%)'
            }}
          ></div>
        </div>
        
                 {/* Main Content Container */}
         <div className="relative z-10 w-full max-w-6xl px-4 mx-[2%]">
           <div className="flex flex-col lg:flex-row items-center justify-start min-h-screen py-10 pb-0 mb-0">
                         {/* Left Side - White Container */}
             <div className="w-full lg:w-1/2 mb-0 lg:mb-0 lg:ml-0">
                                               <div className="bg-white rounded-t-2xl rounded-b-2xl shadow-2xl p-8 lg:p-12 relative">
                
                {/* Course Header */}
                <div className="flex items-center mb-6">
                  {/* Left SVG - Beaker/Flask */}
                  <div className="w-20 h-20 mr-6 flex items-center justify-center">
                    <LazyImage src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg" alt="GudGum Logo" className="w-20 h-20" />
                  </div>
                  
                  {/* Course Name Container */}
                  <div className="flex-1 relative">
                    <div className="bg-gradient-to-r rounded-xl p-4 mb-2" style={{background: 'linear-gradient(135deg, #E3F6F5 0%, #BAE8E8 100%)'}}>
                      <h1 className="text-2xl lg:text-3xl font-bold text-center" style={{color: '#272343'}}>
                        Gud Gum
                      </h1>
                      <p className="text-sm text-center font-medium" style={{color: '#2D334A'}}>Internship</p>
                      
                      {/* Top Right SVG - Plant */}
                      <div className="absolute -top-4 -right-4 w-18 h-18 flex items-center justify-center">
                        <LazyImage 
                          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754305317/Gudgum_Gum_SVG_tto8dd.svg"
                          alt="Plant decoration"
                          className="w-16 h-16"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-lg mb-6 text-center" style={{color: '#2d334a'}}>
                  Explore sustainable branding principles through fun, hands-on learning and real-world projects.
                </p>

                {/* Ratings and Stats */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" style={{color: '#ffd700'}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold" style={{color: '#272343'}}>4.95/5</span>
                    <span className="text-sm" style={{color: '#2d334a'}}>(478 Ratings)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{color: '#272343'}}>
                      <circle cx="8" cy="8" r="3" stroke="#272343" strokeWidth="1.5"/>
                      <circle cx="16" cy="8" r="3" stroke="#272343" strokeWidth="1.5"/>
                      <path d="M2 20v-2a4 4 0 0 1 4-4h2m8 0h2a4 4 0 0 1 4 4v2" stroke="#272343" strokeWidth="1.5"/>
                    </svg>
                    <span className="text-sm" style={{color: '#2d334a'}}>2859 Students Enrolled</span>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-r rounded-xl p-6 mb-8" style={{background: 'linear-gradient(135deg, #00308A 0%, #1e40af 100%)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-white/70 line-through text-lg">₹4,999</span>
                        <span className="text-white text-3xl font-bold ml-3">₹2,999</span>
                      </div>
                    
                    </div>
                    <button 
                      className="px-6 py-3 bg-white rounded-lg font-semibold transition-all duration-300 hover:scale-105" 
                      style={{color: '#00308A'}}
                      onClick={openEnrollmentPopup}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>

                           {/* Program Details Section */}
               <section className="pt-0 pb-20 -mt-16" style={{backgroundColor: '#fffffe'}}>
          <div className="max-w-7xl mx-auto px-2">
            {/* Connecting white section that merges with hero */}
            <div className="bg-white h-32 -mt-20 rounded-t-2xl" style={{borderBottomLeftRadius: '0', borderBottomRightRadius: '0'}}></div>
            <div className="flex flex-col lg:flex-row gap-16 bg-white rounded-b-2xl p-6 lg:p-8 -mt-16">
                           {/* Left Section - Program Details */}
              <div className="w-full lg:w-3/5">
                             {/* Program Overview */}
               <div className="mb-16">
                 <h2 className="text-4xl font-bold mb-10" style={{color: '#272343'}}>Program Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personalized attention */}
                                     <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>Personalized attention</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>Learn Science at your own pace with a teacher focused only on you</p>
                     </div>
                   </div>

                                     {/* Teacher-led sessions */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>Teacher-led sessions</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>Real-time interaction and feedback with a dedicated teacher</p>
                     </div>
                   </div>

                                     {/* 60 minutes per session */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>60 minutes per session</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>Deep-dive into topics with focused 60-minute sessions</p>
                     </div>
                   </div>

                                     {/* 6-18 age group */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>6-18 age group</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>Tailored for curious learners in the 6-18 age group</p>
                     </div>
                   </div>
                </div>
              </div>

                             {/* What's Included */}
               <div>
                 <h2 className="text-4xl font-bold mb-10" style={{color: '#272343'}}>What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                     {/* 120 Interactive lessons */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>120 Interactive lessons</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>Built to engage</p>
                     </div>
                   </div>

                                     {/* English */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>English</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>language instruction</p>
                     </div>
                   </div>

                                     {/* Lifetime access */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>Lifetime access</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>to course materials</p>
                     </div>
                   </div>

                                     {/* Certificate */}
                   <div className="flex items-start space-x-6">
                     <div className="w-16 h-16 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                       </svg>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold mb-3" style={{color: '#272343'}}>Certificate</h3>
                       <p className="text-base" style={{color: '#2d334a'}}>is awarded upon completion</p>
                     </div>
                   </div>
                </div>

                {/* Activity Overview Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6" style={{color: '#272343'}}>Activity Overview</h3>
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Side - Text Content */}
                    <div className="w-full lg:w-1/2">
                      {/* Key Details */}
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{backgroundColor: '#EF4444'}}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium" style={{color: '#272343'}}>All grades</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{backgroundColor: '#10B981'}}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium" style={{color: '#272343'}}>Intermediate</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-base leading-relaxed" style={{color: '#2d334a'}}>
                        Hands-on experiments and models help students explore science concepts, think critically, and solve real-world problems.
                      </p>
                    </div>

                    {/* Right Side - Science Laboratory Graphic */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      
                       <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754467578/handsonexpericence_tx1h6x.svg" alt="Hands On Experience" style={{width: '100%', height: '100%'}} />
                      
                    </div>
                  </div>
                </div>

                {/* Sneak Peek Section */}
                <div className="mt-16">
                  <div className="flex flex-col items-start mb-8">
                    <h3 className="text-2xl font-bold mb-4" style={{color: '#272343'}}>Sneak Peek</h3>
                    <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl">
                      Sneak Peak into the Internship
                    </h2>
                    <p className="text-neutral-700 text-sm md:text-base max-w-sm">
                      Get a glimpse of what you'll experience during the GudGum Sustainable Branding Internship. Hover over the video to see it in action!
                    </p>
                  </div>
                  
                  <motion.div
                    initial={{ maxWidth: "24rem" }}
                    whileHover={{ maxWidth: "100%" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-lg w-full h-full bg-white shadow-sm ring-1 ring-black/5"
                  >
                    <HoverVideoPlayer
                      videoSrc="https://share.synthesia.io/embeds/videos/eef8e0cf-4465-42ce-a1fe-56452c976b68"
                      thumbnailSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                      enableControls
                      style={{
                        width: "100%",
                        maxWidth: "100vw",
                        aspectRatio: "16/9",
                      }}
                    />
                  </motion.div>
                </div>

                {/* Timeline Section */}
                <div className="mt-16">
                  <div className="flex flex-col items-start mb-8">
                    <h3 className="text-2xl font-bold mb-4" style={{color: '#272343'}}>Internship Timeline</h3>
                    <h2 className="text-lg md:text-4xl mb-4 text-black max-w-4xl">
                      Gud Gum Internship Timeline
                    </h2>
                    <p className="text-neutral-700 text-sm md:text-base max-w-sm">
                      Explore the step-by-step journey of the Gud Gum Sustainable Branding Internship. See what you'll learn and create each week!
                    </p>
                  </div>
                  <GudgumTimeline />
                </div>
              </div>
            </div>

            {/* Right Section - Sticky Pricing Card */}
              <div className="w-full lg:w-1/3 lg:ml-12">
               <div className="lg:sticky lg:top-8">
                <div className="bg-white rounded-2xl shadow-xl border transform scale-90" style={{borderColor: '#e5e7eb'}}>
                  {/* Top illustration with pink background */}
                  <div className="bg-[#F59E0B] rounded-t-2xl p-6 text-center">
                    <div className="w-28 h-28 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <LazyImage src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg" alt="GudGum Logo" className="w-24 h-24" />
                    </div>
                  </div>

                  {/* Live classes bar */}
                  <div className="bg-gray-200 rounded-lg p-3 mx-6 -mt-3 text-center">
                    <span className="text-sm font-medium text-gray-900">💡 Only 120 Slots Available — Book Yours Now!</span>
                  
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 px-6 pt-4">
                    <div className="text-3xl font-bold text-gray-900 mb-2">₹2,999</div>
                    <div className="text-gray-900 text-sm mb-2">Complete Access to All 7 Internship Modules</div>
                    <div className="text-gray-500 text-xs">(Self-Paced | Certificate Included)</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 px-6">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm">30 min</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">Live video meetings</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      <span className="text-sm">Ages 8-16</span>
                    </div>
                  </div>

                                     {/* Enroll button */}
                   <div className="px-6 pb-6">
                                           <InteractiveHoverButton 
                        className="w-full py-4 rounded-xl font-semibold text-lg flex justify-center items-center" 
                        style={{backgroundColor: '#8B5CF6', color: '#fffffe', borderColor: '#8B5CF6'}}
                        onClick={openEnrollmentPopup}
                      >
                        Enroll Now
                      </InteractiveHoverButton>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <div className="mt-16">
        <FAQSection />
      </div>

      {/* Footer */}
      <div className="w-full relative left-1/2 right-1/2 -translate-x-1/2">
        <Footer />
      </div>
        </>
      )}
    </div>
  );
};

export default GudgumV2; 