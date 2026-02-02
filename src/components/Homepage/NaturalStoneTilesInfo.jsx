import React from "react";
import rGreen from "../../assets/marbles/Afyon-White-8_(1)[1].jpg";
import SPIDERGreen from "../../assets/marbles/istockphoto-1134258949-612x612.jpg";

const NaturalStoneTilesInfo = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0E5543] via-[#0E5543] to-[#0E5543] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Discover the Finest Natural Stone Tiles
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed">
            At Rishabh Green Marbles, we craft the rarest green marble into
            precision-engineered tiles that redefine elegance. Our tiles are
            designed for modern spaces, offering unmatched quality, strength,
            and timeless beauty.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed">
            From luxurious residences to iconic commercial spaces, our tiles
            bring natural charm and enduring performance to every project.
          </p>
          <a href="tiles-production" className="px-8 py-3 bg-white text-green-900 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
            About More
          </a>
        </div>

        {/* Right Images */}
        <div className="relative">
          <div className="relative w-full h-96 sm:h-[500px]">
            <img
              src={rGreen}
              alt="Agaria White Marble"
              className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-xl shadow-lg transform -translate-y-4 translate-x-4"
            />
            <img
              src={SPIDERGreen}
              alt="Spider Green Marble"
              className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-xl shadow-lg transform translate-x-4 -translate-y-4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalStoneTilesInfo;
