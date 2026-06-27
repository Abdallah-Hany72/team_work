// src/Components/shared/AdminNavbar.jsx
import React from "react";
import { Search, Bell, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminNavbar({ title }) {
  return (
    <header className="w-full h-16 border-b border-outline-variant/30 bg-surface-container-lowest px-8 flex items-center justify-between sticky top-0 z-30 shrink-0">
      {/* Search Input */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        {title ? (
          <h1 className="font-display-lg text-headline-md text-on-surface font-extrabold">{title}</h1>
        ) : (
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={16} />
            <input
              type="text"
              placeholder="Search reports or user activity..."
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-full pl-10 pr-4 py-2 text-xs outline-none focus:border-primary transition-colors text-on-surface"
            />
          </div>
        )}
      </div>

      {/* Admin Actions */}
      <div className="flex items-center gap-6 text-on-surface-variant">
        {title && (
          <div className="hidden sm:flex items-center bg-surface-container-low border border-outline-variant/20 rounded-full pl-3 pr-10 py-1.5 w-72 focus-within:ring-2 focus-within:ring-primary/20 transition-all text-xs">
            <Search size={14} className="text-on-surface-variant/60 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Find a platform user by name..."
              className="bg-transparent border-none outline-none text-[11px] w-full text-on-surface"
            />
          </div>
        )}

        <button className="hover:text-primary transition-colors cursor-pointer relative" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full ring-2 ring-surface-container-lowest" />
        </button>

        <Link to="/" className="hover:text-primary transition-colors text-xs font-semibold flex items-center gap-1.5 px-3 py-1.5 border border-outline-variant/30 rounded-lg bg-surface-container-low">
          Exit Admin
        </Link>
      </div>
    </header>
  );
}
