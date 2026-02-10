// components/Footer.js
import { Earth } from "lucide-react";
import React from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiHeart,
  FiSend,
  FiArrowUp,
  FiClock,
  FiAward,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  return (
    <footer className="bg-[#0E5543] text-[#F2E1C5] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F2E1C5] to-transparent"></div>
      <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-[#F2E1C5]/5 blur-lg"></div>
      <div className="absolute bottom-20 right-1/3 w-56 h-56 rounded-full bg-[#1A6B56]/30 blur-xl"></div>

      {/* Marble pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2Zy...')]"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 py-8 sm:py-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-[#F2E1C5] rounded-full mr-3 shadow-lg shadow-[#F2E1C5]/30"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#F2E1C5]" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
                Rishabh Green Marbles
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#F2E1C5]/80 mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
              Providing premium quality natural marbles and stones since 1990.
              Our products transform spaces with elegance and timeless beauty
              that lasts generations.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {[
                { icon: <FiFacebook size={18} />, to: "/facebook" },
                { icon: <FiTwitter size={18} />, to: "/twitter" },
                { icon: <FiInstagram size={18} />, to: "/instagram" },
              ].map((item, index) => (
                <p
                  key={index}
                  onClick={() => navigate(item.to)}
                  className="p-2 sm:p-3 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg text-[#F2E1C5] transition-all duration-300 group hover:bg-[#F2E1C5] hover:text-[#0E5543] cursor-pointer"
                >
                  {item.icon}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]"style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
              Explore
            </h3>
            <ul className="space-y-4 mx-[-20px]"
                        style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>

              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Gallery", to: "/gallery" },
                { label: "Projects", to: "/projects" },
              ].map((item, index) => (
                <li key={index}>
                  <p
                    onClick={() => navigate(item.to)}
                    className="text-[#F2E1C5]/80 hover:text-[#F2E1C5] transition-all duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-[#F2E1C5]/0 rounded-full mr-3 group-hover:bg-[#F2E1C5] transition-all duration-300"></span>
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
            Catagory 
            </h3>
            <ul className="space-y-4 mx-[-20px]"            style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>

              {[
                { label: "Green Marble  ", to: "/products/green-marble" },
                { label: "White Marble", to: "/products/white-marble" },
                { label: "Granite", to: "/products/granite" },
                { label: "Sandstone", to: "/products/sandstone" }
               
              ].map((item, index) => (
                <li key={index}>
                  <p
                    onClick={() => navigate(item.to)}
                    className="text-[#F2E1C5]/80 hover:text-[#F2E1C5] transition-all duration-300 flex items-center group cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-[#F2E1C5]/0 rounded-full mr-3 group-hover:bg-[#F2E1C5] transition-all duration-300"></span>
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]"style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
              Contact Us
            </h3>
            <div className="bg-[#1A6B56]/30 border border-[#F2E1C5]/10 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8" style={{ fontFamily: 'Montserrat', fontWeight: '200', letterSpacing: '0.1em' }}>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="p-1.5 sm:p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <FiMapPin className="text-[#F2E1C5]" size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F2E1C5]/80 leading-relaxed">
                   Araji No. 114, NH. 8, Sukher,<br className="hidden sm:block" />
                   Udaipur - 313001, Rajasthan, India
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 sm:p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <FiPhone className="text-[#F2E1C5]" size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F2E1C5]/80">+919414165062,<br className="sm:hidden" /> +918433820920</span>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 sm:p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <FiMail className="text-[#F2E1C5]" size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F2E1C5]/80 break-all">
                    rishabhgreenminerals@gmail.com
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="p-1.5 sm:p-2 bg-[#0E5543] border border-[#F2E1C5]/20 rounded-lg mr-3 sm:mr-4 flex-shrink-0">
                    <Earth className="text-[#F2E1C5]" size={14} />
                  </div>
                  <span className="text-xs sm:text-sm text-[#F2E1C5]/80">rishabhgreenmarbles.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter + Badges */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 w-full border-t border-[#F2E1C5]/20 pt-6 sm:pt-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["Premium Quality", "25+ Years Experience", "Worldwide Shipping"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center text-xs sm:text-sm bg-[#0E5543] border border-[#F2E1C5]/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
                >
                  <FiAward className="text-[#F2E1C5] mr-2" size={14} />
                  <span className="text-[#F2E1C5]">{item}</span>
                </div>
              )
            )}
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4 relative pb-2 after:absolute after:left-0 after:bottom-0 after:w-10 after:h-0.5 after:bg-[#F2E1C5]">
              Newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-[#0E5543] border border-[#F2E1C5]/30 rounded-lg text-sm text-[#F2E1C5] focus:outline-none focus:ring-2 focus:ring-[#F2E1C5]/30 focus:border-[#F2E1C5]/50 transition-all duration-300 placeholder-[#F2E1C5]/50"
              />
              <button
                style={{ background: "#F2E1C5" }}
                className="px-4 bg-[#F2E1C5] text-[#0E5543] font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center"
              >
                <FiSend size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#F2E1C5]/20 pt-6 sm:pt-8 pb-6 sm:pb-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[#F2E1C5]/60 text-xs sm:text-sm flex items-center text-center md:text-left">
            © {new Date().getFullYear()} Rishab Green Marbles. Crafted with{" "}
            <FiHeart className="text-[#F2E1C5] mx-1" /> in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <p
              onClick={() => navigate("/privacy")}
              className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm cursor-pointer"
            >
              Privacy Policy
            </p>
            <p
              onClick={() => navigate("/terms")}
              className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm cursor-pointer"
            >
              Terms of Service
            </p>
            <p
              onClick={() => navigate("/shipping")}
              className="text-[#F2E1C5]/60 hover:text-[#F2E1C5] transition-colors duration-300 text-sm cursor-pointer"
            >
              Shipping Info
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        style={{ background: "#F2E1C5" }}
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-2.5 sm:p-3 bg-[#F2E1C5] text-[#0E5543] rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#F2E1C5]/30 transition-all duration-300 z-40 group border border-[#F2E1C5]/30"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
