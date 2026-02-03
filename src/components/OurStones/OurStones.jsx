import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Import sample images (keep your existing imports)
import mainBanner  from "../../assets/marbles/stone-page.webp";
import agariaWhite from "../../assets/marbles/Agaria-White-Marble[1].jpg";
import aravaliGreen from "../../assets/marbles/Aravali-Green[1].jpg";
import bidasarBrown from "../../assets/marbles/bidasar brown marble.jpg";
import bidasarGreen from "../../assets/marbles/bidasar-green-500x500[1].jpg";
import cloudGrey from "../../assets/marbles/Cloud-Grey-Marble[1].jpg";
import fantasyBrown from "../../assets/marbles/fantasy brown marble.jpg";
import iconicBlack from "../../assets/marbles/Iconic-black-marble-1200x1200-1[1].jpg";
import iconicGold from "../../assets/marbles/istockphoto-1134258949-612x612.jpg";
import indianBlack from "../../assets/marbles/indian-black-marble[1].jpg";
import katniBeige from "../../assets/marbles/katni-beige-marble-500x500[1].jpg";
import merryGold from "../../assets/Sandstone/merigold.jpg";
import morchanaGold from "../../assets/marbles/morchana gold marble.jpg";
import mysticGreen from "../../assets/marbles/Mystic-Green-Marble[1].jpg";
import pinkAraveli from "../../assets/marbles/pink araveli.jpg";
import pinkMarble from "../../assets/marbles/pink-marble[1].jpg";
import rossoLavante from "../../assets/marbles/rosso-lavante-italian-marble[1].jpg";
import afyonWhite from "../../assets/marbles/Afyon-White-8_(1)[1].jpg";
import indianMarbleSupplier from "../../assets/marbles/Indian-Marble-Supplier[1].jpg";
import millenium from "../../assets/marbles/millenium1-1[1].jpg";
import whiteAravaliOnyx from "../../assets/marbles/white-aravali-onyx-376129184-b5kzi[1].jpg";
import marbleImage from "../../assets/marbles/3-41-768x768[1].jpg";

// Import all granite images (keep your existing imports)
import absoluteBlack from "../../assets/Granites/Absolute Black  Granite Countertops and Tile.jpeg";
import alaskaGold from "../../assets/Granites/Alaska Gold Granite Supplier in India.jpeg";
import alaskaWhite from "../../assets/Granites/Alaska White Granite.jpeg";
import alpineWhite from "../../assets/Granites/Alpine White.jpeg";
import blackGalaxy from "../../assets/Granites/Black Galaxy Granite From Ongole, India.jpeg";
import blackPearl from "../../assets/Granites/Black Pearl Granite.jpeg";
import blackBeauty from "../../assets/Granites/Black-beauty-granite.webp";
import brunoRed from "../../assets/Granites/bruno-red-granite-1537608397-4328307.jpg";
import champagneGold from "../../assets/Granites/champagne-gold-granite-tile--926486-0-B.jpg";
import chimaBlue from "../../assets/Granites/chima-blue-granite-2012014226-0ul1gqog.avif";
import chimaPink from "../../assets/Granites/chima-pink-granite-1566713706-5053745.jpeg";
import crystalYellow from "../../assets/Granites/Crystal yellow granite.jpeg";
import desertBrown from "../../assets/Granites/Desert Brown Granite - Kitchen Countertop Ideas.jpeg";
import dessertGreen from "../../assets/Granites/Dessert Green Granite.jpeg";
import ambaWhite from "../../assets/Granites/granite_Amba-White_Ym0ggR4uINTH96XsG9DW.jpg";
import ikonBrown from "../../assets/Granites/Ikon Brown Grantine.jpeg";
import impalaBlack from "../../assets/Granites/Impala Black.jpeg";
import imperialRed from "../../assets/Granites/IMPERIAL RED GRANITE.jpeg";
import ivoryFantasy from "../../assets/Granites/IVORY FANTASY GRANITE - Ivory _ 20MM _ Polished _ Per Sq Mt.jpeg";
import jeerawalWhite from "../../assets/Granites/jeerawal-white-granite-1000x1000.jpg";
import jhansiRed from "../../assets/Granites/JHANSI RED GRANITE.jpeg";
import kashmirWhite from "../../assets/Granites/Kashmir White Granite _ Marella Granite & Marble.jpeg";
import koliwadaBlue from "../../assets/Granites/Koliwada Blue Granite.jpeg";
import lakhaRed from "../../assets/Granites/LAKHA RED GRANITE -.jpeg";
import magicWhite from "../../assets/Granites/magic-white-granite-slabs-tiles-p2787-1B.jpg";
import marigold from "../../assets/Granites/marigold-granite-1512372173-3494734.jpg";
import merryWood from "../../assets/Granites/merry-wood-granite.jpg";
import newImperialGold from "../../assets/Granites/New Imperial Gold          Stones Picture -         Other Country         Granite         Image.jpeg";
import pWhite from "../../assets/Granites/P-white-granite.webp";
import rajasthanBlack from "../../assets/Granites/images.jpeg";
import rosyPink from "../../assets/Granites/rosy-pink-granite-p370113-1b.jpg";
import royalCream from "../../assets/Granites/Royal Cream Granite.jpeg";
import royalGreen from "../../assets/Granites/royal-green-granite-1510815057-3455614.jpg";
import sapphireBlue from "../../assets/Granites/Sapphire Blue.jpeg";
import sunriseGold from "../../assets/Granites/Sunrise Gold granite.jpeg";
import tanBrown from "../../assets/Granites/Tanbrown granite.jpeg";
import balaFlower from "../../assets/Granites/bala-flower-555x415.jpg";
import copperSilk from "../../assets/Granites/Best Copper Silk Granite (Pictures & Costs) _ Material ID_ 1132 _ Marble_com.jpeg";
import ivoryBrown from "../../assets/Granites/Best Ivory Brown Granite (Pictures & Costs) _ Material ID_ 556 _ Marble_com.jpeg";

