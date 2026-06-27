// src/pages/Collections.jsx
import React from "react";
import Navbar from "../Components/shared/Navbar";
import SpotCard from "../Components/Ui/SpotCard/SpotCard";
import Footer from "../Components/Ui/Footer/Footer";
import { MOCK_SUGGESTIONS } from "../constants/mockData";
import { MOCK_SPOTS } from "../data/mockData";
import { Plus, ArrowRight } from "lucide-react";
import { useAuth } from "../Components/auth/AuthContext";

export default function Collections() {
  const { savedSpotIds } = useAuth();

  const savedSpots = MOCK_SPOTS.filter((spot) => savedSpotIds.includes(spot.id));

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-12">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-outline-variant/20 pb-8">
            <div>
              <h1 className="font-display-lg text-headline-lg md:text-display-lg text-on-surface font-extrabold">
                My Collections
              </h1>
              <p className="text-on-surface-variant/80 text-body-lg mt-2">
                Your curated world of city gems, organized by vibe and occasion.
              </p>
            </div>
            <button
              onClick={() => alert("Creating a new collection...")}
              className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/10 scale-up active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <Plus size={16} />
              Create New Collection
            </button>
          </div>

          {/* Saved Spots Grid */}
          {savedSpots.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-on-surface-variant/80 space-y-4">
              <span className="text-5xl">❤️</span>
              <div className="text-center">
                <h3 className="font-bold text-lg text-on-surface">No saved spots yet</h3>
                <p className="text-sm mt-1">Start bookmarking your favorite places to build your collection.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedSpots.map((spot) => (
                <SpotCard key={spot.id} spot={spot} />
              ))}
            </div>
          )}

          {/* Suggested for You Section */}
          <div className="space-y-6 pt-6 border-t border-outline-variant/25">
            <h2 className="font-display-lg text-headline-lg text-on-surface font-bold">
              Suggested for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {MOCK_SUGGESTIONS.map((sug) => (
                <div
                  key={sug.id}
                  className="bg-surface-container-low border border-outline-variant/15 rounded-2xl p-5 flex items-center gap-4 hover:bg-surface-container transition-colors cursor-pointer group"
                >
                  <img
                    src={sug.image}
                    alt={sug.title}
                    className="w-14 h-14 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-primary block tracking-wider uppercase mb-1">
                      {sug.source}
                    </span>
                    <h3 className="font-bold text-on-surface text-base mb-1">
                      {sug.title}
                    </h3>
                    <button className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline">
                      Create <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
