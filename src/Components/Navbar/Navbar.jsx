import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
            <NavLink exact to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/Rooms" onClick={toggleMenu}>Rooms</NavLink>
          </li>
          <li>
            <NavLink to="/Hall" onClick={toggleMenu}>Hall</NavLink>
          </li>
          <li>
            <NavLink to="/Service" onClick={toggleMenu}>Dine & Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/Gallery" onClick={toggleMenu}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Contact-us" onClick={toggleMenu}>Contact us</NavLink>
          </li>
          
        <li>

        <button className="btn1">Book Now</button>
        </li>
    
          
        </ul>
      </div>
      <div className="navbar-right">
        <button className="btn2">Book Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
