import axios from "axios";

const API_URL = "http://localhost:5000/api/departments";


// Get all departments
export const getDepartments = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};


// Create department
export const createDepartment = async (token, departmentData) => {
  const response = await axios.post(
    API_URL,
    departmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// Update department
export const updateDepartment = async (
  token,
  id,
  departmentData
) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    departmentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// Delete department
export const deleteDepartment = async (token, id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};


// Create department officer
export const createDepartmentOfficer = async (
  token,
  departmentId,
  officerData
) => {
  const response = await axios.post(
    `${API_URL}/${departmentId}/officer`,
    officerData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};