import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import UserList from './UserList';
import UserProfile from './UserProfile';
import PrivateRoute from './PrivateRoute';
import Home from './Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users', error);
      });
  }, []);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleUserClick = (username) => {
    setSelectedUser(null);
    setRepos([]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/users"
          element={
            <PrivateRoute isAuthenticated={!!user}>
              <UserList users={users} onUserClick={handleUserClick} />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:login"
          element={
            <PrivateRoute isAuthenticated={!!user}>
              <UserProfile user={selectedUser} setUser={setSelectedUser} repos={repos} setRepos={setRepos} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
