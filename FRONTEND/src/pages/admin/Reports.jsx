import { useEffect, useState } from "react";
import { getReports } from "../../services/adminService";

const Reports = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token");
      const data = await getReports(token);
      setReport(data);
    } catch (error) {
      console.log(error);
      alert("Failed to load reports");
    }
  };

  if (!report) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">
        Reports
      </h2>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-500 text-white rounded-lg p-5">
          <p>Total Complaints</p>
          <h2 className="text-3xl font-bold">
            {report.totalComplaints}
          </h2>
        </div>

        <div className="bg-green-500 text-white rounded-lg p-5">
          <p>Resolved</p>
          <h2 className="text-3xl font-bold">
            {report.resolved}
          </h2>
        </div>

        <div className="bg-yellow-500 text-white rounded-lg p-5">
          <p>Pending</p>
          <h2 className="text-3xl font-bold">
            {report.pending}
          </h2>
        </div>

      </div>

      {/* Category Report */}
      <div className="bg-white rounded-lg shadow p-5">

        <h3 className="text-xl font-semibold mb-4">
          Complaints by Category
        </h3>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Category</th>
              <th className="text-left p-2">Count</th>
            </tr>
          </thead>

          <tbody>
            {report.categoryReport.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-2">{item._id}</td>
                <td className="p-2">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Department Report */}
      <div className="bg-white rounded-lg shadow p-5">

        <h3 className="text-xl font-semibold mb-4">
          Complaints by Department
        </h3>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Department</th>
              <th className="text-left p-2">Count</th>
            </tr>
          </thead>

          <tbody>
            {report.departmentReport.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">
                  {item._id || "Unassigned"}
                </td>

                <td className="p-2">
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
};

export default Reports;