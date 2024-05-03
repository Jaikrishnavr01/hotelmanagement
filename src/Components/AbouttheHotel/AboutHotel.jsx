import React from 'react'
import'./AboutCss.css'

function AboutHotel() {
  return (
    <div className='Container'>

    <div className='AboutName row'>
      <h1>PREMIUM LODGING</h1>
      <h3>Delight in an Exquisite Experience</h3>
      <div className='AboutHotel col '>
      <p>Discover the epitome of luxury and comfort at Holiday Residency, an esteemed destination nestled in the vibrant city of Coimbatore, famously known as 'The Manchester of South India'. Perfectly situated in Saravanampatti, our hotel enjoys close proximity to major business hubs like Chil SEZ IT Park and KCT Tech Park, as well as leading tech giants such as Bosch, Cognizant, NTT Data, and Amazon. Whether you're traveling for business or leisure, our impeccable service and upscale amenities promise a serene and enjoyable stay.</p>
      <p>Choose from our selection of 40 well-appointed rooms, including Executive, Deluxe, and Premium categories, each designed to cater to your individual preferences. Conveniently located near Coimbatore International Airport in Peelamedu, Holiday Residency ensures hassle-free travel for our guests.</p>
      <p>Explore the charm of Coimbatore with ease, as Holiday Residency is surrounded by numerous attractions waiting to be discovered. Let our dedicated team and exceptional facilities exceed your expectations and create cherished memories during your stay. Experience luxury redefined at Holiday Residency.</p>
      </div>
 
 <div className='col'>
  <img  className="img" src="https://www.papercitymag.com/wp-content/uploads/2023/02/loutrel-charleston-boutique-hotel-exterior-straight-211150-0091-HR.jpg" alt=""  width={'50%'}/>
 </div>
    </div>
    </div>
)
}

export default AboutHotel