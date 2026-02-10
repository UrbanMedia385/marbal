import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SisterCompany.css";

const SisterCompany = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const companyNames = ["ODA Industries", "Jewan Jyoti", "Rishabh Minerals"];
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % companyNames.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + companyNames.length) % companyNames.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Desktop: Use react-slick with responsive settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="bg-white text-gray-800 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Sister Companies
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse portfolio of companies working together to deliver excellence across multiple industries
          </p>
        </div>
        
        {isMobile ? (
          /* Mobile Carousel */
          <div className="mobile-sister-carousel">
            <div className="mobile-slide-container">
              <div 
                className="mobile-slide"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {companyNames.map((name, index) => (
                  <div key={index} className="mobile-slide-item">
                    <div className="sister-company-card">
                      <h3 className="company-name">{name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Controls */}
            <div className="mobile-carousel-controls">
              <button onClick={prevSlide} className="mobile-control-btn">
                ←
              </button>
              <div className="mobile-dots">
                {companyNames.map((_, index) => (
                  <span 
                    key={index} 
                    className={`mobile-dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="mobile-control-btn">
                →
              </button>
            </div>
          </div>
        ) : (
          /* Desktop Slider */
          <div className="sister-company-slider">
            <Slider {...settings}>
              {companyNames.map((name, index) => (
                <div key={index} className="sister-slide">
                  <div className="sister-company-card">
                    <h3 className="company-name">{name}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default SisterCompany;
