import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './App';
import './index.css';

const Main: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);