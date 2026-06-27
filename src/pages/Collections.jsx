// src/pages/Collections.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../Components/shared/Navbar";
import SpotCard from "../Components/Ui/SpotCard/SpotCard";
import Footer from "../Components/Ui/Footer/Footer";
import { MOCK_SUGGESTIONS } from "../constants/mockData";
import { Plus, ArrowRight, Edit, Trash2, FolderHeart, Sparkles } from "lucide-react";
import { useAuth } from "../Components/auth/AuthContext";
import CreateCollectionModal from "../Components/Ui/CreateCollectionModal";

export default function Collections() {
  const { savedSpotIds, collections, deleteCollection, spots } = useAuth();
  const [selectedCollectionId, setSelectedCollectionId] = useState("general");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [collectionToEdit, setCollectionToEdit] = useState(null);

  // Filter spots based on bookmark list
  const savedSpots = spots.filter((spot) => savedSpotIds.includes(spot.id));

  // Dynamically build General collection object
  const generalCollection = {
    id: "general",
    name: "General",
    description: "Your master list of all saved places.",
    spotIds: savedSpotIds,
    isGeneral: true,
    coverImage: savedSpots.length > 0 ? savedSpots[0].image : "",
    color: "linear-gradient(135deg, #ac3509 0%, #ff7043 100%)",
  };

  // Combine collections list
  const allCollections = [generalCollection, ...collections];

  // Fallback selected collection if deleted
  const selectedCol = allCollections.find((col) => col.id === selectedCollectionId) || generalCollection;

  // Filter spots belonging to the selected collection
  const displayedSpots = spots.filter((spot) => selectedCol.spotIds.includes(spot.id));

  const handleEditCollection = (col) => {
    setCollectionToEdit(col);
    setIsCreateOpen(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this collection? Saved spots inside it will not be deleted.")) {
      deleteCollection(id);
      setSelectedCollectionId("general");
    }
  };

  const handlePrefillCreate = (sug) => {
    setCollectionToEdit({
      name: sug.title,
      coverImage: sug.image,
      isPrefill: true,
    });
    setIsCreateOpen(true);
  };

  const handleCreateSuccess = (newCol) => {
    if (newCol) {
      setSelectedCollectionId(newCol.id);
    }
    setCollectionToEdit(null);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col justify-between">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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
              onClick={() => { setCollectionToEdit(null); setIsCreateOpen(true); }}
              className="bg-primary hover:bg-primary-container text-on-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg shadow-primary/10 scale-up active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <Plus size={16} />
              Create New Collection
            </button>
          </div>

          {/* Section 1: Collections top horizontal carousel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-label-md text-on-surface-variant/75 font-bold uppercase tracking-wider">
                Select a Collection
              </h2>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 no-scrollbar scroll-smooth">
              {allCollections.map((col) => {
                const isSelected = selectedCollectionId === col.id;
                const count = col.spotIds.length;
                const hasCover = col.coverImage;

                return (
                  <div
                    key={col.id}
                    onClick={() => setSelectedCollectionId(col.id)}
                    className={`w-48 sm:w-56 shrink-0 aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden relative cursor-pointer group shadow-sm transition-all duration-300 ${
                      isSelected
                        ? "ring-4 ring-primary ring-offset-2 ring-offset-background scale-[1.02] shadow-md border-transparent"
                        : "border border-outline-variant/15 hover:border-outline-variant/35 hover:scale-[1.01]"
                    }`}
                  >
                    {/* Cover Background */}
                    {hasCover ? (
                      <img
                        src={col.coverImage}
                        alt={col.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105"
                        style={{ background: col.color || "linear-gradient(135deg, #006a63 0%, #8bf1e6 100%)" }}
                      />
                    )}

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                    {/* Card Content info */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end text-white select-none">
                      <span className="font-display-lg text-sm sm:text-base font-bold leading-tight drop-shadow-sm group-hover:underline">
                        {col.name}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full mt-1.5 inline-block self-start border border-white/10 shadow-sm">
                        {count} {count === 1 ? "spot" : "spots"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: Selected Collection Title & Saved Spots Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant/15 pb-4">
              <div>
                <h2 className="font-display-lg text-headline-lg font-bold text-on-surface flex items-baseline gap-2">
                  {selectedCol.name}
                  <span className="text-xs sm:text-sm font-normal text-on-surface-variant/70 bg-surface-container px-2.5 py-0.5 rounded-full font-sans">
                    {displayedSpots.length} {displayedSpots.length === 1 ? "saved spot" : "saved spots"}
                  </span>
                </h2>
                {selectedCol.description && (
                  <p className="text-sm text-on-surface-variant/80 mt-1 max-w-2xl">
                    {selectedCol.description}
                  </p>
                )}
              </div>

              {/* Actions for custom collections */}
              {!selectedCol.isGeneral && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditCollection(selectedCol)}
                    className="text-xs font-bold text-on-surface-variant hover:text-primary flex items-center gap-1.5 bg-surface-container-high px-4 py-2 rounded-full cursor-pointer transition-colors shadow-sm"
                  >
                    <Edit size={13} className="stroke-[2.5px]" />
                    Edit Info
                  </button>
                  <button
                    onClick={() => handleDeleteClick(selectedCol.id)}
                    className="text-xs font-bold text-error hover:bg-error/5 flex items-center gap-1.5 bg-surface-container-high px-4 py-2 rounded-full cursor-pointer transition-colors shadow-sm"
                  >
                    <Trash2 size={13} className="stroke-[2.5px]" />
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Saved Spots Grid / Empty States */}
            {displayedSpots.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-on-surface-variant/80 space-y-4 bg-surface-container-low/30 border border-dashed border-outline-variant/25 rounded-3xl animate-fade-in">
                {selectedCol.isGeneral ? (
                  <>
                    <FolderHeart className="text-primary w-12 h-12 stroke-[1.5px]" />
                    <div className="text-center space-y-1">
                      <h3 className="font-bold text-lg text-on-surface">No saved spots yet</h3>
                      <p className="text-sm max-w-sm">Start bookmarking your favorite places across the site to build your collection.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="text-5xl">📂</span>
                    <div className="text-center space-y-1 border-0">
                      <h3 className="font-bold text-lg text-on-surface">This collection is empty</h3>
                      <p className="text-sm max-w-sm">Add some spots to this collection by clicking the folder icon on any saved spot card.</p>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {displayedSpots.map((spot) => (
                  <SpotCard key={spot.id} spot={spot} />
                ))}
              </div>
            )}
          </div>

          {/* Suggested for You Section */}
          <div className="space-y-6 pt-10 border-t border-outline-variant/25">
            <h2 className="font-display-lg text-headline-lg text-on-surface font-bold flex items-center gap-2">
              <Sparkles className="text-primary w-5 h-5" />
              Suggested for You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {MOCK_SUGGESTIONS.map((sug) => (
                <div
                  key={sug.id}
                  onClick={() => handlePrefillCreate(sug)}
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
                    <button className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:underline cursor-pointer">
                      Create <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Creation/Editing Modal Container */}
      <CreateCollectionModal
        isOpen={isCreateOpen}
        onClose={() => { setIsCreateOpen(false); setCollectionToEdit(null); }}
        collectionToEdit={collectionToEdit}
        onSuccess={handleCreateSuccess}
      />

      <Footer />
    </div>
  );
}
