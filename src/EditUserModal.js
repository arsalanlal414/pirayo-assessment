// EditUserModal.js

import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const EditUserModal = ({ user, onClose }) => {
  const { editUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, role };
    editUser(updatedUser);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Role:
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          </label>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
