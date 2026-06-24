import axiosInstance from "../services/axiosInstance";

export const getEmployees = () =>
  axiosInstance.get("/employees");

export const getEmployeeById = (id) =>
  axiosInstance.get(`/employee/${id}`);

export const createEmployee = (data) =>
  axiosInstance.post("/employee/add", data);

export const updateEmployee = (id, data) =>
  axiosInstance.put(`/employee/edit/${id}`, data);

export const deleteEmployee = (id) =>
  axiosInstance.delete(`/employee/remove/${id}`);