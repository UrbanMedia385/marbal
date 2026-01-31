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

// --- EXISTING IMAGES ---
import tilesAboutImg from "../../assets/tiles-aboutus-image.webp";
import bannerImage from "../../assets/banner image.webp"; 

// --- NEW PROCESS IMAGES IMPORT ---
import blockCuttingImg from "../../assets/block-cutting-image.avif";
import calibrationImg from "../../assets/tiles-Calibration.jpg";
import grindingImg from "../../assets/tiles-Grinding.webp"; 
import polishing  from "../../assets/polishing.jpg"; 
import groovingImg from "../../assets/Grooving.avif";
import chamferingImg from "../../assets/Chamfering.jpg";
import finalFinishingImg from "../../assets/Final Finishing.webp";

// Set Hero Image
const heroImage = bannerImage;

// Data: Why Stand Apart
const features = [
  { icon: <FaRulerCombined />, title: "Precision 10mm Thickness" },
  { icon: <FaCogs />, title: "Italian Pedrini Technology" },
  { icon: <FaCheckCircle />, title: "Flawless Surface Finish" },
  { icon: <FaGem />, title: "Timeless Elegance & Strength" },
];

// Data: Manufacturing Process (UPDATED IMAGES)
const processSteps = [
  {
    id: "01",
    title: "Block Cutting",
    subtitle: "Multidisc Cutter",
    description: "10 mm tiles are cut from selected marble blocks using a specialized Multidisc Block cutter to ensure uniform slices right from the start.",
    img: blockCuttingImg
  },
  {
    id: "02",
    title: "Calibration",
    subtitle: "Thickness Adjustment",
    description: "Thickness is precisely adjusted to make each tile exactly the same, ensuring they are perfectly flat and easy to install.",
    img: calibrationImg
  },
  {
    id: "03",
    title: "Grinding",
    subtitle: "Surface Leveling",
    description: "Grinding removes irregularities on the surface of the tiles, allowing for superior stability and structural strength.",
    img: grindingImg
  },
  {
    id: "04",
    title: "Polishing",
    subtitle: "Gloss Enhancement",
    description: "High-grade gloss is added to enhance the look of the stone's natural patterns, bringing out the vibrant green hues.",
    img: polishing  
  },
  {
    id: "05",
    title: "Grooving",
    subtitle: "Structuring",
    description: "Grooving helps to add structure to the tile, ensuring better adhesion and use in various architectural applications.",
    img: groovingImg
  },
  {
    id: "06",
    title: "Chamfering",
    subtitle: "Edge Finishing",
    description: "Chamfering is when the edges on the tile are shaved to give it a precise 0.1 mm finish, ensuring seamless joints.",
    img: chamferingImg
  },
  {
    id: "07",
    title: "Final Finishing",
    subtitle: "Quality Assurance",
    description: "The tiles are cut, brushed, cleaned, and then sorted into quality categories for strict quality assurance before packing.",
    img: finalFinishingImg
  }
];

// Data: Visual Journey Gallery
const galleryImages = [
  { 
    tag: "QUARRY OPERATIONS", 
    title: "Diamond Wire Extraction", 
    disription:"",
    img: "https://images.unsplash.com/photo-1599708153386-dc3c48062976?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    tag: "SLAB PRODUCTION", 
    title: "Gangsaw Block Cutting", 
    img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    tag: "SLAB REINFORCEMENT", 
    title: "Resin Line Treatment", 
    img: "https://images.unsplash.com/photo-1596238699147-321156821d3f?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    tag: "SURFACE FINISHING", 
    title: "Multi-Head Polishing", 
    img: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    tag: "PRECISION SIZING", 
    title: "CNC Tile Cutting", 
    img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600" 
  },
  { 
    tag: "FINAL GRADING", 
    title: "Quality Inspection", 
    img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600" 
  },
];

// Data: Applications
const applications = [
  {
    id: 1,
    title: "Contemporary Residences",
    description: "Refined flooring and wall cladding.",
    icon: <FaHome />,
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Iconic Commercial Spaces",
    description: "Durable elegance for high-traffic areas.",
    icon: <FaBuilding />,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Luxury Hotels",
    description: "Grand lobbies and premium finishes.",
    icon: <FaHotel />,
    img: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "International Markets",
    description: "Exported to Dubai, Europe, and Kuwait.",
    icon: <FaLayerGroup />,
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
  }
];

