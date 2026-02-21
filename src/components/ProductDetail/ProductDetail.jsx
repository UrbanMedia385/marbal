import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiShare2,
  FiHeart,
  FiDownload,
} from "react-icons/fi";

// Import sample images (you can replace with actual product images)

import cloudGrey from "../../assets/marbles/Cloud-Grey-Marble[1].jpg";
import fantasyBrown from "../../assets/marbles/fantasy brown marble.jpg";
import iconicBlack from "../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg";
import mysticGreen from "../../assets/marbles/Mystic-Green-Marble[1].jpg";
import pinkMarble from "../../assets/marbles/pink-marble[1].jpg";
import { allProducts } from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // All products data

  // Get current product and related products
  const currentProduct =
    allProducts.find((p) => p.id === parseInt(id)) || allProducts[0];
  const relatedProducts = allProducts
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 3);

  // Reset states when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setActiveTab("overview");
    setIsZoomed(false);
  }, [id]);

  const getProductDescription = (name) => {
    const descriptions = {
      "Agaria White":
        "Agaria White Marble is a premium natural stone known for its pristine white background with subtle grey veining. This elegant marble adds sophistication to any space with its timeless beauty and durability.",
      "Aravali Green":
        "Aravali Green Marble features rich forest green tones with distinctive veining patterns. This luxurious stone brings natural elegance and a calming presence to any interior space.",
      "Bidasar Brown":
        "Bidasar Brown Marble showcases warm brown hues with intricate natural patterns. Perfect for creating cozy yet sophisticated environments with its earthy appeal.",
      "Cloud Grey":
        "Cloud Grey Marble displays subtle grey tones with cloud-like veining patterns. This versatile stone offers modern elegance suitable for contemporary design schemes.",
      "Mystic Green":
        "Mystic Green Marble presents deep emerald tones with mystical veining. This striking stone creates dramatic focal points while maintaining natural beauty.",
      "Pink Marble":
        "Pink Marble features delicate rose hues with gentle veining patterns. This unique stone adds warmth and feminine elegance to luxury interiors.",
      "Surata Green":
        "It is quarried in India; this marble can be used to add an elegant and refreshing vibe to both residential as well as commercial areas. If you aim to create a calm, timeless and sophisticated look, then go for it from the best Surata Green Marble manufacturers in India. So whether you want to use it for modern designs or classic interiors, Surata Green Marble works well with wooden textures, neutral shades, or metallic accents.",
        "ForestGreen":
        "If you are an admirer of rich colour palette and organic veining, then Forest Green Marble can make every slab unique. It is because of the harmonious blend of green tones with subtle natural patterns that creates a sophisticated look, enriching all types of trending interiors. After the finishing stage, the veining surface reflects light beautifully, highlighting the depth and luxury of any space. From being visually appealing to highly durable, the Forest Green Marble Manufacturers in India offer the best deal for both residential and commercial environments. Considering Indian Homes, this marble features natural cooking properties to make it a suitable pick in warmer climates always. This striking natural stone captures the timeless beauty that never goes out of the trend. ",
        "R Green-Marble":
        "R Green Marble has been a mainstay of luxury and elegance in architectural as well as interior design work. It features a very beautiful and unique web of veins to bring the timeless appeal to both classic and contemporary spaces. This kind of marble is carefully quarried and processed. Also, it is admired for its refined look and unbeatable durability, making R Green Marble from manufacturers in India the best choice for discerning homeowners, architects, and interior designers. With its natural charm, durability, and versatile applications, R Green Marble can be the best deal for those seeking a premium stone that combines functionality with timeless beauty. It brings a touch of nature indoors while elevating architectural and interior designs with understated elegance. What truly sets R Green Marble apart is its natural character. Every slab is distinct, displaying subtle variations in pattern and tone that lend depth and individuality to each installation. Incorporating this green marble into any space creates an atmosphere of sophistication, tranquillity, and exclusivity."
      };

    return (
      descriptions[name] ||
      "Premium natural stone with exceptional beauty and durability."
    );
  };

  // ✅ FIXED FUNCTION
  const getProductnameDescription = (name) => {
    const namedescriptions = {
      "Agaria White":
        "Agaria White Marble is a premium natural stone known for its pristine white background with subtle grey veining.",
      "Aravali Green":
        "Aravali Green Marble features rich forest green tones with distinctive veining patterns.",
      "Bidasar Brown":
        "Bidasar Brown Marble showcases warm brown hues with intricate natural patterns.",
      "Cloud Grey":
        "Cloud Grey Marble displays subtle grey tones with cloud-like veining patterns.",
      "Mystic Green":
        "Mystic Green Marble presents deep emerald tones with mystical veining.",
      "Pink Marble":
        "Pink Marble features delicate rose hues with gentle veining patterns.",
      "Surata Green":
        "There’s something really special about the Surata Green Marble that instantly turns nature indoors with freshness and serenity. Selecting this popular marble due to its green tones and distinctive white and darker green veining can transform any space.",
    "ForestGreen":
        "If you are an admirer of rich colour palette and organic veining, then Forest Green Marble can make every slab unique. It is because of the harmonious blend of green tones with subtle natural patterns that creates a sophisticated look, enhancing all types of trending interiors. ",
      "R Green-Marble":
      "R Green Marble has been a mainstay of luxury and elegance in architectural as well as interior design work. It features a very beautiful and unique web of veins to bring the timeless appeal to both classic and contemporary spaces."
      
      };

    return (
      namedescriptions[name] ||
      "Premium natural stone with exceptional beauty and durability."
    );
  };

   const getProductSpecs = (name) => {
    const baseSpecs = {
      "Stone Type": "Natural Marble",
      Origin: "Rajasthan, India",
      Finish: "Polished, Honed, Brushed",
      Thickness: "15mm, 18mm, 20mm, 30mm",
      Size: "Custom sizes available",
      Density: "2.7 g/cm³",
      "Water Absorption": "< 0.5%",
      "Compressive Strength": "120 MPa",
      "Flexural Strength": "15 MPa",
    };

    const colorMap = {
      "Agaria White": "White with Grey Veining",
      "Aravali Green": "Forest Green with Natural Patterns",
      "Bidasar Brown": "Rich Brown with Earth Tones",
      "Cloud Grey": "Subtle Grey with Cloud Patterns",
      "Mystic Green": "Deep Emerald with Mystical Veining",
      "Pink Marble": "Delicate Rose with Gentle Patterns",
      "Surata Green": "Green with White & Dark Veining",
    };

    return {
      ...baseSpecs,
      Color: colorMap[name] || "Premium Quality",
    };
  };

