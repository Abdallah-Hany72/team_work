// src/Components/admin/AdminTopbar.jsx
import { Search, Bell, Heart } from "lucide-react";

export default function AdminTopbar({ placeholder = "Search...", title, subtitle, onSearch }) {
  return (
    <header className="flex items-center justify-between gap-6 px-8 py-5 border-b border-outline-variant/20 bg-surface-container-lowest">
      <div>
        {title && <h1 className="text-2xl font-bold text-on-surface">{title}</h1>}
        {subtitle && <p className="text-sm text-on-surface-variant mt-0.5">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="bg-surface-container border border-outline-variant rounded-xl pl-9 pr-4 py-2 text-sm w-72 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        
      </div>
    </header>
  );
}