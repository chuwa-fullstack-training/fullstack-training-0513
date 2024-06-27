// ColorPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, DropdownButton, Dropdown, FormControl , Button} from 'react-bootstrap';

const colors = ['white', 'black', 'blue', 'green', 'yellow'];

export const ComponentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [component, setComponent] = useState(JSON.parse(localStorage.getItem('components')).find(c => c.id === parseInt(id)));
  const [selectedColor, setSelectedColor] = useState(component.color);

  useEffect(() => {
    setComponent(prev => ({ ...prev, color: selectedColor }));
  }, [selectedColor]);

  const handleNameChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    setComponent(prev => ({ ...prev, name: name }));
  };

  return (
    <Container fluid>
      <Row className="mb-4 mt-4">
        <Col>
          <h2>{component.name}</h2>
        </Col>
        <Col>
          <DropdownButton id="dropdown-basic-button" title={selectedColor} variant="secondary">
            {colors.map((color) => (
              <Dropdown.Item
                key={color}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} className="mb-4">
          <div style={{ backgroundColor: component.color, padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <FormControl
              type="text"
              value={component.name}
              onChange={handleNameChange}
              placeholder="Enter name"
            />
          </div>
        </Col>
      </Row>

      <Button onClick={() => navigate('/color')}>Back to List</Button>
    </Container>
  );
};