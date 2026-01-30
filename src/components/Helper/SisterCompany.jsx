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
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const companyNames = ["ODA Industries", "Jewan Jyoti", "Rishabh Minerals"];

  return (
    <section className="bg-[#F2E1C5] text-[#0E5543] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-2xl sm:text-3xl font-bold mb-6"
          style={{ fontFamily: "Montserrat", fontWeight: "200", letterSpacing: "0.1em" }}
        >
          Sister Company
        </h2>
        <Slider {...settings}>
          {companyNames.map((name, index) => (
            <div key={index} className="px-4">
              <p
                className="text-lg font-semibold px-4 py-2 rounded"
                style={{
                  backgroundColor: "#0E5543",
                  color: "#F2E1C5",
                  fontFamily: "Montserrat",
                  fontWeight: "200",
                  letterSpacing: "0.1em",
                }}
              >
                {name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SisterCompany;
