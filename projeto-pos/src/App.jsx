// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Página de home (opcional para redirecionamento)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>abc</p>} />
        <Route path="/login" element={<Home />} />
        {/* <Home /> */}
      </Routes>
    </Router>
  );
};

export default App;
