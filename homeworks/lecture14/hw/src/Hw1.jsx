import React from "react";
import { useEffect, useState } from "react";
import "./Hw1.css";

const Card = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);

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
  );
};

const Hw1 = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const handleClick = (index) => {
    setUser(data[index]);
  };
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setUser(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Username</td>
            <td>Image</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} onClick={() => handleClick(index)}>
              <td>{item.id}</td>
              <td>{item.login}</td>
              <td>
                <img
                  style={{ height: "100px", width: "100px" }}
                  src={item.avatar_url}
                  alt="avatar"
                ></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <Card user={user} />
      </div>
    </div>
  );
};

export default Hw1;