// Sizes Array
const sizes = [
  "305 X 305 cm",
  "610 X 610 cm",
  "610 X 915 cm",
  "610 X 1220 cm",
  "610 X 1525 cm"
];

const TilesProduction = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* ================= 1. BANNER SECTION (Dark & Cinematic) ================= */}
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

      {/* ================= 2. INTRO / WHY STAND APART ================= */}
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

      {/* ================= 3. MANUFACTURING PROCESS (ZIG-ZAG) ================= */}
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
                
                {/* IMAGE SIDE */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-64 md:h-80 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#0E5543] font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                      Step {step.id}
                    </div>
                  </div>
                </div>

                {/* TEXT SIDE */}
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

    

      {/* ================= 5. PRODUCTION GALLERY ================= */}
      <div className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#0E5543] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Technology Used in Our Tile Manufacturing 
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              From the quarry face to the packing line, witness the transformation of raw green marble into precision-cut tiles ready for global projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#2eb872] text-[10px] font-bold uppercase tracking-widest block mb-2 opacity-90">
                    {item.tag}
                  </span>
                  <h3 className="text-white font-serif text-xl md:text-2xl font-medium tracking-wide">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="px-8 py-3 border border-gray-300 text-gray-800 rounded-lg hover:bg-[#0E5543] hover:text-white hover:border-[#0E5543] transition-all duration-300 text-sm font-bold tracking-wide flex items-center gap-2 mx-auto uppercase">
              View Full Production Gallery <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

     
      {/* ================= 7. APPLICATIONS ================= */}
      <div className="bg-[#0E5543] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#2eb872] text-xs font-bold tracking-widest uppercase mb-2 block">
              Versatile Applications
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Crafted for Every Space
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
              Our tiles are trusted by architects, developers, and buyers seeking premium stone solutions. RGM supplies green marble tiles to international markets, including Dubai, Europe, and Kuwait.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row h-[600px] lg:h-[500px] gap-4">
            {applications.map((app) => (
              <motion.div
                key={app.id}
                layout
                onClick={() => setActiveCard(app.id)}
                onMouseEnter={() => setActiveCard(app.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out shadow-2xl 
                  ${activeCard === app.id ? 'flex-[4]' : 'flex-[1]'} 
                  h-full group`}
              >
                <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className={`absolute inset-0 transition-opacity duration-300 ${activeCard === app.id ? 'bg-black/40' : 'bg-[#0E5543]/80 group-hover:bg-[#0E5543]/60'}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${activeCard === app.id ? 'bg-[#2eb872] text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                    {app.icon}
                  </div>
                  <div className="relative overflow-hidden">
                    <motion.h3 layout="position" className={`font-serif font-bold text-white mb-2 whitespace-nowrap ${activeCard === app.id ? 'text-3xl' : 'text-xl lg:-rotate-90 lg:absolute lg:bottom-0 lg:left-0 lg:origin-bottom-left'}`}>
                      {app.title}
                    </motion.h3>
                    {activeCard === app.id && (
                      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <p className="text-gray-200 text-sm md:text-base mb-4 max-w-md">{app.description}</p>
                        <button className="text-[#2eb872] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:text-white transition-colors">
                          View Projects <FaArrowRight />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= 8. CTA / FOOTER ================= */}
      <div className="bg-white py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="relative bg-[#0E5543] rounded-[3rem] overflow-hidden shadow-2xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-20 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

            {/* TEXT CONTENT */}
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
                <button className="bg-white text-[#0E5543] px-10 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  Connect with Us <FaArrowRight />
                </button>
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <FaCheckCircle /> Order Sample
                </button>
              </motion.div>
            </div>

            {/* IMAGE SIDE */}
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
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#0E5543] p-2 rounded-full text-white">
                      <FaGem />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Premium Grade</p>
                      <p className="text-[#0E5543] font-bold">100% Export Quality</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C76E00] rounded-full opacity-20 blur-2xl"></div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default TilesProduction;