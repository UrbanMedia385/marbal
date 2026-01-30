import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Section4 = () => {

    const [activeVideo, setActiveVideo] = useState(null);

return (
    <>
        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-br from-[#0E5543] via-[#1a6b52] to-[#0E5543] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #F2E1C5 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-[#F2E1C5]/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#F2E1C5]/5 rounded-full blur-2xl"></div>
            
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-[#F2E1C5] mb-4" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                        Excellence in Numbers
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-[#F2E1C5] to-transparent mx-auto mb-4"></div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#F2E1C5] mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {[
                        { value: '25+', label: 'Years of Mastery', suffix: 'Years' },
                        { value: '15', label: 'Advanced Machinery', suffix: 'Machines' },
                        { value: '10', label: 'Cutting Precision', suffix: 'mm Tolerance' },
                        { value: '98', label: 'Client Satisfaction', suffix: '% Rating' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            className="relative cursor-pointer"
                        >
                            {/* Card with glassmorphism effect */}
                            <div className="relative bg-white/10 backdrop-blur-lg p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-2xl shadow-black/20">
                                
                                <div className="relative z-10 text-center">
                                    {/* Main value with counter animation */}
                                    <motion.div 
                                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#F2E1C5] mb-2 sm:mb-3"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.3 }}
                                    >
                                        {stat.value}
                                        {index === 2 && <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">mm</span>}
                                        {index === 3 && <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">%</span>}
                                    </motion.div>
                                    
                                    {/* Suffix */}
                                    <div className="text-[#F2E1C5]/70 text-xs sm:text-sm font-light mb-1 sm:mb-2 tracking-wider" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                                        {stat.suffix}
                                    </div>
                                    
                                    {/* Label */}
                                    <div className="text-[#F2E1C5]/90 font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-tight" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                                        {stat.label}
                                    </div>
                                </div>

                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#F2E1C5]/30 "></div>
                                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#F2E1C5]/30"></div>
                                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#F2E1C5]/30"></div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#F2E1C5]/30 "></div>
                            </div>


                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-[#F2E1C5]/30 to-transparent"
                ></motion.div>
            </div>
        </section>

        {/* Video Modal */}
        {activeVideo && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                onClick={() => setActiveVideo(null)}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotateX: 10 }}
                    animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                    className="relative max-w-6xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Modal header */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent z-20 p-6">
                        <div className="flex justify-between items-center">
                            <div className="text-[#F2E1C5] font-serif text-xl" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Technology Preview</div>
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="text-[#F2E1C5] hover:text-white transition-colors duration-300 flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-[#F2E1C5]/20"
                            >
                                <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Close</span>
                                <div className="w-2 h-2 bg-[#F2E1C5] rounded-full"></div>
                            </button>
                        </div>
                    </div>
                    
                    {/* Video container */}
                    <div className="relative w-full h-full bg-gradient-to-br from-[#0E5543] to-[#1a6b52]">
                        <iframe
                            src={activeVideo}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Modal footer */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent z-20 p-6">
                        <div className="text-[#F2E1C5]/80 text-center text-sm" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                            Experience our cutting-edge technology in action
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
    </>
);
}

export default Section4
