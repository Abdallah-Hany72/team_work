import { useEffect, useState } from "react";

export default function RecentSearches({ onSearch }) {
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setSearches(saved);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("recentSearches");
    setSearches([]);
  };

  const handleSearch = (value) => {
    if (onSearch) {
      onSearch(value);
    }
  };

  if (searches.length === 0) return null;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-on-surface">
          Recent Searches
        </h3>

        <button
          onClick={clearAll}
          className="text-primary text-sm font-medium hover:underline cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {searches.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSearch(item)}
            className="px-4 py-2 rounded-full bg-surface border border-outline-variant hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}