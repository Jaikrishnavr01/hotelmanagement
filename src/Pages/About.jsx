import React from 'react'
import AboutHotel from '../Components/AbouttheHotel/AboutHotel'
import HotelServices from '../Components/HotelServices/HotelServices'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

function About() {
  return (
    <div>
        <Navbar/>
       <div  style={{backgroundColor:"#FFF2D7"}}>
        <h2 style={{textAlign: 'center', fontWeight: '700'}}>About Us</h2>

        <AboutHotel/></div>
        <HotelServices/>
        <Footer/>
    </div>
  )
}

export default About
