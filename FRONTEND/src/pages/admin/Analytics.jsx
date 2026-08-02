import { useEffect, useState } from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import { getAnalytics } from "../../services/adminService";

const Analytics = () => {
  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalComplaints: 0,
    resolvedComplaints: 0,
    chartData: [],
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getAnalytics(token);

      console.log("Analytics:", data);

      if (data.success) {
        setAnalytics(data);
      }
    } catch (error) {
      console.log(error);
      alert("Failed to load analytics");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Users"
          value={analytics.totalUsers}
          color="bg-blue-500"
        />

        <StatsCard
          title="Complaints"
          value={analytics.totalComplaints}
          color="bg-orange-500"
        />

        <StatsCard
          title="Resolved"
          value={analytics.resolvedComplaints}
          color="bg-green-500"
        />
      </div>

      <AnalyticsChart data={analytics.chartData} />
    </div>
  );
};

export default Analytics;