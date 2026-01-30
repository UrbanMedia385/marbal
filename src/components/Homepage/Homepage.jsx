import React, { Suspense, lazy } from "react";
import WorldMap from "./WorldMap";
import SisterCompany from "../Helper/SisterCompany"; // Import SisterCompany

// Lazy load components
const Hero = lazy(() => import("./Hero"));
const About = lazy(() => import("./About"));
const CategorySelector = lazy(() => import("./CategorySelector"));
const NaturalStoneTilesInfo = lazy(() => import("./NaturalStoneTilesInfo"));
const FeaturedCollections = lazy(() => import("./OurCraft"));
const Productcollection = lazy(() => import("./Productcollection"));
const Application = lazy(() => import("./Application"));
const CuttingProcessSection = lazy(() => import("./CuttingProcessSection"));
const Testimonials = lazy(() => import("./Testimonials"));

const Homepage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>Loading About...</div>}>
        <About />
      </Suspense>

      <Suspense fallback={<div>Loading Categories...</div>}>
        <CategorySelector />
      </Suspense>

      {/* Uncomment if needed */}
      {/* <Suspense fallback={<div>Loading Featured Collections...</div>}>
        <FeaturedCollections />
      </Suspense> */}

      {/* <Suspense fallback={<div>Loading Products...</div>}>
        <Productcollection />
      </Suspense> */}

      {/* <Suspense fallback={<div>Loading Application...</div>}>
        <Application />
      </Suspense> */}

      <Suspense fallback={<div>Loading Cutting Process...</div>}>
        <CuttingProcessSection />
      </Suspense>

      <Suspense fallback={<div>Loading Cutting Process...</div>}>
        <NaturalStoneTilesInfo />
      </Suspense>

      {/* Add SisterCompany slider here */}
      <SisterCompany />

      {/* <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense> */}

      <Suspense fallback={<div>Loading Map...</div>}>
        <WorldMap/>
      </Suspense>
    </>
  );
};

export default Homepage;
