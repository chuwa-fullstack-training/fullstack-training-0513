import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, setRedirectUrl } = useAuth();
    const location = useLocation();

    if (!isAuthenticated) {
        setRedirectUrl(location.pathname);
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
