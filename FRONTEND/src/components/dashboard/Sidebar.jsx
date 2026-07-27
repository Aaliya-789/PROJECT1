import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaBuilding,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

const Sidebar = ({ role }) => {
  const adminLinks = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Manage Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Complaints",
      path: "/admin/complaints",
      icon: <FaClipboardList />,
    },
    {
      name: "Departments",
      path: "/admin/departments",
      icon: <FaBuilding />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <FaChartBar />,
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: <FaFileAlt />,
    },
  ];

  const departmentLinks = [
    {
      name: "Dashboard",
      path: "/department",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Assigned Complaints",
      path: "/department/assigned",
      icon: <FaClipboardList />,
    },
    {
      name: "Update Status",
      path: "/department/update",
      icon: <FaBuilding />,
    },
    {
      name: "Performance",
      path: "/department/performance",
      icon: <FaChartBar />,
    },
  ];

  const links = role === "admin" ? adminLinks : departmentLinks;

  return (
    <aside className="w-64 min-h-screen bg-[#0F172A] text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        {role === "admin" ? "Admin Panel" : "Department Panel"}
      </h2>

      <nav className="space-y-3">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-teal-500 text-white"
                  : "hover:bg-slate-700"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;
