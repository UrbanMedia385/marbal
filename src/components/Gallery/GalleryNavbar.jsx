import React from 'react';
import { motion } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';

const GalleryNavbar = ({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }) => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' },
    { id: 'outdoor', name: 'Outdoor' },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-[#0E5543] to-[#0a3d2f] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#F2E1C5] text-[#0E5543] font-bold shadow-lg border-2 border-[#F2E1C5]'
                    : 'bg-white/15 text-[#F2E1C5] hover:bg-white/25 border-2 border-transparent hover:border-[#F2E1C5]/30'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          <motion.div 
            className="relative"
            whileFocus={{ scale: 1.02 }}
          >
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0E5543]/80" size={18} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-6 py-3 w-full md:w-72 bg-[#F2E1C5] border-2 border-[#F2E1C5] rounded-full text-[#0E5543] placeholder-[#0E5543]/70 focus:outline-none focus:ring-4 focus:ring-[#F2E1C5]/50 shadow-lg transition-all duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryNavbar;