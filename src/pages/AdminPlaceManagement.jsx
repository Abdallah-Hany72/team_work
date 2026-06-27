// src/pages/AdminPlaceManagement.jsx
import React, { useState } from "react";
import AdminSidebar from "../Components/shared/AdminSidebar";
import AdminNavbar from "../Components/shared/AdminNavbar";
import { Check, X, Shield, Star, Edit, Ban } from "lucide-react";
import { MOCK_PENDING_PLACES } from "../constants/mockData";
import { Link } from "react-router-dom";

export default function AdminPlaceManagement() {
  const [places, setPlaces] = useState(MOCK_PENDING_PLACES);
  const [selectedPlaceId, setSelectedPlaceId] = useState(places[0]?.id || "");
  
  // Checklist verification states mapped by place ID
  const [verifications, setVerifications] = useState({
    p_1: { loc: true, contact: true, photo: false, standard: false },
    p_2: { loc: false, contact: false, photo: false, standard: false },
    p_3: { loc: true, contact: false, photo: false, standard: false }
  });

  const selectedPlace = places.find((p) => p.id === selectedPlaceId) || places[0];

  const handleCheckboxToggle = (placeId, field) => {
    setVerifications((prev) => ({
      ...prev,
      [placeId]: {
        ...prev[placeId],
        [field]: !prev[placeId]?.[field]
      }
    }));
  };

  const handleApprove = (id) => {
    alert(`"${selectedPlace?.name}" approved and published to the discover platform!`);
    const remaining = places.filter((p) => p.id !== id);
    setPlaces(remaining);
    setSelectedPlaceId(remaining[0]?.id || "");
  };

  const handleReject = (id) => {
    alert(`"${selectedPlace?.name}" has been rejected.`);
    const remaining = places.filter((p) => p.id !== id);
    setPlaces(remaining);
    setSelectedPlaceId(remaining[0]?.id || "");
  };

  const currentVerif = verifications[selectedPlace?.id] || { loc: false, contact: false, photo: false, standard: false };

  return (
    <div className="flex h-screen bg-background text-on-surface overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Navbar */}
        <header className="w-full h-16 border-b border-outline-variant/30 bg-surface-container-lowest px-6 md:px-16 flex items-center justify-between sticky top-0 z-30 shrink-0">
          <div className="flex items-center gap-6 font-label-md">
            <span className="font-display-lg text-headline-lg font-bold text-primary mr-4">Spotly</span>
            <span className="text-primary border-b-2 border-primary font-bold py-1">Moderation</span>
            <Link to="/admin" className="text-on-surface-variant hover:text-primary transition-colors py-1">Analytics</Link>
            <Link to="/admin/users" className="text-on-surface-variant hover:text-primary transition-colors py-1">User Management</Link>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </header>

        <main className="p-8 space-y-8 flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Content Moderation</h1>
                <p className="text-on-surface-variant/80 text-sm mt-1">
                  Managing community submissions and curations.
                </p>
              </div>
              <div className="flex gap-4 text-xs font-semibold">
                <span className="text-primary border-b-2 border-primary py-1">Pending Places ({places.length})</span>
                <span className="text-on-surface-variant/75 py-1">All Managed Places</span>
              </div>
            </div>

            {/* Split layout view */}
            {places.length === 0 ? (
              <div className="bg-surface-container-low p-12 rounded-2xl border border-outline-variant/15 text-center text-on-surface-variant space-y-2">
                <span className="text-3xl block">🎉</span>
                <h4 className="font-bold text-base">Moderation Queue Clear</h4>
                <p className="text-xs">No pending spot submissions to review at this moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side: Pending Places List */}
                <div className="lg:col-span-4 space-y-3">
                  {places.map((place) => {
                    const isSelected = place.id === selectedPlaceId;
                    return (
                      <div
                        key={place.id}
                        onClick={() => setSelectedPlaceId(place.id)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-3 items-start relative ${
                          isSelected
                            ? "bg-surface-container-high border-primary shadow-sm"
                            : "bg-surface-container-low border-outline-variant/15 hover:bg-surface-container"
                        }`}
                      >
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-14 h-14 rounded-lg object-cover shadow-sm shrink-0"
                        />
                        <div className="space-y-1">
                          <span className="text-xs bg-orange-500/10 text-orange-600 px-2 py-0.5 rounded font-bold text-[9px] uppercase border border-orange-500/15">
                            New Submission
                          </span>
                          <h4 className="font-bold text-sm text-on-surface line-clamp-1">{place.name}</h4>
                          <span className="text-[11px] text-on-surface-variant/70 block">
                            Submitted by {place.submittedBy}
                          </span>
                          <div className="flex gap-1.5 flex-wrap pt-1">
                            {place.tags.slice(0, 2).map((t) => (
                              <span key={t} className="text-[10px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full border border-outline-variant/10">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="absolute top-4 right-4 text-[9px] text-on-surface-variant/50 font-bold">2h</span>
                      </div>
                    );
                  })}
                </div>

                {/* Right Side: Detail Moderation Panel */}
                <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/15 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                  {/* Photo Banner with Venue info */}
                  <div className="h-64 relative bg-surface-container-high">
                    <img
                      src={selectedPlace.image}
                      alt={selectedPlace.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white space-y-1">
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest block flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] text-white">location_on</span>
                        {selectedPlace.location}
                      </span>
                      <h2 className="text-3xl font-extrabold">{selectedPlace.name}</h2>
                    </div>
                  </div>

                  {/* Form moderation detail split grid */}
                  <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left details (desc + vibe tags) */}
                    <div className="md:col-span-7 space-y-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">
                          Venue Description
                        </span>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          "{selectedPlace.description}"
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">
                          Vibe Tags
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedPlace.tags.map((t) => (
                            <span key={t} className="text-xs font-semibold px-3 py-1.5 bg-surface-container border border-outline-variant/10 rounded-full text-on-surface-variant">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 bg-surface-container/30 border border-outline-variant/10 p-3 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[16px]">person</span>
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-on-surface">{selectedPlace.submittedBy}</span>
                          <span className="block text-[10px] text-on-surface-variant/80">Top Contributor • {selectedPlace.spotsApproved} Spots Approved</span>
                        </div>
                      </div>
                    </div>

                    {/* Right checklist + actions */}
                    <div className="md:col-span-5 bg-surface-container/50 border border-outline-variant/15 rounded-xl p-5 space-y-5">
                      <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">
                        Verification Checks
                      </span>
                      
                      <div className="space-y-3">
                        <label className="flex items-start gap-2.5 text-xs text-on-surface-variant/90 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={currentVerif.loc}
                            onChange={() => handleCheckboxToggle(selectedPlace.id, "loc")}
                            className="mt-0.5 accent-primary"
                          />
                          <span>Physical Location Verified</span>
                        </label>
                        <label className="flex items-start gap-2.5 text-xs text-on-surface-variant/90 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={currentVerif.contact}
                            onChange={() => handleCheckboxToggle(selectedPlace.id, "contact")}
                            className="mt-0.5 accent-primary"
                          />
                          <span>Contact Info Accurate</span>
                        </label>
                        <label className="flex items-start gap-2.5 text-xs text-on-surface-variant/90 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={currentVerif.photo}
                            onChange={() => handleCheckboxToggle(selectedPlace.id, "photo")}
                            className="mt-0.5 accent-primary"
                          />
                          <span>Photo Rights Confirmed</span>
                        </label>
                        <label className="flex items-start gap-2.5 text-xs text-on-surface-variant/90 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={currentVerif.standard}
                            onChange={() => handleCheckboxToggle(selectedPlace.id, "standard")}
                            className="mt-0.5 accent-primary"
                          />
                          <span>Community Standards Met</span>
                        </label>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-outline-variant/10">
                        <button
                          onClick={() => handleApprove(selectedPlace.id)}
                          className="w-full bg-primary hover:bg-primary-container text-on-primary font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
                        >
                          <Check size={14} />
                          Approve & Publish
                        </button>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            onClick={() => alert("Opening edit screen...")}
                            className="bg-surface border border-outline-variant/35 text-on-surface-variant hover:bg-surface-container transition-colors py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Edit size={12} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleReject(selectedPlace.id)}
                            className="bg-white border border-red-200 text-red-600 hover:bg-red-50 transition-colors py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Ban size={12} />
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <footer className="py-6 border-t border-outline-variant/15 text-center text-[10px] font-semibold text-on-surface-variant/60 flex items-center justify-between px-8 bg-surface-container-lowest mt-12">
            <span>© 2024 Spotly Inc. The Sophisticated Socialite's Guide.</span>
            <div className="flex gap-4">
              <span className="hover:text-primary transition-colors cursor-pointer">Moderation Guide</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Support</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Admin Terms</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
