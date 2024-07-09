import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './BookingPage.css'; // Import the CSS file

import { useNavigate } from 'react-router-dom';

export default function BookingPage() {
  const [userId, setUserId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');
   
    if (user) {
      const userObject = JSON.parse(user);
      const userId1 = userObject._id;
      setUserId(userId1);
    } else {
      console.log("No user data found in localStorage");
    }

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (userId) {
      fetchBookingDetails(userId);
    }
  }, [userId]);

  const fetchBookingDetails = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3003/auth/alldata/${userId}`);
      setBookingDetails(response.data.roomdata || []);
      console.log("Booking Details: ", response.data.roomdata);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRowClick = (bookingId) => {
    // Handle what happens when a row is clicked, e.g., navigate to a booking detail page
    console.log("Clicked Booking ID:", bookingId);
    // Example: navigate(`/booking/${bookingId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="booking-details-container">
        <h2>Booking Details:</h2>
        <div className="table-responsive">
          <table className="table booking-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Room Type</th>
                <th>Room Number</th>
                <th>Room Status</th>
                <th>Guest Name</th>
                <th>Guest Phone</th>
                <th>Room Capacity</th>
                <th>Room Nights</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Room Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(bookingDetails) && bookingDetails.length > 0 ? (
                bookingDetails.map((detail, index) => (
                  <tr key={index} onClick={() => handleRowClick(detail._id)}>
                    <td className='text-center'>{detail._id}</td>
                    <td className='text-center'>{detail.roomType}</td>
                    <td className='text-center'>{detail.roomNumber}</td>
                    <td className='text-center'>{detail.roomStatus}</td>
                    <td className='text-center'>{detail.roomGuestName}</td>
                    <td className='text-center'>{detail.roomGuestPhone}</td>
                    <td className='text-center'>{detail.roomCapacity}</td>
                    <td className='text-center'>{detail.roomNights}</td>
                    <td className='text-center'>{detail.roomCheckIn}</td>
                    <td className='text-center'>{detail.roomCheckOut}</td>
                    <td className='text-center'>{detail.roomPrice}</td>
                    <td className='text-center'><button className="btn btn-danger text-center">Cancel</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12">No booking details available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
