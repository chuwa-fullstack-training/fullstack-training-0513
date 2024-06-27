import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import './GitHubList.css';

const GitHubList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleUserClick = (username) => {
        navigate(`/users/${username}`);
    };

    return (
        <div>
            <button onClick={logout}>Log Out</button>
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
            </div>
        </div>

    );
};

export default GitHubList;
