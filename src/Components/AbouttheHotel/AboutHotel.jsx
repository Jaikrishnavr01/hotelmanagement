import React from 'react';
import './AboutCss.css';

function AboutHotel() {
  return (
    <div className='container-fluid' style={{backgroundColor:"#FFF2D7"}}>
      <div className='AboutName row p-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 '>
          <div className="fade-in-left">
            <h4>PREMIUM LODGING</h4>
            <h5>Delight in an Exquisite Experience</h5>
            <div className='AboutHotel'>
              <p>Discover the epitome of luxury and comfort at H-Residency, an esteemed destination nestled in the vibrant city of Coimbatore, famously known as 'The Manchester of South India'. Perfectly situated in Saravanampatti, our hotel enjoys close proximity to major business hubs like Chil SEZ IT Park and KCT Tech Park, as well as leading tech giants such as Bosch, Cognizant, NTT Data, and Amazon. Whether you're traveling for business or leisure, our impeccable service and upscale amenities promise a serene and enjoyable stay.</p>
              <p>Choose from our selection of 40 well-appointed rooms, including Executive, Deluxe, and Premium categories, each designed to cater to your individual preferences. Conveniently located near Coimbatore International Airport in Peelamedu, H-Residency ensures hassle-free travel for our guests.</p>
              <p>Explore the charm of Coimbatore with ease, as H-Residency is surrounded by numerous attractions waiting to be discovered. Let our dedicated team and exceptional facilities exceed your expectations and create cherished memories during your stay. Experience luxury redefined at H-Residency.</p>
            </div>
          </div>
        </div>

        <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <img className="img-fluid scroll-image fade-in-right" src="https://www.papercitymag.com/wp-content/uploads/2023/02/loutrel-charleston-boutique-hotel-exterior-straight-211150-0091-HR.jpg" alt="" width={'500px'} />
        </div>
      </div>
    </div>
  );
}

export default AboutHotel;
