import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import Forms from './pages/Forms';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forms" element={<Forms />} />
        <Route path="/home" element={<p>abc</p>} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
