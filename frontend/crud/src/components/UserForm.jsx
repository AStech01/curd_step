import { useEffect, useState } from "react";

function UserForm({ onSubmit, editingStudent, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // When editing, put student data into the form
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        email: editingStudent.email,
        age: editingStudent.age,
      });
    }
  }, [editingStudent]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      age: Number(formData.age),
    });

    // Clear form after adding
    if (!editingStudent) {
      setFormData({
        name: "",
        email: "",
        age: "",
      });
    }
  };

  return (
    <div className="form-box">
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editingStudent ? "Update User" : "Add User"}
        </button>

        {editingStudent && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default UserForm;
