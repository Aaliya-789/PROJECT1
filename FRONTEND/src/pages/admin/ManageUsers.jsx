import { FaEdit, FaTrash } from "react-icons/fa";

const ManageUsers = () => {
  // Temporary user data
  const users = [
    {
      id: 1,
      name: "Aaliya",
      email: "aaliya@example.com",
      role: "Citizen",
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@example.com",
      role: "Department",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Manage Users
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-3">{user.name}</td>

                <td className="p-3">{user.email}</td>

                <td className="p-3">{user.role}</td>

                <td className="p-3">

                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      user.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="p-3">

                  <div className="flex justify-center gap-3">

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

export default ManageUsers;