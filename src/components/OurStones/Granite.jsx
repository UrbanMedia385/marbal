import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { allProducts } from '../../data/products'

const graniteProducts = allProducts.filter(p => p.category === "Granite");

export default function Granite() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  const filteredProducts = graniteProducts.filter(product => 
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
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Durable Granite Collection
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Explore our extensive range of premium granite stones, engineered for strength and designed for modern applications.
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search granite products..."
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
                className="group bg-white  shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 border border-gray-100"
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
        
        {/* About Granite Content */}
        <div className="mt-20 mb-16">
        
           <div className="text-center mb-16 mt-10">
             <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0E5543] mb-4"
             style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Emphasise Your Walls and Floors with Shining Granite
            </h2>
            <div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-6 w-20" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
             Granite, a silica-rich magma, is one of the ingenious rocks that dominates the Indian and overseas market. Its popularity now rises above its common use in kitchen countertops. 
            </p>
          </div>
        </div>

          

          {/* Granite Making Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Granite Making Process and <span className="text-[#0E5543]">Its Source</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Natural Formation</h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Granite's magma undergoes heating and cooling changes beneath the Earth's surface. It is not individually present inside the earth but rather it comes from the heated continental rock. As the heated magma cools down and solidifies, it becomes an irresistible granite stone.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Our Sourcing Process</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Rishabh Green Marble, a reputable granite exporter in India, uses heavy-machines, drilling, and wire-cutting techniques to source granite. We purchase large and raw blocks of granite from Rajasthan quarries. Once the granite reaches the factory, our manufacturers cut them into slabs or tiles for high-quality finishing.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#0E5543]/5 rounded-xl">
              <p className="text-gray-600 text-sm leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                Depending on the international buyer's standards, we polish the granite's surface, ensure similar thickness, and customise the stone. Our quality control checks leave no room for defects or uneven granite density.
              </p>
            </div>
          </div>

          {/* Unique Appearance */}
          <div className="bg-gradient-to-br from-[#0E5543]/5 to-[#1A7A62]/5 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Unique <span className="text-[#0E5543]">Appearance</span>
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Granite is known for exuding luxury and textured appearance. Interestingly, its rich colour originates from the minerals present inside it.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Quartz</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  This mineral provides a crystal-clear and shiny grey appearance to the surface.
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Alkaline Feldspar</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  With abundance of this mineral, granite gets its overall red, pink, or white colour.
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Mica</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  These minerals are responsible for leaving shiny black or silver flakes throughout the granite's exterior surface.
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <h4 className="font-semibold text-lg text-gray-900 mb-2"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Amphibole</h4>
                <p className="text-gray-600 text-sm"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  These dark minerals provide black or dark green dots to the green stone.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm"
                 style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                In addition to granite, we supply high-end marble which makes us the best marble exporter in India as well.
              </p>
            </div>
          </div>

          {/* Major Installation Areas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Major <span className="text-[#0E5543]">Installation Areas</span>
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Granite is highly popular for its hardness, durability, and low maintenance attributes. You can consider granite installation for interior, exterior, and structural applications.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm"
                        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Indoor</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Indoor Uses</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  For indoors, granite is a popular stone for kitchen countertops, bathroom sinks, shower walls, flooring, or fireplace surrounds. Favourably, this natural stone resists heat, stain marks, and daily weather impact.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm"
                        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Outdoor</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Outdoor Uses</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Granite outside your premises is unarguably a strong choice for surfacing facades or paving the lawn. It is also suitable for cladding the entire house or commercial building for its weather resistance and durability factor.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xs"
                        style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Structure</span>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-gray-900"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Structural Use</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Granite is also a premium stone for staircases, monuments, or sculptures for its long-lasting shine. Also, its ability to remain unaffected from heavy foot traffic makes it a highly usable stone across overseas.
                </p>
              </div>
            </div>
          </div>

          {/* Bestselling Granites */}
          <div className="bg-gradient-to-br from-[#1A7A62]/5 to-[#0E5543]/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              Bestselling <span className="text-[#0E5543]">Granites Available</span> with Us
            </h3>
            <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
              When choosing the best granite exporter in India, Rishabh Green Marble offers premium granite stones that looks and feels premium once installed. Here are our few bestsellers that caters to the needs and demands of every space.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Lakha Red Granite</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  This fiery red granite delivers an uncompromising look and long-lasting durability for high-end interior and exterior flooring and wall surfaces.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>P White Granite</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  Being an economical choice, P white Granite has clean, bright, and unique appearance. As a leading P White granite exporter in India, you can trust us for customised white granite too.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Black Galaxy Granite</h4>
                <p className="text-gray-600 text-sm leading-relaxed"
                   style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>
                  This kind of granite stone carries a luxurious, modern, yet dramatic appearance. With the Black Galaxy Granite, this type of stone mimics galaxy with white dots throughout its surface.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0E5543] to-[#1A7A62] rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Need Durable Stone Solutions?</h2>
            <p className="text-lg mb-6 opacity-90"
               style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}>Get expert advice on granite selection for your construction projects</p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-[#0E5543] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
              style={{ fontFamily: 'Arial, sans-serif', fontWeight: '300', letterSpacing: '0.1em' }}
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}