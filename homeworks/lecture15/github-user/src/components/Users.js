import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../usersSlice';
import { Link } from 'react-router-dom';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>
              <img src={user.avatar_url} alt={user.login} width="50" />
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;