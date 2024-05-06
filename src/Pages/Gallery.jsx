import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import room1 from '../assets/Room1.jpg'
import room2 from '../assets/Room2.jpg'
import room3 from '../assets/Room3.jpg'
import room4 from '../assets/Room4.jpg'

import hall from '../assets/Hall1.jpg'
import restaurant from '../assets/Restaurant.jpg'
import './Gallery.css'; 
import Footer from '../Components/Footer/Footer';

function Gallery() {
  const [selectedField, setSelectedField] = useState('Rooms');

  const roomImages = [room1, room2, room3, room4];
  const hallImages = [hall,hall,hall];
  const restaurantImages = [restaurant,restaurant,restaurant];

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const getImages = () => {
    switch (selectedField) {
      case 'Rooms':
        return roomImages;
      case 'Halls':
        return hallImages;
      case 'Restaurant':
        return restaurantImages;
      default:
        return [];
    }
  };

  return (
    <>
      <Navbar/>

      <div className='Gallery'>
        <h3>Gallery</h3>

        <select value={selectedField} onChange={handleFieldChange}>
          <option value="Rooms">Rooms</option>
          <option value="Halls">Halls</option>
          <option value="Restaurant">Restaurant</option>
        </select>
        <div className='Gallery-container'>
          {getImages().map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gallery;
