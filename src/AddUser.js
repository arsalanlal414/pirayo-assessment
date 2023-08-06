// AddUser.js
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

const AddUser = () => {
  const { addUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [registrationDate, setRegistrationDate] = useState(getTodayDate()); // Set initial state to today's date

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email, role, registerDate: registrationDate });
    setName('');
    setEmail('');
    setRole('');
    setRegistrationDate(getTodayDate()); // Reset registration date to today's date
  };

  // Helper function to get today's date in the format "YYYY-MM-DD"
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div>
      <h2>Add User</h2>
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
        <label>
          Registration Date:
          <input type="date" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
