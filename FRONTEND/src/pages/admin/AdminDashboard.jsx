import { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";

import {
  FaUsers,
  FaExclamationCircle,
  FaCheckCircle,
  FaBuilding,
} from "react-icons/fa";

import { getDashboardStats } from "../../services/adminService";
const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalCitizens: 0,
    totalComplaints: 0,
    resolved: 0,
    totalDepartments: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getDashboardStats(token);

      console.log("Dashboard Response:", response);

      if (response.success) {
        setStats(response.stats);
      }
    } catch (error) {
      console.log(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  const cards = [
    {
      title: "Total Citizens",
      value: stats.totalCitizens,
      icon: <FaUsers />,
      color: "bg-blue-500",
    },
    {
      title: "Total Complaints",
      value: stats.totalComplaints,
      icon: <FaExclamationCircle />,
      color: "bg-orange-500",
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: <FaCheckCircle />,
      color: "bg-green-500",
    },
    {
      title: "Departments",
      value: stats.totalDepartments,
      icon: <FaBuilding />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader title="Admin Dashboard" />

      {loading ? (
        <p className="text-center text-lg font-semibold">
          Loading Dashboard...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;