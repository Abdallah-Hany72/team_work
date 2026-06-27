import { useState } from "react";
import TagBadge from "../shared/TagBadge";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SpotGallery = ({ images = [], tags = [] }) => {
  const [showGallery, setShowGallery] = useState(false);

  const mainImage = images[0];
  const detailImage1 = images[1];
  const detailImage2 = images[2];
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* Main Image */}
        <div 
        onClick={() => {
              setIndex(0);
              setShowGallery(true);
            }}
        className="md:col-span-8 aspect-[16/10] relative overflow-hidden rounded-xl group cursor-pointer">
          <img
            
            src={mainImage}
            alt="Main Spot"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {tags.map((tag, i) => (
              <TagBadge key={i} variant="secondary">
                {tag}
              </TagBadge>
            ))}
          </div>
        </div>

        {/* Side Images */}
        <div className="hidden md:grid md:col-span-4 grid-rows-2 gap-4 ">

          {detailImage1 && (
            <div className="relative overflow-hidden rounded-xl group cursor-pointer">
              <img
                onClick={() => {
                  setIndex(1);
                  setShowGallery(true);
                }}
                src={detailImage1}
                alt="Spot Detail 1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {detailImage2 && (
            <div className="relative overflow-hidden rounded-xl group">
              <img

                src={detailImage2}
                alt="Spot Detail 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <button

                  onClick={() => {
                    setIndex(0);
                    setShowGallery(true);
                  }}
                  className="bg-white text-black px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 cursor-pointer transition"
                >
                  <span className="material-symbols-outlined">
                    grid_view
                  </span>
                  View All Photos
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      <Lightbox
  open={showGallery}
  close={() => setShowGallery(false)}
  slides={slides}
  index={index}
  on={{
    view: ({ index }) => setIndex(index),
  }}
/>
    </>
  );
};

export default SpotGallery;