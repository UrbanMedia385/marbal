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
    <div className="bg-gradient-to-b from-[#F9FAFB] to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-[#0E5543]">The Rishabh Green</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">Marble Chronicle</span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-[#0E5543] to-[#F2E1C5] mx-auto mt-6"></div>
        </div>

        {/* Unique Timeline Design */}
        <div className="relative">
          {/* Zigzag Timeline */}
          <div className="relative">
            {milestones.map((milestone, idx) => (
              <div
                key={idx}
                className={`relative flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center mb-8 md:mb-12`}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0E5543] to-[#F2E1C5] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                      idx === activeIndex ? 'scale-125 ring-4 ring-white shadow-2xl' : 'hover:scale-110'
                    }`}
                  >
                    <span className="text-white font-bold text-xs md:text-xs">
                      {milestone.year.split('-')[0]}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'} mt-16 md:mt-0`}>
                  <div
                    className={`bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 p-4 md:p-8 transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'border-[#0E5543] shadow-2xl transform scale-105' 
                        : 'hover:shadow-xl hover:border-[#0E5543]/50'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-[#0E5543]/10 to-[#F2E1C5]/10 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
                      <span className="text-xs md:text-sm font-semibold text-[#0E5543]">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {milestone.desc}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0E5543]/5 to-transparent rounded-bl-xl md:rounded-bl-2xl"></div>
                  </div>
                </div>

                {/* Connector Line */}
                {idx < milestones.length - 1 && (
                  <div 
                    className={`absolute left-1/2 w-0.5 bg-gradient-to-b from-[#0E5543] to-[#F2E1C5] transform -translate-x-1/2 ${
                      idx % 2 === 0 ? 'top-20 md:top-24' : 'top-20 md:top-24'
                    }`}
                    style={{ height: '60px md:80px' }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
