import React from 'react';
import Footer from "../../../components/common/Footer";
import { GudgumTimeline } from "./GudgumTimeline";

const GudgumV2 = () => {
  return (
    <div className="min-h-screen w-full" style={{backgroundColor: '#fffffe'}}>
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
          <div className="flex flex-col lg:flex-row items-center justify-start min-h-screen py-20">
            {/* Left Side - White Container */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:ml-0">
              <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
                {/* Container merges with background */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-b-2xl"></div>
                
                {/* Course Header */}
                <div className="flex items-center mb-6">
                  {/* Left SVG - Beaker/Flask */}
                  <div className="w-16 h-16 mr-6 flex items-center justify-center">
                    <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg" alt="GudGum Logo" className="w-18 h-18" />
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
                        <img 
                          src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754305317/Gudgum_Gum_SVG_tto8dd.svg"
                          alt="Plant decoration"
                          className="w-16 h-16"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Description */}
                <p className="text-lg mb-6" style={{color: '#2d334a'}}>
                  Explore sustainable branding principles through fun, hands-on learning and real-world projects.
                </p>

                {/* Ratings and Stats */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" style={{color: '#ffd700'}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold" style={{color: '#272343'}}>4.95/5</span>
                    <span className="text-sm ml-1" style={{color: '#2d334a'}}>(2,847 Ratings)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-2" style={{backgroundColor: '#ff4444'}}></div>
                    <span className="text-sm font-semibold" style={{color: '#ff4444'}}>LIVE</span>
                    <span className="text-sm ml-1" style={{color: '#2d334a'}}>120 Live Sessions</span>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="bg-gradient-to-r rounded-xl p-6 mb-8" style={{background: 'linear-gradient(135deg, #00308A 0%, #1e40af 100%)'}}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="text-white/70 line-through text-lg">₹4,999</span>
                        <span className="text-white text-3xl font-bold ml-3">₹3,999</span>
                      </div>
                      <p className="text-white/80 text-sm">Price/Class ₹33.33</p>
                    </div>
                    <button className="px-6 py-3 bg-white rounded-lg font-semibold transition-all duration-300 hover:scale-105" style={{color: '#00308A'}}>
                      Enroll Now
                    </button>
                  </div>
                </div>

                {/* Additional Features */}
                <div className="flex items-center justify-between text-sm" style={{color: '#2d334a'}}>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10+ Hours Content</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Certificate</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20" style={{backgroundColor: '#fffffe'}}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Section - Program Details */}
            <div className="w-full lg:w-2/3">
              {/* Program Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8" style={{color: '#272343'}}>Program Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personalized attention */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>Personalized attention</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>Learn Science at your own pace with a teacher focused only on you</p>
                    </div>
                  </div>

                  {/* Teacher-led sessions */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>Teacher-led sessions</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>Real-time interaction and feedback with a dedicated teacher</p>
                    </div>
                  </div>

                  {/* 60 minutes per session */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>60 minutes per session</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>Deep-dive into topics with focused 60-minute sessions</p>
                    </div>
                  </div>

                  {/* 6-18 age group */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#10B981'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>6-18 age group</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>Tailored for curious learners in the 6-18 age group</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-3xl font-bold mb-8" style={{color: '#272343'}}>What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 120 Interactive lessons */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>120 Interactive lessons</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>Built to engage</p>
                    </div>
                  </div>

                  {/* English */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#8B5CF6'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>English</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>language instruction</p>
                    </div>
                  </div>

                  {/* Lifetime access */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>Lifetime access</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>to course materials</p>
                    </div>
                  </div>

                  {/* Certificate */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#F59E0B'}}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#fffffe'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2" style={{color: '#272343'}}>Certificate</h3>
                      <p className="text-sm" style={{color: '#2d334a'}}>is awarded upon completion</p>
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
                      <div className="relative w-48 h-48">
                        {/* Orange Molecular Model */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                            {/* Central atom */}
                            <circle cx="12" cy="12" r="3" fill="#F97316"/>
                            {/* Bonds to other atoms */}
                            <line x1="12" y1="9" x2="12" y2="6" stroke="#F97316" strokeWidth="2"/>
                            <line x1="12" y1="15" x2="12" y2="18" stroke="#F97316" strokeWidth="2"/>
                            <line x1="9" y1="12" x2="6" y2="12" stroke="#F97316" strokeWidth="2"/>
                            <line x1="15" y1="12" x2="18" y2="12" stroke="#F97316" strokeWidth="2"/>
                            {/* Connected atoms */}
                            <circle cx="12" cy="6" r="2" fill="#F97316"/>
                            <circle cx="12" cy="18" r="2" fill="#F97316"/>
                            <circle cx="6" cy="12" r="2" fill="#F97316"/>
                            <circle cx="18" cy="12" r="2" fill="#F97316"/>
                          </svg>
                        </div>

                        {/* Purple Erlenmeyer Flask */}
                        <div className="absolute bottom-8 right-4">
                          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                            <path d="M8 4h8l1.5 16.5c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2L8 4z" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
                            <rect x="8" y="18" width="8" height="2" fill="#8B5CF6" opacity="0.8"/>
                          </svg>
                        </div>

                        {/* Green Round-bottom Flask */}
                        <div className="absolute bottom-4 left-4">
                          <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="18" rx="4" ry="2" fill="none" stroke="#10B981" strokeWidth="2"/>
                            <path d="M8 6h8l1 12c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2L8 6z" fill="none" stroke="#10B981" strokeWidth="2"/>
                            <rect x="9" y="14" width="6" height="2" fill="#10B981" opacity="0.8"/>
                          </svg>
                        </div>

                        {/* Red Test Tube */}
                        <div className="absolute bottom-12 right-8">
                          <svg className="w-6 h-8" viewBox="0 0 24 24" fill="none">
                            <rect x="9" y="4" width="6" height="16" rx="3" fill="none" stroke="#EF4444" strokeWidth="2"/>
                            <rect x="9" y="16" width="6" height="2" fill="#EF4444" opacity="0.8"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold mb-8" style={{color: '#272343'}}>Course Timeline</h3>
                  <GudgumTimeline />
                </div>
              </div>
            </div>

                         {/* Right Section - Sticky Pricing Card */}
             <div className="w-full lg:w-1/4 lg:ml-8">
               <div className="lg:sticky lg:top-8">
                <div className="bg-white rounded-2xl shadow-xl border transform scale-90" style={{borderColor: '#e5e7eb'}}>
                  {/* Top illustration with pink background */}
                  <div className="bg-[#F59E0B] rounded-t-2xl p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                      <img src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg" alt="GudGum Logo" className="w-24 h-24" />
                    </div>
                  </div>

                  {/* Live classes bar */}
                  <div className="bg-gray-200 rounded-lg p-3 mx-6 -mt-3 text-center">
                    <span className="text-sm font-medium text-gray-900">120 </span>
                    <span className="text-sm font-bold text-red-500">LIVE</span>
                    <span className="text-sm font-medium text-gray-900"> 1:1 Classes</span>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6 px-6 pt-4">
                    <div className="text-3xl font-bold text-gray-900 mb-2">$133.30</div>
                    <div className="text-gray-600 text-sm mb-4">per month</div>
                    <div className="text-gray-900 text-sm mb-2">4 Classes per month</div>
                    <div className="text-gray-500 text-xs">(x USD33.33 per class)</div>
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
                      <span className="text-sm">Ages 8-12</span>
                    </div>
                  </div>

                  {/* Enroll button */}
                  <div className="px-6 pb-6">
                    <button className="w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#8B5CF6', color: '#fffffe'}}>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <div className="w-full relative left-1/2 right-1/2 -translate-x-1/2">
        <Footer />
      </div>
    </div>
  );
};

export default GudgumV2; 