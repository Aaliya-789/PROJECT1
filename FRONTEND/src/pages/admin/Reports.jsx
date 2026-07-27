import { FaDownload } from "react-icons/fa";

const Reports = () => {
  const reports = [
    {
      id: 1,
      reportName: "Monthly Complaint Report",
      date: "01 July 2026",
      status: "Generated",
    },
    {
      id: 2,
      reportName: "Department Performance Report",
      date: "15 July 2026",
      status: "Generated",
    },
    {
      id: 3,
      reportName: "Citizen Activity Report",
      date: "25 July 2026",
      status: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Reports
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">Report Name</th>
              <th className="p-3 text-left">Generated Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Download</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-3">{report.reportName}</td>

                <td className="p-3">{report.date}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      report.status === "Generated"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex justify-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaDownload />
                    </button>
                  </div>
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