// src/Components/admin/StatusBadge.jsx
import Badge from "../Ui/Badge/Badge";

const statusConfig = {
  active: { variant: "success", dot: "bg-green-600" },
  banned: { variant: "danger", dot: "bg-red-600" },
  pending: { variant: "warning", dot: "bg-yellow-600" },
};

export default function StatusBadge({ status = "active" }) {
  const config = statusConfig[status] || statusConfig.active;

  return (
    <Badge variant={config.variant} size="sm" className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
}