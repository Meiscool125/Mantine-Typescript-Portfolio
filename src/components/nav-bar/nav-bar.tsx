// Navbar.js
import React from 'react';
import './nav-bar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="text-container">
          <text className="text-style">About</text>
          <text className="text-style">Home</text>
          <text className="text-style">Contact</text>
      </div>
    </div>
  );
};

export default Navbar;