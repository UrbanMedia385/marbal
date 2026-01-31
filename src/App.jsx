// App.js (Main Component)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Helper/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Helper/Footer"
import ContactUs from "./components/Contact/ContactUs";
import About from "./components/About/Aboutpage";
import ServicesShowcase from "./components/Services/ServicesPage";
import ProjectsGallery from "./components/Gallery/GalleryPage";
import TechnologyShowcase from "./components/StateOfArt/StateOfArtPage";
import NotFoundPage from "./components/Errors/NotFoundPage";
import ScrollToTop from "./components/Helper/NavigateScrolletop";
import OurStones from "./components/OurStones/OurStones";
import Marble from "./components/OurStones/Marble";
import Granite from "./components/OurStones/Granite";
import Sandstone from "./components/OurStones/Sandstone";
import BlogsPage from "./components/Blogs/BlogsPage";
import Exporters from "./components/Exporters/Exporters";
import UAE from "./components/Exporters/UAE";
import Qatar from "./components/Exporters/Qatar";
import SaudiArabia from "./components/Exporters/SaudiArabia";
import Europe from "./components/Exporters/Europe";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";
import RequestQuote from "./components/Quote/RequestQuote";

// FIX: Correct Import Path
import TilesProduction from "./components/Homepage/TilesProduction"; 

function App() {
  return (
    <Router>
      <div className=" ">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesShowcase />} />
          <Route path="/gallery" element={<ProjectsGallery />} />
          <Route path="/state-of-the-art" element={<TechnologyShowcase />} />
          <Route path="/OurStones" element={<OurStones />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          <Route path="/marble" element={<Marble />} />
          <Route path="/granite" element={<Granite />} />
          <Route path="/sandstone" element={<Sandstone />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/exporters" element={<Exporters />} />
          <Route path="/exporters/uae" element={<UAE />} />
          <Route path="/exporters/qatar" element={<Qatar />} />
          <Route path="/exporters/saudi-arabia" element={<SaudiArabia />} />
          <Route path="/exporters/europe" element={<Europe />} />
          
          {/* Route path is correct (small letters) */}
          <Route path="/tiles-production" element={<TilesProduction />} />

          {/* Catch-All 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;