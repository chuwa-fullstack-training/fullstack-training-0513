import React from 'react';
import './UserList.css';

interface UserListProps {
  users: any[];
  onUserClick: (username: string) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => {
  return (
    <div className="user-list">
      {users.map((user, index) => (
        <div key={user.id} className="user-item" onClick={() => onUserClick(user.login)}>
          <span className="user-index">{index + 1}</span>
          <span className="username">{user.login}</span>
          <img src={user.avatar_url} alt={user.login} className="avatar" />
        </div>
      ))}
    </div>
  );
};

export default UserList;
