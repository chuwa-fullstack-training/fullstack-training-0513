import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

export const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const toggleTodo = (index) => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const markAllDone = () => {
    dispatch({ type: 'MARK_ALL_DONE' });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 mb-4">Todo List</h1>
          <Form.Control
            type="text"
            value={newTodo}
            placeholder="Add your new todo"
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <p>{todos.filter(todo => !todo.completed).length} remaining</p>
          <Button variant="secondary" onClick={clearCompleted}>Clear Completed</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Button variant="secondary" onClick={markAllDone}>Mark All Done</Button>
        </Col>
      </Row>
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              className="me-2"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span className={todo.completed ? 'text-decoration-line-through' : ''}>
              {todo.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
