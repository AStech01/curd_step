import axios from "axios";

const API_URL = "http://localhost:3000/api/student";

// GET - get all students
export const getStudents = () => {
  return axios.get(API_URL);
};

// POST - create student
export const createStudent = (student) => {
  return axios.post(API_URL, student);
};

// PUT - update student
export const updateStudent = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student);
};

// DELETE - delete student
export const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
