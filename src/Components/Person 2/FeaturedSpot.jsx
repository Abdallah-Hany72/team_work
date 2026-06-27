import React from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import TagBadge from "../shared/TagBadge";
import SmartMatchingBanner from "./SmartMatchingBanner";
import { MOCK_SPOTS } from "../../data/mockData";

const FeaturedSpot = () => {
  const navigate = useNavigate();

  // Highest rated spot
  const mainSpot = [...MOCK_SPOTS].sort(
    (a, b) => b.rating - a.rating
  )[0];

  // Two different spots for side cards
  const sideSpots = MOCK_SPOTS
    .filter((spot) => spot.id !== mainSpot.id)
    .slice(0, 2);

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
      <SectionHeader
        title="The Weekend Edit"
        subtitle="Hand-picked from our highest-rated spots."
      />

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[600px]">
        
        {/* Featured Spot */}
        <div
          onClick={() => navigate(`/place/${mainSpot.id}`)}
          className="md:col-span-2 md:row-span-2 group relative rounded-xl overflow-hidden sunlight-shadow h-[400px] md:h-auto cursor-pointer"
        >
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={mainSpot.image}
            alt={mainSpot.name}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex gap-2 mb-4 flex-wrap">
              {(mainSpot.tags || []).slice(0, 2).map((tag) => (
                <TagBadge key={tag} variant="primary">
                  {tag}
                </TagBadge>
              ))}
            </div>

            <h4 className="text-white text-3xl font-bold mb-2">
              {mainSpot.name}
            </h4>

            <p className="text-white/80 max-w-md mb-3">
              {mainSpot.description}
            </p>

            <div className="flex items-center gap-3 text-white/90 text-sm">
              <span>⭐ {mainSpot.rating}</span>
              <span>{mainSpot.location}</span>
            </div>
          </div>
        </div>

        {/* Smart Matching Banner */}
        <SmartMatchingBanner />

        {/* Small Cards */}
        {sideSpots.map((spot) => (
          <div
            key={spot.id}
            onClick={() => navigate(`/place/${spot.id}`)}
            className="group relative rounded-xl overflow-hidden sunlight-shadow h-[200px] md:h-auto cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={spot.image}
              alt={spot.name}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {(spot.tags || []).slice(0, 1).map((tag) => (
                  <TagBadge key={tag} variant="secondary">
                    {tag}
                  </TagBadge>
                ))}
              </div>

              <h4 className="text-white font-semibold text-lg">
                {spot.name}
              </h4>

              <p className="text-white/80 text-sm">
                ⭐ {spot.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSpot;