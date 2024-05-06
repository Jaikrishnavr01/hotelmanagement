import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import "../NearByAttractions/NearbyAttractions.css"
import image1 from "../../assets/img1.jpg"
import image3 from "../../assets/img3.jpg"
import image4 from "../../assets/img4.jpg"
import image5 from "../../assets/img5.jpg"
import image6 from "../../assets/img6.jpg"
import image7 from "../../assets/img7.jpg"


function NearbyAtrractions() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="attractions-container" style={{ backgroundColor: '#F5F5F5', overflowX: 'hidden', width: '100%', maxWidth: '100%', textAlign: 'center' }}>
      <h2 className="attractions-heading">Nearby Attractions</h2>
      <Row>
        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 0 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title" >Monkey Waterfall</h3>
            <div className="img-container">
              <img src={image1} alt="Local Museum" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: Monday to Sunday 9 am to 6 pm</p>
            <p className="attraction-distance">Distance: 0.5 miles</p>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 1 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title">Siruvani Waterfalls</h3>
            <div className="img-container">
              <img src={image3} alt="City Park" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: 9 am to 3 pm</p>
            <p className="attraction-distance">Distance: 1 mile</p>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 2 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title">Amaravathi Dam</h3>
            <div className="img-container">
              <img src={image4} alt="Historic Landmark" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: 9 am to 4 pm</p>
            <p className="attraction-distance">Distance: 0.3 miles</p>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 3 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title">Marudhamalai Temple</h3>
            <div className="img-container">
              <img src={image5} alt="Historic Landmark" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: 6 am to 8 pm</p>
            <p className="attraction-distance">Distance: 0.3 miles</p>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 4 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title">Gass Forest Museum</h3>
            <div className="img-container">
              <img src={image6} alt="Historic Landmark" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: 9 am to 1 pm and 2 pm to 5 pm</p>
            <p className="attraction-distance">Distance: 0.3 miles</p>
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className={`attraction-item ${hovered === 5 ? 'hovered' : ''}`} onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
            <h3 className="attraction-title">GD Naidu Museum</h3>
            <div className="img-container">
              <img src={image7} alt="Historic Landmark" className="img-fluid" />
            </div>
            <p className="attraction-description">Timings: Tuesday to Sunday 9 am to 6 pm</p>
            <p className="attraction-distance">Distance: 0.3 miles</p>
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default NearbyAtrractions