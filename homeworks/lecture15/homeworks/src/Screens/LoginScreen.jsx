import React from 'react';
import { useState } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import {Form, Button, Container} from 'react-bootstrap';

export const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', username);
        const redirectPath = location.state?.from || '/users';
        navigate(redirectPath);
    }


    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
    }