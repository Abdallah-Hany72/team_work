// src/Components/admin/StatCard.jsx
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({ icon: Icon, label, value, trend, highlight = false }) {
  const isPositive = trend != null && trend >= 0;

  return (
    <div
      className={`rounded-2xl p-5 flex flex-col gap-2 ${
        highlight
          ? "bg-primary text-on-primary"
          : "bg-surface-container border border-outline-variant/20"
      }`}
    >
      <div className="flex items-center justify-between">
        {Icon && (
          <span className={`p-2 rounded-xl ${highlight ? "bg-on-primary/15" : "bg-primary/10 text-primary"}`}>
            <Icon size={16} />
          </span>
        )}
        {trend != null && (
          <span
            className={`flex items-center gap-1 text-xs font-semibold ${
              highlight ? "text-on-primary/90" : isPositive ? "text-green-600" : "text-red-500"
            }`}
          >
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(trend)}%
          </span>
        )}
      </div>
      <span className={`text-3xl font-bold ${highlight ? "text-on-primary" : "text-on-surface"}`}>
        {value}
      </span>
      <span className={`text-sm ${highlight ? "text-on-primary/80" : "text-on-surface-variant"}`}>
        {label}
      </span>
    </div>
  );
}