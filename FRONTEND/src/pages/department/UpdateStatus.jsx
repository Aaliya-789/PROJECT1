import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getComplaintById,
  updateComplaintStatus,
} from "../../services/complaintService";

const UpdateStatus = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState(null);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchComplaint();
  }, []);

  const fetchComplaint = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getComplaintById(token, id);

      setComplaint(data.complaint);
      setStatus(data.complaint.status);

    } catch (error) {
      console.log(error);
      alert("Failed to load complaint");
    }
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      await updateComplaintStatus(
        token,
        id,
        status,
        message
      );

      alert("Status updated successfully");

      navigate("/department/complaints");

    } catch (error) {
      console.log(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Failed to update status");
    }
  };

  if (!complaint) {
    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Update Complaint Status
      </h2>

      <div className="mb-5">
        <p className="font-semibold">Complaint</p>
        <p>{complaint.title}</p>
      </div>

      <div className="mb-5">
        <p className="font-semibold">Location</p>
        <p>{complaint.address}</p>
      </div>

      <div className="mb-5">
        <p className="font-semibold">Current Status</p>
        <p>{complaint.status}</p>
      </div>

      <div className="mb-5">
        <label className="font-semibold">
          Change Status
        </label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-3 w-full mt-2"
        >
          <option value="Assigned">Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="font-semibold">
          Remarks
        </label>

        <textarea
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter remarks..."
          className="border rounded-lg p-3 w-full mt-2"
        />
      </div>

      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
      >
        Update Status
      </button>

    </div>
  );
};

export default UpdateStatus;