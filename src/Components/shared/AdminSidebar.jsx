// src/Components/shared/AdminSidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, MapPin, MessageSquare, ShieldAlert, FileText, Settings, Radio } from "lucide-react";

export default function AdminSidebar() {
  const location = useLocation();
  const path = location.pathname;

  const menuItems = [
    { label: "Overview", icon: LayoutDashboard, route: "/admin" },
    { label: "Users", icon: Users, route: "/admin/users" },
    { label: "Places", icon: MapPin, route: "/admin/places" },
    { label: "Reviews", icon: MessageSquare, route: "/admin/reviews" }
  ];

  return (
    <aside className="w-64 border-r border-outline-variant/30 bg-surface-container-lowest h-screen flex flex-col justify-between shrink-0 p-6">
      <div className="space-y-8">
        {/* Brand Header */}
        <div>
          <span className="font-display-lg text-headline-lg font-bold text-primary block">Spotly</span>
          <span className="text-[10px] text-on-surface-variant/70 tracking-widest font-bold uppercase">Admin Panel</span>
        </div>

        {/* Menu Navigation */}
        <div className="space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/50 uppercase block mb-3">
              Main Menu
            </span>
            <ul className="space-y-1.5">
              {menuItems.map((item) => {
                const isActive = path === item.route;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.route}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-label-md transition-all ${
                        isActive
                          ? "bg-primary text-on-primary font-bold shadow-md shadow-primary/10"
                          : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <span className="text-[10px] font-bold tracking-wider text-on-surface-variant/50 uppercase block mb-3">
              Security & Moderation
            </span>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/admin/reviews"
                  className="flex items-center justify-between text-on-surface-variant hover:bg-surface-container hover:text-on-surface px-4 py-2.5 rounded-xl font-label-md"
                >
                  <div className="flex items-center gap-3">
                    <ShieldAlert size={18} />
                    <span className="text-sm">Content Monitoring</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/places"
                  className="flex items-center justify-between text-on-surface-variant hover:bg-surface-container hover:text-on-surface px-4 py-2.5 rounded-xl font-label-md"
                >
                  <div className="flex items-center gap-3">
                    <Radio size={18} />
                    <span className="text-sm">Pending Queue</span>
                  </div>
                  <span className="bg-primary-container text-on-primary-container text-[11px] font-bold px-2 py-0.5 rounded-full">
                    14
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* System Status and Profile footer */}
      <div className="space-y-4 pt-6 border-t border-outline-variant/25">
        <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 text-xs">
          <span className="block font-semibold text-on-surface-variant mb-1 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block animate-pulse" />
            System Status
          </span>
          <p className="text-[11px] text-on-surface-variant/80 mb-2">All systems operational</p>
          <button className="w-full py-1.5 bg-surface-container-lowest border border-outline-variant/30 rounded-lg hover:bg-surface-container hover:text-primary transition-all text-[11px] font-semibold text-on-surface-variant cursor-pointer">
            View Logs
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
            alt="Admin Profile"
            className="w-9 h-9 rounded-full object-cover border border-outline-variant/30"
          />
          <div>
            <span className="block text-xs font-bold text-on-surface">Alex Rivera</span>
            <span className="block text-[10px] text-on-surface-variant/75">Platform Admin</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
