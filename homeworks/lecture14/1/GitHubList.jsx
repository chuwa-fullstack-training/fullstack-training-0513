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
}