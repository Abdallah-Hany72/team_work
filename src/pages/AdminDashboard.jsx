// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import AdminSidebar from "../Components/shared/AdminSidebar";
import AdminNavbar from "../Components/shared/AdminNavbar";
import { Link } from "react-router-dom";
import { Check, X, FileText, Sparkles, Map, TrendingUp } from "lucide-react";
import {
  MOCK_ADMIN_STATS,
  MOCK_PENDING_PLACES,
  MOCK_ADMIN_ACTIVITY
} from "../constants/mockData";

export default function AdminDashboard() {
  const [pendingQueue, setPendingQueue] = useState(MOCK_PENDING_PLACES);

  const handleAction = (id, approved) => {
    alert(approved ? `Venue approved and published!` : `Venue rejected.`);
    setPendingQueue((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="flex h-screen bg-background text-on-surface overflow-hidden">
      {/* Admin Sidebar Layout */}
      <AdminSidebar />

      {/* Main Panel Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminNavbar />

        <main className="p-8 space-y-8 flex-1">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Platform Overview</h1>
            <p className="text-on-surface-variant/80 text-sm mt-1">
              Real-time control center for Spotly's social ecosystem.
            </p>
          </div>

          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pending Places */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                </span>
                <span className="text-xs font-bold text-on-surface-variant/75 block uppercase tracking-wider">
                  Pending Places
                </span>
                <h3 className="text-3xl font-extrabold mt-1">{MOCK_ADMIN_STATS.pendingPlaces}</h3>
              </div>
              <span className="absolute top-6 right-6 text-xs font-bold text-green-500 flex items-center gap-0.5">
                <TrendingUp size={12} /> +12%
              </span>
            </div>

            {/* Offensive Reviews */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">rate_review</span>
                </span>
                <span className="text-xs font-bold text-on-surface-variant/75 block uppercase tracking-wider">
                  Offensive Reviews
                </span>
                <h3 className="text-3xl font-extrabold mt-1">{MOCK_ADMIN_STATS.offensiveReviews}</h3>
              </div>
              <span className="absolute top-6 right-6 text-xs font-bold text-green-500 flex items-center gap-0.5">
                <TrendingUp size={12} className="rotate-180" /> -3%
              </span>
            </div>

            {/* New Users Today */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                </span>
                <span className="text-xs font-bold text-on-surface-variant/75 block uppercase tracking-wider">
                  New Users Today
                </span>
                <h3 className="text-3xl font-extrabold mt-1">{MOCK_ADMIN_STATS.newUsers.toLocaleString()}</h3>
              </div>
              <span className="absolute top-6 right-6 text-xs font-bold text-green-500 flex items-center gap-0.5">
                <TrendingUp size={12} /> +42%
              </span>
            </div>

            {/* Review Health Score */}
            <div className="bg-primary text-on-primary p-6 rounded-2xl border border-outline-variant/10 shadow-md relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </span>
                <span className="text-xs font-bold text-on-primary/85 block uppercase tracking-wider">
                  Review Health Score
                </span>
                <h3 className="text-3xl font-extrabold mt-1">{MOCK_ADMIN_STATS.healthScore}%</h3>
              </div>
              <p className="text-[10px] text-on-primary/75 mt-4">Review Health Score is optimal</p>
            </div>
          </div>

          {/* Middle Grid (Review Queue & Activity Feed) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Review Queue (Table card) */}
            <div className="lg:col-span-2 bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">Review Queue</h3>
                  <p className="text-xs text-on-surface-variant/80">Moderation required for new venue submissions.</p>
                </div>
                <Link to="/admin/places" className="text-xs font-bold text-primary hover:underline px-4 py-2 border border-outline-variant/20 rounded-lg hover:bg-surface-container transition-colors">
                  View All Queue
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/20 text-on-surface-variant/70 font-bold uppercase tracking-wider">
                      <th className="py-3 pr-4">Venue / User</th>
                      <th className="py-3 px-4">Submission Date</th>
                      <th className="py-3 px-4">Flags</th>
                      <th className="py-3 pl-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/15 text-xs">
                    {pendingQueue.map((item) => (
                      <tr key={item.id} className="hover:bg-surface-container/30 transition-colors">
                        <td className="py-3 pr-4 flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover shadow-sm shrink-0" />
                          <div>
                            <span className="block font-bold text-on-surface">{item.name}</span>
                            <span className="block text-[11px] text-on-surface-variant/70">by {item.submittedBy}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-on-surface-variant/80">{item.date}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase border ${
                            item.flags === "CLEAR"
                              ? "bg-green-500/10 text-green-600 border-green-500/20"
                              : "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                          }`}>
                            {item.flags}
                          </span>
                        </td>
                        <td className="py-3 pl-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleAction(item.id, true)}
                              className="p-1.5 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors border border-green-200 cursor-pointer"
                              title="Approve"
                            >
                              <Check size={14} />
                            </button>
                            <button
                              onClick={() => handleAction(item.id, false)}
                              className="p-1.5 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors border border-red-200 cursor-pointer"
                              title="Reject"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* System Activity & Highlights */}
            <div className="space-y-6">
              {/* Activity Card */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-outline-variant/10">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    System Activity
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {MOCK_ADMIN_ACTIVITY.map((act) => (
                    <li key={act.id} className="flex gap-3 items-start text-xs">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        act.type === "user_banned"
                          ? "bg-red-500/10 text-red-600"
                          : act.type === "place_approved"
                          ? "bg-green-500/10 text-green-600"
                          : "bg-yellow-500/10 text-yellow-600"
                      }`}>
                        <span className="material-symbols-outlined text-[14px]">
                          {act.type === "user_banned" ? "block" : act.type === "place_approved" ? "task_alt" : "warning"}
                        </span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <span className="block font-bold text-on-surface">{act.title}</span>
                        <p className="text-on-surface-variant/80 leading-normal">{act.detail}</p>
                        <span className="text-[9px] text-on-surface-variant/60 block font-semibold">{act.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-2.5 bg-surface-container border border-outline-variant/20 rounded-xl hover:bg-surface-container-high transition-colors font-semibold text-xs text-on-surface-variant cursor-pointer mt-2">
                  See Detailed Logs
                </button>
              </div>

              {/* Engagement Peak banner */}
              <div className="bg-gradient-to-br from-tertiary-container/30 to-orange-500/5 border border-outline-variant/20 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-bold text-primary block uppercase tracking-wider">Social Energy</span>
                  <h4 className="font-bold text-on-surface text-xl">Golden Hour</h4>
                  <p className="text-xs text-on-surface-variant/85 leading-normal max-w-[200px]">
                    Platform engagement is peaking.
                  </p>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-8 opacity-10 pointer-events-none">
                  <Sparkles size={120} className="text-primary rotate-12" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid (Regional Growth & Vibe Trends) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regional Growth */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Map size={18} className="text-primary" />
                Regional Growth
              </h3>
              <div className="space-y-4">
                {/* NYC */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>New York City</span>
                    <span className="text-primary">78%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
                  </div>
                </div>
                {/* LA */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Los Angeles</span>
                    <span className="text-secondary">62%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full" style={{ width: "62%" }} />
                  </div>
                </div>
                {/* London */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>London</span>
                    <span className="text-tertiary">45%</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Top Vibe Trends */}
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 shadow-sm space-y-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Top Vibe Trends
              </h3>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { tag: "Coziness", color: "bg-green-500" },
                  { tag: "Golden Hour", color: "bg-orange-500" },
                  { tag: "Rooftop Vibes", color: "bg-amber-600" },
                  { tag: "Hidden Gems", color: "bg-teal-500" },
                  { tag: "Minimalist", color: "bg-slate-400" },
                  { tag: "Insta-worthy", color: "bg-red-500" }
                ].map((item) => (
                  <span
                    key={item.tag}
                    className="flex items-center gap-2 bg-surface-container border border-outline-variant/15 px-4 py-2 rounded-xl text-xs text-on-surface font-semibold hover:border-primary transition-colors cursor-pointer"
                  >
                    <span className={`w-2 h-2 rounded-full ${item.color}`} />
                    {item.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="py-6 border-t border-outline-variant/15 text-center text-[10px] font-semibold text-on-surface-variant/60 flex items-center justify-between px-8 bg-surface-container-lowest">
          <span>© 2024 Spotly Inc. The Sophisticated Socialite's Guide.</span>
          <div className="flex gap-4">
            <Link to="/discover" className="hover:text-primary transition-colors">Browse Categories</Link>
            <Link to="/add-spot" className="hover:text-primary transition-colors">Add a Spot</Link>
            <Link to="/profile" className="hover:text-primary transition-colors">Vibe Guides</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
