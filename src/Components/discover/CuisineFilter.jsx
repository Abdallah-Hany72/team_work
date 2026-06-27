// src/Components/discover/CuisineFilter.jsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const cuisines = [
  "All Cuisines",
  "Mediterranean",
  "Modern American",
  "Artisan Coffee",
  "Cocktail Bar",
  "Tea & Spirits",
  "Japanese",
  "Italian",
  "Egyptian",
  "Seafood",
  "International",
];

export default function CuisineFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold text-on-surface">Cuisine</span>

      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl border text-sm transition-all bg-surface-container text-on-surface ${
            open
              ? "border-primary ring-2 ring-primary/20"
              : "border-outline-variant hover:border-primary"
          }`}
        >
          <span>{value}</span>
          <ChevronDown
            size={16}
            className={`text-on-surface-variant transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown List */}
        {open && (
          <ul className="absolute top-full left-0 right-0 mt-1.5 z-50 bg-surface-container border border-outline-variant rounded-xl shadow-lg overflow-hidden">
            {cuisines.map((c) => (
              <li
                key={c}
                onClick={() => {
                  onChange(c);
                  setOpen(false);
                }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                  value === c
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}