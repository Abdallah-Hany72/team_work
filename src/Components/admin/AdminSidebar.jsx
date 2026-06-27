// src/Components/admin/AdminSidebar.jsx
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  MapPin,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  AlertCircle,
  Settings,
} from "lucide-react";

const mainMenu = [
  { label: "Overview", icon: LayoutGrid, to: "/admin" },
  { label: "Users", icon: Users, to: "/admin/users" },
  { label: "Places", icon: MapPin, to: "/admin/places" },
];

const moderationMenu = [
  { label: "Content Monitoring", icon: ShieldCheck, to: "/admin/moderation" },

];

export default function AdminSidebar({
  admin = { name: "Alex Rivera", role: "Super Admin", avatar: "" },
}) {
  const { pathname } = useLocation();

  const renderItem = ({ label, icon: Icon, to, badge }) => {
    const active = pathname === to;
    return (
      <Link
        key={to}
        to={to}
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
    <aside className="w-64 flex-shrink-0 h-screen sticky top-0 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col">
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
      <div className="px-4 py-4 border-t border-outline-variant/20 space-y-3">
        
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
      </div>
    </aside>
  );
}