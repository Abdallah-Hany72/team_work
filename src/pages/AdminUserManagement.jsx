// src/pages/AdminUserManagement.jsx
import React, { useState } from "react";
import AdminSidebar from "../Components/shared/AdminSidebar";
import AdminNavbar from "../Components/shared/AdminNavbar";
import { UserPlus, ArrowLeftRight } from "lucide-react";
import { MOCK_ADMIN_USERS } from "../constants/mockData";
import { Link } from "react-router-dom";

export default function AdminUserManagement() {
  const [users, setUsers] = useState(MOCK_ADMIN_USERS);
  const [activeTab, setActiveTab] = useState("All Users");
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === id) {
          const newStatus = user.status === "Active" ? "Banned" : "Active";
          alert(`User status changed to ${newStatus}`);
          return { ...user, status: newStatus };
        }
        return user;
      })
    );
  };

  // Filter logic
  const filteredUsers = users.filter((user) => {
    const matchesTab =
      activeTab === "All Users" || user.status === activeTab;
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex h-screen bg-background text-on-surface overflow-hidden">
      <AdminSidebar />

      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <AdminNavbar title="User Management" />

        <main className="p-8 space-y-8 flex-1">
          {/* Top Actions Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="bg-surface-container rounded-2xl p-1.5 flex gap-1 border border-outline-variant/10 text-xs font-semibold">
              {["All Users", "Active", "Banned"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-surface-container-lowest text-primary font-extrabold shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Invite button & counts */}
            <div className="flex flex-wrap items-center gap-6 text-xs shrink-0">
              <div className="flex gap-4">
                <div>
                  <span className="text-on-surface-variant/70 block">Total Users</span>
                  <span className="font-extrabold text-primary text-base">12,842</span>
                </div>
                <div className="border-r border-outline-variant/30" />
                <div>
                  <span className="text-on-surface-variant/70 block">Active Today</span>
                  <span className="font-extrabold text-secondary text-base">3,105</span>
                </div>
              </div>
              
              <button
                onClick={() => alert("Inviting new Administrator...")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <UserPlus size={16} />
                Invite Admin
              </button>
            </div>
          </div>

          {/* User Search Input */}
          <div className="w-full max-w-xl bg-surface-container-low border border-outline-variant/20 rounded-full pl-4 pr-10 py-3 flex items-center text-xs">
            <input
              type="text"
              placeholder="Find a platform user by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none text-xs w-full text-on-surface"
            />
          </div>

          {/* Table Container */}
          <div className="bg-surface-container-low border border-outline-variant/10 rounded-2xl p-6 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-outline-variant/20 text-on-surface-variant/70 font-bold uppercase tracking-wider">
                    <th className="py-4 pr-4">User Name</th>
                    <th className="py-4 px-4">Email</th>
                    <th className="py-4 px-4">Join Date</th>
                    <th className="py-4 px-4">Contribution Stats</th>
                    <th className="py-4 px-4">Status</th>
                    <th className="py-4 pl-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/15 text-xs">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-surface-container/30 transition-colors">
                      <td className="py-4 pr-4 flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-9 h-9 rounded-full object-cover shadow-sm shrink-0 border border-outline-variant/10"
                        />
                        <span className="font-bold text-on-surface">{user.name}</span>
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant/90 font-medium">{user.email}</td>
                      <td className="py-4 px-4 text-on-surface-variant/80">{user.joinDate}</td>
                      <td className="py-4 px-4">
                        <div className="flex gap-4">
                          <div>
                            <span className="font-bold text-on-surface block text-xs">{user.spots}</span>
                            <span className="text-[9px] uppercase tracking-wider font-semibold text-on-surface-variant/60">Spots</span>
                          </div>
                          <div>
                            <span className="font-bold text-on-surface block text-xs">{user.reviews}</span>
                            <span className="text-[9px] uppercase tracking-wider font-semibold text-on-surface-variant/60">Reviews</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase border ${
                          user.status === "Active"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-red-500/10 text-red-600 border-red-500/20"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 pl-4 text-right">
                        <button
                          onClick={() => handleToggleStatus(user.id)}
                          className="px-3.5 py-1.5 rounded-lg border border-outline-variant/30 hover:bg-surface-container hover:text-primary transition-all text-[11px] font-semibold text-on-surface-variant cursor-pointer flex items-center gap-1.5 ml-auto"
                        >
                          <ArrowLeftRight size={12} />
                          Toggle Ban
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-6 border-t border-outline-variant/15 text-xs text-on-surface-variant/75">
              <span>Showing 1 to {filteredUsers.length} of 12,842 users</span>
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-surface-container transition-colors disabled:opacity-50" disabled>
                  &lt;
                </button>
                <button className="w-8 h-8 rounded-lg bg-primary text-on-primary font-bold">1</button>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container font-semibold transition-colors">2</button>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container font-semibold transition-colors">3</button>
                <span className="px-1 text-on-surface-variant/50">...</span>
                <button className="w-8 h-8 rounded-lg hover:bg-surface-container font-semibold transition-colors">128</button>
                <button className="p-1 rounded hover:bg-surface-container transition-colors">
                  &gt;
                </button>
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
