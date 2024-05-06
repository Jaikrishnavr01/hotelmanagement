import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import './BookingPage.css'; // Import the CSS file
import Policy from '../Policy/Policy';

export default function BookingPage() {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    fetchBookingDetails();
  }, []);

  const fetchBookingDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3002/Rooms');
      setBookingDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/Rooms/${id}`);
      // Update the booking details after deletion
      const updatedBookingDetails = bookingDetails.filter(
        (booking) => booking.id !== id
      );
      setBookingDetails(updatedBookingDetails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2>Booking Details:</h2>
        {bookingDetails.length === 0 ? (
          <p>No booking details available.</p>
        ) : (
          <table className="booking-table"> {/* Apply the CSS class to the table */}
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Room Type</th>
                <th>Room Number</th>
                <th>Check-in Date</th>
                <th>Check-out Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingDetails.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.id}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.roomNumber}</td>
                  <td>{booking.roomCheckIn}</td>
                  <td>{booking.roomCheckOut}</td>
                  <td>
                    <button onClick={() => handleDelete(booking.id)} className='btn btn-danger'>
                      Cancel Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    
      <Footer />

    </div>
  );
}
