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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10px',
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
        
        {/* Slider container with proper mobile alignment */}
        <div className="relative">
          <Slider {...settings}>
            {companyNames.map((name, index) => (
              <div key={index} className="flex justify-center items-center px-2 sm:px-4">
                <div className="w-full max-w-xs mx-auto">
                  <p
                    className="text-base sm:text-lg font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-center mx-auto"
                    style={{
                      backgroundColor: "#0E5543",
                      color: "#F2E1C5",
                      fontFamily: "Montserrat",
                      fontWeight: "200",
                      letterSpacing: "0.1em",
                      minHeight: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SisterCompany;
