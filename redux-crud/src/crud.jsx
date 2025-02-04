import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser, deleteUser } from "./userSlice";

const Crud = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(updateUser({ id: editId, name, email }));
      setEditId(null);
    } else {
      dispatch(addUser({ id: Date.now(), name, email }));
    }
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editId ? "Update" : "Add"} User</button>
      </form>

      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}  
            <button onClick={() => { setEditId(user.id); setName(user.name); setEmail(user.email); }}>
              Edit
            </button>
            <button onClick={() => dispatch(deleteUser(user.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;
