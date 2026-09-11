import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import FlautCollection from "../Helper/FlautCollection";
import ModernCarousel from "../Helper/ModernCarousel";
import { categories } from "../../data/products";

export default function OurStones() {
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();

  const nextSlide = (categoryName, maxSlides) => {
    setCurrentSlides((prev) => {
      const currentSlide = prev[categoryName] || 0;
      const itemsPerView = 6; // Show 6 items at a time
      return {
        ...prev,
        [categoryName]:
          currentSlide >= maxSlides - itemsPerView ? 0 : currentSlide + 2,
      };
    });
  };

  const prevSlide = (categoryName, maxSlides) => {
    setCurrentSlides((prev) => {
      const currentSlide = prev[categoryName] || 0;
      const itemsPerView = 6;
      return {
        ...prev,
        [categoryName]:
          currentSlide <= 0 ? maxSlides - itemsPerView : currentSlide - 2,
      };
    });
  };

  const goToSlide = (categoryName, slideIndex) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [categoryName]: slideIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full Width Banner - Outside Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mb-20 bg-[#0E5543]">
        {/* Banner Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "Montserrat", fontWeight: "300", letterSpacing: "0.05em" }}
            >
              Premium Stone Collection
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Montserrat", fontWeight: "300", letterSpacing: "0.02em" }}
            >
              Discover our exclusive range of premium natural stones, 
              crafted to perfection for your architectural and design needs
            </p>
            <button 
              className="mt-6 px-6 sm:px-8 py-3 bg-white text-[#0E5543] font-semibold rounded-lg hover:bg-[#F2E1C5] hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "Montserrat", fontWeight: "500", letterSpacing: "0.02em" }}
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="relative text-center mb-20">
          <h2
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4 mt-10"
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
          >
            <span className="relative">Explore Our Range</span>
          </h2>

          {/* Decorative line */}
          <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-20" />

          <p
            className="text-sm tracking-[0.3em] uppercase text-[#0E5543]/90 leading-relaxed font-medium"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "500",
              letterSpacing: "0.02em",
            }}
          >
            Explore our exclusive range of premium stones, from exquisite
            marbles and timeless limestones to elegant granites
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.name} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <h2
                  className="text-3xl font-bold text-[#0E5543]"
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: "400" }}
                >
                  {category.name}
                </h2>
                
               
              </div>

              {/* Modern 3D Carousel */}
              <ModernCarousel
                items={category.products}
                category={category.name}
              />
              
              {/* View All Button */}
              <div className="flex justify-center mt-8">
                <button
                style={{backgroundColor:"#0E5543"}}
                  onClick={() => navigate(`/${category.name.toLowerCase()}`)}
                 className="bg-[#0E5543] mt-5 text-white px-6 sm:px-8 py-3  font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  View All {category.name}
                </button>
              </div>

              {/* DESKTOP STAGGERED CAROUSEL - Hidden for now */}
              <div className="hidden">
              
                <div className="flex items-start gap-4">
                  {/* Left Arrow */}
                  <button
                    className="p-2 border-2 border-gray-300 hover:border-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300 mt-12"
                    onClick={() =>
                      prevSlide(category.name, category.products.length)
                    }
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  {/* Carousel Container */}
                  <div className="flex-1 overflow-hidden">
                    <div
                      className="flex gap-4 transition-transform duration-500"
                      style={{
                        transform: `translateX(-${
                          (currentSlides[category.name] || 0) * 140
                        }px)`,
                      }}
                    >
                      {category.products.map((product, index) => {
                        // Create staggered layout
                        const columnIndex = index % 3;
                        let marginTop = 0;

                        // Apply different margins for each column
                        if (columnIndex === 0) {
                          marginTop = 0; // First column - top aligned
                        } else if (columnIndex === 1) {
                          marginTop = 30; // Second column - middle
                        } else {
                          marginTop = 60; // Third column - bottom
                        }

                        return (
                          <div
                            key={product.id}
                            className="group cursor-pointer flex-shrink-0 w-32"
                            style={{ marginTop: `${marginTop}px` }}
                            onClick={() => navigate(`/product/${product.id}`)}
                          >
                            {/* Image Container */}
                            <div className="relative overflow-hidden bg-gray-100 aspect-square border border-gray-200 shadow-sm">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                              {/* Overlay on hover */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                            </div>

                            {/* Product Name */}
                            <div className="mt-2">
                              <h3
                                className="text-xs font-medium text-gray-800 text-center truncate px-1"
                                style={{
                                  fontFamily: "Arial, sans-serif",
                                  fontWeight: "200",
                                }}
                              >
                                {product.name}
                              </h3>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right Arrow */}
                  <button
                    className="p-2 border-2 border-gray-300 hover:border-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300 mt-12"
                    onClick={() =>
                      nextSlide(category.name, category.products.length)
                    }
                  >
                    <FiChevronRight size={20} />
                  </button>

                  {/* View All Button */}
                  <button
                    className="px-6 py-2 border-2 border-[#0E5543] text-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300 whitespace-nowrap ml-4 mt-12"
                    onClick={() => navigate(`/${category.name.toLowerCase()}`)}
                  >
                    VIEW ALL
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {Array.from({
                    length: Math.ceil(category.products.length / 6),
                  }).map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx ===
                        Math.floor((currentSlides[category.name] || 0) / 6)
                          ? "bg-[#0E5543]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => goToSlide(category.name, idx * 6)}
                    />
                  ))}
                </div>
              </div>

              {/* TABLET CAROUSEL - Hidden for now */}
              <div className="hidden">
                <div className="flex items-center gap-4">
                  <button
                    className="p-2 border-2 border-gray-300 hover:border-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300"
                    onClick={() =>
                      prevSlide(category.name, category.products.length)
                    }
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  <div className="flex-1 overflow-hidden">
                    <div
                      className="flex gap-4 transition-transform duration-300"
                      style={{
                        transform: `translateX(-${
                          (currentSlides[category.name] || 0) * 140
                        }px)`,
                      }}
                    >
                      {category.products.map((product) => (
                        <div
                          key={product.id}
                          className="group cursor-pointer flex-shrink-0 w-32"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="relative overflow-hidden bg-gray-100 aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="mt-2">
                            <h3
                              className="text-xs font-medium text-gray-800 text-center truncate"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontWeight: "200",
                              }}
                            >
                              {product.name}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className="p-2 border-2 border-gray-300 hover:border-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300"
                    onClick={() =>
                      nextSlide(category.name, category.products.length)
                    }
                  >
                    <FiChevronRight size={20} />
                  </button>

                  <button
                    className="px-6 py-2 border-2 border-[#0E5543] text-[#0E5543] hover:bg-[#0E5543] hover:text-white transition-all duration-300 whitespace-nowrap ml-4"
                    onClick={() => navigate(`/${category.name.toLowerCase()}`)}
                  >
                    VIEW ALL
                  </button>
                </div>
              </div>

              {/* MOBILE CAROUSEL - Hidden for now */}
              <div className="hidden">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300"
                    style={{
                      transform: `translateX(-${
                        (currentSlides[category.name] || 0) * 100
                      }%)`,
                    }}
                  >
                    {category.products.map((product) => (
                      <div
                        key={product.id}
                        className="w-full flex-shrink-0 px-2"
                      >
                        <div
                          className="group cursor-pointer"
                          onClick={() => navigate(`/product/${product.id}`)}
                        >
                          <div className="relative overflow-hidden bg-gray-100 aspect-square">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover object-center"
                            />
                          </div>
                          <div className="mt-2">
                            <h3
                              className="text-xs sm:text-sm font-medium text-gray-800 text-center"
                              style={{
                                fontFamily: "Arial, sans-serif",
                                fontWeight: "200",
                              }}
                            >
                              {product.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Controls */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0E5543] p-2 rounded-full shadow-lg hover:bg-white"
                  onClick={() =>
                    prevSlide(category.name, category.products.length)
                  }
                >
                  <FiChevronLeft size={16} />
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-[#0E5543] p-2 rounded-full shadow-lg hover:bg-white"
                  onClick={() =>
                    nextSlide(category.name, category.products.length)
                  }
                >
                  <FiChevronRight size={16} />
                </button>

                {/* Mobile Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {category.products.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === (currentSlides[category.name] || 0)
                          ? "bg-[#0E5543]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => goToSlide(category.name, idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How Our Stones Are Used Section */}
        <div className="mt-32">
          <FlautCollection />
        </div>
      </div>
    </div>
  );
}