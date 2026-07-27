import { Outlet } from "react-router-dom";

const DepartmentLayout = () => {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          Department Panel
        </h1>

        <nav className="space-y-4">

          <a href="#" className="block hover:text-teal-400">
            Dashboard
          </a>

          <a href="#" className="block hover:text-teal-400">
            Assigned Complaints
          </a>

          <a href="#" className="block hover:text-teal-400">
            Update Status
          </a>

          <a href="#" className="block hover:text-teal-400">
            Performance
          </a>

        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>

    </div>
  );
};

export default DepartmentLayout;