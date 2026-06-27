import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import TagBadge from '../shared/TagBadge';
import { useAuth } from "../auth/AuthContext";

const TrendingVibes = ({ onVibeSelect = () => {} }) => {
  const { spots } = useAuth();
  const currentSpots = spots || [];
  const vibeCounts = {};

  currentSpots.forEach((spot) => {
    spot.tags?.forEach((tag) => {
      vibeCounts[tag] = (vibeCounts[tag] || 0) + 1;
    });
  });

  const usedSpotIds = new Set();

  const vibes = Object.entries(vibeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tag, count]) => {
      const spot =
        currentSpots.find(
          (s) =>
            s.tags?.includes(tag) &&
            !usedSpotIds.has(s.id)
        ) ||
        currentSpots.find((s) => s.tags?.includes(tag));

    if (spot) {
      usedSpotIds.add(spot.id);
    }

    return {
      id: tag.toLowerCase().replace(/\s+/g, "-"),
      tag,
      title: tag,
      subtitle: `${count} places`,
      image: spot?.image,
    };
  });
  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg -mt-20 relative z-20">
      <SectionHeader
        category="Curation"
        title="Trending Vibes"
        actionText="Explore all"
        actionLink="/collections"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {vibes.map((vibe) => (
          <div
            key={vibe.id}
            onClick={() => onVibeSelect(vibe.tag)}
            className="group relative aspect-[4/5] rounded-xl overflow-hidden sunlight-shadow cursor-pointer"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={vibe.image}
              alt={vibe.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            <div className="absolute top-4 left-4">
              <TagBadge variant="secondary">
                {vibe.tag}
              </TagBadge>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-headline-md text-headline-md mb-1">
                {vibe.title}
              </h3>
              <p className="text-white/80 font-body-md text-label-md">
                {vibe.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingVibes;
