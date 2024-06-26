import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ICard, initialCards, colors } from "./data/cards";
import { Card, Container, Form, Row, Col } from "react-bootstrap";

const CardPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cards, setCards] = useState<ICard[]>(initialCards);
  const [card, setCard] = useState<ICard | undefined>(() =>
    initialCards.find((c) => c.id === id)
  );

  useEffect(() => {
    setCard(cards.find((c) => c.id === id));
  }, [id, cards]);

  const handleNameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    navigate(`/card/${event.target.value}`);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (card) {
      setCards(
        cards.map((c) =>
          c.id === card.id ? { ...c, color: event.target.value } : c
        )
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (card) {
      const newName = event.target.value;
      setCards(
        cards.map((c) => (c.id === card.id ? { ...c, name: newName } : c))
      );
      setCard({ ...card, name: newName });
    }
  };

  if (!card) return <div>Card not found</div>;

  return (
    <Container style={{ padding: "1rem" }}>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Select Card:</Form.Label>
            <Form.Select value={card.id} onChange={handleNameChange}>
              {cards.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label> Select Color:</Form.Label>
            <Form.Select value={card.color} onChange={handleColorChange}>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Card style={{ backgroundColor: card.color }}>
        <Card.Body>
          <Card.Title>{card.name}</Card.Title>
          <Form.Group className="mb-3" controlId="name">
            <Form.Control
              type="text"
              value={card.name}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardPage;
