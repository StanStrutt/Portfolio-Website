import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Navbar from './components/Navbar';
import "./App.css"
import Title from './components/title';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;