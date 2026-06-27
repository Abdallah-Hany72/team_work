import { useMemo, useState } from "react";
import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import PendingPlaceListItem from "../Components/admin/PendingPlaceListItem";
import PlaceDetailPanel from "../Components/admin/PlaceDetailPanel";
import Toast, { useToast } from "../Components/admin/Toast";
import { MOCK_PENDING_PLACES } from "../data/mockData";

export default function AdminPlacesPage() {
  const [places, setPlaces] = useState(MOCK_PENDING_PLACES);
  const [selectedId, setSelectedId] = useState(MOCK_PENDING_PLACES[0]?.id);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, showToast] = useToast();

  const visiblePlaces = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return places;
    return places.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.submittedBy.toLowerCase().includes(q)
    );
  }, [places, searchQuery]);

  const selected = places.find((p) => p.id === selectedId);

  const selectNext = (resolvedId) => {
    const remaining = places.filter((p) => p.id !== resolvedId);
    setPlaces(remaining);
    setSelectedId(remaining[0]?.id);
  };

  const handleApprove = (id) => {
    const place = places.find((p) => p.id === id);
    selectNext(id);
    showToast(`"${place?.name}" approved and published.`);
  };

  const handleReject = (id) => {
    const place = places.find((p) => p.id === id);
    selectNext(id);
    showToast(`"${place?.name}" rejected.`);
  };

  const handleEdit = (id) => {
    const place = places.find((p) => p.id === id);
    showToast(`Opening editor for "${place?.name}"...`);
  };

  const handleToggleCheck = (placeId, key) => {
    setPlaces((prev) =>
      prev.map((p) =>
        p.id === placeId
          ? { ...p, checks: { ...p.checks, [key]: !p.checks[key] } }
          : p
      )
    );
  };

  return (
    <AdminLayout>
      <AdminTopbar
        title="Content Moderation"
        subtitle="Managing community submissions and curation quality."
        placeholder="Search submissions..."
        onSearch={setSearchQuery}
      />
      {places.length === 0 ? (
        <div className="p-8">
          <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-12 text-center text-on-surface-variant space-y-2">
            <span className="text-3xl block">🎉</span>
            <h4 className="font-bold text-on-surface">Moderation queue clear</h4>
            <p className="text-sm">No pending spot submissions to review right now.</p>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            {visiblePlaces.length === 0 ? (
              <p className="text-sm text-on-surface-variant px-1">
                No submissions match your search.
              </p>
            ) : (
              visiblePlaces.map((place) => (
                <PendingPlaceListItem
                  key={place.id}
                  place={place}
                  active={place.id === selectedId}
                  onClick={() => setSelectedId(place.id)}
                />
              ))
            )}
          </div>
          <div className="lg:col-span-2">
            <PlaceDetailPanel
              place={selected}
              onApprove={handleApprove}
              onEdit={handleEdit}
              onReject={handleReject}
              onToggleCheck={handleToggleCheck}
            />
          </div>
        </div>
      )}
      <Toast toast={toast} />
    </AdminLayout>
  );
}