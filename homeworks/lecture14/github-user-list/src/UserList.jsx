import React from 'react';

function UserList({users, onUserClick}) {
    return (
        <div className='user-list'>
            {users.map(user => (
                <div key={user.id} onClick={() => onUserClick(user.login)} className='user-item'>
                    <span>{user.id}</span>
                    <span>{user.login}</span>
                    <img src={user.avatar_url} alt={user.login} className='avatar' />
                </div>
            ))   
            }
        </div>
    );

}

export default UserList;