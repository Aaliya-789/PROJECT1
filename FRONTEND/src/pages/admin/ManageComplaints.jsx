// PART 1
import { useEffect, useState } from "react";
import {
  FaEye,
  FaTrash,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  getAllComplaints,
  deleteComplaint,
  updateComplaintStatus,
  assignComplaintToDepartment,
} from "../../services/complaintService";

import { getDepartments } from "../../services/departmentService";

const ManageComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const complaintRes = await getAllComplaints(token);
      const departmentRes = await getDepartments(token);

      setComplaints(complaintRes.complaints || []);
      setDepartments(departmentRes.departments || []);

      if (complaintRes.complaints?.length > 0) {
        setSelectedComplaint(complaintRes.complaints[0]);
        setStatus(complaintRes.complaints[0].status);
        setDepartmentId(
          complaintRes.complaints[0].assignedDepartment?._id || ""
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (complaint) => {
    setSelectedComplaint(complaint);
    setStatus(complaint.status);
    setDepartmentId(complaint.assignedDepartment?._id || "");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;

    try {
      const token = localStorage.getItem("token");
      await deleteComplaint(token, id);

      alert("Complaint deleted successfully");

      fetchData();
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      if (departmentId) {
        await assignComplaintToDepartment(
          token,
          selectedComplaint._id,
          departmentId
        );
      }

      await updateComplaintStatus(
        token,
        selectedComplaint._id,
        status
      );

      alert("Complaint updated successfully");

      fetchData();
    } catch (err) {
      console.log(err);
      alert("Update failed");
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        Loading complaints...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-6">

      {/* LEFT PANEL */}

      <div className="col-span-4 bg-white rounded-xl shadow-md p-4">

        <h2 className="text-2xl font-bold mb-4">
          Complaints
        </h2>

        <div className="space-y-3">

          {complaints.map((complaint) => (

            <div
              key={complaint._id}
              onClick={() => handleView(complaint)}
              className={`cursor-pointer rounded-lg border p-4 transition
              ${
                selectedComplaint?._id === complaint._id
                  ? "border-blue-500 bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >

              <div className="flex justify-between">

                <h3 className="font-semibold">
                  {complaint.title}
                </h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(complaint._id);
                  }}
                  className="text-red-600"
                >
                  <FaTrash />
                </button>

              </div>

              <p className="text-sm text-gray-500 mt-1">
                {complaint.category}
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-xs text-white
                ${
                  complaint.status === "Resolved"
                    ? "bg-green-600"
                    : complaint.status === "In Progress"
                    ? "bg-blue-600"
                    : complaint.status === "Assigned"
                    ? "bg-purple-600"
                    : complaint.status === "Rejected"
                    ? "bg-red-600"
                    : "bg-yellow-500"
                }`}
              >
                {complaint.status}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* RIGHT PANEL */}

      <div className="col-span-8 bg-white rounded-xl shadow-md p-6">

        {selectedComplaint && (

          <>
            <h2 className="text-3xl font-bold mb-6">
              {selectedComplaint.title}
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">

              <div className="flex items-center gap-2">
                <FaUser />
                <span>
                  {selectedComplaint.reportedBy?.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>
                  {selectedComplaint.reportedBy?.email}
                </span>
              </div>

              <div>
                <strong>Category:</strong>{" "}
                {selectedComplaint.category}
              </div>

              <div>
                <strong>Priority:</strong>{" "}
                {selectedComplaint.priority}
              </div>

              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>
                  {new Date(
                    selectedComplaint.createdAt
                  ).toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>
                  {selectedComplaint.address}
                </span>
              </div>

            </div>

            <h3 className="font-semibold text-lg mb-2">
              Description
            </h3>

            <p className="text-gray-700 mb-6">
              {selectedComplaint.description}
            </p>
                        <h3 className="font-semibold text-lg mb-3">
              Images
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">

              {selectedComplaint.images &&
              selectedComplaint.images.length > 0 ? (

                selectedComplaint.images.map((image, index) => (

                  <img
                    key={index}
                    src={image}
                    alt="Complaint"
                    className="w-full h-64 object-cover rounded-lg border"
                  />

                ))

              ) : (

                <p className="text-gray-500">
                  No images uploaded.
                </p>

              )}

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>

                <label className="block font-semibold mb-2">
                  Assign Department
                </label>

                <select
                  value={departmentId}
                  onChange={(e) =>
                    setDepartmentId(e.target.value)
                  }
                  className="border rounded-lg p-2 w-full"
                >

                  <option value="">
                    Select Department
                  </option>

                  {departments.map((department) => (

                    <option
                      key={department._id}
                      value={department._id}
                    >
                      {department.departmentName}
                    </option>

                  ))}

                </select>

              </div>

              <div>

                <label className="block font-semibold mb-2">
                  Update Status
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                  className="border rounded-lg p-2 w-full"
                >

                  <option value="Submitted">
                    Submitted
                  </option>

                  <option value="Under Review">
                    Under Review
                  </option>

                  <option value="Assigned">
                    Assigned
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Resolved">
                    Resolved
                  </option>

                  <option value="Rejected">
                    Rejected
                  </option>

                </select>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
                Save Changes
              </button>

              <button
                onClick={() =>
                  handleDelete(selectedComplaint._id)
                }
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
              >
                Delete Complaint
              </button>

            </div>

          </>

        )}

      </div>

    </div>

  );

};

export default ManageComplaints;