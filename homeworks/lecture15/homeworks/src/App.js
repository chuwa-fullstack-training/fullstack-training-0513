import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate, Link } from 'react-router-dom';
import { HomeScreen } from './Screens/HomeScreen';
import { LoginScreen } from './Screens/LoginScreen';
import {ProtectedRoute} from './components/ProtectedRoute';
import { GithubScreen } from './Screens/GithubScreen';
import { Profile } from './components/Profile';
import { ColorComponent } from './Screens/ColorComponent';
import { ComponentDetail } from './components/ComponentDetail';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/users" element={<ProtectedRoute><GithubScreen /></ProtectedRoute>} />
        <Route path="/users/:login" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/color" element={<ColorComponent />}/>
        <Route path="/color/:id" element={<ComponentDetail/>}/>
      </Routes>
    </Router>


  );
}

export default App;
