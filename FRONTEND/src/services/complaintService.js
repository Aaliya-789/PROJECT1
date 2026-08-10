import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/complaints`;
// ==============================
// Create Complaint
// ==============================
export const createComplaint = async (token, complaintData) => {
  const response = await axios.post(
    API_URL,
    complaintData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

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
// Get Citizen Complaints
// ==============================
export const getMyComplaints = async (token) => {
  const response = await axios.get(
    `${API_URL}/my`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

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
  status,
  message
) => {
  const response = await axios.put(
    `${API_URL}/${complaintId}/status`,
    {
      status,
      message,
    },
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