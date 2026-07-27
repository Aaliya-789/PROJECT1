import { FaUserCircle } from "react-icons/fa";
import NotificationBell from "../common/NotificationBell";

const DashboardHeader = ({ title }) => {
  return (
    <header className="bg-white shadow-sm rounded-xl px-6 py-4 flex items-center justify-between mb-6">

      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          {title}
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <NotificationBell />

        <div className="flex items-center gap-2">

          <FaUserCircle
            size={35}
            className="text-slate-600"
          />

          <div>

            <h3 className="font-semibold">
              Admin
            </h3>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;