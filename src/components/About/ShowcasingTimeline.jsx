// components/ShowcasingTimeline.jsx
import React, { useState } from "react";
import HeaderContent from "../Helper/HeaderContent";

const milestones = [
  { year: "1975-1980", title: "Foundation Era", desc: "Foundation years of the mining industry setup & future expansion" },
  { year: "1981-1985", title: "Mining Commencement", desc: "Commencement of mining in green marble" },
  { year: "1986-1990", title: "International Expansion", desc: "Business expansion to the international market" },
  { year: "1991-1995", title: "Processing Innovation", desc: "First Marble Processing Unit Set up at Banarasi Marbles" },
  { year: "1996-2000", title: "Global Presence", desc: "Opening export outlets in Germany, UAE, and China & participating in international expos" },
  { year: "2000-2005", title: "Export Excellence", desc: "Established a 100% export-oriented unit under Rishabh Green Marbles" },
  { year: "2005-2010", title: "Technology Advancement", desc: "Invested in advanced machinery & processing technology" },
  { year: "2010-2015", title: "Quality Recognition", desc: "Received recognition for the delivery of quality products globally" },
  { year: "2015-2020", title: "Independent Growth", desc: "Developed into an independent company backed by decades of experience" },
  { year: "2020-2025", title: "Premium Expansion", desc: "Onboarded premium clients and expanded business overseas" },
];

export default function ShowcasingTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Modern Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #0E5543 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Rishabh Green Marble Chronicle
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Built on a Timeless Foundation - A legacy of excellence spanning decades of passion, perseverance, and craftsmanship
          </p>
        </div>

        {/* Modern Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0E5543] via-[#F2E1C5] to-[#0E5543] transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row-reverse' : ''} gap-8 sm:gap-12`}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Content Card */}
                <div className="flex-1 relative">
                  <div
                    className={`bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                      idx === activeIndex ? 'border-[#0E5543] ring-4 ring-[#0E5543]/20' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2"></div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {milestone.desc}
                    </p>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="relative z-20">
                  <div
                    className={`bg-gradient-to-br from-[#0E5543] to-[#0a3d2f] text-white rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer ${
                      idx === activeIndex ? 'scale-110 ring-4 ring-white/50' : 'hover:scale-105'
                    }`}
                  >
                    <span className="text-sm sm:text-base lg:text-lg font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
