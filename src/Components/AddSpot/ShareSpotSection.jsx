import React from "react";
import SearchBar from "../shared/SearchBar";

export default function ShareSpotSection({
  searchValue,
  onSearchValueChange,
  onSearchSubmit,
  onManualAdd,
  onBack,
  loading = false,
}) {
  return (
    <section className="text-center max-w-4xl mx-auto px-6 py-12 md:py-16">

      

      {/* Heading */} <div className="space-y-5 mb-10">
        <h1 className="text-5xl font-bold text-on-surface">
          Share a New Spot </h1> 
        <p className="max-w-2xl mx-auto text-on-surface-variant leading-relaxed"> 
        Every great collection starts with a single discovery. Search for a place first. If you can't find it, you'll be able to add it manually. 
        </p> </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <SearchBar
          value={searchValue}
          onChange={onSearchValueChange}
          onSearch={onSearchSubmit}
          placeholder="Search for a place..."
          variant="default"
          large
        />
      </div>

      {/* Loading */}
      {loading && (
        <p className="mt-4 text-primary animate-pulse">
          Searching...
        </p>
      )}

      {/* Manual */}
      <p className="mt-8 text-sm text-on-surface-variant">
        Can't find your spot?{" "}
        <button
          onClick={onManualAdd}
          className="text-primary font-semibold hover:underline cursor-pointer"
        >
          Add it manually
        </button>
      </p>

    </section>
  );
}