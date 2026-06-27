// src/Components/discover/SortDropdown.jsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const options = ["Rating", "Newest", "Most Reviewed"];

export default function SortDropdown({ value, onChange }) {
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
    <div className="flex items-center gap-2">
      <span className="text-sm text-on-surface-variant">Sort by:</span>

      <div ref={ref} className="relative">
        {/* Trigger */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-semibold transition-all bg-surface-container text-on-surface ${
            open
              ? "border-primary ring-2 ring-primary/20"
              : "border-outline-variant hover:border-primary"
          }`}
        >
          <span>{value}</span>
          <ChevronDown
            size={14}
            className={`text-on-surface-variant transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown List */}
        {open && (
          <ul className="absolute top-full right-0 mt-1.5 z-50 w-44 bg-surface-container border border-outline-variant rounded-xl shadow-lg overflow-hidden">
            {options.map((o) => (
              <li
                key={o}
                onClick={() => {
                  onChange(o);
                  setOpen(false);
                }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                  value === o
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {o}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}