import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { MOCK_PENDING_PLACES, MOCK_REVIEWS_QUEUE } from "../../data/mockData";

export default function AdminSidebar({
  admin = { name: "Alex Rivera", role: "Super Admin", avatar: "" },
}) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pendingPlacesCount = MOCK_PENDING_PLACES.length;
  const flaggedReviewsCount = MOCK_REVIEWS_QUEUE.filter(
    (r) => r.flagType !== "standard"
  ).length;

  const mainMenu = [
    { label: "Overview", icon: LayoutGrid, to: "/admin" },
    { label: "Users", icon: Users, to: "/admin/users" },
    {
      label: "Places",
      icon: MapPin,
      to: "/admin/places",
      badge: pendingPlacesCount || null,
    },
  ];

  const moderationMenu = [
    {
      label: "Content Monitoring",
      icon: ShieldCheck,
      to: "/admin/moderation",
      badge: flaggedReviewsCount || null,
    },
  ];

  const renderItem = ({ label, icon: Icon, to, badge }) => {
    const active = pathname === to;
    return (
      <Link
        key={to}
        to={to}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
          active
            ? "bg-primary text-on-primary"
            : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
        }`}
      >
        <span className="flex items-center gap-3">
          <Icon size={18} />
          {label}
        </span>
        {badge != null && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              active ? "bg-on-primary/20 text-on-primary" : "bg-primary/10 text-primary"
            }`}
          >
            {badge}
          </span>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Sidebar Header */}
      <div className="md:hidden w-full bg-surface-container-lowest border-b border-outline-variant/30 flex flex-col z-35">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold text-primary">Spotly</span>
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Admin Panel</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full hover:bg-surface-container-high text-on-surface-variant cursor-pointer"
            aria-label="Toggle admin panel menu"
          >
            <span className="material-symbols-outlined text-[22px] flex items-center justify-center">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {mobileOpen && (
          <div className="px-4 pb-5 pt-2 border-t border-outline-variant/10 space-y-4 animate-fade-in">
            <nav className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-wider px-3">
                  Main Menu
                </span>
                <div className="space-y-1 mt-1.5">{mainMenu.map(renderItem)}</div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-wider px-3">
                  Security & Moderation
                </span>
                <div className="space-y-1 mt-1.5">{moderationMenu.map(renderItem)}</div>
              </div>
            </nav>

            <hr className="border-outline-variant/20" />

            <div className="flex items-center gap-3 px-3">
              <img
                src={admin.avatar || "https://i.pravatar.cc/40"}
                alt={admin.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-on-surface truncate">{admin.name}</p>
                <p className="text-[10px] text-on-surface-variant truncate">{admin.role}</p>
              </div>
              <Link to="/discover" className="ml-auto text-xs font-bold text-primary hover:underline">
                Exit Panel
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Sidebar (visible on md+) */}
      <aside className="hidden md:flex w-64 flex-shrink-0 h-screen sticky top-0 bg-surface-container-lowest border-r border-outline-variant/30 flex-col">
        {/* Logo */}
        <div className="px-6 py-6 border-b border-outline-variant/20">
          <span className="text-2xl font-bold text-primary">Spotly</span>
          <p className="text-xs text-on-surface-variant mt-0.5">Admin Panel</p>
        </div>

        {/* Nav groups */}
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider px-3">
              Main Menu
            </span>
            <div className="space-y-1 mt-2">{mainMenu.map(renderItem)}</div>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-on-surface-variant/60 uppercase tracking-wider px-3">
              Security & Moderation
            </span>
            <div className="space-y-1 mt-2">{moderationMenu.map(renderItem)}</div>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-outline-variant/20 space-y-3 bg-surface-container-lowest">
          <div className="flex items-center gap-3 px-3 py-2">
            <img
              src={admin.avatar || "https://i.pravatar.cc/40"}
              alt={admin.name}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-on-surface truncate">{admin.name}</p>
              <p className="text-xs text-on-surface-variant truncate">{admin.role}</p>
            </div>
          </div>
          <Link
            to="/discover"
            className="w-full text-center block text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors border border-outline-variant rounded-lg py-1.5 bg-surface-container-low"
          >
            Exit Panel
          </Link>
        </div>
      </aside>
    </>
  );
}