const product = {
    id: currentProduct.id,
    name: currentProduct.name,
    category: currentProduct.category,
    description: getProductDescription(currentProduct.name),
    namedescriptions: getProductnameDescription(currentProduct.name),
    images: [
      currentProduct.image,
      cloudGrey,
      fantasyBrown,
      iconicBlack,
      mysticGreen,
      pinkMarble,
    ],
    specifications: getProductSpecs(currentProduct.name),
    applications: [
      "Kitchen Countertops",
      "Bathroom Vanities",
      "Flooring",
      "Wall Cladding",
      "Fireplace Surrounds",
      "Staircases",
      "Decorative Elements",
    ],
    features: [
      "Premium Quality Natural Stone",
      "Excellent Durability",
      "Heat Resistant",
      "Stain Resistant with Proper Sealing",
      "Easy to Maintain",
      "Timeless Elegance",
      "Suitable for Interior & Exterior Use",
    ],
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-8">
          <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
            <button
              onClick={() => navigate("/")}
              className="hover:text-[#0E5543] whitespace-nowrap"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigate("/marble")}
              className="hover:text-[#0E5543] whitespace-nowrap"
            >
              Marble
            </button>
            <span>/</span>
            <span className="text-[#0E5543] font-medium truncate">
              {product.name}
            </span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-8 lg:mb-16">
          {/* Image Gallery */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image */}
            <div className="relative bg-white  shadow-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />

              {/* Zoom Button */}
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <FiZoomIn size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Thumbnail Images */}
          </div>

          {/* Product Information */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-[#0E5543] font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                {product.category}
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                {product.name}
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {product.namedescriptions}
              </p>
            </div>

            {/* Action Buttons */}

            {/* Quick Specs */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                Quick Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Stone Type</p>
                  <p className="font-medium text-sm sm:text-base">
                    {product.specifications["Stone Type"]}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Origin</p>
                  <p className="font-medium text-sm sm:text-base">
                    {product.specifications["Origin"]}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Color</p>
                  <p className="font-medium text-sm sm:text-base">
                    {product.specifications["Color"]}
                  </p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Finish</p>
                  <p className="font-medium text-sm sm:text-base">
                    {product.specifications["Finish"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button
                style={{ backgroundColor: "#0E5543" }}
                className="bg-[#0E5543] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                onClick={() => navigate("/request-quote")}
              >
                Request Quote
              </button>
              <button
                style={{ backgroundColor: "#0E5543" }}
                className="border border-white text-[white] px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white  hover:scale-105 transition-all duration-300"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg mb-8 sm:mb-16">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-2 sm:space-x-8 px-3 sm:px-8 overflow-x-auto">
              {["overview", "specifications", "applications", "features", "tiles"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-3 sm:py-4 px-2 sm:px-2 border-b-2 font-medium text-xs sm:text-sm capitalize transition-colors whitespace-nowrap ${
                      activeTab === tab
                        ? "border-[#0E5543] text-[#0E5543]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-8">
            {activeTab === "overview" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Product Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {product.description} This premium marble is quarried from the
                  finest deposits in Rajasthan, India, ensuring consistent
                  quality and exceptional beauty. The stone's natural
                  characteristics make it an ideal choice for both residential
                  and commercial applications.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Premium natural stone from India
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Excellent durability and longevity
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Suitable for various applications
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      Care Instructions
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Seal regularly for protection
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Clean with pH-neutral cleaners
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm sm:text-base">
                          Avoid acidic substances
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-gray-100"
                      >
                        <span className="font-medium text-gray-900 text-sm sm:text-base">
                          {key}
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-0">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Applications
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  This versatile marble is perfect for various interior and
                  exterior applications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {product.applications.map((application, index) => (
                    <div
                      key={index}
                      className="bg-gray-50  p-3 sm:p-4 text-center"
                    >
                      <span className="text-gray-700 font-medium text-sm sm:text-base">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0E5543]  mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm sm:text-base">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "tiles" && (
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Tiles
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Rishabh Green Marbles is dedicated to producing premium tiles that stand out for their flawless finish, clean edges, and smooth, seamless surfaces.
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Sizing Variations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-[#0E5543] mb-2">305 X 305</div>
                      <div className="text-sm text-gray-600">cm</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-[#0E5543] mb-2">610 X 610</div>
                      <div className="text-sm text-gray-600">cm</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-[#0E5543] mb-2">610 X 1220</div>
                      <div className="text-sm text-gray-600">cm</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-[#0E5543] mb-2">610 X 1525</div>
                      <div className="text-sm text-gray-600">cm</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      {/* <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 mb-8 sm:mb-16">
          <h2
            className="text-2xl text-center sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0E5543] leading-tight w-full mb-4 mt-10"
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "200" }}
          >
            <span className="relative">How Marble Looks in Real Life</span>
          </h2>

          {/* Decorative line */}
          {/*<div className="h-0.5 bg-gradient-to-r from-[#0E5543] via-[#F2E1C5] to-[#0E5543] mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 w-20" />
          <p className="text-gray-600 text-center mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base">
            See how our premium marble appears in actual installations and
            real-world applications
          </p>*/}

          {/* Desktop Grid */}
          {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            <div className="relative group overflow-hidden ">
              <img
                src="https://a.storyblok.com/f/150360/1100x825/5d46235b7a/whitesands_bath_01.jpg/m/"
                alt="Neolith Gallery "
                className="w-full h-64 lg:h-80 object-cover  hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xs tracking-[0.2em] uppercase font-light">
                  NEOLITH GALLERY
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://goodhomes.wwmindia.com/content/2023/jun/bathroom-thumbnail1686988646.jpg"
                alt="Kitchen & Bathroom"
                className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xs tracking-[0.2em] uppercase font-light">
                  KITCHEN & BATHROOM
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Skin"
                className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xs tracking-[0.2em] uppercase font-light">
                  SKIN
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src="https://cdn.mohd.it/cache/image/width=800,format=webp/media/catalog/product/s/k/skyline-marble-lavabo-glass-design-4.jpg"
                alt="Skyline"
                className="w-full h-64 lg:h-80 object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-4">
                <div className="text-white text-xs tracking-[0.2em] uppercase font-light">
                  SKYLINE
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-[#0E5543]/5 rounded-lg sm:rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Natural Beauty & Characteristics
              </h3>
              <div className="grid grid-cols-1   md:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center  justify-center md:justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                  <span>Unique veining patterns in every slab</span>
                </div>
                <div className="flex items-center justify-center md:justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                  <span>Natural color variations and depth</span>
                </div>
                <div className="flex items-center justify-center md:justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#0E5543] rounded-full flex-shrink-0"></div>
                 <span>Polished surface with mirror-like finish</span>
              {/*  </div>
              </div>
            </div>
          </div>
        </div>*/},

        {/* Related Products */}
        <div className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8">
            Related Products
          </h2>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="flex-shrink-0 w-64 bg-white  shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    navigate(`/product/${relatedProduct.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <p className="font-semibold text-gray-900 text-lx">
                      {relatedProduct.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {relatedProduct.category}
                    </p>
                    <button className="text-[#0E5543] text-xs font-medium mt-2 hover:underline">
                      View Details →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                className="bg-white  shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  navigate(`/product/${relatedProduct.id}`);
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="font-semibold text-gray-900 text-xl">
                    {relatedProduct.name}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {relatedProduct.category}
                  </p>
                  <button className="text-[#0E5543] text-sm font-medium mt-2 hover:underline">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Zoom Modal */}
        {isZoomed && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-full object-contain w-full"
              />
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors text-sm sm:text-base"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
