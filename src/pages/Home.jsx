// src/pages/Home.jsx
import React, { useState } from "react";
import Navbar from "../Components/shared/Navbar";
import HeroSection from "../Components/Person 2/HeroSection";
import TrendingVibes from "../Components/Person 2/TrendingVibes";
import FeaturedSpot from "../Components/Person 2/FeaturedSpot";
import Footer from "../Components/Ui/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (val) => {
    const query = val || searchVal;
    if (query.trim()) {
      navigate(`/discover?q=${encodeURIComponent(query)}`);
    }
  };

  


  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />
        
        {/* Landing Page Content */}
        <main className="pb-12">
          <HeroSection
            searchValue={searchVal}
            onSearchValueChange={setSearchVal}
            onSearchSubmit={handleSearchSubmit}
          />
          
          <div className="relative -mt-20">
            <TrendingVibes onVibeSelect={(vibe) => navigate(`/discover?vibe=${encodeURIComponent(vibe)}`)} />
          </div>

          <FeaturedSpot />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
