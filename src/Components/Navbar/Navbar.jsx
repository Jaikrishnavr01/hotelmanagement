import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthProvider, useAuth } from '../Auth/Auth';
import RequiredAuth from '../Auth/RequriedAuth';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      logout(); // Call logout function from Auth context
      navigate('/login'); // Redirect to login page after logout
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h5>Habibi Residency</h5>
        {/* <img src="logo.png" alt="Logo" className="logo" /> */}
      </div>
      <div className="navbar-center">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
          <div className={`toggle-line ${showMenu ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li>
          <NavLink to="/" exact={true.toString()} onClick={toggleMenu} >Home</NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/Rooms" onClick={toggleMenu}>Rooms</NavLink>
          </li>
          {/* <li>
            <NavLink to="/Hall" onClick={toggleMenu}>Hall</NavLink>
          </li>
          <li>
            <NavLink to="/Dine&Drinks" onClick={toggleMenu}>Dine & Drinks</NavLink>
          </li> */}
          <li>
            <NavLink to="/Gallery" onClick={toggleMenu}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Contact-us" onClick={toggleMenu}>Contact us</NavLink>
          </li>

          {user && <li> <NavLink to="/bookingorders" onClick={toggleMenu}>Bookings</NavLink></li>
          }
              {user && <li> <NavLink to="/bookingpage" onClick={toggleMenu}>Book Now</NavLink></li>
          }

       
          {user ? (
      <li>
      <button  onClick={handleLogout} className="btn1">Logout</button>
    </li>
      ):(
        <Link to='/login'><button className="btn1">Book Now</button></Link>
      )}
          
        </ul>
      </div>
      {user ? (
      <div className="navbar-right">
        <button  onClick={handleLogout} className="btn2">Logout</button>
      </div>
      ):(
        <Link to='/login'><button className="btn2">Book Now</button></Link>
      )}
    </nav>
  );
}

export default Navbar;
