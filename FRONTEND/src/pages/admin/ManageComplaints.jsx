import { FaEye, FaTrash } from "react-icons/fa";

const ManageComplaints = () => {
  const complaints = [
    {
      id: 1,
      title: "Road Damage",
      category: "Roads",
      citizen: "Aaliya",
      status: "Pending",
    },
    {
      id: 2,
      title: "Garbage Overflow",
      category: "Sanitation",
      citizen: "Rahul",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Street Light Not Working",
      category: "Electricity",
      citizen: "Priya",
      status: "Resolved",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Manage Complaints
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Citizen</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((complaint) => (
              <tr
                key={complaint.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-3">{complaint.title}</td>
                <td className="p-3">{complaint.category}</td>
                <td className="p-3">{complaint.citizen}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm
                    ${
                      complaint.status === "Pending"
                        ? "bg-yellow-500"
                        : complaint.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }`}
                  >
                    {complaint.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEye />
                    </button>

                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
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

export default ManageComplaints;