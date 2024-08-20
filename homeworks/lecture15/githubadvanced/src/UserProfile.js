import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = ({ user, setUser, repos, setRepos }) => {
  const { login } = useParams();

  useEffect(() => {
    if (login) {
      axios.get(`https://api.github.com/users/${login}`)
        .then(response => {
          setUser(response.data);
          return axios.get(`https://api.github.com/users/${login}/repos`);
        })
        .then(response => {
          setRepos(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data or repositories', error);
        });
    }
  }, [login, setUser, setRepos]);

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <div className="repos">
        <h3>Repositories:</h3>
        <ul>
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
