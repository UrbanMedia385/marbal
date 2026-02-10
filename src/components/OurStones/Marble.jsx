import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate, useSearchParams } from 'react-router-dom'

// Import marble images
import agariaWhite from '../../assets/marbles/Agaria-White-Marble[1].jpg'
import aravaliGreen from '../../assets/marbles/Aravali-Green[1].jpg'
import bidasarBrown from '../../assets/marbles/bidasar brown marble.jpg'
import bidasarGreen from '../../assets/marbles/bidasar-green-500x500[1].jpg'
import cloudGrey from '../../assets/marbles/Cloud-Grey-Marble[1].jpg'
import fantasyBrown from '../../assets/marbles/fantasy brown marble.jpg'
import iconicBlack from '../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg'
import iconicGold from '../../assets/marbles/istockphoto-1134258949-612x612.jpg'
import indianBlack from '../../assets/marbles/indian-black-marble[1].jpg'
import katniBeige from '../../assets/marbles/katni-beige-marble-500x500[1].jpg'
import merryGold from '../../assets/marbles/merry-gold-500x500[1].jpg'
import morchanaGold from '../../assets/marbles/morchana gold marble.jpg'
import mysticGreen from '../../assets/marbles/Mystic-Green-Marble[1].jpg'
import pinkAraveli from '../../assets/marbles/pink araveli.jpg'
import pinkMarble from '../../assets/marbles/pink-marble[1].jpg'
import rossoLavante from '../../assets/marbles/rosso-lavante-italian-marble[1].jpg'
import afyonWhite from '../../assets/marbles/Afyon-White-8_(1)[1].jpg'
import indianMarbleSupplier from '../../assets/marbles/Indian-Marble-Supplier[1].jpg'
import millenium from '../../assets/marbles/millenium1-1[1].jpg'
import whiteAravaliOnyx from '../../assets/marbles/white-aravali-onyx-376129184-b5kzi[1].jpg'
import marbleImage from '../../assets/marbles/3-41-768x768[1].jpg'
import forestGreen from '../../assets/marbles/Forestgeen.png'
import spiderGreen from '../../assets/marbles/SPIDERGreen.png'
import rGreenMarble from '../../assets/marbles/Rgreen.png'
import surataGreen from '../../assets/marbles/SuttreGeern.png'
const marbleProducts = [
  { id: 1, name: "Agaria White", image: agariaWhite },
  { id: 2, name: "Aravali Green", image: aravaliGreen },
  { id: 3, name: "Bidasar Brown", image: bidasarBrown },
  { id: 4, name: "Bidasar Green", image: bidasarGreen },
  { id: 5, name: "Cloud Grey", image: cloudGrey },
  { id: 6, name: "Fantasy Brown", image: fantasyBrown },
  { id: 7, name: "Iconic Black", image: iconicBlack },
  { id: 8, name: "Iconic Gold", image: iconicGold },
  { id: 9, name: "Indian Black", image: indianBlack },
  { id: 10, name: "Katni Beige", image: katniBeige },
  { id: 11, name: "Merry Gold", image: merryGold },
  { id: 12, name: "Morchana Gold", image: morchanaGold },
  { id: 13, name: "Mystic Green", image: mysticGreen },
  { id: 14, name: "Pink Araveli", image: pinkAraveli },
  { id: 15, name: "Pink Marble", image: pinkMarble },
  { id: 16, name: "Rosso Lavante", image: rossoLavante },
  { id: 17, name: "Surata Green", image: surataGreen, description:"" },
  { id: 18, name: "Forest Green", image: forestGreen },
  { id: 19, name: "Spider Green", image: spiderGreen },
  { id: 20, name: "R Green-Marble", image: rGreenMarble },
  { id: 21, name: "Afyon White", image: afyonWhite },
  { id: 22, name: "Indian Marble Supplier", image: indianMarbleSupplier },
  { id: 23, name: "Millenium", image: millenium },
  { id: 24, name: "White Aravali Onyx", image: whiteAravaliOnyx },
  { id: 25, name: "Premium Marble", image: marbleImage }
];

