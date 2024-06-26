import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { login } = useParams();
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${login}`);
        if (!userResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await userResponse.json();
        setProfile(userData);

        const reposResponse = await fetch(`https://api.github.com/users/${login}/repos`);
        if (!reposResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [login]);

  if (loading) {
    return <div className='text-center text-xl mt-8'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-xl mt-8'>Error: {error}</div>;
  }

  return (
    profile && repos &&
    <div className='mx-auto border w-full lg:w-2/3 2xl:w-1/2 h-fit border-gray-400 rounded mt-32 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'>
      <div className='grid grid-cols-3 m-4'>
        <img src={profile.avatar_url} alt={profile.login} width="120" className='rounded-full col-span-1' />
        <div className='col-span-2'>
          <p className='text-md font-semibold'>{profile.name}</p>
          <p className='mt-4 text-sm text-gray-500'>Location: {profile.location}</p>
          <ul className='mt-4 text-sm text-gray-500 list-disc'>
            Repositories:
            {repos.map(repo => (
              <li key={repo.id} className='ml-8 mt-4'>
                <a href={repo.html_url} className='text-blue-400'>
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;