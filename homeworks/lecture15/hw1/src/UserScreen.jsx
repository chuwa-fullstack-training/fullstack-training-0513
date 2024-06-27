import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const UserScreen = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const { selectedUser: user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        try {
          const res1 = await fetch(user.url);
          if (!res1.ok) throw new Error("profile request failed");
          const data1 = await res1.json();
          setProfile(data1);

          const res2 = await fetch(user.repos_url);
          if (!res2.ok) throw new Error("repo request failed");
          const data2 = await res2.json();
          setRepos([data2[0], data2[1], data2[2]]);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [user]);

  if (!user) {
    return <div></div>;
  }

  if (!profile || !repos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card">
        <div>
          <img
            src={profile.avatar_url}
            alt="avatar"
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "100px",
              padding: "20px",
            }}
          />
        </div>
        <div>
          <h1>{profile.name}</h1>
          <p>Location: {profile.location}</p>
          <div>
            <p>Repositories:</p>
            {repos.map((repo, index) => (
              <li key={index}>
                <span>{repo.name}</span>
                <p>{repo.description}</p>
              </li>
            ))}
          </div>
        </div>
      </div>
      <Link to="/users">Back to users</Link>
    </>
  );
};

export default UserScreen;
