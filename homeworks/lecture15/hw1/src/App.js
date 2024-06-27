import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import UserListScreen from "./UserListScreen";
import UserScreen from "./UserScreen";
import { UserProvider } from "./UserContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomeScreen isLogged={isLogged} onLogin={setIsLogged} />}
          />
          <Route
            path="/login"
            element={<LoginScreen onLogin={setIsLogged} />}
          />
          <Route
            path="/users"
            element={isLogged ? <UserListScreen /> : <Navigate to="/login" />}
          />
          <Route
            path="/users/:login"
            element={isLogged ? <UserScreen /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
