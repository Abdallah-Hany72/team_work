import React from "react";
import TagBadge from "../shared/TagBadge";

export default function ReviewCard({
  spotTitle,
  spotImage,
  rating,
  date,
  text,
  tags = [],
  variant = "simple",
  name,
  userName,
  author,
  avatar,
  userAvatar,
  avatarImage,
}) {
  const reviewerName = name || userName || author || "Anonymous Socialite";
  const reviewerAvatar =
    avatar ||
    userAvatar ||
    avatarImage ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100";

  return (
    <div className="glass-card rounded-xl p-5 border border-outline-variant/20 bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
      {/* PROFILE VARIANT: Shows the spot name & picture */}
      {variant === "profile" && (
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-outline-variant/10">
          <img
            src={spotImage || "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=100"}
            alt={spotTitle}
            className="w-12 h-12 rounded-lg object-cover shadow-sm shrink-0"
          />
          <div>
            <h4 className="font-headline-md text-sm font-bold text-on-surface line-clamp-1">
              {spotTitle}
            </h4>
            <span className="text-[11px] text-on-surface-variant/75 font-medium">
              Reviewed Spot
            </span>
          </div>
        </div>
      )}

      {/* SIMPLE VARIANT: Shows user information */}
      {variant === "simple" && (
        <div className="flex items-center gap-3 mb-4">
          <img
            src={reviewerAvatar}
            alt={reviewerName}
            className="w-10 h-10 rounded-full object-cover shadow-sm shrink-0"
          />
          <div>
            <h4 className="font-headline-md text-sm font-bold text-on-surface">
              {reviewerName}
            </h4>
            <span className="text-[11px] text-on-surface-variant/75 font-medium">
              {date || "Recently"}
            </span>
          </div>
        </div>
      )}

      {/* Rating & Date row */}
      <div className="flex items-center gap-1 mb-3">
        <div className="flex items-center text-secondary">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-[16px]"
              style={{
                fontVariationSettings:
                  i < Math.floor(rating || 5) ? "'FILL' 1" : "'FILL' 0",
              }}
            >
              star
            </span>
          ))}
        </div>
        <span className="text-xs font-semibold text-on-surface-variant ml-1">
          {rating || 5.0}
        </span>
        {variant === "profile" && date && (
          <span className="text-[11px] text-on-surface-variant/60 ml-auto">
            {date}
          </span>
        )}
      </div>

      {/* Review Text */}
      <p className="text-on-surface-variant text-body-md text-sm leading-relaxed mb-4">
        {text}
      </p>

      {/* Review Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tags.map((tag, i) => (
            <TagBadge key={i} variant="secondary" size="sm">
              {tag}
            </TagBadge>
          ))}
        </div>
      )}
    </div>
  );
}
