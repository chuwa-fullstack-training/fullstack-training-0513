
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import {Container, Row, Button} from 'react-bootstrap';

export const HomeScreen = () => {
  const user = localStorage.getItem('user');

  return (
    <Container className='justify-content-center align-items-center'>
      <Row className='align-items-center'>
        <h1>Home</h1>
        </Row>

        {user? (
          <>
          <h2>Welcome, {user}</h2> 
          <Button variant='secondary' onClick={() => {
            localStorage.removeItem('user');
            window.location.reload();
          }}  >Logout</Button>
          </>
      
      ): (<Link to="login">Log in</Link>)}
    
      
      <Outlet />
      </Container>
  );
}