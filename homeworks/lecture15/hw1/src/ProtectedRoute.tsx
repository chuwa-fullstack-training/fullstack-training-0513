import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedRoutePropType = {
    element: React.ReactElement,
    isAuthenticated: boolean
}

export default function ProtectedRoute(props: ProtectedRoutePropType): React.ReactElement{
    const location = useLocation();
    return <>
        { 
            props.isAuthenticated ? 
            props.element : 
            <Navigate to="/login" state={{from: location}} replace /> 
        }
    </>
}