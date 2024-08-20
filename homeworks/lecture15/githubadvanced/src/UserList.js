import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserList.css';

const UserList = ({ users = [], onUserClick = () => {} }) => {
  const navigate = useNavigate();

  const handleUserClick = (username) => {
    onUserClick(username);
    navigate(`/users/${username}`);
  };

  return (
    <div className="user-list">
      <ul>
        <li className="header">
          <p className="id">ID</p>
          <p className="username">Username</p>
          <p className="avatar">Image</p>
        </li>
        {users.length === 0 ? (
          <li>Loading users...</li>
        ) : (
          users.map(user => (
            <li key={user.id} onClick={() => handleUserClick(user.login)}>
              <p className="id">{user.id}</p>
              <p className="username">{user.login}</p>
              <div className="avatar">
                <img src={user.avatar_url} alt={user.login} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserList;
