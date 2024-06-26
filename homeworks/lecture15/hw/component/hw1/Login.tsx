import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/hw1/users";   //get the page the user tried to access if not, then just go to /hw1/users

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'hw1' && password === 'chuwa') {
      localStorage.setItem('authToken', 'authenticated');
      navigate(from, { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 mx-auto w-1/2">
        <p className='text-center text-sm text-stone-400'>Name:hw1 Password:chuwa</p>
        {error && <p className="cols-span-1 text-red-600 mt-12 font-bold text-xl">{error}</p>}
        <p className='text-3xl font-bold mt-12'>Login</p>
        <label className='mt-8 grid grid-cols-1 text-md'>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mt-3 border border-stone-300 rounded px-4 py-2'
          />
        </label>
        <label className='mt-8 grid grid-cols-1 text-md'>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-3 border border-stone-300 rounded px-4 py-2'
          />
        </label>
        <button type="submit" className='mt-8 cols-span-1 border border-stone-600 w-fit px-2 py-0.5 rounded-sm bg-gray-200 text-md'>Submit</button>
      </form>
    </div>
  );
};

export default Login;