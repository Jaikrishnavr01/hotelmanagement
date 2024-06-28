import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Hall from './Pages/Hall';
import DineDirinks from './Pages/DineDirinks';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import Auth from './Components/Auth/Auth';
import Booking from './Components/Booking/Booking';
import BookingPage from './Components/Booking/BookingPage';
import NoMatch from './Components/Nomatch/NoMatch';
import RequiredAuth from './Components/Auth/RequriedAuth';



function App() {
  return (
    <>
      <Auth>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Rooms' element={<Rooms />} />
          <Route path='/Hall' element={<Hall />} />
          <Route path='/Dine&Drinks' element={<DineDirinks />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Contact-us' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/bookingorders' element={<BookingPage />} />
          <Route path='/bookingpage' element={<RequiredAuth><Booking /></RequiredAuth>} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Auth>
    </>
  );
}

export default App;
