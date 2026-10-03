function UserList({ students, onEdit, onDelete }) {
  return (
    <div className="list-box">
      <h2>Users</h2>

      {students.length === 0 ? (
        <p>No users found.</p>
      ) : (
        students.map((user) => (
          <div className="user-card" key={user._id}>
            <h3>{user.name}</h3>

            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>

            <button onClick={() => onEdit(user)}>
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(user._id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default UserList;
