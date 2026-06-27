import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({
  placeholder = "Find me a quiet café for studying...",
  large = false,
  value,
  onChange,
  onSearch,
  variant = "default",
}) {

  const [internalQuery, setInternalQuery] = useState("");

  const query = value ?? internalQuery;

  const setQuery = onChange ?? setInternalQuery;

  const isHero = variant === "hero";
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    const recent =
      JSON.parse(localStorage.getItem("recentSearches")) || [];

    const updated = [
      query,
      ...recent.filter((item) => item !== query),
    ].slice(0, 6);

    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updated)
    );

    navigate(`/discover?q=${encodeURIComponent(query)}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className={`
      rounded-full flex items-center gap-4 transition-all
      ${isHero
          ? "bg-white/10 backdrop-blur-md border border-white/20"
          : "bg-surface border border-outline-variant shadow-sm"}
      ${large ? "p-2" : "p-1.5"}
`}
    >
      <div className="pl-4 text-primary">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`
        w-full bg-transparent border-none outline-none focus:ring-0 font-medium
        ${isHero
            ? "text-white placeholder:text-white/90"
            : "text-on-surface placeholder:text-on-surface-variant"}
        ${large ? "py-4 text-lg" : "py-2.5 text-base"}
`}
      />
      <button
        type="submit"
        className="bg-primary text-on-primary rounded-full font-label-md hover:scale-[1.02] active:scale-[0.98] transition-transform flex-shrink-0 px-6 py-3 mr-1"
      >
        Search
      </button>
    </form>
  );
}
