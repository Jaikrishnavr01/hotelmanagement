import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h5 className='f1'>About Us</h5>
            <p>Escape to H-Residency where you'll find the perfect blend of luxury and relaxation. Our residences offer everything you need for a memorable vacation - from family fun to romantic retreats. Experience comfort like never before and make memories that will last a lifetime.</p>
          </div>
          <div className="col-md-2 offset-md-2"> 
            <h5 className='f1'>Menu</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Accommodations</li>
              <li>Dining</li>
              <li>Activities</li>
              <li>Spa & Wellness</li>
              <li>Special Offers</li>
            </ul>
          </div>
       
          <div className="col-md-2 offset-md-1">
            <h5 className='f1'>Contact Us</h5>
            <p>H-Residency</p>
            <p>123 Blissful Avenue</p>
            <p>Saravanampatti, Coimbatore, Tamilnadu-641035, India</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@hresidency.com</p>
          </div>
        </div>
        <p>@Copyrights reserverd by jaikrishna and team</p>
      </div>
    </footer>
  );
}

export default Footer;
