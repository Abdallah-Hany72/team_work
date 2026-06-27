import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import StatCard from "../Components/admin/StatCard";
import TagBadge from "../Components/Ui/TagBadge/TagBadge";
import Toast, { useToast } from "../Components/admin/Toast";
import {
  ClipboardList,
  ShieldAlert,
  UserPlus,
  Activity,
  Ban,
  CheckCircle2,
  Megaphone,
  Check,
  X,
} from "lucide-react";
import {
  MOCK_REVIEW_QUEUE_TABLE,
  MOCK_SYSTEM_ACTIVITY,
  MOCK_REGIONAL_GROWTH,
  MOCK_VIBE_TRENDS,
} from "../data/mockData";

const activityIcon = { banned: Ban, approved: CheckCircle2, alert: Megaphone };
const activityColor = {
  banned: "bg-red-100 text-red-600",
  approved: "bg-green-100 text-green-600",
  alert: "bg-yellow-100 text-yellow-700",
};

export default function AdminOverviewPage() {
  const [queue, setQueue] = useState(MOCK_REVIEW_QUEUE_TABLE);
  const [pendingPlaces, setPendingPlaces] = useState(148);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, showToast] = useToast();

  const visibleQueue = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return queue;
    return queue.filter(
      (row) =>
        row.venue.toLowerCase().includes(q) || row.user.toLowerCase().includes(q)
    );
  }, [queue, searchQuery]);

  const resolveRow = (id, approved) => {
    const row = queue.find((r) => r.id === id);
    setQueue((prev) => prev.filter((r) => r.id !== id));
    setPendingPlaces((prev) => Math.max(0, prev - 1));
    if (row) {
      showToast(approved ? `"${row.venue}" approved.` : `"${row.venue}" rejected.`);
    }
  };

  return (
    <AdminLayout>
      <AdminTopbar
        title="Platform Overview"
        subtitle="Real-time control center for Spotly's social ecosystem."
        placeholder="Check reports or user activity..."
        onSearch={setSearchQuery}
      />
      <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={ClipboardList}
            label="Pending Places"
            value={pendingPlaces.toLocaleString()}
            trend={12}
          />
          <StatCard
            icon={ShieldAlert}
            label="Offensive Reviews"
            value="32"
            trend={-3}
          />
          <StatCard
            icon={UserPlus}
            label="New Users Today"
            value="1,204"
            trend={42}
          />
          <StatCard
            icon={Activity}
            label="Review Health Score"
            value="98.2%"
            highlight
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-container rounded-2xl border border-outline-variant/20 p-4 sm:p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-bold text-on-surface">Review Queue</h2>
                <p className="text-sm text-on-surface-variant">
                  Moderation required for new venue submissions.
                </p>
              </div>
              <Link
                to="/admin/places"
                className="text-sm font-semibold text-primary hover:underline"
              >
                View All Queue
              </Link>
            </div>
            {visibleQueue.length === 0 ? (
              <div className="py-10 text-center text-sm text-on-surface-variant">
                {queue.length === 0
                  ? "Queue is clear — nothing waiting on review."
                  : "No submissions match your search."}
              </div>
            ) : (
              <div className="overflow-x-auto w-full">
                <table className="w-full text-sm min-w-[500px]">
                  <thead className="text-xs text-on-surface-variant uppercase">
                    <tr>
                      <th className="text-left pb-2 font-semibold">Venue / User</th>
                      <th className="text-left pb-2 font-semibold">
                        Submission Date
                      </th>
                      <th className="text-left pb-2 font-semibold">Flags</th>
                      <th className="text-right pb-2 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleQueue.map((row) => (
                      <tr
                        key={row.id}
                        className="border-t border-outline-variant/10"
                      >
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={row.image}
                              alt={row.venue}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                            <div>
                              <p className="font-semibold text-on-surface">
                                {row.venue}
                              </p>
                              <p className="text-xs text-on-surface-variant">
                                by {row.user}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-on-surface-variant">{row.date}</td>
                        <td className="py-3">
                          <TagBadge
                            variant={row.flag === "CLEAR" ? "success" : "warning"}
                            size="sm"
                          >
                            {row.flag}
                          </TagBadge>
                        </td>
                        <td className="py-3 text-right">
                          <div className="flex justify-end gap-2">
                            <button
                              onClick={() => resolveRow(row.id, true)}
                              title="Approve"
                              className="p-1.5 rounded-full text-green-600 hover:bg-green-50 cursor-pointer"
                            >
                              <Check size={16} />
                            </button>
                            <button
                              onClick={() => resolveRow(row.id, false)}
                              title="Reject"
                              className="p-1.5 rounded-full text-red-500 hover:bg-red-50 cursor-pointer"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-6 space-y-4">
            <h2 className="font-bold text-on-surface">System Activity</h2>
            <div className="space-y-4">
              {MOCK_SYSTEM_ACTIVITY.map((item) => {
                const Icon = activityIcon[item.type];
                return (
                  <div key={item.id} className="flex gap-3">
                    <span
                      className={`p-2 rounded-full flex-shrink-0 ${activityColor[item.type]}`}
                    >
                      <Icon size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-on-surface">
                        {item.title}
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        {item.detail}
                      </p>
                      <p className="text-xs text-on-surface-variant/60 mt-0.5">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link
              to="/admin/moderation"
              className="w-full block text-center text-sm font-semibold text-primary border border-outline-variant rounded-xl py-2 hover:bg-surface-container-high transition-colors"
            >
              See Detailed Logs
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-4 sm:p-6 space-y-4">
            <h2 className="font-bold text-on-surface">Regional Growth</h2>
            {MOCK_REGIONAL_GROWTH.map((region) => (
              <div key={region.city} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface font-medium">
                    {region.city}
                  </span>
                  <span className="text-on-surface-variant">
                    {region.percent}%
                  </span>
                </div>
                <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${region.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-container rounded-2xl border border-outline-variant/20 p-6 space-y-4">
            <h2 className="font-bold text-on-surface">Top Vibe Trends</h2>
            <div className="flex flex-wrap gap-2">
              {MOCK_VIBE_TRENDS.map((trend) => (
                <TagBadge key={trend} variant="secondary" size="sm">
                  {trend}
                </TagBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toast toast={toast} />
    </AdminLayout>
  );
}