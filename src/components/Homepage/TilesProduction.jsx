import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaCogs, 
  FaRulerCombined, 
  FaGem, 
  FaCheckCircle, 
  FaLayerGroup, 
  FaPlay,
  FaChevronDown,
  FaHome,
  FaHotel,
  FaBuilding,
  FaArrowRight
} from "react-icons/fa";

// YEHI SIRF 7 IMAGES RAKHI HAIN (BAKI SAB DELETE KAR DIYA)
import heroImage from "../../assets/banner image.webp";
import tilesAboutImg from "../../assets/tiles-aboutus-image.webp";

import MultiDiscImage from "../../assets/marbles/Multi Disc Block Cutter.webp";
import AutomatedTilingImage from "../../assets/marbles/Automated Tiling & Finishing.jpg";

import blockCuttingImg from "../../assets/Block Cutting.jpeg";
import calibrationImg from "../../assets/Calibration.jpeg";
import grindingImg from "../../assets/tiles-Grinding.webp"; 
import polishing  from "../../assets/Polishing.jpg"; 

// 4 Premium Tiles (tumhari nayi images)
import IconicGold from "../../assets/marbles/iconic-gold-marble-slabs-985059-1-B.jpeg.jpg";
import IndianSupplier from "../../assets/marbles/Indian-Marble-Supplier[1].jpg";
import IstockMarble from "../../assets/marbles/istockphoto-1134258949-612x612.jpg";
import KatniBeige from "../../assets/marbles/katni-beige-marble-500x500[1].jpg";

const features = [
  { icon: <FaRulerCombined />, title: "Precision 10mm Thickness" },
  { icon: <FaCogs />, title: "Italian Pedrini Technology" },
  { icon: <FaCheckCircle />, title: "Flawless Surface Finish" },
  { icon: <FaGem />, title: "Timeless Elegance & Strength" },
];

const processSteps = [
  { id: "01", title: "Block Cutting", subtitle: "Multidisc Cutter", description: "10 mm tiles are cut from selected marble blocks using a specialized Multidisc Block cutter to ensure uniform slices right from the start.", img: blockCuttingImg },
  { id: "02", title: "Calibration", subtitle: "Thickness Adjustment", description: "Thickness is precisely adjusted to make each tile exactly the same, ensuring they are perfectly flat and easy to install.", img: calibrationImg },
  { id: "03", title: "Grinding", subtitle: "Surface Leveling", description: "Grinding removes irregularities on the surface of the tiles, allowing for superior stability and structural strength.", img: grindingImg },
  { id: "04", title: "Polishing", subtitle: "Gloss Enhancement", description: "High-grade gloss is added to enhance the look of the stone's natural patterns, bringing out the vibrant green hues.", img: polishing },
];

const tileCategories = [
  { id: 21, name: "Iconic Gold", image: IconicGold },
  { id: 22, name: "Indian Beige", image: IndianSupplier },
  { id: 23, name: "Premium White", image: IstockMarble },
  { id: 24, name: "Katni Beige", image: KatniBeige },
];

const applications = [
  { id: 1, title: "Multi Disc Block Cutter", description: "The manufacturing process of green marble tiles starts by cutting the marble blocks with a Multi Disc Block Cutter that is manufactured by Pedrini, an Italian company that offers great precision while cutting thin green marble tiles (10mm thick). ", icon: <FaHome />, img: "assets\\marbles\\malti disc block cotter image.jpg" },
  { id: 2, title: "Iconic Commercial Spaces", description: "Durable elegance for high-traffic areas.", icon: <FaBuilding />, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Luxury Hotels", description: "Grand lobbies and premium finishes.", icon: <FaHotel />, img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, title: "International Markets", description: "Exported to Dubai, Europe, and Kuwait.", icon: <FaLayerGroup />, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" }
];

