import React, {useEffect, useState} from 'react';

function UserProfile({username}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => setUser(data));
    },[username])

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='user-profile'>
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <h2>{user.login}</h2>
            <h4>Repositories:</h4>
            <ul>
                {user.repos_url && <Repositories repos_url={user.repos_url} />}
            </ul>
        </div>
    )
}

function Repositories({ repos_url }) {
    const [repos, setRepos] = useState([]);
  
    useEffect(() => {
      fetch(repos_url)
        .then(response => response.json())
        .then(data => setRepos(data));
    }, [repos_url]);
  
    return (
      <>
        {repos.slice(0, 3).map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </>
    );
  }

export default UserProfile;