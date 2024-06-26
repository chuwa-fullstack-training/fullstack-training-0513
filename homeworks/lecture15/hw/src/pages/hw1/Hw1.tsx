"use client";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hw1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError("Network response was not ok");
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers("https://api.github.com/users");
  }, []);

  if (loading) {
    return <div className='text-center text-xl mt-8'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-xl mt-8'>Error: {error}</div>;
  }

  return (
    <section className='grid grid-cols-2 lg:grid-cols-3 mx-8'>
      <div className="col-span-1">
        <div className='grid grid-cols-5'>
          <p className='col-span-1 text-lg'>ID</p>
          <p className='col-span-2 text-lg'>Username</p>
          <p className='col-span-2 text-lg'>Image</p>
        </div>
        <hr className='border-t border-gray-400 mt-4' />
        {users.map(user => (
          <div className='mt-4 grid grid-cols-5' key={user.id} onClick={() => navigate(`/hw1/users/${user.login}`)}>
            <p className='my-auto col-span-1 text-md'>{user.id}</p>
            <p className='my-auto col-span-2 text-md'>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} width="80" className='my-auto' />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hw1;