const TilesProduction = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* 1. BANNER SECTION (Dark & Cinematic) */}
      <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            src={heroImage} 
            alt="Marble Factory" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>

        <div className="relative z-10 text-center px-4 mt-[-50px]">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-[#2eb872] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Best Natural Stone Tiles Manufacturers in India
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
            Precision Crafted <br /> <span className="text-[#2eb872]">10mm Tiles</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-10">
            At Rishabh Green Marbles, we transform nature’s rarest green marble into precision-crafted tiles designed for refined, modern spaces.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
            <button className="flex items-center gap-3 bg-[#2eb872] hover:bg-[#24965d] text-white px-8 py-4 rounded-md font-semibold transition-all duration-300">
              <FaPlay className="text-sm" /> Explore Our Process
            </button>
            <button className="flex items-center gap-3 bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-md font-semibold transition-all">
              View Collection
            </button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <span className="text-gray-400 text-[10px] tracking-[0.2em]">SCROLL</span>
          <FaChevronDown className="text-gray-400 text-xs animate-bounce" />
        </motion.div>
      </div>

      {/* 2. INTRO / WHY STAND APART */}
      <div className="bg-white py-24 px-6 md:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0E5543] text-xs font-bold tracking-widest uppercase mb-2 block">Premium Quality</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Where Quality is <span className="text-[#0E5543]">Expected</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Rishabh Green Marbles, each tile is a balance of timeless elegance, structural strength, and flawless surface finish. Created for projects where quality is not optional, it’s expected.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              From contemporary residences to iconic commercial spaces across the globe, our green marble tiles bring natural beauty, technical precision, and enduring performance to premium stone flooring.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-[#0E5543] hover:shadow-md transition-all">
                  <div className="text-[#0E5543] text-xl">{feature.icon}</div>
                  <span className="text-gray-800 font-medium text-sm">{feature.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src={tilesAboutImg} 
              alt="Green Marble Slabs" 
              className="rounded-xl shadow-2xl w-full" 
            />
            <div className="absolute bottom-6 left-6 bg-[#0E5543] p-6 rounded-lg shadow-xl text-white">
              <h4 className="text-3xl font-serif font-bold">10mm</h4>
              <p className="text-gray-200 text-sm">Ultra-Thin Tiles</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. MANUFACTURING PROCESS (ZIG-ZAG) */}
      <div className="bg-gray-50 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0E5543 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-[#0E5543] text-xs font-bold tracking-widest uppercase mb-3 block">Step by Step Journey</span>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900">
              How Are Our <span className="text-[#0E5543]">Tiles Manufactured?</span>
            </h2>
          </div>

          <div className="space-y-24 md:space-y-32">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0E5543] font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                      Step {step.id}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-2 md:px-6 relative">
                  <span className={`absolute -top-12 -left-4 text-9xl font-bold text-[#0E5543]/5 -z-10 font-serif select-none ${index % 2 !== 0 ? 'right-0' : 'left-0'}`}>
                    {step.id}
                  </span>
                  <span className="text-[#C76E00] font-bold text-xs tracking-wider uppercase mb-2 block">
                    {step.subtitle}
                  </span>
                  <h3 className="text-3xl font-serif text-[#0E5543] mb-4 relative inline-block">
                    {step.title}
                    <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#C76E00] rounded-full mt-2 block"></span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg mt-6 text-justify">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR PREMIUM MARBLE TILES (ONLY 4 NEW ONES) */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Our Exclusive <span className="text-[#0E5543]">Premium Collection</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Handpicked luxury marble tiles crafted with precision and passion
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {tileCategories.map((tile, i) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -16 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer bg-white"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={tile.image} 
                  alt={tile.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-serif text-white mb-4">{tile.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/OurStones"
            className="inline-block bg-[#0E5543] text-white px-14 py-5 rounded-full text-lg font-bold hover:bg-[#0c4a3a] transition shadow-2xl transform hover:scale-105 duration-300"
          >
            Explore Full Collection →
          </a>
        </div>
      </section>

      {/* TECHNOLOGY SECTION WITH REAL IMAGES */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 bg-[#0E5543]/10 text-[#0E5543] text-xs font-bold tracking-widest rounded-full mb-4 md:mb-6">
              Cutting-Edge Technology
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4 leading-tight">
              Technology Used in <br className="block md:hidden" />
              <span className="text-[#0E5543]">Our Tile Manufacturing</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-4xl mx-auto mt-4">
              Powered by Italian precision and automated excellence
            </p>
          </motion.div>

          {/* Multi Disc Block Cutter */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0E5543] to-[#0c4a3a] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src={MultiDiscImage}
                  alt="Pedrini Multi Disc Block Cutter - Rishabh Green Marbles"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-64 md:h-80 lg:h-96 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-white/95 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                  <p className="text-xs md:text-sm font-bold text-[#0E5543]">Pedrini S.p.A, Italy</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
                  Multi Disc Block Cutter <br />
                  <span className="text-[#0E5543] font-bold text-xl md:text-2xl lg:text-3xl">(Pedrini – Italy)</span>
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Green marble blocks are cut using a <strong>Pedrini Multi Disc Block Cutter</strong>, an advanced Italian machine known for its high precision. 
                It allows us to produce uniform 10mm thin slabs with clean edges and minimal material loss, ensuring a strong foundation for premium-quality tiles.
              </p>
            </motion.div>
          </div>

          {/* Automated Tiling & Finishing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gray-900 leading-tight">
                  Automated Tiling & Finishing
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                The cut slabs are processed in our <strong>automated tiling facility</strong>, where advanced machinery handles calibration, grinding, polishing, chamfering, grooving, and finishing. 
                This ensures consistent quality, precise profiling, and a flawless finish across every green marble tile.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0E5543] to-[#0c4a3a] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src={AutomatedTilingImage}
                  alt="Automated Tiling & Finishing Line - Rishabh Green Marbles"
                  className="relative rounded-3xl shadow-2xl w-full object-cover h-64 md:h-80 lg:h-96 mx-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Fully Automated Line
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / FOOTER */}
      <div className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#0E5543] rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#C76E00] text-xs font-bold tracking-widest uppercase mb-6"
              >
                Ready to Build?
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
              >
                Shape Your Space <br/>
                <span className="text-white/90 italic font-light">With</span> <span className="text-[#C76E00]">Refined Tiles</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-200 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light"
              >
                Looking to source precision-crafted marble tiles for your next project? 
                Connect with Rishabh Green Marbles to explore our refined 10 mm tile collection and place your order today.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="/contact" className="bg-white text-[#0E5543] px-10 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  Connect with Us <FaArrowRight />
                </a>
              </motion.div>
            </div>

            <div className="flex-1 relative z-10 w-full max-w-lg">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" 
                  alt="Luxury Interior" 
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TilesProduction;