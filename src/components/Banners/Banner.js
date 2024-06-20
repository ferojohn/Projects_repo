import React from 'react'
import './Banner.css';
import  bannerimage from '../../assets/banner-image.png'
const Banner = () => {
  return (
    <div className='banner-header' id='home'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6  text-white banner-text-card' >
                   <h3>Enjoy Our <br/>Delicious Meal</h3>
                   <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                     Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
                     sed stet lorem sit clita duo justo magna dolore erat amet</p>
                     <button className='btn'>Book a table</button>
                </div>
                <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img class="img-fluid" src={bannerimage} alt="website template image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner