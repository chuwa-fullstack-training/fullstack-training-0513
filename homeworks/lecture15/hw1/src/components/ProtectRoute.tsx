import { Navigate, Link } from 'react-router-dom';
import { useMemo } from 'react';

export default function ProtectedRoute({ children }) {
  const username = useMemo(() => localStorage.getItem('username'), []);

  if (!username) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {children}
    </div>
  );
}
