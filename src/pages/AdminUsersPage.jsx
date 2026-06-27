import AdminLayout from "../Components/admin/AdminLayout";
import AdminTopbar from "../Components/admin/AdminTopbar";
import UsersTable from "../Components/admin/UsersTable";
import { MOCK_USERS } from "../data/mockData";

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <AdminTopbar
        title="User Management"
        placeholder="Find a platform user by name or email..."
      />
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl bg-primary text-on-primary text-sm font-semibold">
              All Users
            </button>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high">
              Active
            </button>
            <button className="px-4 py-2 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container-high">
              Banned
            </button>
          </div>
          <p className="text-sm text-on-surface-variant">
            Showing 1 to {MOCK_USERS.length} of {MOCK_USERS.length} users
          </p>
        </div>
        <UsersTable users={MOCK_USERS} />
      </div>
    </AdminLayout>
  );
}
