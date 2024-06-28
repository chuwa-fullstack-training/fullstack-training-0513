import { Routes, Route, Link, useNavigate} from "react-router-dom";
import Login from './Login';
import Users from './Users';
import UserProfile from './UserProfile';
import ProtectedRoute from './components/ProtectRoute'
import './App.css';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/users/:login"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
    </Routes>
    </div>
  );
}

function Home() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('username');
    navigate('/');
  };
  return(
    <>
      <h1>Home</h1>
      <nav>
        {username ? (
          <div className="welcome-page">
            <h2>Welcome {JSON.parse(localStorage.getItem('username'))}</h2>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
          ) : (
            <Link to="login">Log In</Link>
          )
        }
      </nav>
    </>
  );
}
export default App;
