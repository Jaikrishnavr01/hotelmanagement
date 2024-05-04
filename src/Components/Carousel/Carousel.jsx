import React, { useState, useEffect } from 'react';
import './carousel.css';
import img1 from '../../assets/bedroom.jpg';
import img2 from '../../assets/hotel2.jpg';
import img3 from '../../assets/hotel3.jpg';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    img1,
    img2,
    img3
  ]; 

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 13000); 
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div className="label">
        <h3>Welcome to H-Residency luxury hotel</h3>
        <p>Delight in life's pinnacle moments</p>
      </div>
      <button onClick={goToPreviousSlide}>{"<"}</button>
      <div className="slide">
        <img src={slides[currentSlide]} alt='slider-img' />
      </div>
      <button onClick={goToNextSlide}> {">"} </button>
    </div>
  );
}

export default Carousel;