export default function Marble() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  
  const filteredProducts = marbleProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  useEffect(() => {
    const nameParam = searchParams.get('name')
    if (nameParam) {
      setSearchTerm(nameParam)
    }
  }, [searchParams])
  
  useEffect(() => {
    setCurrentSlide(0)
  }, [filteredProducts.length])
  
  const maxSlides = filteredProducts.length
  
  const handleSearch = (value) => {
    setSearchTerm(value)
    if (value) {
      setSearchParams({ name: value })
    } else {
      setSearchParams({})
    }
  }

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + maxSlides) % maxSlides)
  }

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0E5543]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A7A62]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 mt-10">
             <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-4"
             style={{ fontFamily: "Arial, sans-serif", fontWeight: "300", letterSpacing: "0.1em" }}>
              Exquisite Marble Collection
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Discover our handpicked selection of premium marble stones, each piece carefully sourced for exceptional beauty and durability.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search marble products..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E5543] focus:border-transparent"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "300",
                letterSpacing: "0.1em",
              }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg" style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300' }}>
                No products found
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0E5543] shadow-lg"
                       style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                      Premium
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-[#0E5543] px-4 py-2 rounded-full text-sm font-semibold hover:bg-white transition-colors"
                       style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 text-center group-hover:text-[#0E5543] transition-colors duration-300"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    {product.name}
                  </h3>
                  <div className="mt-3 flex justify-center">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full"></div>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
        
        {/* About Rishabh Green Marbles */}
        <div className="mt-20 mb-16">
          {/* <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best <span className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] bg-clip-text text-transparent">Marble Exporters</span> in India
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
              <div className="w-2 h-2 bg-[#0E5543] rounded-full mx-3"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-[#0E5543] to-transparent w-24"></div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
             c
            </p>
          </div> */}

 <div className="text-center mb-16 mt-10">
             <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-[#0E5543] mb-4"
             style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}>
              Best Marble Exporters in India
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p className="text-gray-600 max-w-2xl mx-auto"
             style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}>
               Rishabh Green Marbles features among the leading marble exporters in India, celebrated by clients across Saudi Arabia, Dubai, Qatar, and the best European countries. We are not just precision.
            </p>
          </div>
        </div>
          

          {/* Marble Production Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Stages of <span className="text-[#0E5543]">Marble Production</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Extraction & Quarrying</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  The process starts with extraction and quarrying. Quarrying experts assess deposits, cut marble blocks using diamond wire saws, and transport them using heavy machinery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Processing & Treatment</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Blocks are sent to the factory where they're cut into slabs, treated with resin for cracks, and precisely sized using CNC technology.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Finishing & Quality</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Slabs are polished, honed, or textured for desired appearance. Each piece is examined for quality, sealed, and prepared for shipping.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Collection Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0E5543]/5 to-[#1A7A62]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Our Premium <span className="text-[#0E5543]">Marble Collection</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2"
                      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Green Marble</h4>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Our flagship product with rich forest colors, fine veining, and lustrous finish. Perfect for flooring, wall cladding, countertops, and luxurious interiors.
                  </p>
                </div>
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2"
                      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>White Marble</h4>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Clean textures and radiant finishes including Morwad White and Indian Statuario, popular for modern and elegant aesthetics.
                  </p>
                </div>
                <div className="border-l-4 border-[#0E5543] pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2"
                      style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Rainforest Marble</h4>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Natural tones and tree-like patterns bring an airy, rustic, and organic feel to both interiors and exteriors.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A7A62]/5 to-[#0E5543]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                What Makes Us <span className="text-[#0E5543]">Different?</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Own quarries and production units ensuring complete quality control
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Traditional craftsmanship combined with modern design technology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Finest texture, natural strength, and lasting luster in the industry
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Trusted by architects and designers worldwide
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 text-sm"
                     style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                    Exotic marbles and granites with premium Indian craftsmanship
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Collection Types */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Complete <span className="text-[#0E5543]">Stone Collection</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Brown & Beige Marble</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Warm brown and beige marbles enhance any modern or traditional environment with natural beauty and balance.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Imported & Exotic Stones</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Selected range of exotic marbles and granites offering premium stone variety from overseas sources.
                </p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-[#0E5543]/5 transition-colors">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Granite Collection</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Not only marbles, but Rishabh Green is the place where you can buy premium granite as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Ready to Transform Your Space?</h2>
            <p className="text-lg mb-6 opacity-90"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Get expert consultation and custom quotes for your marble project</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}