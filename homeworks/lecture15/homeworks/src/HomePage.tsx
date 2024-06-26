import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {user ? (
              <>
                <Nav.Link href="" onClick={handleLogOut}>
                  Logout
                </Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
          {/* 
          {user ? (
            <>
              <Link onClick={handleLogOut} to={""}>
                Log out
              </Link>
              <Link to="users">Users</Link>
            </>
          ) : (
            <Link to="login">Log in</Link>
          )} */}
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default HomePage;
