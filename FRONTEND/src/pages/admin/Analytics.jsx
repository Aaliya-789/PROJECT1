import StatsCard from "../../components/dashboard/StatsCard";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";

const Analytics = () => {
  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-bold">
        Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StatsCard
          title="Total Users"
          value="1,250"
          color="bg-blue-500"
        />

        <StatsCard
          title="Complaints"
          value="580"
          color="bg-orange-500"
        />

        <StatsCard
          title="Resolved"
          value="430"
          color="bg-green-500"
        />

      </div>

      <AnalyticsChart />

    </div>
  );
};

export default Analytics;