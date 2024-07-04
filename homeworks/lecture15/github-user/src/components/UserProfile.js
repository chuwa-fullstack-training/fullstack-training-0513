import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../usersSlice';

const UserProfile = () => {
  const { login } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.selectedUser);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    if (login) {
      dispatch(fetchUser(login));
    }
  }, [login, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h2>{user.name}</h2>
          <p>{user.location}</p>
          <h3>Repositories:</h3>
          <ul>
            {user.repos_url && (
              <li>
                <a href={user.repos_url}>{user.repos_url}</a>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserProfile;
 