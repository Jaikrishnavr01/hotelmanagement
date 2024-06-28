import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h5 className='f1'>About Us</h5>
            <p>Escape to Habibi  Residency where you'll find the perfect blend of luxury and relaxation. Our residences offer everything you need for a memorable vacation - from family fun to romantic retreats. Experience comfort like never before and make memories that will last a lifetime.</p>
          </div>
          <div className="col-md-2 offset-md-2"> 
            <h5 className='f1'>Menu</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About Us</Link></li>
              <li><Link to='/Rooms'>Rooms</Link></li>
              {/* <li>Halls</li>
              <li>Dine & Drinks</li> */}
              <li><Link to="/Gallery">Gallery</Link></li>
              <li><Link to='/Contact-us'>Contact us</Link></li>
            </ul>
          </div>
       
          <div className="col-md-2 offset-md-1">
            <h5 className='f1'>Contact Us</h5>
            <p>Habibi Residency</p>
            <p>123 Blissful Avenue</p>
            <p>Saravanampatti, Coimbatore, Tamilnadu-641035, India</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@hresidency.com</p>
          </div>
        </div>
        <p>Developed by jaikrishna</p>
      </div>
    </footer>
  );
}

export default Footer;
