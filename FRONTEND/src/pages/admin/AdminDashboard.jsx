import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

import {
  FaUsers,
  FaExclamationCircle,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

const AdminDashboard = () => {
  // Temporary statistics
  const stats = [
    {
      title: "Total Users",
      value: 1200,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Complaints",
      value: 350,
      icon: <FaExclamationCircle />,
      color: "bg-orange-500",
    },
    {
      title: "Resolved",
      value: 280,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "Departments",
      value: 12,
      icon: <FaBuilding />,
      color: "bg-purple-500",
    },
  ];

  // Temporary complaint data
  const complaints = [
    {
      id: 1,
      title: "Pothole on Main Road",
      category: "Road",
      status: "Pending",
    },
    {
      id: 2,
      title: "Streetlight Not Working",
      category: "Electricity",
      status: "Resolved",
    },
    {
      id: 3,
      title: "Garbage Overflow",
      category: "Sanitation",
      status: "In Progress",
    },
  ];

  // Temporary chart data
  const chartData = [
    { month: "Jan", complaints: 30 },
    { month: "Feb", complaints: 45 },
    { month: "Mar", complaints: 60 },
    { month: "Apr", complaints: 40 },
    { month: "May", complaints: 70 },
    { month: "Jun", complaints: 55 },
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader title="Admin Dashboard" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      <RecentComplaints complaints={complaints} />

      <AnalyticsChart data={chartData} />
    </div>
  );
};

export default AdminDashboard;