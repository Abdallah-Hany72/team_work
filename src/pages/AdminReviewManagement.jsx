// src/pages/AdminReviewManagement.jsx
import React, { useState } from "react";
import AdminSidebar from "../Components/shared/AdminSidebar";
import AdminNavbar from "../Components/shared/AdminNavbar";
import { Search, Filter, AlertTriangle, AlertCircle, ShieldCheck, Trash, Archive, ShieldAlert } from "lucide-react";
import { MOCK_ADMIN_REVIEWS } from "../constants/mockData";
import { Link } from "react-router-dom";

export default function AdminReviewManagement() {
  const [reviews, setReviews] = useState(MOCK_ADMIN_REVIEWS);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDismiss = (id) => {
    alert("Flag dismissed. Review approved.");
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const handleDelete = (id) => {
    alert("Review deleted successfully.");
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const handleArchive = (id) => {
    alert("Review archived.");
    setReviews((prev) => prev.filter((r) => r.id !== id));
  };

  const filteredReviews = reviews.filter((r) => {
    return (
      r.venueName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.submittedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

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
            <Link to="/admin/users" className="text-on-surface-variant hover:text-primary transition-colors py-1">Users</Link>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </header>

        <main className="p-8 space-y-8 flex-1">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">Review Moderation</h1>
              <p className="text-on-surface-variant/80 text-sm mt-1">
                Review flagged content and maintain community standards.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64 bg-surface-container-low border border-outline-variant/20 rounded-full pl-10 pr-4 py-2 text-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={14} />
                <input
                  type="text"
                  placeholder="Search venues or users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none text-xs w-full text-on-surface"
                />
              </div>
              <button
                onClick={() => alert("Applying advanced filters...")}
                className="bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-md cursor-pointer shrink-0"
              >
                <Filter size={14} />
                Filters
              </button>
            </div>
          </div>

          {/* Stats Chips Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Pending Review */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 shadow-sm">
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase block">Pending Review</span>
              <span className="text-2xl font-extrabold text-orange-500 mt-1 block">124</span>
            </div>

            {/* Flagged Offensive */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 shadow-sm">
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase block">Flagged Offensive</span>
              <span className="text-2xl font-extrabold text-red-500 mt-1 block">42</span>
            </div>

            {/* Suspected Fake */}
            <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 shadow-sm">
              <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase block">Suspected Fake</span>
              <span className="text-2xl font-extrabold text-yellow-600 mt-1 block">18</span>
            </div>

            {/* Cleaned Today */}
            <div className="bg-teal-500/10 p-4 rounded-xl border border-teal-500/20 shadow-sm">
              <span className="text-[10px] font-bold text-teal-600 uppercase block">Cleaned Today</span>
              <span className="text-2xl font-extrabold text-teal-600 mt-1 block">256</span>
            </div>
          </div>

          {/* Flagged Review Feed List */}
          <div className="space-y-6">
            {filteredReviews.length === 0 ? (
              <div className="bg-surface-container-low p-12 rounded-2xl border border-outline-variant/15 text-center text-on-surface-variant space-y-2">
                <span className="text-3xl block">☀️</span>
                <h4 className="font-bold text-base">Reviews Feed Clear</h4>
                <p className="text-xs">No flagged reviews require moderation right now.</p>
              </div>
            ) : (
              filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className={`bg-surface-container-low border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 relative transition-all ${
                    rev.flagType === "OFFENSIVE CONTENT"
                      ? "border-red-500/30"
                      : rev.flagType === "POSSIBLE FAKE"
                      ? "border-yellow-500/30"
                      : "border-outline-variant/15"
                  }`}
                >
                  {/* Left: Venue Image */}
                  <img
                    src={rev.image}
                    alt={rev.venueName}
                    className="w-full md:w-32 h-32 rounded-xl object-cover shadow-sm shrink-0"
                  />

                  {/* Right: Moderation Details */}
                  <div className="flex-1 space-y-4">
                    {/* Badge Flag description row */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border flex items-center gap-1 ${
                          rev.flagType === "OFFENSIVE CONTENT"
                            ? "bg-red-500/10 text-red-600 border-red-500/20"
                            : rev.flagType === "POSSIBLE FAKE"
                            ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                            : "bg-surface-container-high text-on-surface-variant border-outline-variant/20"
                        }`}>
                          {rev.flagType === "OFFENSIVE CONTENT" ? (
                            <ShieldAlert size={10} className="mt-0.5" />
                          ) : rev.flagType === "POSSIBLE FAKE" ? (
                            <AlertCircle size={10} className="mt-0.5" />
                          ) : (
                            <ShieldCheck size={10} className="mt-0.5" />
                          )}
                          {rev.flagType}
                        </span>
                        <span className="text-[11px] text-on-surface-variant/80 font-medium">
                          {rev.flagReason}
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant/60 font-medium">
                        {rev.date}
                      </span>
                    </div>

                    {/* Venue / Reviewer Header */}
                    <div>
                      <h4 className="font-bold text-base text-on-surface">{rev.venueName}</h4>
                      <span className="text-[11px] text-on-surface-variant/80">
                        by <span className="font-semibold text-primary">{rev.submittedBy}</span> • {rev.userReviewsCount} reviews
                      </span>
                    </div>

                    {/* Review text box */}
                    <div className="bg-surface-container-low/50 border border-outline-variant/10 rounded-xl p-4 italic text-xs text-on-surface-variant leading-relaxed">
                      "{rev.text}"
                    </div>

                    {/* Action buttons row */}
                    <div className="flex justify-end gap-3 pt-2">
                      {rev.flagType === "STANDARD REVIEW" ? (
                        <>
                          <button
                            onClick={() => handleDismiss(rev.id)}
                            className="bg-surface hover:bg-surface-container border border-outline-variant/35 text-on-surface-variant font-semibold px-6 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                          >
                            Flag Manually
                          </button>
                          <button
                            onClick={() => handleArchive(rev.id)}
                            className="bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-semibold px-6 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                          >
                            Archive
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleDismiss(rev.id)}
                            className="bg-surface hover:bg-surface-container border border-outline-variant/35 text-on-surface-variant font-semibold px-6 py-2 rounded-lg text-xs transition-colors cursor-pointer"
                          >
                            Dismiss Flag
                          </button>
                          <button
                            onClick={() => handleDelete(rev.id)}
                            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded-lg text-xs shadow-md transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <Trash size={12} />
                            Delete Review
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          {filteredReviews.length > 0 && (
            <div className="flex justify-center items-center gap-4 pt-6 border-t border-outline-variant/15 text-xs text-on-surface-variant/70">
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                &lt;
              </button>
              <span className="font-semibold">Page 1 of 12</span>
              <button className="p-1.5 rounded hover:bg-surface-container transition-colors">
                &gt;
              </button>
            </div>
          )}
        </main>
        
        {/* Footer */}
        <footer className="py-6 border-t border-outline-variant/15 text-center text-[10px] font-semibold text-on-surface-variant/60 flex items-center justify-between px-8 bg-surface-container-lowest mt-12">
          <span>© 2024 Spotly Inc. Admin Dashboard v2.4.0</span>
          <div className="flex gap-4">
            <span className="hover:text-primary transition-colors cursor-pointer">Guidelines</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Internal Wiki</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Contact Engineering</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
