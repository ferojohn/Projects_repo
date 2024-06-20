import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation, faPhone, faMailBulk, faArrowUpAZ } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className='container-fluid' >
            <div className='row g-5' style={{ display: "flex" }}>
                <div className='col-lg-3 col-md-6 footer_col'>
                    <h4 className='ff-secondary heading'>Company</h4>
                    <div className='lists'>
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Reservation</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Condition</a>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 footer_col'>
                    <h4 className='ff-secondary dial'>Contact</h4>
                    <div className='lists'>
                        <p className='mb-2'><FontAwesomeIcon icon={faMapLocation} className="me-2" />123 Street, New York, USA</p>
                        <p className='mb-2'><FontAwesomeIcon icon={faPhone} className="me-2" />+012 345 67890</p>
                        <p className='mb-2'><FontAwesomeIcon icon={faMailBulk} className="me-2" />test@gmail.com</p>
                        <div className='lists_icons_wrapper pt-2'>
                            <a href=''><FontAwesomeIcon icon={faInstagram} className='me-2 fontawesome' /></a>
                            <a href=''><FontAwesomeIcon icon={faFacebook} className='me-2 fontawesome' /></a>
                            <a href=''><FontAwesomeIcon icon={faLinkedin} className='me-2 fontawesome' /></a>
                            <a href=''><FontAwesomeIcon icon={faYoutube} className='me-2 fontawesome' /></a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 footer_col'>
                    <h4 className='ff-secondary opening'>Opening</h4>
                    <div className='lists'>
                        <h5 class="text-light fw-normal">Monday - Saturday</h5>
                        <p>09AM - 09PM</p>
                        <h5 class="text-light fw-normal">Sunday</h5>
                        <p>10AM - 08PM</p>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 footer_col'>
                    <h4 class="newsletter ff-secondary  fw-normal mb-4">Newsletter</h4>
                    <div className='lists'>
                        <p className='newsletter-para'>Dolor amet sit justo amet<br /> elitr clita ipsum elitr est.</p>
                        <div class="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input class="form-control border-primary w-100 py-3 ps-4 pe-5 input_form" type="text" placeholder="Your email" fdprocessedid="gpablr" />
                            <button type="button" class="btn footer_btn" fdprocessedid="88nxlj">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer