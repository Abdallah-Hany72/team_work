// src/Components/admin/UsersTable.jsx
import { ArrowLeftRight } from "lucide-react";
import TagBadge from "../Ui/TagBadge/TagBadge";

const statusVariant = { active: "success", banned: "danger", pending: "warning" };
const statusDot = { active: "bg-green-600", banned: "bg-red-600", pending: "bg-yellow-600" };

export default function UsersTable({ users = [], onToggleStatus }) {
  return (
    <div className="bg-surface-container rounded-2xl border border-outline-variant/20 overflow-hidden">
      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm min-w-[650px]">
          <thead className="bg-surface-container-high text-on-surface-variant text-xs uppercase">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">User Name</th>
              <th className="text-left px-5 py-3 font-semibold">Email</th>
              <th className="text-left px-5 py-3 font-semibold">Join Date</th>
              <th className="text-left px-5 py-3 font-semibold">Contribution Stats</th>
              <th className="text-left px-5 py-3 font-semibold">Status</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-10 text-center text-on-surface-variant">
                  No users match your filters.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-t border-outline-variant/10">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover" />
                      <span className="font-semibold text-on-surface">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-on-surface-variant">{user.email}</td>
                  <td className="px-5 py-4 text-on-surface-variant">{user.joinDate}</td>
                  <td className="px-5 py-4">
                    <span className="text-primary font-semibold">{user.spots}</span>{" "}
                    <span className="text-on-surface-variant">spots</span>
                    <span className="mx-2 text-outline-variant">·</span>
                    <span className="text-on-surface font-semibold">{user.reviews}</span>{" "}
                    <span className="text-on-surface-variant">reviews</span>
                  </td>
                  <td className="px-5 py-4">
                    <TagBadge variant={statusVariant[user.status]} size="sm" className="flex items-center gap-1.5 w-fit">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[user.status]}`} />
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </TagBadge>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => onToggleStatus?.(user.id)}
                      className="px-3 py-1.5 rounded-lg border border-outline-variant/30 hover:bg-surface-container-high hover:text-primary transition-all text-xs font-semibold text-on-surface-variant cursor-pointer inline-flex items-center gap-1.5"
                    >
                      <ArrowLeftRight size={12} />
                      {user.status === "active" ? "Ban" : "Unban"}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}