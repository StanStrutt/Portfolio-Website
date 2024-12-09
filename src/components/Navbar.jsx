import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div>
      <h1>
        <Link to="/" alt="Link to the Home page">Home</Link>
        </h1>
        <h1>
          <Link to="/portfolio" alt="Link to the Portfolio page">Portfolio</Link>
        </h1>
        </div>
    </nav>
  );
};

export default Navbar;