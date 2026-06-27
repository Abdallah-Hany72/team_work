import { useState } from "react";
import TagBadge from "../shared/TagBadge";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SpotGallery({ images = [], tags = [] }) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/10] bg-surface-container-low rounded-2xl flex items-center justify-center text-on-surface-variant/40">
        <span className="material-symbols-outlined text-4xl">image</span>
      </div>
    );
  }

  const slides = images.map((img) => ({ src: img }));

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <section className="space-y-4">
        {/* Main Display Container */}
        <div className="relative aspect-[16/9] md:aspect-[16/8] w-full rounded-2xl overflow-hidden group shadow-lg bg-surface-container-low border border-outline-variant/10">
          
          {/* Active Image with key for fade transition */}
          <img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`Spot view ${activeIndex + 1}`}
            className="w-full h-full object-cover select-none cursor-zoom-in animate-fade-in"
            onClick={() => setShowLightbox(true)}
          />

          {/* Gradients & Badges */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/30 pointer-events-none" />

          {/* Tag Badges overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
            {tags.map((tag, i) => (
              <TagBadge key={i} variant="secondary">
                {tag}
              </TagBadge>
            ))}
          </div>

          {/* Photo Counter overlay */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full select-none flex items-center gap-1.5 border border-white/10 z-10">
            <span className="material-symbols-outlined text-[14px]">photo_camera</span>
            {activeIndex + 1} / {images.length}
          </div>

          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined font-bold text-[24px]">chevron_left</span>
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined font-bold text-[24px]">chevron_right</span>
          </button>

          {/* Zoom & View Fullscreen Button */}
          <button
            onClick={() => setShowLightbox(true)}
            className="absolute bottom-4 right-4 bg-white hover:bg-surface-container-low text-on-surface text-sm font-semibold px-4.5 py-2.5 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer z-10 border border-outline-variant/20"
          >
            <span className="material-symbols-outlined text-[18px]">zoom_in</span>
            Full Screen
          </button>
        </div>

        {/* Thumbnails strip */}
        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-transparent">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative flex-shrink-0 w-24 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer hover:opacity-90 ${
                  activeIndex === idx
                    ? "border-primary ring-2 ring-primary/30 scale-[1.02] opacity-100 shadow-md"
                    : "border-transparent opacity-65"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox full screen modal */}
      <Lightbox
        open={showLightbox}
        close={() => setShowLightbox(false)}
        slides={slides}
        index={activeIndex}
        on={{
          view: ({ index }) => setActiveIndex(index),
        }}
      />
    </>
  );
}