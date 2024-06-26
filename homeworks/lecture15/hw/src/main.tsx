import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Hw1 from './pages/hw1/Hw1';
import Login from '../component/hw1/Login';
import ProtectedRoute from '../component/hw1/ProtectedRoute';
import UserDetail from '../component/hw1/UserDetail';
import Hw2 from './pages/hw2/Hw2';
import BoxDetail from '../component/hw2/BoxDetail';
import BoxProvider from '../component/hw2/BoxContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BoxProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="hw1/login" element={<Login />} />
              <Route
                path="hw1/users"
                element={
                  <ProtectedRoute >
                    <Hw1 />
                  </ProtectedRoute >
                }
              />
              <Route
                path="hw1/users/:login"
                element={
                  <ProtectedRoute >
                    <UserDetail />
                  </ProtectedRoute >
                }
              />
              <Route path="hw2" element={<Hw2 />} />
              <Route path="hw2/:id" element={<BoxDetail />} />
          </Route>
        </Routes>
      </BoxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
