import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';


export const Profile = ({ user }) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user.login}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error('Error fetching profile:', error));

    fetch(`https://api.github.com/users/${user.login}/repos`)
      .then(response => response.json())
      .then(data => setRepos(data.slice(0, 3)))
      .catch(error => console.error('Error fetching repos:', error));
  }, [user]);

  if (!profile) return null;

  return (
    <Card>
        <Card.Body>
            <Row>
                <Col xs={12} md={4} className="d-flex justify-content-center align-items-center">
                <Image src={profile.avatar_url} roundedCircle style={{ width: '150px', margin: '20px auto' }} />
                </Col>
                <Col>
                <Card.Title>{profile.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{profile.login}</Card.Subtitle>
                <Card.Text>Location: {profile.location}</Card.Text>
                <Card.Text>Repositories:</Card.Text>
                <ul>
                    {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                        <p>{repo.description}</p>
                    </li>
                    ))}
                </ul>
                </Col>
            </Row>
        </Card.Body>
    </Card>
  );
}
