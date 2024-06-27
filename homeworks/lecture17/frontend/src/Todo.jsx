import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button, ListGroup, Spinner, Alert } from "react-bootstrap";
import { fetchTodos, addTodo, toggleTodo, clearCompleted, markAllDone } from "./todosSlice";

export const Todo = () => {
  const [newTodo, setNewTodo] = useState('');
  const { items: todos, loading, error } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(addTodo(newTodo)).then(() => setNewTodo('')); 
    }
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
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <p>{todos.filter(todo => !todo.completed).length} remaining</p>
          <Button variant="secondary" onClick={() => dispatch(clearCompleted())}>Clear Completed</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Button variant="secondary" onClick={() => dispatch(markAllDone())}>Mark All Done</Button>
        </Col>
      </Row>
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            <Form.Check
              type="checkbox"
              className="me-2"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo._id))}
            />
            <span className={todo.completed ? 'text-decoration-line-through' : ''}>
              {todo.title}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};
