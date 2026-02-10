import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SisterCompany = () => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
          arrows: false,
        },
      },
    ],
  };

  const companyNames = ["ODA Industries", "Jewan Jyoti", "Rishabh Minerals"];

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
        
        {/* Slider container */}
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
      </div>
      
      <style jsx>{`
        .sister-company-slider .slick-slide {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          padding: 0 8px;
        }
        
        .sister-company-slider .slick-slide > div {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
        }
        
        .sister-slide {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .sister-slide-content {
          width: 100%;
          max-width: 280px;
          display: flex;
          justify-content: center;
        }
        
        .sister-company-btn {
          background-color: #0E5543;
          color: #F2E1C5;
          font-family: "Montserrat";
          font-weight: 200;
          letter-spacing: 0.1em;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 8px;
          text-align: center;
          white-space: nowrap;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          margin: 0 auto;
        }
        
        .sister-company-btn:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 1023px) {
          .sister-company-btn {
            font-size: 13px;
            padding: 10px 20px;
            min-height: 45px;
          }
        }
        
        @media (max-width: 767px) {
          .sister-company-slider .slick-slide {
            padding: 0 5px;
          }
          
          .sister-company-slider .slick-center .sister-company-btn {
            transform: scale(1.08);
            box-shadow: 0 4px 12px rgba(14, 85, 67, 0.3);
          }
          
          .sister-company-btn {
            font-size: 12px;
            padding: 8px 16px;
            min-height: 40px;
            max-width: 200px;
          }
        }
        
        @media (max-width: 480px) {
          .sister-company-btn {
            font-size: 11px;
            padding: 6px 14px;
            min-height: 36px;
            max-width: 180px;
          }
        }
        
        .sister-company-slider .slick-dots {
          bottom: -35px !important;
        }
        
        .sister-company-slider .slick-dots li button:before {
          color: #0E5543 !important;
          font-size: 8px !important;
        }
        
        .sister-company-slider .slick-dots li.slick-active button:before {
          color: #0E5543 !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default SisterCompany;
