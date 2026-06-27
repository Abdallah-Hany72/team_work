// src/Components/admin/PendingPlaceListItem.jsx
export default function PendingPlaceListItem({ place, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex gap-3 p-3 rounded-xl border text-left transition-colors ${
        active ? "border-primary bg-primary/5" : "border-outline-variant/20 bg-surface-container hover:bg-surface-container-high"
      }`}
    >
      <img src={place.image} alt={place.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-on-surface truncate">{place.name}</p>
          {place.isNew && (
            <span className="text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full flex-shrink-0">NEW</span>
          )}
        </div>
        <p className="text-xs text-on-surface-variant truncate">Submitted by {place.submittedBy}</p>
        <div className="flex gap-1 mt-1">
          {place.tags.map((t) => (
            <span key={t} className="text-[10px] bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}