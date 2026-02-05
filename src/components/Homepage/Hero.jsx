// components/Hero.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicatorVisible(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Animation Variants ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const wordVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 2, duration: 0.8 },
    },
    bounce: {
      y: [0, 10, 0],
      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" },
    },
  };

  // === Text Sections ===
  const headlineWords = "Rishabh Green Marbles ".split(" ");
  const companyWords = "Premium, from core to craft ".split(" ");
  const subheadingWords =
    "Redefining luxury since 1995 with the finest marbles, sandstones, and granites. Gleaned from prime quarries, sculpted with precision, and polished to perfection. Each stone is carved to endure, elevate your spaces, and inspire timeless elegance to worldwide standards. ".split(
      " "
    );

  return (
    <>
      <section className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://www.surreymarbleandgranite.co.uk/wp-content/uploads/2023/01/hero-01.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/RGM-Banner.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />

        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20 bg-[url(
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCwyOCAwIDEsMSA1NiwwYTI4LDI4IDAgMSwxIC01NiwwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIiBzdHJva2UtZGFzaGFycmF5OjAuNSw0Ii8+PC9zdmc+'
          )]"
        ></div>

        {/* === Content === */}
        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-6xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline */}
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 md:mb-8 leading-tight font-light text-white uppercase"
            variants={containerVariants}
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "300",
              letterSpacing: "0.08em",
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i}
                className="inline-block mr-2 sm:mr-3 md:mr-4"
                style={{
                  letterSpacing: "0.08em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Company Line */}
          <motion.div className="mb-4 sm:mb-6 md:mb-8">
            {companyWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i + headlineWords.length}
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light mr-2 sm:mr-3 text-gray-300 uppercase"
                style={{
                  letterSpacing: "0.15em",
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Separator */}
          <motion.div
            className="w-16 sm:w-20 md:w-32 h-0.5 bg-gradient-to-r from-white/80 to-transparent mx-auto my-4 sm:my-6 md:my-8"
            variants={itemVariants}
          />

          {/* Subheading */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-2 sm:px-4 md:px-0"
            variants={itemVariants}
            style={{
              fontFamily: "Montserrat",
              fontWeight: "300",
              letterSpacing: "0.5px",
              lineHeight: "1.7",
            }}
          >
            {subheadingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                custom={i + headlineWords.length + companyWords.length}
                className={`inline-block mr-1 opacity-95 ${word === '1990' ? ' font-semibold' : ''}`}
                style={{ 
                  fontFamily: 'Montserrat', 
                  fontWeight: word === '1990' ? '600' : '300', 
                  letterSpacing: '0.5px'
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        {scrollIndicatorVisible && (
          <motion.div
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate={["visible", "bounce"]}
          >
            <FiArrowDown className="text-white w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Hero;
