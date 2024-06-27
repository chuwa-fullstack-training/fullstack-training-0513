import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserProfile from './UserProfile';
import './App.css';

function App() {
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

  const handleUserClick = (username) => {
    setSelectedUser(null);
    setRepos([]);
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setSelectedUser(response.data);
        return axios.get(`https://api.github.com/users/${username}/repos`);
      })
      .then(response => {
        setRepos(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data or repositories', error);
      });
  };

  return (
    <div className="app-container">
      <UserList users={users} onUserClick={handleUserClick} />
      <UserProfile user={selectedUser} repos={repos} />
    </div>
  );
}

export default App;
