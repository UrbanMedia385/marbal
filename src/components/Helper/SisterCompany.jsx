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

  // Desktop: Use react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="bg-[#F2E1C5] text-[#0E5543] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-6"
            style={{ fontFamily: "Montserrat", fontWeight: "200", letterSpacing: "0.1em" }}
          >
            Sister Company
          </h2>
        </div>
        
        {isMobile ? (
          /* Mobile Carousel */
          <div className="mobile-sister-carousel">
            <div className="mobile-slide-container">
              <div 
                className="mobile-slide active"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {companyNames.map((name, index) => (
                  <div key={index} className="mobile-slide-item">
                    <p className="sister-company-btn">
                      {name}
                    </p>
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
                  <div className="sister-slide-content">
                    <p className="sister-company-btn">
                      {name}
                    </p>
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
