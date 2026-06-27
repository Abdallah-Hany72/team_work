
import TagBadge from '../shared/TagBadge';
import React from "react";
import { Bookmark } from "lucide-react";

const SpotInfo = ({
  title,
  rating,
  reviewCount,
  category,
  description,
  vibeMetrics = [],
  vibeTags = [],
  onShare = () => { },
  onSave = () => { },
  onOrganize = () => { },
  saved = false,
  isAdmin = false,
  onEdit = () => { },
}) => {
  return (  
    <div>
      {/* Title Header and Actions Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-stack-md">
        <div>
          <h1 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-2">
            {title}
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <div className="bg-primary text-white px-3 py-1 rounded-full flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                star
              </span>
              {rating}
            </div>

            <span className="text-on-surface-variant">
              {reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {isAdmin && (
            <button
              onClick={onEdit}
              className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors px-6 py-3 rounded-full font-label-md border border-primary/20 text-primary hover:bg-primary/5 transition-all cursor-pointer shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Edit Spot
            </button>
          )}

          <button
            onClick={onShare}
            className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors px-6 py-3 rounded-full font-label-md sunlight-shadow scale-up active:scale-95 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined">share</span>
            Share
          </button>
          
          {saved && (
            <button
              onClick={onOrganize}
              className="flex items-center gap-2 bg-surface-container-high hover:bg-surface-container-highest transition-colors px-6 py-3 rounded-full font-label-md sunlight-shadow scale-up active:scale-95 transition-all cursor-pointer text-on-surface"
            >
              <span className="material-symbols-outlined text-primary">folder_open</span>
              Organize
            </button>
          )}

          <button
            onClick={onSave}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-label-md scale-up active:scale-95 transition-all cursor-pointer ${
              saved 
                ? "bg-surface-container-low border border-primary/20 text-primary hover:bg-primary/5" 
                : "bg-primary hover:bg-primary-container text-on-primary shadow-lg shadow-primary/10"
            }`}
          >
            <Bookmark
              size={18}
              className={saved ? "fill-primary text-primary" : "text-on-primary"}
            />
            {saved ? "Saved" : "Save to Collection"}
          </button>
        </div>
      </div>

      {/* The Vibe Glass Card */}
      <div className="glass-card rounded-xl p-stack-md sunlight-shadow mb-stack-lg">
        <h2 className="font-headline-md text-headline-md mb-4 flex items-center gap-2 text-on-surface">
          <span className="material-symbols-outlined text-secondary">auto_awesome</span>
          The Vibe
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
          {description}
        </p>

        {/* Vibe Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {vibeMetrics.map((metric, i) => (
            <div key={i} className="bg-surface-container-low p-4 rounded-xl text-center">
              <span className="block text-secondary font-bold text-headline-md">
                {metric.value}
              </span>
              <span className="text-label-md text-on-surface-variant">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Vibe Keywords */}
        <div className="flex flex-wrap gap-2">
          {vibeTags.map((tag, i) => (
            <span
              key={i}
              className="bg-secondary-container/20 text-secondary border border-secondary/20 px-4 py-2 rounded-full font-vibe-tag text-vibe-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotInfo;
