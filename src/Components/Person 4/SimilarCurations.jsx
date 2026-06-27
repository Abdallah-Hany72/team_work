// src/Components/Person 4/SimilarCurations.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_SPOTS } from "../../data/mockData";

export default function SimilarCurations({ currentSpot }) {
  const navigate = useNavigate();
  if (!currentSpot) return null;

  const similarSpots = MOCK_SPOTS.filter((spot) => {
    if (spot.id === currentSpot.id) return false;

    const sameCategory =
      spot.category && currentSpot.category
        ? spot.category === currentSpot.category
        : false;

    const sharedTags =
      spot.tags?.some((tag) => currentSpot.tags?.includes(tag)) ?? false;

    return sameCategory || sharedTags;
  }).slice(0, 3);

  if (similarSpots.length === 0) return null;

  return (
    <div className="bg-surface-container-low rounded-xl p-5 shadow-sm border border-outline-variant/15">
      <h3 className="text-[11px] font-bold text-on-surface-variant/75 uppercase tracking-wider mb-4">
        Similar Curations
      </h3>

      <div className="space-y-4">
        {similarSpots.map((spot) => (
          <div
            key={spot.id}
            onClick={() => navigate(`/place/${spot.id}`)}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src={spot.image || spot.images?.[0]}
              alt={spot.name}
              className="w-12 h-12 rounded-lg object-cover shadow-sm transition-transform group-hover:scale-[1.03]"
            />

            <div className="flex-1">
              <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors leading-tight">
                {spot.name}
              </h4>

              <span className="text-[11px] text-on-surface-variant/75">
                {spot.category} • ⭐ {spot.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}