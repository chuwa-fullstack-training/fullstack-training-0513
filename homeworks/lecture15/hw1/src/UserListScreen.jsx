import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Hw1.css";
import { UserContext } from "./UserContext";

const UserListScreen = () => {
  const [data, setData] = useState([]);
  const { setSelectedUser } = useContext(UserContext);

  const handleClick = (index) => {
    setSelectedUser(data[index]);
  };

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setSelectedUser(data[0]);
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
              <td>
                <Link to={`/users/${item.login}`}>{item.login}</Link>
              </td>
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
      <div></div>
    </div>
  );
};

export default UserListScreen;
