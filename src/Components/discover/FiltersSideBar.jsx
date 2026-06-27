// src/Components/discover/FiltersSideBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoodFilter from "./MoodFilter";
import CuisineFilter from "./CuisineFilter";

export default function FiltersSidebar({ filters, moods, onChange, onApply }) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  return (
    <aside className="w-full md:w-60 flex-shrink-0 space-y-4 md:space-y-6">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        className="md:hidden w-full flex items-center justify-between bg-surface-container-low border border-outline-variant/35 px-5 py-3 rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container-high transition cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">tune</span>
          {isOpenMobile ? "Hide Filters" : "Show Filters"}
        </span>
        <span className="material-symbols-outlined text-[20px]">
          {isOpenMobile ? "expand_less" : "expand_more"}
        </span>
      </button>

      {/* Filter Content (toggled on mobile, always visible on md+) */}
      <div className={`${isOpenMobile ? "block animate-fade-in" : "hidden"} md:block space-y-6`}>
        <h2 className="hidden md:block text-lg font-bold text-on-surface">Filters</h2>

        {/* Mood Tag Filter */}
        <MoodFilter
          moods={moods}
          selected={filters.moods}
          onChange={(moods) => onChange({ ...filters, moods })}
        />

        {/* Cuisine Dropdown Filter */}
        <CuisineFilter
          value={filters.cuisine}
          onChange={(cuisine) => onChange({ ...filters, cuisine })}
        />

        {/* Community Banner */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 space-y-3">
          <p className="text-sm font-bold text-primary leading-tight">Unlock Curated Guides</p>
          <p className="text-[11px] text-on-surface-variant/80 leading-relaxed">
            Join our community for weekly "off-the-radar" neighborhood gems.
          </p>
          <Link
            to="/signup"
            className="text-[11px] font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer"
          >
            Sign up free →
          </Link>
        </div>
      </div>
    </aside>
  );
}