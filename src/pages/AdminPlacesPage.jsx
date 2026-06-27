import { useState } from "react";
import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import PendingPlaceListItem from "../Components/admin/PendingPlaceListItem";
import PlaceDetailPanel from "../Components/admin/PlaceDetailPanel";
import { MOCK_PENDING_PLACES } from "../data/mockData";

export default function AdminPlacePage() {
  const [selectedId, setSelectedId] = useState(MOCK_PENDING_PLACES[0]?.id);
  const selected = MOCK_PENDING_PLACES.find((p) => p.id === selectedId);

  return (
    <AdminLayout>
      <AdminTopbar
        title="Content Moderation"
        subtitle="Managing community submissions and curation quality."
      />
      <div className="p-8 grid grid-cols-3 gap-6">
        <div className="space-y-3">
          {MOCK_PENDING_PLACES.map((place) => (
            <PendingPlaceListItem
              key={place.id}
              place={place}
              active={place.id === selectedId}
              onClick={() => setSelectedId(place.id)}
            />
          ))}
        </div>
        <div className="col-span-2">
          <PlaceDetailPanel place={selected} />
        </div>
      </div>
    </AdminLayout>
  );
}
