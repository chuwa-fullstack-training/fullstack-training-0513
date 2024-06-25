import React, { useState, useEffect } from "react";

const Profile = ({ user }) => {
  const [profile, setProfile] = useState();
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setError(null);
      const fetchProfileAndRepos = async () => {
        try {
          const profileResponse = await fetch(user.url);
          if (!profileResponse.ok) throw new Error("Failed to fetch profile");
          const profileData = await profileResponse.json();
          setProfile(profileData);

          const reposResponse = await fetch(user.repos_url);
          if (!reposResponse.ok) throw new Error("Failed to fetch repos");
          const reposData = await reposResponse.json();
          setRepos(reposData.slice(0, 3));
        } catch (error) {
          setError(error.message);
        }
      };

      fetchProfileAndRepos();
    }
  }, [user]);

  if (error) {
    return <p> Error: {error}</p>;
  }

  return (
    <div className="col-6 ">
      {profile && (
        <div className="card">
          <div className="card-body text-center">
            <img
              src={profile.avatar_url}
              alt={profile.avatar_url}
              className="rounded-5 mb-3"
              style={{ height: "20vh" }}
            ></img>
            <h4>{profile.name}</h4>
            <p>Location: {profile.location ? profile.location : "None"}</p>
            <h5>Repositories</h5>
            <ul className="list-unstyled">
              {repos.map((repo) => (
                <li key={repo.id} className="text-start">
                  <a href={repo.html_url}>{repo.name}</a>
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const GithubList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) throw new Error("Failed to fetch users");
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p> Error: {error}</p>;
  }

  return (
    <div className="row mx-5 my-5">
      <div className="col-6 border">
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((ele, index) => (
              <tr key={ele.id}>
                <th scope="row">{ele.id}</th>
                <td onClick={() => setSelectedUser(ele)}>{ele.login}</td>
                <td>
                  <img
                    src={ele.avatar_url}
                    alt={ele.avatar_url}
                    style={{ height: "10vh" }}
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Profile user={selectedUser} />
    </div>
  );
};

export default GithubList;
