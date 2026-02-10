import React from 'react';
import { FaGlobe, FaShippingFast, FaCertificate, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import artboard from '../../../dist/assets/Artboard.jpg';

const Exporters = () => {
  const navigate = useNavigate();
  
  const featuredCountries = [
    {
      id: 'uae',
      name: 'UAE',
      flag: 'https://flagcdn.com/w80/ae.png',
      description: 'Premium marble exports to Dubai, Abu Dhabi, and across the Emirates',
      projects: '200+',
      path: '/exporters/uae'
    },
    {
      id: 'qatar',
      name: 'Qatar',
      flag: 'https://flagcdn.com/w80/qa.png',
      description: "Luxury marble solutions for Doha's prestigious developments",
      projects: '75+',
      path: '/exporters/qatar'
    },
    {
      id: 'saudi-arabia',
      name: 'Saudi Arabia',
      flag: 'https://flagcdn.com/w80/sa.png',
      description: 'High-quality marble for Riyadh, Jeddah, and major Saudi projects',
      projects: '180+',
      path: '/exporters/saudi-arabia'
    },
    {
      id: 'europe',
      name: 'Europe',
      flag: 'https://flagcdn.com/w80/eu.png',
      description: 'Exquisite marble exports to UK, Germany, France, and Italy',
      projects: '150+',
      path: '/exporters/europe'
    }
  ];

  const countries = [
    { name: 'United States', flag: '🇺🇸', projects: '150+' },
    { name: 'United Kingdom', flag: '🇬🇧', projects: '120+' },
    { name: 'Germany', flag: '🇩🇪', projects: '95+' },
    { name: 'France', flag: '🇫🇷', projects: '80+' },
    { name: 'Italy', flag: '🇮🇹', projects: '110+' },
    { name: 'Spain', flag: '🇪🇸', projects: '70+' },
    { name: 'Canada', flag: '🇨🇦', projects: '85+' },
    { name: 'Australia', flag: '🇦🇺', projects: '90+' },
    { name: 'Japan', flag: '🇯🇵', projects: '65+' },
    { name: 'South Korea', flag: '🇰🇷', projects: '55+' },
    { name: 'Singapore', flag: '🇸🇬', projects: '45+' },
    { name: 'UAE', flag: '🇦🇪', projects: '200+' },
    { name: 'Saudi Arabia', flag: '🇸🇦', projects: '180+' },
    { name: 'Qatar', flag: '🇶🇦', projects: '75+' },
    { name: 'Kuwait', flag: '🇰🇼', projects: '60+' },
    { name: 'Oman', flag: '🇴🇲', projects: '50+' },
    { name: 'Bahrain', flag: '🇧🇭', projects: '40+' },
    { name: 'South Africa', flag: '🇿🇦', projects: '35+' },
    { name: 'Brazil', flag: '🇧🇷', projects: '45+' },
    { name: 'Mexico', flag: '🇲🇽', projects: '40+' }
  ];

  const features = [
    {
      icon: <FaGlobe className="text-3xl text-[#0E5543]" />,
      title: "Global Reach",
      description: "Exporting premium marble to over 20+ countries worldwide"
    },
    {
      icon: <FaShippingFast className="text-3xl text-[#0E5543]" />,
      title: "Fast Delivery",
      description: "Efficient logistics and timely delivery to international destinations"
    },
    {
      icon: <FaCertificate className="text-3xl text-[#0E5543]" />,
      title: "Quality Certified",
      description: "ISO certified products meeting international quality standards"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#0E5543]" />,
      title: "Trusted Partner",
      description: "Long-term partnerships with clients across the globe"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#F2E1C5] mb-6 mt-10"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
          >
            Leading Marble Exporters
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#F2E1C5]/90 mb-8 max-w-3xl mx-auto"
             style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Rishabh Green Marbles - Your trusted partner for premium Indian marble exports worldwide. 
            Delivering excellence across continents with unmatched quality and service.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[#F2E1C5]">
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm md:text-base"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>20+ Countries</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm md:text-base"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>1000+ Projects</span>
            </div>
            <div className="bg-[#F2E1C5]/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 rounded-full">
              <span className="font-semibold text-xs sm:text-sm md:text-base" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-4"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Why Choose Us for Export?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              We are committed to delivering the finest Indian marble to international markets with excellence in quality, service, and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Countries Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-4"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Our Main Export Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Leading marble exporters to these key international markets with premium quality and trusted service.
            </p>
          </div>
          
          {/* Featured 4 Countries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {featuredCountries.map((country) => (
              <div 
                key={country.id}
                className="bg-gradient-to-br from-[#0E5543] to-[#1a7a5e] rounded-xl p-8 text-center text-white hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(country.path)}
              >
                <div className="mb-4 flex justify-center">
                  <img src={country.flag} alt={`${country.name} Flag`} className="w-16 h-12 object-cover rounded shadow-lg" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>{country.name}</h3>
                <p className="text-[#F2E1C5]/80 text-xs sm:text-sm mb-4"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>{country.description}</p>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F2E1C5]"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>{country.projects}</div>
                <div className="text-xs sm:text-sm text-[#F2E1C5]/80"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Projects</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All Countries Section */}
     

      {/* About Export Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-6"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Premium Indian Marble Exports
              </h2>
              <div className="space-y-4 text-gray-700 text-sm sm:text-base"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                <p   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Rishabh Green Marbles has established itself as a leading exporter of premium Indian marble, serving clients across the globe with unmatched quality and service excellence.
                </p>
                <p   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Our extensive range includes the finest varieties of Indian marble, from the iconic Green Marble to pristine White Marble, each carefully selected and processed to meet international standards.
                </p>
                <p   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  With state-of-the-art processing facilities and a dedicated export team, we ensure that every shipment meets the highest quality standards and reaches our clients on time.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E5543]"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>20+</div>
                  <div className="text-gray-600 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0E5543]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>1000+</div>
                  <div className="text-gray-600 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Export Projects</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={artboard}
                alt="Marble Export"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Process Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] mb-4"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Our Export Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              From quarry to your doorstep, we ensure a seamless export process with quality control at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Selection</h3>
              <p className="text-gray-600 text-xs sm:text-sm"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Premium marble selection from our quarries</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Processing</h3>
              <p className="text-gray-600 text-xs sm:text-sm"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>State-of-the-art processing and quality control</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Packaging</h3>
              <p className="text-gray-600 text-xs sm:text-sm"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Secure packaging for international shipping</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0E5543] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Delivery</h3>
              <p className="text-gray-600 text-xs sm:text-sm"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Timely delivery to your destination</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-[#0E5543] to-[#1a7a5e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#F2E1C5] mb-6"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Ready to Import Premium Indian Marble?
          </h2>
          <p className="text-[#F2E1C5]/90 mb-8 text-sm sm:text-base md:text-lg"   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
            Contact us today to discuss your marble import requirements and get a customized quote for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-[#F2E1C5] text-[#0E5543] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2E1C5]/90 hover:scale-105 transition-all duration-300"   
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
              onClick={() => navigate('/request-quote')}
            >
              Get Export Quote
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exporters;