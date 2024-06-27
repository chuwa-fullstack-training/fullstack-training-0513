import React from 'react';
import { Table, Image } from 'react-bootstrap';

export const GithubList = ({ users, handleUserClick }) => {

    if (!users || users.length === 0) {return (
        <div>Loading...</div>
    );}
  return (
    <Table hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => handleUserClick(user)} style={{ cursor: 'pointer' }}>
            <td>{user.id}</td>
            <td>{user.login}</td>
            <td>
              <Image src={user.avatar_url} width={50} height={50} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

