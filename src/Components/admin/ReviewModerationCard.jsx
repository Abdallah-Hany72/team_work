// src/Components/admin/ReviewModerationCard.jsx
import TagBadge from "../Ui/TagBadge/TagBadge";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";

const flagConfig = {
  offensive: { label: "OFFENSIVE CONTENT", variant: "danger", border: "border-l-red-500" },
  fake: { label: "POSSIBLE FAKE", variant: "warning", border: "border-l-yellow-500" },
  standard: { label: "STANDARD REVIEW", variant: "success", border: "border-l-outline-variant" },
};

export default function ReviewModerationCard({ review, onDismiss, onDelete, onFlag, onArchive }) {
  const config = flagConfig[review.flagType] || flagConfig.standard;

  return (
    <div className={`bg-surface-container rounded-2xl border-l-4 ${config.border} border border-outline-variant/20 p-5 flex gap-4`}>
      <img src={review.image} alt={review.venue} className="w-28 h-20 rounded-xl object-cover flex-shrink-0" />

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <TagBadge variant={config.variant} size="sm">{config.label}</TagBadge>
            <span className="text-xs text-on-surface-variant">{review.flaggedBy}</span>
          </div>
          <span className="text-xs text-on-surface-variant">{review.timeAgo}</span>
        </div>

        <h3 className="font-bold text-on-surface">{review.venue}</h3>
        <p className="text-xs text-on-surface-variant">{review.user} · {review.reviewCount} reviews</p>

        <p className="text-sm text-on-surface-variant italic bg-surface-container-high rounded-lg p-3">
          "{review.text}"
        </p>

        <div className="flex justify-end gap-3 pt-1">
          {review.flagType === "standard" ? (
            <>
              <PrimaryButton variant="outline" size="sm" onClick={() => onFlag?.(review.id)}>
                Flag Manually
              </PrimaryButton>
              <PrimaryButton variant="secondary" size="sm" onClick={() => onArchive?.(review.id)}>
                Archive
              </PrimaryButton>
            </>
          ) : (
            <>
              <PrimaryButton variant="outline" size="sm" onClick={() => onDismiss?.(review.id)}>
                Dismiss Flag
              </PrimaryButton>
              <PrimaryButton size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => onDelete?.(review.id)}>
                Delete Review
              </PrimaryButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}