import React from "react";
import { Timeline } from "../../../components/ui/timeline";
 
export function GudgumTimeline() {
  const data = [
    {
      title: "Week 1-2",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-black md:text-sm">
            Foundation & Introduction to Sustainable Branding
          </p>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754307073/GudGum_LOGO_j10poe.svg"
              alt="GudGum Logo"
              width={800}
              height={400}
              className="w-full h-32 md:h-48 lg:h-56 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Week 3-4",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-black md:text-sm">
            Hands-on Brand Development & Design Principles
          </p>
          <p className="mb-8 text-xs font-normal text-black md:text-sm">
            Learn sustainable design principles and create your first eco-friendly brand identity. Work with real-world projects and get feedback from industry experts.
          </p>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754305317/Gudgum_Gum_SVG_tto8dd.svg"
              alt="Gum SVG"
              width={800}
              height={400}
              className="w-full h-32 md:h-48 lg:h-56 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Week 5-6",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Final Project & Portfolio Development
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              ✅ Complete brand identity project
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              ✅ Sustainable packaging design
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              ✅ Portfolio presentation
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              ✅ Industry mentor feedback
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              ✅ Certificate of completion
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754305699/Package_Registration_10_jibn7s.svg"
              alt="Package Registration"
              width={800}
              height={400}
              className="w-full h-32 md:h-48 lg:h-56 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip bg-white">
      <Timeline data={data} />
    </div>
  );
} 