import { useMemo, useState } from "react";
import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import UsersTable from "../Components/admin/UsersTable";
import Toast, { useToast } from "../Components/admin/Toast";
import { MOCK_USERS } from "../data/mockData";

const TABS = ["All Users", "Active", "Banned"];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [activeTab, setActiveTab] = useState("All Users");
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, showToast] = useToast();

  const activeCount = users.filter((u) => u.status === "active").length;
  const bannedCount = users.filter((u) => u.status === "banned").length;
  const tabCounts = { "All Users": users.length, Active: activeCount, Banned: bannedCount };

  const filteredUsers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return users.filter((user) => {
      const matchesTab =
        activeTab === "All Users" || user.status === activeTab.toLowerCase();
      const matchesSearch =
        !q ||
        user.name.toLowerCase().includes(q) ||
        user.email.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [users, activeTab, searchQuery]);

  const handleToggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) => {
        if (user.id !== id) return user;
        const newStatus = user.status === "active" ? "banned" : "active";
        showToast(
          newStatus === "banned" ? `${user.name} was banned.` : `${user.name} was unbanned.`
        );
        return { ...user, status: newStatus };
      })
    );
  };

  return (
    <AdminLayout>
      <AdminTopbar
        title="User Management"
        placeholder="Find a platform user by name or email..."
        onSearch={setSearchQuery}
      />
      <div className="p-4 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === tab
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab} ({tabCounts[tab]})
              </button>
            ))}
          </div>
          <p className="text-sm text-on-surface-variant">
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>
        <UsersTable users={filteredUsers} onToggleStatus={handleToggleStatus} />
      </div>
      <Toast toast={toast} />
    </AdminLayout>
  );
}