import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  getAllCitizens,
  deleteCitizen,
} from "../../services/adminService";

const ManageUsers = () => {
  const [citizens, setCitizens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCitizens();
  }, []);

  const fetchCitizens = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getAllCitizens(token);

      setCitizens(
        (data.users || []).filter(
          (user) => user.role === "Citizen"
        )
      );
    } catch (error) {
      console.log(error);
      alert("Failed to load citizens");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this citizen?")) return;

    try {
      const token = localStorage.getItem("token");

      await deleteCitizen(token, id);

      alert("Citizen deleted successfully");

      fetchCitizens();
    } catch (error) {
      console.log(error);
      alert("Failed to delete citizen");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Manage Users
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Verified</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {citizens.map((citizen) => (
                <tr
                  key={citizen._id}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="p-3">{citizen.name}</td>
                  <td className="p-3">{citizen.email}</td>
                  <td className="p-3">{citizen.phone}</td>

                  <td className="p-3">
                    {citizen.isVerified ? (
                      <span className="text-green-600 font-semibold">
                        Yes
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        No
                      </span>
                    )}
                  </td>

                  <td className="p-3">{citizen.role}</td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(citizen._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {citizens.length === 0 && (
            <p className="text-center py-6">
              No citizens found.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;