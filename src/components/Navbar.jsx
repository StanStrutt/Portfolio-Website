import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <header>
      <div className='navbar'>
        <div className='navbar-headers'>
          <div className='name'>
            <h1>Stan Strutt</h1>
          </div>
          <div className='portfolio'>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className='navbar-links'>
          <nav>           
            <h2 className='links'>
              <Link className="home-link" to="/" alt="Link to the Home page">Home</Link>
              <Link className="portfolio-link" to="/portfolio" alt="Link to the Portfolio page">Portfolio</Link>
            </h2>
          </nav>
        </div>
      </div>
    </header>
  );
};

