import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, ChevronRight, ArrowRight, Sparkles } from "lucide-react";

const MarbleQuarryHome = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.3 });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const imageGallery = [
    {
      src: "/marbelProcess.jpeg",
      title: "Precision Cutting",
      description: "Diamond wire technology",
    },
    {
      src: "/qualityControl.jpeg",
      title: "Quality Control",
      description: "Laser measurement",
    },
    {
      src: "/polishing.jpeg",
      title: "Polishing",
      description: "Mirror finish",
    },
    {
      src: "/readyToDeliver.jpeg",
      title: "Finished Products",
      description: "Ready for delivery",
    },
  ];
  

  const sections = [
    {
      title: "Our Curated Selections",
      content:
        "Discover our signature stone collections that redefine elegance and style.",
    },
    {
      title: "Surata Green",
      content:
        "Choose the shade of distinction, crafted for those who value rarity.",
    },
    {
      title: "Forest Green",
      content:
        "Enrich your interiors with the timeless charm of nature’s finest creation.",
    },
    {
      title: "Spider Green",
      content:
        "Let the calm of green breathe life into every corner of your space.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const title = "Precision Cutting Excellence";
  const subtitle =
    "Experience the fusion of advanced technology and expert craftsmanship in every stone we produce.";
  
  const theme = "light";
  return (
    <div className="bg-white overflow-hidden w-full">

      {/* Header Section */}
     
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative flex items-center py-8 sm:py-12 w-full  "
      >
        {/* Background Elements */}

 
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-12 z-10 w-full max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Left Content - Enhanced */}
            <motion.div
              className="space-y-4 sm:space-y-6 w-full"
              variants={itemVariants}
            >
              {/* Main Heading */}
              <motion.div
                className="space-y-4 sm:space-y-6 w-full text-center"
                variants={itemVariants}
              >
                <div className="relative">
                  <h2
                    className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "600",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span className="relative">
                      Advanced Production  Facility
                    
                    </span>
                  </h2>
                  
                  {/* Decorative line */}
                 <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 60 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8"
                        style={{ width: 'clamp(60px, 15vw, 100px)' }}
                      />
                
                  
                  <p
                    className="text-md sm:text-md md:text-2xl text-[#0E5543]/90 leading-relaxed font-medium"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Engineering Excellence in Every Stone
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Stats Section */}
              <motion.div
                className="space-y-3 sm:space-y-4 w-full"
                variants={itemVariants}
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "200",
                  letterSpacing: "0.05em",
                }}
              >
              
                {/* Enhanced Description */}
                <div className="space-y-3 sm:space-y-4 w-full">
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#0E5543]/90 leading-relaxed w-full"
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: "200",
                      letterSpacing: "0.05em",
                    }}
                  >
                    At Rishabh Green Marbles, our modern processing unit
                    features the latest technology blended with Italian
                    machinery, which produces extremely high-quality stones.
                    From block cutting and polishing to automated resining and
                    finishing, we have optimized our entire manufacturing
                    process for the best efficiency, accuracy, and quality. This
                    combination of technology with expert craftsmanship makes
                    certain that every stone produced is suitable for the
                    international market, offering perfect surfaces and strength
                    for any interior or exterior or outdoor use.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
                variants={itemVariants}
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "200",
                  letterSpacing: "0.05em",
                }}
              >
                <motion.button
                  className="group relative bg-gradient-to-r from-[#0E5543] to-[#1a7f66] text-white hover:from-[#1a7f66] hover:to-[#0E5543] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Discover Our Process</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>

                <motion.button
                  className="group relative  text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base flex items-center justify-center gap-2 backdrop-blur-sm overflow-hidden w-full sm:w-auto"
                
                >
                  <span className="relative z-10">View Gallery</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5  transition-transform duration-300 relative z-10" />
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
            </motion.div>

            {/* Right Section - Combined Video and Original Image Grid */}
            <motion.div className="space-y-4 sm:space-y-6 w-full" variants={itemVariants}>
              {/* Video Section */}
              <motion.div
                className="relative mb-4 sm:mb-6 overflow-hidden shadow-xl border-2 border-white/90 bg-white/30 backdrop-blur-lg rounded-lg w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-video w-full">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1581094794329-cd525614faec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  >
                    <source
                      src="/marbel_cutting_process.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4">
                    <span className="bg-[#0E5543] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold shadow-xl border border-white/20">
                      🎬 Live Process
                    </span>
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Original Unique Image Gallery Layout */}
              <motion.div className="relative w-full" variants={containerVariants}>
                {/* Background Pattern */}
                <div className="absolute -inset-4 bg-[#0E5543]/5 -z-10"></div>

                <div className="grid grid-cols-8 grid-rows-5 gap-2 sm:gap-3 h-48 sm:h-56 lg:h-64 w-full">
                  {/* Large Main Image */}
                  <motion.div
                    className="col-span-4 row-span-4 relative group cursor-pointer overflow-hidden shadow-xl rounded-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[0].src}
                      alt={imageGallery[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-black/70 backdrop-blur-md p-2 sm:p-3 border border-white/20">
                        <h4 className="text-white font-bold text-xs sm:text-sm">
                          {imageGallery[0].title}
                        </h4>
                        <p className="text-white/80 text-xs">
                          {imageGallery[0].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Top Right Small Image */}
                  <motion.div
                    className="col-span-4 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg rounded-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[1].src}
                      alt={imageGallery[1].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-black/60 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 backdrop-blur-sm">
                        {imageGallery[1].title}
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom Right Medium Image */}
                  <motion.div
                    className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg rounded-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[2].src}
                      alt={imageGallery[2].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Bottom Right Small Image */}
                  <motion.div
                    className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden shadow-lg rounded-lg"
                    variants={imageVariants}
                    whileHover="hover"
                  >
                    <img
                      src={imageGallery[3].src}
                      alt={imageGallery[3].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Floating Decorative Element */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-6 h-6 bg-[#0E5543] rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              {/* Additional Info Card */}
              {/* <motion.div 
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-[#0E5543]" />
                  <h4 className="font-semibold text-[#0E5543]">Why Choose Us?</h4>
                </div>
                <p className="text-[#0E5543]/80 text-sm leading-relaxed">
                  We combine traditional marble craftsmanship with cutting-edge technology to deliver 
                  products that exceed expectations in quality, precision, and beauty.
                </p>
              </motion.div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarbleQuarryHome;
