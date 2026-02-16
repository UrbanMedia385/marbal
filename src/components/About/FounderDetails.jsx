// components/About/FounderDetails.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeaderContent from '../Helper/HeaderContent';

const founders = [
  {
    name: 'Dev Chand Patel',
    role: 'Director',
    image: '/devChandPatelNew.jpeg',
    bio: 'The cornerstone of Rishabh Green’s journey, Dev Chand Patel brings decades of experience and vision. His leadership has shaped the brand’s enduring legacy of trust, quality, and innovation in the stone industry. ',
  },
  {
    name: 'Poonam Chand Patel',
    role: 'Director',
    image: '/poonamChandPatelNew.jpeg',
    bio: 'With an unwavering eye for perfection, Director Poonam Chand Patel anchors Rishabh Green’s growth with strategy and substance. His leadership blends traditional values with modern vision, ensuring every slab of marble reflects the brand’s enduring integrity and excellence. ',
  },
  {
    name: 'Rajendra Patel',
    role: 'Director', 
    image: '/rajendraPatelNew.jpeg',
    bio: 'Director Rajendra Patel embodies precision in progress. Steering production and global partnerships, he champions innovation while preserving the authenticity of Rishabh Green’s craft , transforming raw stone into timeless statements of elegance across continents. '
  },
  {
    name: 'Sohan Lal Patel',
     role: 'Director',
    image: '/SohanLalPatel.jpeg',
    bio: 'At the intersection of innovation and craftsmanship, Director Sohan Lal Patel drives operational excellence at Rishabh Green. His dedication to quality, sustainability, and cutting-edge technology ensures the brand’s creations remain as enduring as the stone itself. ',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function FounderDetails() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section className="relative py-20 z-0 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#0E5543]/5 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#0E5543]/5 rounded-full"></div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#0E5543 1px, transparent 1px)`,
            backgroundSize: '15px 15px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <HeaderContent
          tagline='Meet the Team'
          title='Visionaries Behind the Craftsmanship 
'
          subtitle='Meet the Pioneers Who Built the Legacy. Driven by foresight and passion, the guiding minds of Rishabh Green transformed a bold dream into a lasting legacy where innovation, '
        />

        {/* Founder Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="relative  overflow-hidden bg-[#F2E1C5] shadow-md border border-[#0E5543]/10 group hover:shadow-lg transition-shadow duration-300"
              variants={item}
              whileHover={{ y: -5 }}
              layout
               style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}
            >
              {/* Card content */}
              <div className="flex flex-col h-full">
                {/* Image container with overlay */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E5543]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Role badge */}
                  {
                    founder.role ? ( 
                      <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#0E5543] text-white text-xs font-medium backdrop-blur-sm font-sans">
                        {founder.role}
                      </div>
                    ) :  null
                  }

                  {/* <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-[#0E5543] text-white text-xs font-medium backdrop-blur-sm font-sans">
                    {founder.role}
                  </div> */}
                </div>

                {/* Text content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-serif text-[#0E5543] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {founder.name}
                  </h3>
                  <p className="text-[#0E5543]/80 text-sm mb-3 flex-1 font-sans leading-relaxed tracking-normal " style={{textAlign:"justify",wordSpacing:"normal"}}> {founder.bio}</p>

               

                  {/* Expand indicator - only show if there's extended bio */}
                  {founder.extendedBio && (
                    <motion.div
                      className="flex items-center text-[#0E5543] text-xs font-medium mt-3 font-sans cursor-pointer"
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCard(expandedCard === index ? null : index);
                      }}
                    >
                      <span className="mr-1">{expandedCard === index ? 'Show less' : 'Read more'}</span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Active indicator ring */}
              {expandedCard === index && (
                <motion.div
                  className="absolute inset-0 rounded-xl ring-2 ring-[#0E5543]/30 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#0E5543]/10 text-[#0E5543] text-md font-sans  ">
            <span className="w-1.5 h-1.5 bg-[#0E5543] rounded-full mr-1.5 animate-pulse"></span>
            Leading the industry since 1999
          </div>
        </motion.div>
      </div>

      {/* Add font imports */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </section>
  );
}