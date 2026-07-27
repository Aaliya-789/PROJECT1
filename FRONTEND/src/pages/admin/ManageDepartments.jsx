import { FaEdit, FaTrash } from "react-icons/fa";

const ManageDepartments = () => {
  const departments = [
    {
      id: 1,
      name: "Roads",
      head: "Mr. Sharma",
      complaints: 24,
    },
    {
      id: 2,
      name: "Sanitation",
      head: "Mrs. Patil",
      complaints: 18,
    },
    {
      id: 3,
      name: "Electricity",
      head: "Mr. Khan",
      complaints: 32,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Manage Departments
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-100">
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Department Head</th>
              <th className="p-3 text-left">Complaints</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr
                key={department.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-3">{department.name}</td>
                <td className="p-3">{department.head}</td>
                <td className="p-3">{department.complaints}</td>

                <td className="p-3">
                  <div className="flex justify-center gap-4">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
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

export default ManageDepartments;