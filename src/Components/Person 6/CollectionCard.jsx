import React from "react";
import TagBadge from "../shared/TagBadge";

export default function CollectionCard({
  title,
  description,
  mainImage,
  sideImage,
  extraCount,
  tag,
  updatedText,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="group bg-surface-container-low hover:bg-surface-container rounded-2xl overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Image Grid Layout */}
      <div className="relative h-44 flex gap-1 bg-surface-container-high overflow-hidden">
        {/* Main Image */}
        <div className="flex-1 h-full overflow-hidden">
          <img
            src={mainImage || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Side Image & Extra Count */}
        {sideImage && (
          <div className="w-1/3 h-full relative overflow-hidden">
            <img
              src={sideImage}
              alt={`${title} detail`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {extraCount > 0 && (
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
                <span className="text-white font-headline-md text-headline-md font-bold">
                  +{extraCount}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-on-surface font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h4>
          <p className="text-on-surface-variant text-body-md text-sm line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-outline-variant/10">
          {tag && (
            <TagBadge variant="secondary" size="sm">
              {tag}
            </TagBadge>
          )}
          {updatedText && (
            <span className="text-[11px] text-on-surface-variant/75 font-medium">
              {updatedText}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
