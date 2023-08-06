// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './UserList';
import AddUser from './AddUser';
import UserActivityChart from './UserActivityChart';
import './styles.scss';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">User List</Link>
          </li>
          <li>
            <Link to="/add-user">Add User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
      
    </Router>
  );
};

export default App;
