import React, { useState, useEffect } from "react";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  ZoomableGroup 
} from "react-simple-maps";
import { FaMapMarkerAlt, FaGlobeAmericas, FaHandshake, FaUsers, FaClock, FaAward, FaGlobe, FaGem, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import HeaderContent from "../Helper/HeaderContent"; 

// GeoJSON URL for the map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Counter Component
const AnimatedCounter = ({ from, to, duration = 2 }) => {
  const nodeRef = React.useRef();
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [motionValue, to, duration]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

// Locations with Coordinates [Longitude, Latitude]
const locations = [
  {
    name: "India",
    coordinates: [78.9629, 20.5937],
    description: "Our largest development center with 200+ marble experts",
    clients: "150+ premium projects",
    projects: ["Taj Hotel", "Infosys Campus", "Reliance Towers"]
  },
  {
    name: "Australia",
    coordinates: [133.7751, -25.2744],
    description: "APAC regional center driving premium constructions",
    clients: "45+ landmark projects",
    projects: ["Sydney Opera House", "Melbourne Towers", "Perth Resort"]
  },
  {
    name: "United Arab Emirates",
    displayName: "UAE",
    coordinates: [53.8478, 23.4241],
    description: "Marble Export - UAE with premium stone collections",
    clients: "75+ luxury exports",
    projects: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
  },
  {
    name: "Russia",
    coordinates: [105.3188, 61.5240],
    description: "Eastern European luxury marble specialist",
    clients: "40+ premium installations",
    projects: ["Moscow Metro", "St. Petersburg Palace", "Kremlin"]
  },
  {
    name: "Qatar",
    coordinates: [51.1839, 25.3548],
    description: "Marble Export - Qatar serving World Cup venues",
    clients: "45+ stadium projects",
    projects: ["Lusail Stadium", "Museum of Islamic Art", "The Pearl"]
  },
  {
    name: "Saudi Arabia",
    coordinates: [45.0792, 23.8859],
    description: "Marble Export - Saudi Arabia serving World Cup venues",
    clients: "45+ stadium projects",
    projects: ["Lusail Stadium", "Museum of Islamic Art", "The Pearl"]
  },
  {
    name: "France", // Using France for Europe
    displayName: "Europe",
    coordinates: [2.2137, 46.2276],
    description: "Marble Export - Europe covering multiple countries",
    clients: "120+ continental projects",
    projects: ["Louvre Museum", "Vatican Restoration", "Barcelona Sagrada"]
  },
  {
    name: "Canada",
    coordinates: [-106.3468, 56.1304],
    description: "North American marble specialist for luxury developments",
    clients: "85+ premium projects",
    projects: ["CN Tower Plaza", "Toronto Pearson", "Vancouver Convention"]
  },
];

export default function WorldMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Handle selection of a country or pin
  const handleSelect = (geoName) => {
    const foundLoc = locations.find(
      (loc) => loc.name === geoName || loc.displayName === geoName
    );
    if (foundLoc) {
      setSelectedLocation(foundLoc);
    } else {
      setSelectedLocation(null);
    }
  };

  return (
    <div className="relative w-full max-w-full p-3 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#0E5543] via-[#0E5543] to-[#0E5543] shadow-2xl border border-[#1A7A62]">
      
      {/* --- 1. Header & Stats Section (From your code) --- */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <HeaderContent
          tagline=""
          title=" Global Marble Excellence"
          subtitle="Transforming spaces across countries like UAE, Qatar, Saudi Arabia, and Europe with 1,000+ iconic marble creations."
          theme="dark"
        />

        {/* Premium Marble Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 max-w-7xl px-2 sm:px-4 lg:px-8 mx-auto"
        >
          {[
            { icon: FaGlobeAmericas, number: 7, suffix: "+", label: "Countries", color: "#0E5543" },
            { icon: FaAward, number: 500, suffix: "+", label: "Projects", color: "#0E5543" },
            { icon: FaUsers, number: 200, suffix: "+", label: "Artisans", color: "#0E5543" },
            { icon: FaClock, number: 25, suffix: "+", label: "Years", color: "#0E5543" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-white/25 via-white/10 to-white/5 backdrop-blur-xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/40 shadow-2xl transition-all duration-500 overflow-hidden">
                <motion.div className="relative mb-3 sm:mb-4 md:mb-6 mx-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center bg-white/50 backdrop-blur-sm border border-white/60 shadow-lg">
                  <stat.icon className="text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg" style={{ color: stat.color }} />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-2 sm:mb-3 md:mb-4 text-center tracking-tight drop-shadow-2xl"
                >
                  <AnimatedCounter from={0} to={stat.number} duration={2} />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{stat.suffix}</span>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  className="text-white text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] text-center drop-shadow-sm"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- 2. Interactive SVG Map Container --- */}
      <div className="relative bg-white shadow-xl p-2 sm:p-3 md:p-4 border border-[#D4C1A3] max-w-7xl mx-auto rounded-lg overflow-hidden">
        
        {/* The Map Component */}
        <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full">
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 150 }}>
            <ZoomableGroup center={[20, 0]} zoom={1}>
              
              {/* Countries Layer */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.name;
                    // Check if country is in our list
                    const isLocationAvailable = locations.find(l => l.name === countryName);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onClick={() => isLocationAvailable && handleSelect(countryName)}
                        style={{
                          default: {
                            // Active countries -> #0E5543 (Green)
                            // Inactive -> #F5F5F5 (Gray)
                            fill: isLocationAvailable ? "#0E5543" : "#F5F5F5",
                            outline: "none",
                            stroke: "#FFFFFF",
                            strokeWidth: 0.5,
                          },
                          hover: {
                            // Hover -> #052b21 (Dark Green)
                            fill: isLocationAvailable ? "#052b21" : "#F5F5F5",
                            outline: "none",
                            cursor: isLocationAvailable ? "pointer" : "default",
                          },
                          pressed: {
                            fill: isLocationAvailable ? "#052b21" : "#F5F5F5",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Pins (Markers) Layer */}
              {locations.map((loc, index) => {
                const isSelected = selectedLocation?.name === loc.name;
                return (
                  <Marker 
                    key={index} 
                    coordinates={loc.coordinates}
                    onClick={(e) => {
                        e.stopPropagation(); 
                        handleSelect(loc.name);
                    }}
                  >
                    <foreignObject x="-14" y="-28" width="30" height="30" style={{ overflow: 'visible' }}>
                       <div className="flex flex-col items-center group cursor-pointer">
                          {/* PIN Styling: Always Orange (#C76E00) */}
                          <div
                              className={`
                                  flex items-center justify-center rounded-full shadow-lg transition-all duration-300
                                  bg-[#C76E00] text-white
                                  ${isSelected ? "w-9 h-9 border-2 border-white scale-125" : "w-7 h-7 hover:scale-110 hover:bg-[#A65C00]"}
                              `}
                          >
                              <FaMapMarkerAlt size={isSelected ? 18 : 14} />
                          </div>
                          
                          {/* Pin Tooltip */}
                          {!isSelected && (
                              <div className="hidden group-hover:block mt-1 bg-[#C76E00] text-white text-[10px] px-2 py-1 rounded shadow-lg whitespace-nowrap z-50 border border-white">
                                  {loc.displayName || loc.name}
                              </div>
                          )}
                       </div>
                    </foreignObject>
                  </Marker>
                );
              })}

            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* --- Location Details Popup (Framer Motion) --- */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="
                absolute 
                top-4 left-1/2 -translate-x-1/2 w-[90%] 
                sm:top-8 sm:left-8 sm:translate-x-0 
                sm:w-auto sm:max-w-sm
                bg-white/95 backdrop-blur-sm 
                shadow-2xl border-l-4 border-[#C76E00]
                p-4 sm:p-6 
                z-30 rounded-r-lg
              "
            >
              {/* Popup Header */}
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <FaMapMarkerAlt className="text-[#C76E00] text-lg sm:text-xl" />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#0E5543]">
                    {selectedLocation.displayName || selectedLocation.name}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedLocation(null)}
                  className="text-[#1A7A62] hover:text-[#C76E00] transition-colors duration-200 p-1"
                >
                  <FaTimes className="text-sm sm:text-base" />
                </button>
              </div>

              {/* Description */}
              <p className="text-[#1A7A62] mb-3 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedLocation.description}
              </p>

              {/* Projects List */}
              <div className="border-t border-[#1A7A62]/20 pt-3">
                 <p className="text-xs text-[#1A7A62] mb-1">
                   <span className="font-bold text-[#C76E00]">Projects:</span> {selectedLocation.clients}
                 </p>
                 <ul className="list-disc list-inside text-xs text-[#525252]">
                    {selectedLocation.projects.map((p, i) => (
                        <li key={i} className="marker:text-[#C76E00]">{p}</li>
                    ))}
                 </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- 3. CTA Footer Section (From your code) --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-center max-w-7xl mx-auto mt-6 sm:mt-8 md:mt-10 lg:mt-12 bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl border border-[#D4AF37]/30 rounded-lg"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="inline-flex mb-3 sm:mb-4 md:mb-5 items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0E5543] to-[#1A7A62] shadow-lg border border-white/20 rounded-full"
        >
          <FaHandshake className="text-lg sm:text-xl md:text-2xl text-[#F2E1C5]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-3 sm:mb-4 md:mb-6 space-y-3 sm:space-y-4 md:space-y-6"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E5543] leading-tight"
         style={{ fontFamily: 'Arial, sans-serif', fontWeight: '200', letterSpacing: '0.05em' }}
          >
          Elevate Every Space with<br />
            <span className="italic font-light text-[#1A7A62]">Luxury Stone</span>
          </h3>

          <p className="text-[#1A7A62] text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>
          Explore our premium marble and granite collections, meticulously crafted to bring unmatched elegance and sophistication to your projects. 
          </p>
        </motion.div>

        <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base md:text-lg border border-[#0E5543] rounded"
          >
            Request Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 bg-white text-black text-sm sm:text-base md:text-lg border border-[#D4C1A3] rounded"
             style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}
          >
            View Catalog
          </motion.button>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-6 text-[#1A7A62] text-xs sm:text-sm flex items-center justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap"
         style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.05em' }}>
          <span className="flex items-center gap-2"><FaAward className="text-[#1A7A62]" /> Premium Quality Guarantee</span>
          <span className="flex items-center gap-2"><FaGlobe className="text-[#1A7A62]" /> Global Shipping</span>
          <span className="flex items-center gap-2"><FaGem className="text-[#0E5543]" /> Custom Solutions</span>
        </div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F2E1C5] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D4AF37] rounded-full opacity-5 blur-3xl"></div>
      </div>
    </div>
  );
}