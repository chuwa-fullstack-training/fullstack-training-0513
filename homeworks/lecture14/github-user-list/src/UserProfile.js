import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user, repos }) => {
  if (!user) {
    return <div className="user-profile">Select a user to see the details</div>;
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar_url} alt={user.login} className="profile-avatar" />
        <div>
          <h2>{user.name || user.login}</h2>
          <p><strong>Location:</strong> {user.location || 'No reported location'}</p>
          <h3>Repositories:</h3>
          <ul>
            {repos && repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
