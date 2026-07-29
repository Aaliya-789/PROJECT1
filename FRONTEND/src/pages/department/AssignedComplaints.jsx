import { useState } from "react";
import { Link } from "react-router-dom";

const AssignedComplaints = () => {
  const complaints = [
    {
      id: 1,
      title: "Street Light Not Working",
      citizen: "Rahul Sharma",
      location: "MG Road",
      status: "Assigned",
      reportedOn: "2026-07-25",
    },
    {
      id: 2,
      title: "Garbage Collection Delay",
      citizen: "Priya Patil",
      location: "Shivaji Nagar",
      status: "In Progress",
      reportedOn: "2026-07-22",
    },
    {
      id: 3,
      title: "Water Leakage",
      citizen: "Amit Joshi",
      location: "Kothrud",
      status: "Pending",
      reportedOn: "2026-07-20",
    },
    {
      id: 4,
      title: "Road Potholes",
      citizen: "Sneha Kulkarni",
      location: "Baner",
      status: "Resolved",
      reportedOn: "2026-07-18",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filteredComplaints = complaints
    .filter((complaint) => {
      const matchesSearch =
        complaint.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        complaint.location
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        complaint.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.reportedOn) - new Date(a.reportedOn);
      }

      return new Date(a.reportedOn) - new Date(b.reportedOn);
    });

  const getStatusColor = (status) => {
    switch (status) {
      case "Assigned":
        return "bg-blue-100 text-blue-700";

      case "In Progress":
        return "bg-yellow-100 text-yellow-700";

      case "Resolved":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Assigned Complaints
        </h2>

        <p className="text-gray-600">
          Total Complaints : {filteredComplaints.length}
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <input
          type="text"
          placeholder="Search complaint..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option>All</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg p-3"
        >
          <option>Newest</option>
          <option>Oldest</option>
        </select>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-gray-100">

              <th className="border p-3">ID</th>
              <th className="border p-3 text-left">Complaint</th>
              <th className="border p-3 text-left">Citizen</th>
              <th className="border p-3 text-left">Location</th>
              <th className="border p-3">Reported On</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredComplaints.length > 0 ? (

              filteredComplaints.map((complaint) => (

                <tr
                  key={complaint.id}
                  className="hover:bg-gray-50"
                >

                  <td className="border p-3 text-center">
                    {complaint.id}
                  </td>

                  <td className="border p-3">
                    {complaint.title}
                  </td>

                  <td className="border p-3">
                    {complaint.citizen}
                  </td>

                  <td className="border p-3">
                    {complaint.location}
                  </td>

                  <td className="border p-3 text-center">
                    {complaint.reportedOn}
                  </td>

                  <td className="border p-3 text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        complaint.status
                      )}`}
                    >
                      {complaint.status}
                    </span>

                  </td>

                  <td className="border p-3">

                    <div className="flex gap-2 justify-center">

                      <Link
                        to="/department/complaint-details"
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        View
                      </Link>

                      <Link
                        to="/department/update"
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Update
                      </Link>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500"
                >
                  No complaints found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AssignedComplaints;