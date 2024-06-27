import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';
import './GitHubList.css';

const GitHubList = () => {
    const [users,setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    },[]);

    const handleUserClick = (username) => {
        setSelectedUser(username);
    };

    return (
        <div className="github-list-container">
            <div className="user-list">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id} onClick={() => handleUserClick(user.login)}>
                            <td>{user.id}</td>
                            <td>{user.login}</td>
                            <td><img src={user.avatar_url} alt={user.login} className="avatar"/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="user-profile">
                {selectedUser && <UserProfile username={selectedUser}/>}
            </div>
        </div>
    )
}

export default GitHubList;
