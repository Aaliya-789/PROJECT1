import { Link } from "react-router-dom";

const DepartmentLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-white p-6">
        <h1 className="text-2xl font-bold mb-8">
          Department Panel
        </h1>

        <nav className="space-y-4">
          <Link
            to="/department/dashboard"
            className="block hover:text-teal-400"
          >
            Dashboard
          </Link>

          <Link
            to="/department/complaints"
            className="block hover:text-teal-400"
          >
            Assigned Complaints
          </Link>

          <Link
            to="/department/details"
            className="block hover:text-teal-400"
          >
            Complaint Details
          </Link>

          <Link
            to="/department/update"
            className="block hover:text-teal-400"
          >
            Update Status
          </Link>

          <Link
            to="/department/performance"
            className="block hover:text-teal-400"
          >
            Performance
          </Link>

          <Link
            to="/department/profile"
            className="block hover:text-teal-400"
          >
            Department Profile
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

export default DepartmentLayout;