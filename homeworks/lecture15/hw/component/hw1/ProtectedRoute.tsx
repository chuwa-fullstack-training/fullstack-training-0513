import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  const location = useLocation();

  return isAuthenticated ? children : <Navigate to="/hw1/login" state={{ from: location }} />;  //Sends the current location to the login page.
};

export default ProtectedRoute;