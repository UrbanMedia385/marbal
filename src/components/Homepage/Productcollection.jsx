import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { FaExpand, FaTimes, FaChevronLeft, FaChevronRight, FaCar, FaTools, FaHeadset, FaArrowRight } from "react-icons/fa"
import HeaderContent from '../Helper/HeaderContent'

export default function ProductCollection() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalSlide, setModalSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2.1,
            spacing: 20
          }
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3.1,
            spacing: 24
          }
        },
        "(min-width: 1280px)": {
          slides: {
            perView: 3.3,
            spacing: 28
          }
        }
      },
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created(slider) {
        setLoaded(true)
      },
    }
  )

  // Auto-scroll functionality
  useEffect(() => {
    if (!loaded || !instanceRef.current) return

    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 4000)

    return () => clearInterval(interval)
  }, [loaded, instanceRef])

  const marbleProducts = [
    {
      image: "https://images.unsplash.com/photo-1554743365-a80c1243316e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Carrara White",
      origin: "Italy",
      texture: "Fine Veins",
      finish: "Polished",
      description: "Classic Italian marble with subtle grey veins, perfect for elegant interiors and timeless designs.",
      applications: ["Flooring", "Countertops", "Wall Cladding"],
      size: "3000 x 2000 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
      title: "Calacatta Gold",
      origin: "Italy",
      texture: "Golden Veins",
      finish: "Premium Polish",
      description: "Luxurious marble featuring dramatic gold veins, ideal for statement pieces and luxury spaces.",
      applications: ["Feature Walls", "Bathrooms", "Hotel Lobbies"],
      size: "3200 x 1800 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Statuario",
      origin: "Italy",
      texture: "Dramatic Veins",
      finish: "Elite Finish",
      description: "Pure white background with bold grey veins, offering unparalleled elegance and sophistication.",
      applications: ["Luxury Residences", "Commercial Spaces", "Art Pieces"],
      size: "3500 x 2000 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Emperador Dark",
      origin: "Spain",
      texture: "Rich Brown",
      finish: "Honed",
      description: "Deep brown marble with light veins, creating a warm and inviting atmosphere in any space.",
      applications: ["Flooring", "Fireplaces", "Accent Walls"],
      size: "3000 x 1500 mm"
    },
    {
      image: "https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Makrana Pure",
      origin: "India",
      texture: "Pure White",
      finish: "Polished",
      description: "Renowned Indian marble known for its pristine white quality and excellent durability.",
      applications: ["Monuments", "Residential", "Commercial"],
      size: "2800 x 1600 mm"
    },
  ]

  const services = [
    {
      icon: <FaCar className="text-5xl mb-4" />,
      title: "Free Delivery",
      description: "We provide free delivery services for all orders within the city limits, ensuring your marble reaches you safely and on time.",
      features: ["Within City Limits", "Professional Handling", "Timely Delivery"]
    },
    {
      icon: <FaTools className="text-5xl mb-4" />,
      title: "Expert Installation",
      description: "Our team of certified professionals ensures perfect installation with precision and care for long-lasting results.",
      features: ["Certified Professionals", "Precision Work", "Quality Guarantee"]
    },
    {
      icon: <FaHeadset className="text-5xl mb-4" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address any queries or concerns you may have about our products and services.",
      features: ["24/7 Availability", "Quick Response", "After-Sales Support"]
    }
  ]

  const openModal = (product, index) => {
    setSelectedProduct(product)
    setModalSlide(index)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  const nextModalSlide = () => {
    setModalSlide((prev) => (prev + 1) % marbleProducts.length)
  }

  const prevModalSlide = () => {
    setModalSlide((prev) => (prev - 1 + marbleProducts.length) % marbleProducts.length)
  }

  const handleExploreServices = () => {
    navigate('/services')
  }

  return (
    <div className="bg-gradient-to-br   from-[#0E5543] via-[#0E5543] to-[#0E5543] py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-['Playfair_Display'] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F2E1C5]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#F2E1C5]/10 rounded-full blur-3xl animate-pulse delay-800"></div>
      </div>

      {/* Header Section */}
      <HeaderContent 
      className='sans-serif  mb-20'
        title="Our Premium Services"
        subtitle="We go beyond providing exceptional marble products by offering comprehensive services 
            to ensure your complete satisfaction from selection to installation."
        theme="dark"
      />

      {/* Services Section - REVERSED THEME */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white  overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500 p-8 hover:transform hover:scale-105 shadow-xl"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 text-[#0E5543] group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-base font-['Poppins'] font-normal text-gray-900 text-center mb-4">{service.title}</h3>
              <p className="text-gray-700 text-center mb-6 leading-relaxed font-['Text-book']">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#0E5543] rounded-full mr-3"></span>
                    <span className="text-sm font-['Text-book']">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-gradient-to-r from-[#0E5543] to-[#1a7a5e] text-[#F2E1C5] py-3 rounded-xl font-semibold hover:from-[#1a7a5e] hover:to-[#0E5543] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg">
                Learn More
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          ))}
        </div> */}

        {/* Explore Services Button - Updated to match new theme */}
        <div className="text-center mt-10 ">
          <button 
            onClick={handleExploreServices}
            className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center gap-3 mx-auto"
          >
            Explore All Services
            <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Modal - Updated to match reversed theme */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/90 backdrop-blur-2xl">
          <div className="relative max-w-6xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden border border-[#F2E1C5]/30">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 bg-[#F2E1C5]/20 backdrop-blur-md text-[#F2E1C5] p-3 rounded-full hover:bg-[#F2E1C5]/30 transition-all duration-300 transform hover:scale-110 border border-[#F2E1C5]/30"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-[#F2E1C5]/20 backdrop-blur-md text-[#F2E1C5] p-4 rounded-full hover:bg-[#F2E1C5]/30 transition-all duration-300 transform hover:scale-110 border border-[#F2E1C5]/30"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={nextModalSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-[#F2E1C5]/20 backdrop-blur-md text-[#F2E1C5] p-4 rounded-full hover:bg-[#F2E1C5]/30 transition-all duration-300 transform hover:scale-110 border border-[#F2E1C5]/30"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 h-full">
              {/* Image Section */}
              <div className="relative h-96 md:h-full">
                <img
                  src={marbleProducts[modalSlide].image}
                  alt={marbleProducts[modalSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="bg-[#F2E1C5] text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    {marbleProducts[modalSlide].origin}
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-[#F2E1C5] mb-4">
                  {marbleProducts[modalSlide].title}
                </h2>

                <div className="flex gap-6 text-gray-300 mb-6">
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Texture:</span> {marbleProducts[modalSlide].texture}
                  </div>
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Finish:</span> {marbleProducts[modalSlide].finish}
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {marbleProducts[modalSlide].description}
                </p>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Applications:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {marbleProducts[modalSlide].applications.map((app, idx) => (
                        <span key={idx} className="bg-[#F2E1C5]/10 text-[#F2E1C5] px-3 py-1 rounded-full text-sm border border-[#F2E1C5]/20">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-[#F2E1C5]">Available Size:</span>
                    <span className="text-gray-300 ml-2">{marbleProducts[modalSlide].size}</span>
                  </div>
                </div>

                <button className="mt-8 bg-gradient-to-r from-[#F2E1C5] to-[#f5e9d5] text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#f5e9d5] hover:to-[#F2E1C5] transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs">
                  Request Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .keen-slider {
          -webkit-overflow-scrolling: touch;
        }
        .keen-slider::-webkit-scrollbar {
          display: none;
        }
        .keen-slider__slide {
          min-width: 0;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  )
}