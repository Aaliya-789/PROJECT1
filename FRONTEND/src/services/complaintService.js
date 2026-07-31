import axios from "axios";

const API_URL = "http://localhost:5000/api/complaints";

// ==============================
// Get All Complaints
// ==============================
export const getAllComplaints = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Get Complaint By ID
// ==============================
export const getComplaintById = async (token, id) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Update Complaint Status
// ==============================
export const updateComplaintStatus = async (
  token,
  complaintId,
  status
) => {
  const response = await axios.put(
    `${API_URL}/${complaintId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ==============================
// Assign Complaint To Department
// ==============================
export const assignComplaintToDepartment = async (
  token,
  complaintId,
  departmentId
) => {
  const response = await axios.put(
    `${API_URL}/${complaintId}/assign`,
    { departmentId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ==============================
// Delete Complaint
// ==============================
export const deleteComplaint = async (
  token,
  complaintId
) => {
  const response = await axios.delete(
    `${API_URL}/${complaintId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};