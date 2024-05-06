import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Booking.css';
import Policy from '../Policy/Policy';

const roomRates = {
  'Executive-ac': 3000,
  'Executive Premier': 4000,
  'Deluxe': 5000,
  'Premium': 6000
};

export default function Booking() {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    roomType: 'Executive-ac',
    nights: '',
    persons: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    roomNumber: null,
    roomPrice: roomRates['Executive-ac'],
    totalPrice: 0
  });

  useEffect(() => {
    if (currentStage === 3) {
      const roomNumber = Math.floor(Math.random() * 15) + 1;
      setFormData({ ...formData, roomNumber: roomNumber });
    }
  }, [currentStage]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === 'roomType') {
      setFormData({
        ...formData,
        roomType: value,
        roomPrice: roomRates[value],
        roomNumber: null,
        totalPrice: calculateTotalCost()
      });
    } else {
      setFormData({ ...formData, [name]: value, totalPrice: calculateTotalCost() });
    }
  };

  const handleNextStage = (e) => {
    e.preventDefault();

    if (currentStage === 3) {
      axios.post("http://localhost:3002/Rooms", {
        roomType: formData.roomType,
        roomNumber: formData.roomNumber,
        roomStatus: "Available",
        roomGuestName: formData.name,
        roomGuestEmail: formData.email,
        roomGuestPhone: formData.phone,
        roomCapacity: formData.persons,
        roomNights: formData.nights,
        roomCheckIn: formData.arrivalDate,
        roomCheckOut: formData.departureDate,
        roomPrice: formData.totalPrice,
      })
        .then(res => {
          console.log(res);
          setFormData({ ...formData, id: res.data.id });
          setCurrentStage(currentStage + 1);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setCurrentStage(currentStage + 1);
    }
  };

  const calculateTotalCost = () => {
    const { nights, roomPrice, persons } = formData;

    const parsedNights = Number(nights);
    const parsedRoomPrice = Number(roomPrice);
    const parsedPersons = Number(persons);

    if (isNaN(parsedNights) || isNaN(parsedRoomPrice) || isNaN(parsedPersons)) {
      return 0; 
    }

    let totalCost = parsedNights * parsedRoomPrice;

    if (parsedPersons > 2) {
      totalCost += (parsedPersons - 2) * 1000;
    }

    return totalCost;
  };

  const renderForm = () => {
    switch (currentStage) {
      case 1:
        return (
          <div className="booking-form">
            <h2>Checking Room Availability</h2>
            <form onSubmit={handleNextStage}>
              <label>Arrival Date:</label>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleFormChange}
                required
              />
              <label>Departure Date:</label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleFormChange}
                required
              />
              <label>Room Type:</label>
              <br />
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleFormChange}
                required
              > 
                <option value="Executive-ac">Executive-Ac</option>
                <option value="Executive Premier">Executive Premier</option>
                <option value="Deluxe">Deluxe</option>
                <option value="Premium">Premium</option>
              </select> <br />
              <label>Nights:</label>
              <input
                type="number"
                name="nights"
                value={formData.nights}
                onChange={handleFormChange}
                required
              />
              <label>Persons:</label>
              <input
                type="number"
                name="persons"
                value={formData.persons}
                onChange={handleFormChange}
                required
              />
              <button className="btn btn-success" type="submit">Check</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="booking-form">
            <h2>Guest Details</h2>
            <form onSubmit={handleNextStage}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                required
              />
              <button className="btn btn-danger" type="button" onClick={() => setCurrentStage(1)}>
                Back
              </button>
              <button className="btn btn-success" type="submit">Submit</button>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="booking-form">
            <form onSubmit={handleNextStage}>
              <h3>Booking Confirmation</h3>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
              <p>Address: {formData.address}</p>
              <p>Arrival Date: {formData.arrivalDate}</p>
              <p>Departure Date: {formData.departureDate}</p>
              <p>Room Type: {formData.roomType}</p>
              {/* <p>Room Number: {formData.roomNumber}</p> */}
              <p>Nights: {formData.nights}</p>
              <p>Persons: {formData.persons}</p>
              <p>Total Cost: {formData.totalPrice}</p>
              <button className="btn btn-danger" type="button" onClick={() => setCurrentStage(2)}>
                Back
              </button>
              <button className="btn btn-success" type="submit">Confirm</button>
            </form>
            <Policy/>
          </div>
        );

      case 4:
        return (
          <div className="booking-details-container">
            <h1>Booking Details</h1>
            <p>Booking Id: {formData.id}</p>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Room Number: {formData.roomNumber}</p>
            <p>Arrival Date: {formData.arrivalDate}</p>
            <p>Departure Date: {formData.departureDate}</p>
            <p>Room Type: {formData.roomType}</p>
            <p>Persons: {formData.persons}</p>
            <p>Nights: {formData.nights}</p>
            <p>Total Cost: Rs {formData.totalPrice}</p>
          </div>
        )

      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="booking-container">
        <div className="progress">
          <span className={currentStage >= 1 ? 'active' : ''}>Checking Room Availability</span>
          <span className={currentStage >= 2 ? 'active' : ''}>Guest Details</span>
          <span className={currentStage >= 3 ? 'active' : ''}>Order Details</span>
          <span className={currentStage >= 4 ? 'active' : ''}>Booking Details</span>
        </div>
        {renderForm()}
      </div>
      
      <Footer />
    </div>
  );
}
