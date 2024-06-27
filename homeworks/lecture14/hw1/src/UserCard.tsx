import React, { useEffect, useState } from 'react';
import './UserCard.css';

interface UserCardProps {
  user: any;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch(user.repos_url)
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching repos:', error));
  }, [user.repos_url]);

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} className="avatar-large" />
      <div className="user-profile">
        <h2>{user.login}</h2>
        <h3>{user.name}</h3>
        <h4>Repositories:</h4>
        <ul>
            {repos.slice(0, 5).map(repo => (
            <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
