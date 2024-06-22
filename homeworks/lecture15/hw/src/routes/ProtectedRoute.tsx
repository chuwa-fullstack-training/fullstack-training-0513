import { Navigate } from 'react-router-dom';
import { FC, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children}): ReactNode => {
  const token: string = sessionStorage.getItem("token") || '';

  if (!token) {
    return <Navigate to="/hw1/login" />;
  }

  return children;
};

export default ProtectedRoute;