import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { GithubList } from '../components/GithubList';


export const GithubScreen = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) =>{
        setSelectedUser(user);
    }

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <Container fluid >
            <Row className='justify-content-center align-items-center'>
                <Col xs={12} md={6} lg={6} className="pr-md-0">
                    <GithubList users={users} handleUserClick={handleUserClick}/>
                </Col>
            </Row>
            <Row>
            <Button variant="secondary" onClick={() => {
                localStorage.removeItem('user')
                window.location.reload()
                }}>Log out</Button>
            </Row>
        </Container>
    )

};