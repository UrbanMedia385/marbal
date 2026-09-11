import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';


const Section1 = () => {
    const [activeVideo, setActiveVideo] = useState(null);
return (
    <>
        <section className="relative py-10 bg-gradient-to-br from-[#0E5543] via-[#1a6b52] to-[#0E5543] overflow-hidden"
        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            {/* Premium Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25% 25%, #F2E1C5 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}></div>
                </div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2E1C5]/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2E1C5]/10 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F2E1C5]/10 border border-[#F2E1C5]/20 backdrop-blur-sm mb-8"
                        >
                            <div className="w-2 h-2 bg-[#F2E1C5] rounded-full animate-pulse"></div>
                            <span className="text-[#F2E1C5] font-light tracking-widest text-sm uppercase" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Craftsmanship & Innovation</span>
                        </motion.div>

                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-light text-[#F2E1C5] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                            Where <span className="italic font-normal" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Timeless Craft</span> Meets Modern Innovation
                        </h2>
                        
                        <div className="w-20 h-0.5 bg-gradient-to-r from-[#F2E1C5] to-transparent mb-8"></div>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#F2E1C5]/80 leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                            At Rishab Green Marbles, we blend generations of stoneworking artistry with cutting-edge technology 
                            to deliver unparalleled perfection in every slab. Our sophisticated machinery ensures precision cuts, 
                            flawless finishes, and consistent quality that defines industry excellence.
                        </p>

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="flex items-center group"
                            >
                                <div className="w-3 h-3 bg-[#F2E1C5] rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="text-[#F2E1C5] font-medium text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>ISO 9001 Certified Manufacturing Processes</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="flex items-center group"
                            >
                                <div className="w-3 h-3 bg-[#F2E1C5] rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="text-[#F2E1C5] font-medium text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>0.1mm Precision Tolerance Guarantee</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="flex items-center group"
                            >
                                <div className="w-3 h-3 bg-[#F2E1C5] rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                                <span className="text-[#F2E1C5] font-medium text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Advanced Digital Quality Control Systems</span>
                            </motion.div>
                        </div>

                        {/* Decorative Element */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="w-32 h-px bg-gradient-to-r from-[#F2E1C5] to-transparent"
                        ></motion.div>
                    </motion.div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative overflow-hidden border-2 border-[#F2E1C5]/20 shadow-2xl shadow-black/30">
                            <img
                                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Advanced marble cutting technology"
                                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 hover:scale-105"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/80 via-[#0E5543]/30 to-transparent"></div>
                            
                            {/* Play Button */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setActiveVideo('https://player.vimeo.com/video/370756669')}
                                className="absolute inset-0 flex items-center justify-center group"
                            >
                                <div className="relative">
                                    {/* Outer Glow */}
                                    <div className="absolute inset-0 bg-[#F2E1C5] rounded-full animate-ping opacity-20"></div>
                                    
                                    {/* Main Button */}
                                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#F2E1C5] to-[#F2E1C5]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-black/40">
                                        <FiPlay size={16} className="text-[#0E5543] ml-1 sm:text-xl md:text-2xl" />
                                    </div>
                                    
                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F2E1C5] to-[#e8d4b3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md"></div>
                                </div>
                            </motion.button>

                            {/* Decorative Corner */}
                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#F2E1C5]/30"></div>
                            <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#F2E1C5]/30"></div>
                            <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#F2E1C5]/30"></div>
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#F2E1C5]/30"></div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F2E1C5]/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#F2E1C5]/5 rounded-full blur-xl"></div>

                        {/* Caption */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="text-center mt-6"
                        >
                            <p className="text-[#F2E1C5]/60 text-xs sm:text-sm font-light" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Watch our precision technology in action</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Decorative Line */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="w-48 h-px bg-gradient-to-r from-transparent via-[#F2E1C5]/30 to-transparent mx-auto mt-16"
                ></motion.div>
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
)
}

export default Section1
