import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RoomsComp from '../Components/Rooms/Rooms'
import Footer from '../Components/Footer/Footer'
import Policy from '../Components/Policy/Policy'

function Rooms() {
  return (
    <div>
        <Navbar/>
        <RoomsComp/>
        <Policy/>
        <Footer/>
      
    </div>
  )
}

export default Rooms