// Import all sandstone images (keep your existing imports)
import beigeSandstone from "../../assets/Sandstone/Beige Sandstone.jpg";
import chocolateSandstone from "../../assets/Sandstone/chocolate-sandstone-natural-finish-calibrated-tiles.jpg";
import greySandstone from "../../assets/Sandstone/Grey Sandstone.jpg";
import gwaliorWhiteMint from "../../assets/Sandstone/big15.jpg";
import jaisalmerYellow from "../../assets/Sandstone/jaisalmer yellow sandstone.jpg";
import jodhpurPink from "../../assets/Sandstone/JODHPUR PINK Snadstone.jpg";
import kotaBlue from "../../assets/Sandstone/kota blue.jpg";
import merryGoldSandstone from "../../assets/Sandstone/merigold.jpg";
import rainbowSandstone from "../../assets/Sandstone/rainbow-1.jpg";
import redSandstone from "../../assets/Sandstone/Red Sandstone.jpg";
import teakwoodSandstone from "../../assets/Sandstone/Teakwood-Sandstone.jpg";
import FlautCollection from "../Helper/FlautCollection";
import ModernCarousel from "../Helper/ModernCarousel";


const categories = [
  {
    name: "Marble",
    products: [
      {
        id: 1,
        name: "Agaria White",
        image: agariaWhite,
        category: "Marble",
        description:
          "Premium white marble with elegant natural patterns and superior quality finish.",
      },
      {
        id: 2,
        name: "Aravali Green",
        image: aravaliGreen,
        category: "Marble",
        description:
          "Beautiful green marble with natural patterns and rich coloring.",
      },
      {
        id: 3,
        name: "Bidasar Brown",
        image: bidasarBrown,
        category: "Marble",
        description: "Rich brown marble with warm tones and natural beauty.",
      },
      {
        id: 4,
        name: "Bidasar Green",
        image: bidasarGreen,
        category: "Marble",
        description:
          "Elegant green marble with distinctive patterns and smooth finish.",
      },
      {
        id: 5,
        name: "Cloud Grey",
        image: cloudGrey,
        category: "Marble",
        description:
          "Sophisticated grey marble with cloud-like patterns and modern appeal.",
      },
      {
        id: 6,
        name: "Fantasy Brown",
        image: fantasyBrown,
        category: "Marble",
        description:
          "Rich brown marble with unique patterns and warm golden undertones.",
      },
      {
        id: 7,
        name: "Iconic Black",
        image: iconicBlack,
        category: "Marble",
        description:
          "Luxurious black marble with distinctive veining, perfect for modern interiors.",
      },
      {
        id: 8,
        name: "Iconic Gold",
        image: iconicGold,
        category: "Marble",
        description:
          "Premium gold marble with luxurious appearance and elegant finish.",
      },
      {
        id: 9,
        name: "Indian Black",
        image: indianBlack,
        category: "Marble",
        description:
          "Classic black marble with consistent color and premium quality.",
      },
      {
        id: 10,
        name: "Katni Beige",
        image: katniBeige,
        category: "Marble",
        description:
          "Neutral beige marble perfect for versatile design applications.",
      },
      {
        id: 11,
        name: "Merry Gold",
        image: merryGold,
        category: "Marble",
        description:
          "Warm gold marble with natural patterns and rich coloring.",
      },
      {
        id: 12,
        name: "Morchana Gold",
        image: morchanaGold,
        category: "Marble",
        description:
          "Premium gold marble with distinctive patterns and luxury appeal.",
      },
      {
        id: 13,
        name: "Mystic Green",
        image: mysticGreen,
        category: "Marble",
        description:
          "Stunning green marble with natural mystical patterns and smooth texture.",
      },
      {
        id: 14,
        name: "Pink Araveli",
        image: pinkAraveli,
        category: "Marble",
        description:
          "Elegant pink marble with soft hues and natural variations.",
      },
      {
        id: 15,
        name: "Pink Marble",
        image: pinkMarble,
        category: "Marble",
        description:
          "Beautiful pink marble with delicate coloring and smooth finish.",
      },
      {
        id: 16,
        name: "Rosso Lavante",
        image: rossoLavante,
        category: "Marble",
        description:
          "Italian-style marble with rich red tones and elegant patterns.",
      },
      { id: 17, name: "Afyon White", image: afyonWhite },
      { id: 18, name: "Indian Marble Supplier", image: indianMarbleSupplier },
      { id: 19, name: "Millenium", image: millenium },
      { id: 20, name: "White Aravali Onyx", image: whiteAravaliOnyx },
      { id: 21, name: "Premium Marble", image: marbleImage },
    ],
  },
  {
    name: "Granite",
    products: [
      { id: 21, name: "Black Galaxy", image: blackGalaxy },
      { id: 38, name: "Kashmir White", image: kashmirWhite },
      { id: 52, name: "Tan Brown", image: tanBrown },
      { id: 34, name: "Imperial Red", image: imperialRed },
      {
        id: 17,
        name: "Absolute Black",
        image: absoluteBlack,
        category: "Granite",
        description:
          "Pure black granite with consistent color and premium durability.",
      },
      {
        id: 18,
        name: "Alaska Gold",
        image: alaskaGold,
        category: "Granite",
        description:
          "Golden granite with natural patterns and warm undertones.",
      },
      {
        id: 19,
        name: "Alaska White",
        image: alaskaWhite,
        category: "Granite",
        description:
          "Clean white granite with subtle patterns and modern appeal.",
      },
      {
        id: 20,
        name: "Alpine White",
        image: alpineWhite,
        category: "Granite",
        description:
          "Pure white granite with minimal patterns and elegant finish.",
      },
      {
        id: 21,
        name: "Black Galaxy",
        image: blackGalaxy,
        category: "Granite",
        description:
          "Premium black granite with golden speckles resembling a starry night sky.",
      },
      {
        id: 22,
        name: "Black Pearl",
        image: blackPearl,
        category: "Granite",
        description:
          "Lustrous black granite with pearl-like finish and premium quality.",
      },
      {
        id: 23,
        name: "Black Beauty",
        image: blackBeauty,
        category: "Granite",
        description:
          "Stunning black granite with natural beauty and consistent patterns.",
      },
      {
        id: 24,
        name: "Bruno Red",
        image: brunoRed,
        category: "Granite",
        description: "Rich red granite with warm tones and natural variations.",
      },
      {
        id: 25,
        name: "Champagne Gold",
        image: champagneGold,
        category: "Granite",
        description:
          "Elegant champagne-colored granite with golden highlights.",
      },
      {
        id: 26,
        name: "Chima Blue",
        image: chimaBlue,
        category: "Granite",
        description:
          "Unique blue granite with natural patterns and cool tones.",
      },
      {
        id: 27,
        name: "Chima Pink",
        image: chimaPink,
        category: "Granite",
        description:
          "Beautiful pink granite with soft coloring and natural appeal.",
      },
      {
        id: 28,
        name: "Crystal Yellow",
        image: crystalYellow,
        category: "Granite",
        description:
          "Bright yellow granite with crystal-like appearance and vibrant color.",
      },
      {
        id: 29,
        name: "Desert Brown",
        image: desertBrown,
        category: "Granite",
        description:
          "Warm brown granite with desert-inspired tones and natural patterns.",
      },
      {
        id: 30,
        name: "Dessert Green",
        image: dessertGreen,
        category: "Granite",
        description:
          "Natural green granite with rich coloring and distinctive patterns.",
      },
      {
        id: 31,
        name: "Amba White",
        image: ambaWhite,
        category: "Granite",
        description:
          "Premium white granite with subtle patterns and clean appearance.",
      },
      {
        id: 32,
        name: "Ikon Brown",
        image: ikonBrown,
        category: "Granite",
        description:
          "Rich brown granite with consistent patterns and warm appeal.",
      },
      {
        id: 33,
        name: "Impala Black",
        image: impalaBlack,
        category: "Granite",
        description:
          "Deep black granite with natural strength and elegant finish.",
      },
      {
        id: 34,
        name: "Imperial Red",
        image: imperialRed,
        category: "Granite",
        description:
          "Vibrant red granite with bold patterns and exceptional strength.",
      },
      {
        id: 35,
        name: "Ivory Fantasy",
        image: ivoryFantasy,
        category: "Granite",
        description:
          "Creamy ivory granite with fantasy patterns and luxury appeal.",
      },
      {
        id: 36,
        name: "Jeerawal White",
        image: jeerawalWhite,
        category: "Granite",
        description:
          "Pure white granite with minimal veining and clean finish.",
      },
      {
        id: 37,
        name: "Jhansi Red",
        image: jhansiRed,
        category: "Granite",
        description:
          "Traditional red granite with rich coloring and natural durability.",
      },
      {
        id: 38,
        name: "Kashmir White",
        image: kashmirWhite,
        category: "Granite",
        description:
          "Pure white granite with subtle patterns, ideal for contemporary designs.",
      },
      {
        id: 39,
        name: "Koliwada Blue",
        image: koliwadaBlue,
        category: "Granite",
        description:
          "Distinctive blue granite with unique patterns and cool tones.",
      },
      {
        id: 40,
        name: "Lakha Red",
        image: lakhaRed,
        category: "Granite",
        description:
          "Deep red granite with consistent coloring and premium quality.",
      },
      {
        id: 41,
        name: "Magic White",
        image: magicWhite,
        category: "Granite",
        description:
          "Enchanting white granite with magical patterns and elegant appeal.",
      },
      {
        id: 42,
        name: "Marigold",
        image: marigold,
        category: "Granite",
        description:
          "Golden granite with marigold-inspired coloring and natural beauty.",
      },
      {
        id: 43,
        name: "Merry Wood",
        image: merryWood,
        category: "Granite",
        description:
          "Wood-like granite with natural grain patterns and warm tones.",
      },
      {
        id: 44,
        name: "New Imperial Gold",
        image: newImperialGold,
        category: "Granite",
        description:
          "Premium gold granite with imperial quality and luxury finish.",
      },
      {
        id: 45,
        name: "P White",
        image: pWhite,
        category: "Granite",
        description:
          "Pure white granite with consistent color and premium quality.",
      },
      {
        id: 46,
        name: "Rajasthan Black",
        image: rajasthanBlack,
        category: "Granite",
        description:
          "Traditional black granite from Rajasthan with authentic heritage.",
      },
      {
        id: 47,
        name: "Rosy Pink",
        image: rosyPink,
        category: "Granite",
        description:
          "Soft pink granite with rosy tones and natural variations.",
      },
      {
        id: 48,
        name: "Royal Cream",
        image: royalCream,
        category: "Granite",
        description:
          "Luxurious cream granite with royal quality and elegant finish.",
      },
      {
        id: 49,
        name: "Royal Green",
        image: royalGreen,
        category: "Granite",
        description:
          "Majestic green granite with royal appeal and natural beauty.",
      },
      {
        id: 50,
        name: "Sapphire Blue",
        image: sapphireBlue,
        category: "Granite",
        description:
          "Precious blue granite with sapphire-like appearance and premium quality.",
      },
      {
        id: 51,
        name: "Sunrise Gold",
        image: sunriseGold,
        category: "Granite",
        description:
          "Golden granite with sunrise-inspired coloring and warm appeal.",
      },
      {
        id: 52,
        name: "Tan Brown",
        image: tanBrown,
        category: "Granite",
        description:
          "Rich brown granite with natural variations and excellent durability.",
      },
      { id: 53, name: "Bala Flower", image: balaFlower },
      { id: 54, name: "Copper Silk", image: copperSilk },
      { id: 55, name: "Ivory Brown", image: ivoryBrown },
    ],
  },
  {
    name: "Sandstone",
    products: [
      {
        id: 53,
        name: "Beige Sandstone",
        image: beigeSandstone,
        category: "Sandstone",
        description:
          "Neutral beige sandstone perfect for versatile architectural applications.",
      },
      {
        id: 54,
        name: "Chocolate Sandstone",
        image: chocolateSandstone,
        category: "Sandstone",
        description:
          "Rich chocolate brown sandstone with smooth finish and earthy appeal.",
      },
      {
        id: 55,
        name: "Grey Sandstone",
        image: greySandstone,
        category: "Sandstone",
        description:
          "Classic grey sandstone with natural texture and modern appeal.",
      },
      {
        id: 56,
        name: "Gwalior White Mint",
        image: gwaliorWhiteMint,
        category: "Sandstone",
        description:
          "Premium white sandstone with mint undertones and elegant finish.",
      },
      {
        id: 57,
        name: "Jaisalmer Yellow",
        image: jaisalmerYellow,
        category: "Sandstone",
        description:
          "Traditional yellow sandstone from Jaisalmer with authentic Rajasthani heritage.",
      },
      {
        id: 58,
        name: "Jodhpur Pink",
        image: jodhpurPink,
        category: "Sandstone",
        description:
          "Classic pink sandstone from Jodhpur with royal heritage and timeless beauty.",
      },
      {
        id: 59,
        name: "Kota Blue",
        image: kotaBlue,
        category: "Sandstone",
        description:
          "Distinctive blue sandstone with natural patterns and cool tones.",
      },
      {
        id: 60,
        name: "Merry Gold Sandstone",
        image: merryGoldSandstone,
        category: "Sandstone",
        description: "Golden sandstone with warm tones and natural beauty.",
      },
      {
        id: 61,
        name: "Rainbow Sandstone",
        image: rainbowSandstone,
        category: "Sandstone",
        description:
          "Multicolored sandstone with beautiful rainbow patterns and natural texture.",
      },
      {
        id: 62,
        name: "Red Sandstone",
        image: redSandstone,
        category: "Sandstone",
        description:
          "Traditional red sandstone with natural texture and warm appeal.",
      },
      {
        id: 63,
        name: "Teakwood Sandstone",
        image: teakwoodSandstone,
        category: "Sandstone",
        description:
          "Natural teakwood sandstone with wood-like grain patterns and warm tones.",
      },
    ],
  },
];

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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="w-full mt-16 md:mt-2 lg:mt-2">   {/* ← Yeh top margin perfect hai */}
    <div className="relative w-full h-96 overflow-hidden">
      <img
        src={mainBanner}
        alt="Our Premium Stones Collection"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
      
      {/* Dark overlay (recommended for premium look) */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Optional Text on Banner (uncomment agar chahiye) */}
      {/*
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          Our Premium Stones Collection
        </h1>
        <p className="text-lg md:text-2xl tracking-widest uppercase opacity-90">
          Luxury Redefined in Every Slab
        </p>
      </div>
      */}
    </div>
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