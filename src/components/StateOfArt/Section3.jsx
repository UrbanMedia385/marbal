import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPlay,
  FiZoomIn,
  FiTool,
  FiSettings,
  FiBox,
  FiAward,
} from "react-icons/fi";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("cutting");
  const [activeVideo, setActiveVideo] = useState(null);

  // Technology data
  const technologyCategories = [
    {
      id: "cutting",
      name: "Precision Cutting",
      icon: <FiTool size={24} />,
      description:
        "Advanced diamond wire and bridge saws for perfect cuts every time",
      technologies: [
        {
          name: "Multi Disc Block Cutter",
          description:
            "Ensures accurate and efficient cutting for maximum block utilization.",
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
        {
          name: "The Tiling Plant",
          description:
            "Delivers seamless tile finishing with unmatched precision and consistency. ",
          image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
      ],
    },
    {
      id: "polishing",
      name: "Surface Finishing",
      icon: <FiSettings size={24} />,
      description: "Automated polishing lines that create mirror-like finishes",
      technologies: [
        {
          name: "ASlab Polisher from Breton",
          description:
            "Achieves mirror-like polish and surface perfection in every slab. ",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
        {
          name: "Multi-wire Saw",
          description:
            " Enables ultra-fast, precise cutting with minimal material waste.",
          image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
      ],
    },
    {
      id: "digital",
      name: "Digital Fabrication",
      icon: <FiBox size={24} />,
      description: "CNC technology for intricate designs and custom patterns",
      technologies: [
        {
          name: "Automatic Resin Lines",
          description:
            "Enhances durability and beauty through flawless resin application.",
          image:
            "https://images.unsplash.com/photo-1581094271901-8242d0fcd5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
        {
          name: "Bridge Cutting Machine",
          description:
            "Crafts perfect edges and complex designs with absolute precision. ",
          image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
      ],
    },
    {
      id: "quality",
      name: "Quality Control",
      icon: <FiAward size={24} />,
      description:
        "Advanced inspection systems ensuring perfection in every slab",
      technologies: [
        {
          name: "Two Gangsaw Machines",
          description: "High-performance cutters designed for large-scale, uniform slab production",
          image:
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          video: "https://player.vimeo.com/video/370756669",
        },
        // {
        //   name: "Spectrophotometry",
        //   description: "Color matching technology ensuring batch consistency",
        //   image:
        //     "https://images.unsplash.com/photo-1581094271901-8242d0fcd5a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        //   video: "https://player.vimeo.com/video/370756669",
        // },
      ],
    },
  ];

  const activeCategory = technologyCategories.find(
    (cat) => cat.id === activeTab
  );

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <section className="pt-20  pb-10 bg-gradient-to-br from-[#F2E1C5]/20 to-[#0E5543]/10"
      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0E5543] text-[#F2E1C5] mb-6">
              <FiTool size={28} />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-[#0E5543] mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Advanced Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0E5543] to-[#F2E1C5] mx-auto mb-6"></div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#0E5543]/80 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Discover the sophisticated machinery and innovative processes that
              elevate our marble craftsmanship to unparalleled excellence
            </p>
          </motion.div>

          {/* Category Tabs - Premium Design */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#F2E1C5]/30 backdrop-blur-sm rounded-2xl p-2 border border-[#0E5543]/10">
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
                {technologyCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 transition-all duration-500 transform hover:scale-105 ${
                      activeTab === category.id
                        ? "border-2 border-white"
                        : "border-2 border-transparent"
                    }`}
                    style={{
                      backgroundColor: "#0E5543",
                      color: "white",
                    }}
                  >
                    <span>{category.icon}</span>
                    <span className="font-medium whitespace-nowrap text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Grid - Premium Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          >
            {activeCategory.technologies.map((tech, index) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={index}
                className="group relative"
              >
                {/* Card with gradient border effect */}
                <div className="relative bg-gradient-to-br from-[#F2E1C5] to-[#F2E1C5]/80  overflow-hidden border border-[#0E5543]/20 hover:border-[#0E5543]/40 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#0E5543]/20">
                  {/* Image Container with Overlay */}
                  <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/40 via-transparent to-transparent"></div>

                    {/* Premium Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#0E5543] text-[#F2E1C5] text-sm rounded-full font-medium" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                        Premium Tech
                      </span>
                    </div>

                    {/* Zoom Button */}
                    <button
                      onClick={() => setActiveVideo(tech.video)}
                      className="absolute top-4 right-4 p-3 bg-[#0E5543]/90 text-[#F2E1C5] rounded-full hover:bg-[#0E5543] transition-all duration-300 transform hover:scale-110 shadow-lg"
                    >
                      <FiZoomIn size={20} />
                    </button>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 relative">
                    {/* Accent Line */}
                    <div className="w-12 h-1 bg-gradient-to-r from-[#0E5543] to-[#F2E1C5] mb-4"></div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#0E5543] mb-2 sm:mb-3 font-light" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-[#0E5543]/80 leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                      {tech.description}
                    </p>

                    {/* Play Button */}
                    <button
                      onClick={() => setActiveVideo(tech.video)}
                      className="inline-flex items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-[#0E5543] text-[#F2E1C5] rounded-lg hover:bg-[#0E5543]/90 transition-all duration-300 group/btn font-medium text-xs sm:text-sm md:text-base shadow-md"
                      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
                    >
                      <FiPlay className="mr-2 transition-transform group-hover/btn:translate-x-1" />
                      Watch in Action
                    </button>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] bg-[length:200%_100%] bg-left transition-all duration-700 group-hover:bg-right opacity-0 group-hover:opacity-100 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Category Header */}
          <div className="mt-10">
            <motion.div
              key={`header-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-[#0E5543] mb-2 sm:mb-3" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                {activeCategory.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#0E5543]/70 italic max-w-3xl mx-auto" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                {activeCategory.description}
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/4 w-32 h-32 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
          <div className="absolute right-0 bottom-1/4 w-48 h-48 bg-[#F2E1C5]/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={() => setActiveVideo(null)}
                className="text-[#F2E1C5] hover:text-white px-4 py-2 rounded-full bg-black/50 border border-[#F2E1C5]/20 text-sm"
              >
                Close ✕
              </button>
            </div>
            <iframe
              src={activeVideo}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Section3;
