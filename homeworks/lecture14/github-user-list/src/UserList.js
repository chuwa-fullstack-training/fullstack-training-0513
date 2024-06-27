import React from 'react';
import './UserList.css';

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      <ul>
        <li className="header">
          <p className="id">ID</p>
          <p className="username">Username</p>
          <p className="avatar">Image</p>
        </li>
        {users.map(user => (
          <li key={user.id} onClick={() => onUserClick(user.login)}>
            <p className="id">{user.id}</p>
            <p className="username">{user.login}</p>
            <div className="avatar">
              <img src={user.avatar_url} alt={user.login} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
