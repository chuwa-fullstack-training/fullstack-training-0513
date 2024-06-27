import { Navigate, Link, Outlet } from 'react-router-dom';
import { useMemo } from 'react';

export const ProtectedRoute = ({ children }) => {
  const user = useMemo(() => localStorage.getItem('user'), []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    children
  );
}
