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
      name: 'Vanmuhil',
      review: "I recently had the pleasure of staying at [Hotel Name] during a business trip, and I was blown away by the level of service and luxury. The location was convenient, the room was spacious and well-appointed, and the amenities were top-notch. The staff was incredibly friendly and accommodating, making me feel right at home. I wouldn't hesitate to recommend this hotel to anyone looking for a five-star experience.",
    },
    {
      id: 2,
      name: 'Sandy',
      review: "Our family vacation at Habibi  Residency was nothing short of amazing! The kids had a blast at the pool and participating in the hotel's daily activities, while my husband and I enjoyed unwinding at the spa and exploring the local area. The room was comfortable and spacious, and the on-site dining options were delicious. The staff went out of their way to make us feel welcome, and we're already planning our next visit!",
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
      <h5>Hear what clients are saying about Habibi Residence!</h5>
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
