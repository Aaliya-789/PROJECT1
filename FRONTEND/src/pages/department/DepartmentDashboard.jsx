import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";

import { getDepartmentDashboard } from "../../services/departmentDashboardService";

const DepartmentDashboard = () => {
  const [department, setDepartment] = useState({
    officer: "",
    name: "",
  });

  const [stats, setStats] = useState({
    assigned: 0,
    inProgress: 0,
    resolved: 0,
    pending: 0,
  });

  const [complaints, setComplaints] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await getDepartmentDashboard(token);

      console.log(response);

      if (response.success) {
        setDepartment({
          officer: response.officer,
          name: response.department,
        });

        setStats(response.stats);

        setComplaints(response.complaints);
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
      title: "Assigned",
      value: stats.assigned,
      color: "bg-blue-500",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      color: "bg-yellow-500",
    },
    {
      title: "Resolved",
      value: stats.resolved,
      color: "bg-green-500",
    },
    {
      title: "Pending",
      value: stats.pending,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Department Dashboard"
        subtitle="Manage assigned civic complaints"
      />

      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold">
              Welcome, {department.officer}
            </h3>

            <p className="text-gray-600 mt-2">
              {department.name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((item, index) => (
              <StatsCard
                key={index}
                title={item.title}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

          <RecentComplaints complaints={complaints} />

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">
              Quick Actions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/department/complaints"
                className="bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700"
              >
                View Complaints
              </Link>

              <Link
                to="/department/profile"
                className="bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700"
              >
                Department Profile
              </Link>

              <Link
  to="/department/complaints"
  className="bg-yellow-500 text-white text-center py-3 rounded-lg hover:bg-yellow-600"
>
  Update Complaint
</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DepartmentDashboard;