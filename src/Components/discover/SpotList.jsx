// src/Components/discover/SpotList.jsx
import SpotCard from "../Ui/SpotCard/SpotCard";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";
import { RotateCw } from "lucide-react";

export default function SpotList({ spots = [] }) {
  if (spots.length === 0) {
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
      <div className="grid grid-cols-3 gap-4">
        {/* Featured — takes 2 cols and full height */}
        <div className="col-span-2">
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
      {spots.length > 2 && (
        <div className="grid grid-cols-3 gap-4">
          {spots.slice(2).map((spot) => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </div>
      )}

      {/* Load more */}
      <div className="flex justify-center pt-2">
        <PrimaryButton variant="outline" iconPosition="right">
          Discover more spots
        </PrimaryButton>
      </div>
    </div>
  );
}