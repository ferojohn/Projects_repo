import React from 'react';
import './About.css';
import about1 from '../../assets/about-1.jpg';
import about2 from '../../assets/about-2.jpg'
import about3 from '../../assets/about-3.jpg'
import about4 from '../../assets/about-4.jpg'
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const About = () => {
  return (
    <div className='container' id='about'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-6'>
                    <img src={about1} alt="website template image" class="img-fluid rounded w-100 wow zoomIn"
                     data-wow-delay="0.1s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "zoomIn"
                      }}
                    />
                    </div>
                    <div className='col-6'>
                    <img src={about2} alt="website template image" class="img-fluid rounded w-75 wow zoomIn"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "zoomIn"
                      }}/>
                    </div>
                    <div className='col-6'>
                    <img src={about3} alt="website template image" class="img-fluid rounded w-75 wow zoomIn"
                     data-wow-delay="0.5s"  style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "zoomIn"
                      }}/>
                    </div>
                    <div className='col-6'>
                    <img src={about4} alt="website template image" class="img-fluid rounded w-100 wow zoomIn"
                     data-wow-delay="0.7s"  style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "zoomIn"
                      }}/>
                    </div>

                    </div>  
            </div>
            <div class="col-lg-6">
          <h5 class="section-title ff-secondary text-start  fw-normal">About Us</h5>
          <h1 className="mb-4 " style={{fontWeight:"600"}}>
      Welcome to <FontAwesomeIcon icon={faUtensils} className="me-3 restorant-icon" /> Restoran
    </h1>
          <p class="mb-4" style={{fontWeight:"500", color:"dimgray"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
          <p class="mb-4" style={{fontWeight:"500", color:"dimgray"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div class="row g-4 mb-4">
            <div class="col-sm-6">
              <div class="d-flex align-items-center border-start border-5 px-3">
                <h1 class="flex-shrink-0 display-5  mb-0" style={{fontWeight:"700"}} data-toggle="counter-up">15</h1>
                <div class="ps-4">
                  <p class="mb-0 popular">Years of</p>
                  <h6 class="text-uppercase mb-0 experience-text">Experience</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="d-flex align-items-center border-start border-5  px-3">
                <h1 class="flex-shrink-0 display-5  mb-0" style={{fontWeight:"700"}} data-toggle="counter-up">50</h1>
                <div class="ps-4 ">
                  <p class="mb-0 popular">Popular</p>
                  <h6 class="text-uppercase mb-0 experience-text">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <a class="btn btn-primary py-3 px-5 mt-2" href="#">Read More</a></div>
        </div>
    </div>
  )
}

export default About
