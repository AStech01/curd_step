import { useEffect, useState } from "react";
import UserForm from "./components/UserForm"
import UserList from "./components/UserList"
import "./App.css";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./services/userService";



function App() {
  // Store all users
  const [users, setUsers] = useState([]);

  // Store user currently being edited
  const [editingUser, setEditingUser] = useState(null);

  // Get users when page loads
  useEffect(() => {
    loadUsers();
  }, []);

  // READ
  const loadUsers = async () => {
    try {
      const response = await getStudents();

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // CREATE / UPDATE
  const handleSubmit = async (user) => {
    try {
      if (editingUser) {
        // UPDATE
        await updateStudent(editingUser._id, user);

        setEditingUser(null);
      } else {
        // CREATE
        await createStudent(user);
      }

      // Get latest data
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);

      // Get latest data
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  // CANCEL EDIT
  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className="container">
      <h1>Student CRUD</h1>

      <UserForm
        onSubmit={handleSubmit}
        editingStudent={editingUser}
        onCancel={handleCancel}
      />

      <UserList
        students={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
