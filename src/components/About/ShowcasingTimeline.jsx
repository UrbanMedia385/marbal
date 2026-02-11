// components/ShowcasingTimeline.jsx
import React, { useState } from "react";
import HeaderContent from "../Helper/HeaderContent";

const milestones = [
  { year: "1975-1980", title: "Foundation Era", desc: "Foundation years of mining industry setup & future expansion" },
  { year: "1981-1985", title: "Mining Commencement", desc: "Commencement of mining in green marble" },
  { year: "1986-1990", title: "International Expansion", desc: "Business expansion to international market" },
  { year: "1991-1995", title: "Processing Innovation", desc: "First Marble Processing Unit Set up at Banarasi Marbles" },
  { year: "1996-2000", title: "Global Presence", desc: "Opening export outlets in Germany, UAE, and China & participating in international expos" },
  { year: "2000-2005", title: "Export Excellence", desc: "Established a 100% export-oriented unit under Rishabh Green Marbles" },
  { year: "2005-2010", title: "Technology Advancement", desc: "Invested in advanced machinery & processing technology" },
  { year: "2010-2015", title: "Quality Recognition", desc: "Received recognition for delivery of quality products globally" },
  { year: "2015-2020", title: "Independent Growth", desc: "Developed into an independent company backed by decades of experience" },
  { year: "2020-2025", title: "Premium Expansion", desc: "Onboarded premium clients and expanded business overseas" },
];

export default function ShowcasingTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#0E5543]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#F2E1C5]/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            The Rishabh Green Marble Chronicle
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Five decades of excellence in marble mining and processing
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 h-full bg-gradient-to-b from-[#0E5543] to-[#0E5543] transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} gap-8 sm:gap-12`}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Timeline Node */}
                <div className="relative z-20 flex-shrink-0">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0E5543] to-[#0a3d2f] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    idx === activeIndex ? 'scale-125 ring-4 ring-white/50 shadow-2xl' : 'hover:scale-110'
                  }`}>
                    <span className="text-white font-bold text-sm sm:text-base">
                      {milestone.year.split('-')[0]}
                    </span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className={`flex-1 h-0.5 bg-gradient-to-r ${
                  idx % 2 === 0 ? 'from-[#0E5543] to-transparent' : 'from-transparent to-[#0E5543]'
                }`}></div>

                {/* Content Card */}
                <div className={`flex-1 bg-white rounded-2xl shadow-lg border-2 p-6 sm:p-8 transition-all duration-300 ${
                  idx === activeIndex ? 'border-[#0E5543] shadow-2xl transform scale-105' : 'hover:border-[#0E5543]/50 hover:shadow-xl'
                }`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-3 h-3 bg-[#0E5543] rounded-full"></div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.desc}
                      </p>
                    </div>
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
