import { FaBell } from "react-icons/fa";

const NotificationBell = ({ count = 3 }) => {
  return (
    <button className="relative p-2 rounded-full hover:bg-slate-100 transition duration-300">

      {/* Bell Icon */}
      <FaBell
        size={22}
        className="text-slate-700"
      />

      {/* Notification Badge */}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-semibold">
          {count}
        </span>
      )}

    </button>
  );
};

export default NotificationBell;