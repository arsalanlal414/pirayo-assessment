// UserContext.js
import React, { useState, createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', registerDate: '2023-08-01' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', registerDate: '2023-08-02' },
        { id: 3, name: 'jannat', email: 'jannat@example.com', role: 'User', registerDate: '2023-08-03' },
        { id: 4, name: 'Ali', email: 'ali@example.com', role: 'User', registerDate: '2023-08-03' },
        { id: 5, name: 'Abdullah', email: 'abdullah@example.com', role: 'User', registerDate: '2023-08-05' },
        // Add more mock users here with the registerDate property
      ]);

  const addUser = (user) => {
    const newId = Math.max(...users.map((user) => user.id)) + 1;
    const newUser = { ...user, id: newId };
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
