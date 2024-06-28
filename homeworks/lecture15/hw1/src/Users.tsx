import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import './Users.css';

export default function ProtectedRoute() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users: ", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-list-page">
      <h1>GitHub Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>
              <img src={user.avatar_url} alt={user.login} />
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
