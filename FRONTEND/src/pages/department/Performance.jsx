import DashboardHeader from "../../components/dashboard/DashboardHeader";
import StatsCard from "../../components/dashboard/StatsCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";

const DepartmentDashboard = () => {
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
      title: "Potholes",
      location: "FC Road",
      status: "Resolved",
    },
  ];

  return (
    <div className="space-y-8">

      <DashboardHeader
        title="Department Dashboard"
        subtitle="Manage assigned civic complaints"
      />

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

      <RecentComplaints complaints={complaints} />

    </div>
  );
};

export default DepartmentDashboard;