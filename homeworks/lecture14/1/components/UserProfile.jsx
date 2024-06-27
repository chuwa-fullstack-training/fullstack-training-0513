import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import {response} from "express";

const UserProfile = ({username}) => {
    const [user, setUser] = useState(null);
    const [repos,setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => setUser(data));
        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then()(data => setRepos(data));
    }, [username])

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
        </div>
    );

};

export default UserProfile;
