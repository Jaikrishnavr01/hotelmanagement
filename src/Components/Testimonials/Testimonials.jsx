import React from 'react';
import Slider from 'react-slick';
import'./Testimonials.css'

// Import CSS files for react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const testimonialData = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <h5>Hear what clients are saying about H-Residence!</h5>
      <Slider {...settings}>
        {testimonialData.map(testimonial => (
          <div key={testimonial.id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
