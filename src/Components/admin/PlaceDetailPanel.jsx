// src/Components/admin/PlaceDetailPanel.jsx
import { MapPin } from "lucide-react";
import PrimaryButton from "../Ui/PrimaryButton/PrimaryButton";
import TagBadge from "../Ui/TagBadge/TagBadge";

const checksList = [
  { key: "locationVerified", label: "Physical Location Verified" },
  { key: "contactAccurate", label: "Contact Info Accurate" },
  { key: "photoRights", label: "Photo Rights Confirmed" },
  { key: "communityStandards", label: "Community Standards Met" },
];

export default function PlaceDetailPanel({
  place,
  onApprove,
  onEdit,
  onReject,
  onToggleCheck,
}) {
  if (!place) {
    return (
      <div className="flex items-center justify-center h-full text-on-surface-variant text-sm">
        Select a place to review its details.
      </div>
    );
  }

  const allChecksComplete = checksList.every(({ key }) => place.checks[key]);

  return (
    <div className="space-y-6">
      <div className="relative rounded-2xl overflow-hidden h-64">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white space-y-1">
          <span className="flex items-center gap-1 text-sm">
            <MapPin size={14} />
            {place.location}
          </span>
          <h2 className="text-2xl font-bold">{place.name}</h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Venue Description</span>
            <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">"{place.description}"</p>
          </div>

          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Vibe Tags</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {place.vibeTags.map((tag) => (
                <TagBadge key={tag} variant="secondary" size="sm">{tag}</TagBadge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-outline-variant/20">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
              {place.contributor.name.charAt(1).toUpperCase()}
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">{place.contributor.name}</p>
              <p className="text-xs text-on-surface-variant">{place.contributor.badge} · {place.contributor.spotsApproved} Spots Approved</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-5 space-y-4 h-fit">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">Verification Checks</span>
          <div className="space-y-2.5">
            {checksList.map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 text-sm text-on-surface cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!place.checks[key]}
                  onChange={() => onToggleCheck?.(place.id, key)}
                  className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/40"
                />
                {label}
              </label>
            ))}
          </div>

          <PrimaryButton
            className="w-full"
            icon="check"
            disabled={!allChecksComplete}
            title={
              allChecksComplete
                ? undefined
                : "Complete all verification checks before publishing"
            }
            onClick={() => allChecksComplete && onApprove?.(place.id)}
          >
            Approve & Publish
          </PrimaryButton>
          {!allChecksComplete && (
            <p className="text-xs text-on-surface-variant text-center">
              Complete all checks to enable publishing.
            </p>
          )}
          <div className="grid grid-cols-2 gap-2">
            <PrimaryButton variant="secondary" className="w-full" onClick={() => onEdit?.(place.id)}>Edit</PrimaryButton>
            <PrimaryButton variant="outline" className="w-full text-red-500 border-red-300 hover:bg-red-50" onClick={() => onReject?.(place.id)}>Reject</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}