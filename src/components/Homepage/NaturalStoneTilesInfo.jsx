import React from "react";
import rGreen from "../../assets/marbles/Afyon-White-8_(1)[1].jpg"; // Corrected file name
import SPIDERGreen from "../../assets/marbles/istockphoto-1134258949-612x612.jpg";

const NaturalStoneTilesInfo = () => {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-[#0E5543] via-[#0E5543] to-[#0E5543] shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Best Natural Stone Tiles Manufacturers in India
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed">
            At Rishabh Green Marbles, we transform nature’s rarest green marble
            into precision-crafted 10 mm marble tiles designed for refined,
            modern spaces. Each tile is a balance of timeless elegance,
            structural strength, and flawless surface finish, created for
            projects where quality is not optional, it’s expected.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            From contemporary residences to iconic commercial spaces across the
            globe, our green marble tiles bring natural beauty, technical
            precision, and enduring performance to premium stone flooring.
          </p>
          <button className="px-6 py-3 bg-white text-green-900 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            About More
          </button>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-96 sm:h-[500px]">
            <img
              src={rGreen}
              alt="Agaria White Marble"
              className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
            />
            <img
              src={SPIDERGreen}
              alt="Spider Green Marble"
              className="absolute bottom-0 right-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg transform translate-x-1/4 -translate-y-1/4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NaturalStoneTilesInfo;
