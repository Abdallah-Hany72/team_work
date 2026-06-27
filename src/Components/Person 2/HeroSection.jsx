import React from "react";
import SearchBar from "../shared/SearchBar";

const HeroSection = ({ searchValue, onSearchValueChange, onSearchSubmit }) => {
  const bgImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBnf7lqQQPAIZBJVGg3MoIsRY9x_tp53O5PNcryJmP9DTQpaRyzNF74B2cl6uulTvQlFDZxQJZax2vS2TECw6n6Zov0ZxaYxdko5gHb8HKAYRaiADynyrExVsYEl9behxxAUBxREnHi8wWxrEtKLXcql4Tij0v_5G8ZIZjMBhMSASYh8N7TYrCEgkgXZC7DfFDGZ4ayYSuux5Twthx0L9R6tbVliotTutZHaOOUzQ9P50Lteix576c41gHODeJnPPdqhCag2askSTs";

  return (
    <section className="relative h-[716px] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Sun-drenched cafe interior in Brooklyn"
          src={bgImage}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-surface"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-margin-mobile md:px-margin-desktop text-center">
        <h1 className="hero-headline font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl mb-8 leading-tight whitespace-normal md:whitespace-nowrap">
          Discover your next <span className="premium-gradient-text">favorite spot</span>.
        </h1>

        <div className="max-w-2xl mx-auto">
          <SearchBar
            value={searchValue}
            onChange={onSearchValueChange}
            onSearch={onSearchSubmit}
            placeholder="Find me a quiet café for studying..."
            variant="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
