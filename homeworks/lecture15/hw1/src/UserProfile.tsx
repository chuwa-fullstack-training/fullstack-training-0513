import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

const UserProfile: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  const [user, setUser] = useState<any | null>(null);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [login]);

  useEffect(() => {
    if (user) {
      fetch(user.repos_url)
        .then(response => response.json())
        .then(data => setRepos(data))
        .catch(error => console.error('Error fetching repos:', error));
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-page">
      <img src={user.avatar_url} alt={user.login} />
      <h1>{user.login}</h1>
      <h2>{user.name}</h2>
      <h3>Repositories:</h3>
      <ul>
        {repos.slice(0, 5).map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
