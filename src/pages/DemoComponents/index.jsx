import React from 'react';
import Footer from '../../components/common/Footer';
import { CardStack } from '../../components/ui/card-stack';
import { CardDemo } from '../../components/ui/card-demo';
import ProductFeatures from '../../components/animata/hero/product-features';
import { MarqueeDemo } from '../../components/ui/marquee-demo';
import { AnimatedListDemo } from '../../components/ui/animated-list-demo';
import { ScratchToRevealDemo } from '../../components/ui/scratch-to-reveal-demo';
import { ConfettiDemo } from '../../components/ui/confetti-demo';
import { FeatureCarouselDemo } from '../../components/ui/feature-carousel-demo';
import { IntroDisclosureDemo } from '../../components/ui/intro-disclosure-demo';
import RevealImageList from '../../components/animata/list/reveal-image';
import ModalDemo from '../../components/animata/overlay/modal-demo';
import { DynamicIslandDemo } from '../../components/ui/dynamic-island-demo';
import { cn } from '../../lib/utils';

// Small utility to highlight the content of specific section of a testimonial content
const Highlight = ({
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Prakash Saini",
    designation: "Senior Tech Executive",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];

const CardStackDemo = () => {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
};

const DemoComponents = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
      {/* Main Content Area */}
      <div className="w-full flex-1 flex flex-col items-center justify-center py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
            Demo Components
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page is for testing and showcasing various UI components.
          </p>
        </div>
        
        {/* CardStack Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            CardStack Component
          </h2>
          <CardStackDemo />
        </div>

        {/* CardDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Author Card Component
          </h2>
          <div className="flex justify-center">
            <CardDemo />
          </div>
        </div>

        {/* ProductFeatures Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Product Features Component
          </h2>
          <ProductFeatures />
        </div>

        {/* MarqueeDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Marquee Reviews Component
          </h2>
          <MarqueeDemo />
        </div>

        {/* AnimatedListDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Animated List Component
          </h2>
          <AnimatedListDemo />
        </div>

        {/* ConfettiDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Confetti Component
          </h2>
          <ConfettiDemo />
        </div>

        {/* FeatureCarouselDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Feature Carousel Component
          </h2>
          <FeatureCarouselDemo />
        </div>

        {/* IntroDisclosureDemo Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Intro Disclosure Component
          </h2>
          <IntroDisclosureDemo />
        </div>

        {/* RevealImageList Component */}
        <div className="w-full mb-16">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Reveal Image List Component
          </h2>
          <RevealImageList />
        </div>

        {/* ModalDemo Component */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Modal Demo</h2>
          <ModalDemo />
        </div>

        {/* Dynamic Island Demo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Dynamic Island Demo</h2>
          <div className="h-[400px] relative">
            <DynamicIslandDemo />
          </div>
        </div>

        {/* ScratchToRevealDemo Component */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-[#0a2540] text-center mb-8">
            Scratch to Reveal Component
          </h2>
          <ScratchToRevealDemo />
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full relative left-1/2 right-1/2 -translate-x-1/2">
        <Footer />
      </div>
    </div>
  );
};

export default DemoComponents; 