import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('/');
    const navigate = useNavigate();

    const login = (username, password) => {
        if (username === 'user' && password === 'password') {
            setIsAuthenticated(true);
            navigate(redirectUrl);
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setRedirectUrl }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
