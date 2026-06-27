// src/Components/discover/FiltersSideBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import MoodFilter from "./MoodFilter";
import CuisineFilter from "./CuisineFilter";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";


export default function FiltersSidebar({ filters,moods, onChange, onApply }) {
  return (
    <aside className="w-60 flex-shrink-0 space-y-6">
      <h2 className="text-lg font-bold text-on-surface">Filters</h2>

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
    </aside>
  );
}