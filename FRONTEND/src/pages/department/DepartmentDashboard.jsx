import { Link } from "react-router-dom";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";

const DepartmentDashboard = () => {
  const department = {
    officer: "Rajesh Kumar",
    name: "Electricity Department",
  };

  const stats = [
    {
      title: "Assigned",
      value: 24,
      color: "bg-blue-500",
    },
    {
      title: "In Progress",
      value: 12,
      color: "bg-yellow-500",
    },
    {
      title: "Resolved",
      value: 18,
      color: "bg-green-500",
    },
    {
      title: "Pending",
      value: 6,
      color: "bg-red-500",
    },
  ];

  const complaints = [
    {
      id: 1,
      title: "Street Light Not Working",
      location: "MG Road",
      status: "Assigned",
    },
    {
      id: 2,
      title: "Garbage Collection Delay",
      location: "Shivaji Nagar",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Water Leakage",
      location: "Kothrud",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-8">

      <DashboardHeader
        title="Department Dashboard"
        subtitle="Manage assigned civic complaints"
      />

      {/* Welcome Section */}

      <div className="bg-white rounded-lg shadow-md p-6">

        <h3 className="text-xl font-bold">
          Welcome, {department.officer}
        </h3>

        <p className="text-gray-600 mt-2">
          {department.name}
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((item, index) => (
          <StatsCard
            key={index}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}

      </div>

      {/* Recent Complaints */}

      <RecentComplaints complaints={complaints} />

      {/* Quick Actions */}

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
            to="/department/update"
            className="bg-yellow-500 text-white text-center py-3 rounded-lg hover:bg-yellow-600"
          >
            Update Complaint
          </Link>

        </div>

      </div>

    </div>
  );
};

export default DepartmentDashboard;