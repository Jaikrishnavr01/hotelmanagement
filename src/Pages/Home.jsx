import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import AboutHotel from '../Components/AbouttheHotel/AboutHotel'
import Testimonials from '../Components/Testimonials/Testimonials'
import Rooms from '../Components/Rooms/Rooms'
import HotelServices from '../Components/HotelServices/HotelServices'
import NearbyAtrractions from '../Components/NearByAttractions/NearbyAtrractions'
import Footer from '../Components/Footer/Footer'


function Home() {
  return (
    <div>
    <Navbar/>
    <Carousel/>
    <AboutHotel/>
    <Testimonials/> 
    <Rooms/>
    <NearbyAtrractions/>
    <HotelServices/>
    <Footer/>
    </div>
  )
}

export default Home