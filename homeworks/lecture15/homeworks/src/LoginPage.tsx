import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "test" && password === "test") {
      localStorage.setItem("user", JSON.stringify({ username }));
      navigate("/");
    } else {
      setError("Invalid username or email");
    }
  };
  return (
    <Container className="d-flex align-items-center justify-content-center ">
      <Form onSubmit={handleLogin} className="shadow-lg rounded mt-3">
        <Form.Group controlId="formUsername" className="mx-3 my-3">
          {error && <span>{error}</span>}
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mx-3 my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-3 my-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default LoginPage;
