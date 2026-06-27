// src/Components/admin/AdminTopbar.jsx
import { Search, Bell, Heart } from "lucide-react";

export default function AdminTopbar({ placeholder = "Search...", title, subtitle, onSearch }) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-8 py-4 sm:py-5 border-b border-outline-variant/20 bg-surface-container-lowest w-full">
      <div>
        {title && <h1 className="text-xl sm:text-2xl font-bold text-on-surface leading-tight">{title}</h1>}
        {subtitle && <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative w-full sm:w-auto">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="bg-surface-container border border-outline-variant rounded-xl pl-9 pr-4 py-2 text-sm w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-on-surface font-semibold"
          />
        </div>
      </div>
    </header>
  );
}