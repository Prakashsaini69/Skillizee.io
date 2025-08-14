import React from "react";
import { Timeline } from "../../../components/ui/gudgum-timeline";
 
export function GudgumTimeline() {
  const data = [
    {
      title: (
        <div>
          <div>Module 1:</div>
          <div>GudGum's Roots</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Discover why GudGum exists. Learn about the environmental harm of conventional chewing gum (~100,000,000 kg of plastic waste yearly) and how GudGum's biodegradable chicle-based gum fights back.
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> Plastic gums pollute ecosystems; GudGum offers a sustainable solution.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🎨</span>
              <span className="font-semibold">Activity:</span> Package Designing - Design an eco-friendly gum wrapper using Figma. Choose green tones and paper textures.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">🛠️</span>
              <span className="font-semibold">Tool:</span> Embedded or Students Choice
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754474049/Package_Registration_12_yr8sdw.svg"
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
      title: (
        <div>
          <div>Module 2:</div>
          <div>Vision & Mission</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Explore what GudGum stands for. Uncover GudGum's vision to lead plastic-free confectionery and its playful, eco-conscious brand tone ("Chew Gud, Feel Gud, Do Gud").
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> 78% of consumers value sustainability, shaping GudGum's identity.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">📚</span>
              <span className="font-semibold">Activity:</span> None (focus on understanding brand ethos).
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754474118/Package_Registration_13_o8tzyb.svg"
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
      title: (
        <div>
          <div>Module 3:</div>
          <div>Product Identity</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            See what makes GudGum unique. Dive into GudGum's natural flavors (raspberry, charcoal mint) and paper-based packaging, loved by 61% of consumers for biodegradability.
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> Sustainable packaging drives consumer loyalty.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">👤</span>
              <span className="font-semibold">Activity:</span> Product Persona - Create a customer persona (e.g., eco-conscious teen) for GudGum using Miro.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">🛠️</span>
              <span className="font-semibold">Tool:</span> Embedded Persona Template
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754474536/Package_Registration_14_kivya0.svg"
              alt="Package Registration"
              width={800}
              height={400}
              className="w-full h-32 md:h-48 lg:h-56 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div>
          <div>Module 4:</div>
          <div>Team & Challenges</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Meet the humans behind GudGum. Learn about founders Mayank and Bhuvan Nagori and challenges like high production costs and consumer education (46% cite unclear labeling).
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> Sustainability requires overcoming price and supply hurdles.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">📚</span>
              <span className="font-semibold">Activity:</span> None (focus on real-world challenges).
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754474682/Package_Registration_15_n7gmnz.svg"
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
      title: (
        <div>
          <div>Module 5:</div>
          <div>Market & Audience</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Understand who chews GudGum. Explore the ₹2,000 crore Indian gum market and GudGum's eco-conscious audience (75% of millennials prioritize sustainability).
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> Sustainable gums tap a growing 10–15% eco-segment.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">💰</span>
              <span className="font-semibold">Activity:</span> StartUp Cost Calculator - Estimate costs for a sustainable startup using estimates(e.g., materials, marketing).
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">🛠️</span>
              <span className="font-semibold">Tool:</span> Our Embedded
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754475015/Package_Registration_16_nxzyha.svg"
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
      title: (
        <div>
          <div>Module 6:</div>
          <div>Marketing & Competitive Analysis</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            See where GudGum stands. Compare GudGum to competitors like Orbit and analyze strengths (plastic-free) and threats (price competition).
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌍</span>
              <span className="font-semibold">Key Insight:</span> GudGum's niche is unmatched in India's plastic-free gum market.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">📚</span>
              <span className="font-semibold">Activity:</span> None (focus on market positioning).
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754475433/Package_Registration_17_huuojj.svg"
              alt="Package Registration"
              width={800}
              height={400}
              className="w-full h-32 md:h-48 lg:h-56 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: (
        <div>
          <div>Module 7:</div>
          <div>Final Capstone Project</div>
        </div>
      ),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-black md:text-sm">
            Put your learning into action! In this final module, you'll create a launch plan for GudGum, combining your research, design, and marketing ideas from previous modules. You'll present your plan as a creative pitch—just like a real brand strategist.
          </p>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-black md:text-sm mb-2">
              <span className="text-lg">🌟</span>
              <span className="font-semibold">Key Insight:</span> Great brands stand out with a clear story, strong visuals, and a smart launch strategy.
            </div>
            <div className="flex items-center gap-2 text-xs text-black md:text-sm">
              <span className="text-lg">📚</span>
              <span className="font-semibold">Activity:</span> Capstone Project — Build and present your GudGum launch plan!
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1754475584/Package_Registration_18_oh6etb.svg"
              alt="GudGum Capstone"
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