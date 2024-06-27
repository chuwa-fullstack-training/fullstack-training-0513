import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../auth';
import './UserProfile.css';

const UserProfile = () => {
    const { login } = useParams();
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const { logout } = useAuth();

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(data => setUser(data));

        fetch(`https://api.github.com/users/${login}/repos`)
            .then(response => response.json())
            .then(data => setRepos(data));
    }, [login]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">

            <img src={user.avatar_url} alt={user.login} className="avatar-large"/>
            <h2>{user.name}</h2>
            <p>Location: {user.location}</p>
            <h3>Repositories:</h3>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                    </li>
                ))}
            </ul>
            <button onClick={logout}>Log Out</button>
            <Link to="/users">Back to users</Link>
        </div>
    );
};

export default UserProfile;
