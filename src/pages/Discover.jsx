// src/pages/Discover.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Components/shared/Navbar";
import FiltersSidebar from "../Components/discover/FiltersSideBar";
import SortDropdown from "../Components/discover/SortDropdown";
import SpotList from "../Components/discover/SpotList";
import Footer from "../Components/Ui/Footer/Footer";
import { useAuth } from "../Components/auth/AuthContext";

export default function Discover() {
  const { spots } = useAuth();
  const [searchParams] = useSearchParams();
  const searchQ = searchParams.get("q") || "";
  const vibeQ = searchParams.get("vibe") || "";

  // Filter State
  const [filters, setFilters] = useState({
    moods: vibeQ ? [vibeQ] : [],
    cuisine: "All Cuisines",
    distance: 15
  });
  // Get all unique moods from database
  const allMoods = [
  ...new Set(
    spots.flatMap((spot) => spot.tags || [])
  ),
];

  // Sort State
  const [sortBy, setSortBy] = useState("Rating");

  // Results State
  const [displayedSpots, setDisplayedSpots] = useState(spots);

  // Determine if any filters are active
  const hasActiveSearch =
    searchQ ||
    filters.moods.length > 0 ||
    filters.cuisine !== "All Cuisines";


  // Sync state if URL query changes
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      moods: vibeQ ? [vibeQ] : prev.moods
    }));
  }, [vibeQ]);

  // Apply filters function
  const applyFilters = () => {
    let result = [...spots];

    // Filter by Search Query
    if (searchQ) {
      const q = searchQ.toLowerCase();
      result = result.filter(
        (spot) =>
          spot.name.toLowerCase().includes(q) ||
          spot.location.toLowerCase().includes(q) ||
          spot.category.toLowerCase().includes(q) ||
          spot.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Filter by Moods
    if (filters.moods.length > 0) {
      result = result.filter((spot) =>
        filters.moods.some((mood) =>
          spot.tags.some((tag) => tag.toLowerCase() === mood.toLowerCase())
        )
      );
    }

    // Filter by Cuisine
    if (filters.cuisine !== "All Cuisines") {
  result = result.filter(
    (spot) => spot.cuisine === filters.cuisine
  );
}

    // Sorting
    if (sortBy === "Rating") {
      result.sort((a, b) => b.rating - a.rating);
    }  result.sort((a, b) => {
  const aReviews = Array.isArray(a.reviews) ? a.reviews.length : 0;
  const bReviews = Array.isArray(b.reviews) ? b.reviews.length : 0;

  return bReviews - aReviews;
});

    setDisplayedSpots(result);
  };

  // Pagination states
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Run on mount, search param change, or sort change
  useEffect(() => {
    applyFilters();
    setVisibleCount(6); // Reset pagination when search or filters change
  }, [searchQ, sortBy, filters, spots]);

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 1200); // 1.2s delay for visual feedback of loading skeletons
  };

  const spotsToRender = displayedSpots.slice(0, visibleCount);
  const hasMore = displayedSpots.length > visibleCount;

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Main Discover Layout */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Column (Sidebar Filters) */}
            <FiltersSidebar
              filters={filters}
              moods={allMoods}
              onChange={setFilters}
              onApply={applyFilters}
            />

            {/* Right Column (Results) */}
            <div className="flex-1 w-full space-y-6">
              {/* Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-outline-variant/20 pb-4">
                {hasActiveSearch ? (
                  <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
                    {searchQ
                      ? `Found ${displayedSpots.length} "${searchQ}" spots`
                      : filters.moods.length > 0
                        ? `Found ${displayedSpots.length} "${filters.moods.join(", ")}" spots`
                        : `Found ${displayedSpots.length} spots`}
                  </h1>
                ) : (
                  <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
                    Discover New Spots
                  </h1>
                )}

                <SortDropdown value={sortBy} onChange={setSortBy} />
              </div>

              {/* Spot Grid */}
              <SpotList 
                spots={spotsToRender} 
                onLoadMore={handleLoadMore} 
                hasMore={hasMore} 
                isLoading={isLoadingMore}
              />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
