// UserList.js
import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import EditUserModal from './EditUserModal';
import UserActivityChart from './UserActivityChart';

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleModalClose = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserActivityChart/>
      {selectedUser && (
        <EditUserModal user={selectedUser} onClose={handleModalClose} />
      )}

    </div>
  );
};

export default UserList;
