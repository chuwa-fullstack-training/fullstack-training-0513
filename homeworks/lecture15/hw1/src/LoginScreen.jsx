import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "1" && password === "1") {
      onLogin(true);
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => handleUsername(e)}
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginScreen;
