import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomeScreen = ({ isLogged, onLogin }) => {
  return (
    <div>
      <h1>Home</h1>
      {isLogged ? (
        <div>
          <h1>Welcome</h1>
          <Link to="/users">Users</Link>
          <button onClick={() => onLogin(false)}>Log out</button>
        </div>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </div>
  );
};

export default HomeScreen;
