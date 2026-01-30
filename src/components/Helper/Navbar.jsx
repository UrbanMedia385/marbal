// components/Navbar.js
import React, { useState, useEffect } from "react";
import { FiMenu, FiSearch, FiX, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../../public/logo.png"; // Adjust the path as necessary

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [showOurStonesDropdown, setShowOurStonesDropdown] = useState(false);
  const [showExportersDropdown, setShowExportersDropdown] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [clickTimeout, setClickTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Our Stones", 
      path: "/OurStones",
      dropdown: [
        { name: "Marble", path: "/marble" },
        { name: "Granite", path: "/granite" },
        { name: "Sandstone", path: "/sandstone" },
      ]
    },
    
    { name: "Production Technology", path: "/state-of-the-art" },
    { 
      name: "Exporters", 
      path: "/exporters",
      dropdown: [
        { name: "Marble Export - UAE", path: "/exporters/uae" },
        { name: "Marble Export - Qatar", path: "/exporters/qatar" },
        { name: "Marble Export - Saudi Arabia", path: "/exporters/saudi-arabia" },
        { name: "Marble Export - Europe", path: "/exporters/europe" },
      ]
    },
    { name: "Blogs", path: "/Blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0E5543] backdrop-blur-md shadow-xl py-1"
          : "bg-gradient-to-b from-gray-900 to-gray-850 py-2 border-b border-gray-700/30"
        }`}
    >
      <div className="max-w-8xl mx-auto px-3 sm:px-2 md:px-32">
        <div className="flex justify-between items-center h-20 sm:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="RGM"
                className="h-25 w-25 sm:h-25 sm:w-25 md:h-50 md:w-55   object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <span
                      className={`transition-all duration-300 group cursor-pointer ${activeItem === item.name.toLowerCase()
                          ? "text-white"
                          : "text-white hover:text-amber-300"
                        }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (clickTimeout) {
                          clearTimeout(clickTimeout);
                          setClickTimeout(null);
                          // Double click - show dropdown
                          if (item.name === "Our Stones") {
                            setShowOurStonesDropdown(!showOurStonesDropdown);
                            setShowExportersDropdown(false);
                          } else if (item.name === "Exporters") {
                            setShowExportersDropdown(!showExportersDropdown);
                            setShowOurStonesDropdown(false);
                          }
                        } else {
                          // Single click - navigate to page
                          const timeout = setTimeout(() => {
                            handleItemClick(item.name.toLowerCase());
                            window.location.href = item.path;
                            setClickTimeout(null);
                          }, 300);
                          setClickTimeout(timeout);
                        }
                      }}
                    >
                      <span className="relative text-sm xl:text-base font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                        {item.name}
                      </span>
                    </span>
                    {((item.name === "Our Stones" && showOurStonesDropdown) || 
                      (item.name === "Exporters" && showExportersDropdown)) && (
                      <div className={`absolute top-full mt-2 w-56 xl:w-64 bg-[#0E5543] border border-gray-700 rounded-lg shadow-xl z-50 transform transition-all duration-300 ease-out opacity-0 translate-y-2 animate-in ${item.name === "Exporters" ? "right-0" : "left-0"}`} style={{animation: 'fadeInUp 0.3s ease-out forwards'}}>
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            style={{textDecoration: "none"}}
                            className="block px-4 py-3 text-white hover:bg-[#1A7A62] hover:!text-[white] transition-all duration-300 first:rounded-t-lg last:rounded-b-lg cursor-pointer"
                            onClick={() => {
                              if (item.name === "Our Stones") {
                                setShowOurStonesDropdown(false);
                              } else if (item.name === "Exporters") {
                                setShowExportersDropdown(false);
                              }
                            }}
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`transition-all duration-300 group ${activeItem === item.name.toLowerCase()
                        ? "text-white"
                        : "text-white hover:text-amber-300"
                      }`}
                    onClick={() => {
                      handleItemClick(item.name.toLowerCase());
                      setShowOurStonesDropdown(false);
                      setShowExportersDropdown(false);
                    }}
                  >
                    <span className="relative text-sm xl:text-base font-medium text-white after:absolute after:w-0 after:h-px after:bg-amber-300 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                      {item.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}

            {/* Search */}
            <div className="flex items-center ml-3 xl:ml-4 pl-3 xl:pl-4 border-l border-gray-700">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <input
                  type="text"
                  placeholder="Search marble..."
                  className="relative px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#1A7A62]/50 focus:border-[#1A7A62]/50 focus:bg-[#1A7A62]/20 transition-all duration-300 w-28 xl:w-40 2xl:w-48 hover:bg-[#1A7A62]/15"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 group-hover:text-amber-300 transition-colors duration-300"
                  size={14}
                />
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{backgroundColor:"black"}}
              className="p-2 sm:p-2.5   transition-all duration-300 "
            >
              {isOpen ? <FiX size={18} /> : <FiMenu className="text-white" size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-64 sm:w-72 md:w-80 bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between px-4 h-14 sm:h-16 border-b border-gray-200">
          <span className="text-[#0E5543] font-semibold text-sm sm:text-base tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-[#0E5543] hover:bg-gray-100 transition"
          >
            <FiX size={18} />
          </button>
        </div>
        <div className="px-3 sm:px-4 pt-3 pb-6 space-y-1 sm:space-y-2 overflow-y-auto h-[calc(100%-3.5rem)] sm:h-[calc(100%-4rem)]">
          {menuItems.map((item) => (
            <div key={item.name} className="space-y-1">
              {item.dropdown ? (
                <>
                  <Link
                    to={item.path}
                    className={`w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-between group text-sm sm:text-base ${activeItem === item.name.toLowerCase()
                        ? "bg-[#0E5543]/10 text-[#0E5543]"
                        : "text-[#0E5543] hover:bg-[#0E5543]/10 hover:text-[#0E5543]"
                      }`}
                    onClick={() => {
                      handleItemClick(item.name.toLowerCase());
                      setMobileDropdowns(prev => ({
                        [item.name]: !prev[item.name]
                      }));
                    }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className={`transform transition-transform duration-200 ${mobileDropdowns[item.name] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </Link>
                  {mobileDropdowns[item.name] && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className="block px-3 py-2 text-xs sm:text-sm text-gray-600 hover:text-[#0E5543] hover:bg-gray-100 rounded transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center group text-sm sm:text-base ${activeItem === item.name.toLowerCase()
                      ? "bg-[#0E5543]/10 text-[#0E5543]"
                      : "text-[#0E5543] hover:bg-[#0E5543]/10 hover:text-[#0E5543]"
                    }`}
                  onClick={() => handleItemClick(item.name.toLowerCase())}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Search */}
          <div className="pt-3 mt-3 border-t border-gray-200">
            <div className="px-3 sm:px-4 py-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0E5543]" size={16} />
                <input
                  type="text"
                  placeholder="Search marble..."
                  className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0E5543]/50 focus:border-[#0E5543]/50 transition-all duration-300 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
