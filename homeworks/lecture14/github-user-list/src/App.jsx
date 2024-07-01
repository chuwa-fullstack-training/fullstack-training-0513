import './App.css';
import UserList from './UserList';
import UserProfile from './UserProfile';
import React, {useEffect, useState} from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  },[])

  return (
    <div className='App'>
      <UserList users={users} onUserClick={setSelectedUser}/>
      {selectedUser && <UserProfile username={selectedUser}/>}
    </div>
  );
}

export default App;
