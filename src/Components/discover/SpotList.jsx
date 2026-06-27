// src/Components/discover/SpotList.jsx
import SpotCard from "../Ui/SpotCard/SpotCard";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";
import { RotateCw } from "lucide-react";
import React from "react";

function SpotCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/15 h-56 p-5 flex flex-col justify-between animate-pulse select-none">
      <div className="flex justify-between items-start">
        <div className="w-16 h-6 bg-surface-container-high rounded-full" />
        <div className="w-8 h-8 rounded-full bg-surface-container-high" />
      </div>
      <div className="space-y-2.5">
        <div className="w-3/4 h-5 bg-surface-container-highest rounded-lg" />
        <div className="flex justify-between items-center pt-1">
          <div className="w-1/3 h-3 bg-surface-container-high rounded" />
          <div className="w-1/4 h-3.5 bg-surface-container-high rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function SpotList({ spots = [], onLoadMore, hasMore = false, isLoading = false }) {
  if (spots.length === 0) {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SpotCardSkeleton />
          <SpotCardSkeleton />
          <SpotCardSkeleton />
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant space-y-3">
        <span className="text-4xl">🔍</span>
        <p className="text-sm">No spots found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* First row — featured + second card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Featured — takes 2 cols and full height */}
        <div className="sm:col-span-2">
          <SpotCard spot={spots[0]} variant="featured" className="h-full" />
        </div>

        {/* Second card — stretches to match featured height */}
        {spots[1] && (
          <div className="h-full">
            <SpotCard spot={spots[1]} className="h-full" />
          </div>
        )}
      </div>

      {/* Rest — normal grid */}
      {(spots.length > 2 || isLoading) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {spots.slice(2).map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
          {isLoading && (
            <>
              <SpotCardSkeleton />
              <SpotCardSkeleton />
              <SpotCardSkeleton />
            </>
          )}
        </div>
      )}

      {/* Load more controls */}
      <div className="flex flex-col items-center pt-6 pb-2">
        {hasMore && (
          <PrimaryButton 
            onClick={onLoadMore} 
            disabled={isLoading}
            variant="outline" 
            className="px-8 py-3 rounded-full hover:bg-surface-container-low transition-all cursor-pointer inline-flex items-center gap-2 font-bold animate-fade-in"
          >
            {isLoading ? (
              <>
                <RotateCw size={14} className="animate-spin text-primary" />
                Loading places...
              </>
            ) : (
              "Discover more spots"
            )}
          </PrimaryButton>
        )}
        
        {!hasMore && spots.length > 0 && (
          <div className="w-full text-center text-on-surface-variant/60 font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-2xl border border-dashed border-outline-variant/20 max-w-sm mx-auto select-none bg-surface-container-low/25 animate-fade-in">
            ✨ You've discovered all available spots.
          </div>
        )}
      </div>
    </div>
  );
}