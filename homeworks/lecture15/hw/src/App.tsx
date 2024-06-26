import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='flex justify-center mt-12 gap-8'>
        <Link to="/hw1/login">Homework 1</Link>
        <Link to="/hw2">Homework 2</Link>
      </div>
      <Outlet />
    </>
  )
}

export default App
