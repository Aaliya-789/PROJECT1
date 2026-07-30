import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Admin Panel
        </h1>

        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-teal-400">
            Dashboard
          </Link>

          <Link to="/admin/users" className="block hover:text-teal-400">
            Manage Users
          </Link>

          <Link to="/admin/complaints" className="block hover:text-teal-400">
            Complaints
          </Link>

          <Link to="/admin/departments" className="block hover:text-teal-400">
            Departments
          </Link>

          <Link to="/admin/analytics" className="block hover:text-teal-400">
            Analytics
          </Link>

          <Link to="/admin/reports" className="block hover:text-teal-400">
            Reports
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;