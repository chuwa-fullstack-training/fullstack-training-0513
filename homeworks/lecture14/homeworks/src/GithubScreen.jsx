import React, {useState, useEffect} from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import { Profile } from './components/Profile';
import { GithubList } from './components/GithubList';


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
        <Container fluid>
            <Row>
                <Col xs={12} md={4} lg={3} className="pr-md-0">
                    <GithubList users={users} handleUserClick={handleUserClick}/>
                </Col>
                <Col xs={12} md={8} lg={9} className="pr-md-0">
                    {selectedUser && <Profile user={selectedUser}/>}
                </Col>
            </Row>
        </Container>
    )

};