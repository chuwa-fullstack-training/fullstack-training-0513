"use client"
import React, { useState, useEffect } from 'react';

const Hw1 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  
  useEffect(() => {
    const fetchUsers = async (url) => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          setError("Network response was not ok");
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    };
    fetchUsers("https://api.github.com/users");

  }, []);

  const handleClick = (username) => {
    const selectUser = async (url) => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const seleted = await response.json();
        setProfile(seleted);
      }
      catch (err) {
        throw new Error(err.message);
      }
    };

    const getRepos = async (url) => {
      try {
        const response = await fetch(url);
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepos(data);
      }
      catch (err) {
        throw new Error(err.message);
      }
    };

    selectUser(`https://api.github.com/users/${username}`);
    getRepos(`https://api.github.com/users/${username}/repos`);
  };

  if(loading) {
    return <div className='text-center text-xl mt-8'> Loading... </div>;
  }

  if (error) {
    return <div className='text-center text-xl mt-8'>Error: {error}</div>;
  }

  return(
    <section className='grid grid-cols-2 lg:grid-cols-3 mx-8'>
    <div className="col-span-1">
      <div className='grid grid-cols-5'>
        <p className='col-span-1 text-lg'>ID</p>
        <p className='col-span-2 text-lg'>Username</p>
        <p className='col-span-2 text-lg'>Image</p>
      </div>
      <hr className='border-t border-gray-400 mt-4'/>
      {users.map(user => (
        <>
          <div className='mt-4 grid grid-cols-5' key={user.id} onClick={() => {handleClick(user.login)}}>
            <p className='my-auto col-span-1 text-md'>{user.id}</p>
            <p className='my-auto col-span-2 text-md'>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} width="80" className='my-auto'/>
          </div>
          <hr className='border-t border-gray-400 mt-4'/>
        </>
      ))}
    </div>
    {
      profile && repos &&
        <div className='col-span-1 lg:col-span-2 mx-auto border w-full lg:w-2/3 2xl:w-1/2 h-fit border-gray-400 rounded mt-32 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'>
          <div className='grid grid-cols-3 m-4'>
            <img src={profile.avatar_url} alt={profile.login} width="120" className='rounded-full  col-span-1'/>
            <div className='col-span-2'>
              <p className='text-md font-semibold'>{profile.name}</p>
              <p className='mt-4 text-sm text-gray-500'>Location: {profile.location}</p>
              <ul className='mt-4 text-sm text-gray-500 list-disc'>
                Repositories:
                {
                  repos.slice(0,3).map(repo => (
                    <li key={repo.id} className='ml-8 mt-4'>
                      <a href={repo.html_url} className='text-blue-400'>
                        {repo.name}
                      </a>
                      <p>{repo.description}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
    }

    </section>
  );
}

export default Hw1;