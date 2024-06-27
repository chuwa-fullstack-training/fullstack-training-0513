import { useState, useEffect } from 'react';
import './App.css';
import UserList from './UserList';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (username: string) => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setSelectedUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div className="app">
      <UserList users={users} onUserClick={handleUserClick} />
      <div className="right-side">
        {selectedUser && <UserCard user={selectedUser} />}
      </div>
    </div>
  );
}

export default App
