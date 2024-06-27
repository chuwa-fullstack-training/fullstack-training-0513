import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export const PhoneScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [status, setStatus] = useState('status bar');

  const handleButtonClick = (number) => {
    setSelectedButton(number);
    setStatus(`Button ${number} is clicked`);
  };

  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <Container className="my-5" style={{ maxWidth: '300px' }}>
      <div className="border border-dark rounded-3 overflow-hidden" style={{ backgroundColor: 'white' }}>
        <div className="bg-light border-bottom border-dark p-2 text-center">
          {status}
        </div>
        <div className="p-3" style={{ backgroundColor: '#3498db' }}>
        {[0, 1, 2, 3, 4].map((row) => (
            <Row key={row} className="mb-2">
              {buttons.slice(row * 4, (row + 1) * 4).map((number) => (
                <Col key={number} xs={3} className="p-1">
                  <Button
                    variant={selectedButton === number ? 'success' : 'light'}
                    className="w-100"
                    onClick={() => handleButtonClick(number)}
                  >
                    {number}
                  </Button>
                </Col>
              ))}
            </Row>
          ))}
        </div>
      </div>
    </Container>
  );
};
