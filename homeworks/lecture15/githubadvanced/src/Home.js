import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ user, onLogout }) => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      {user ? (
        <div>
          <h2>Welcome, {user}</h2>
          <button onClick={onLogout} className="logout-button">Log out</button>
          <br />
          <Link to="/users" className="users-link">Go to Users</Link>
        </div>
      ) : (
        <div>
          <p>Please <Link to="/login">log in</Link> to access more features.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
