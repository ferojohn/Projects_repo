import React from 'react';
import "./Testimonial.css";
// slick slider css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from "react-slick";
import testimonial from '../../assets/testimonial-1.jpg';
import testimonial1 from '../../assets/testimonial-2.jpg'
import testimonial2 from '../../assets/testimonial-3.jpg'
import testimonial3 from '../../assets/testimonial-4.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
   

    const testimonials = [
        {
            icon: faQuoteLeft,
            des: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            img: testimonial,
            name: "Clara",
            profession: 'Profession'
        },
        {
            icon: faQuoteLeft,
            des: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            img: testimonial1,
            name: "Mathew",
            profession: 'Profession'
        },
        {
            icon: faQuoteLeft,
            des: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
            img: testimonial2,
            name: "William",
            profession: 'Profession'
        },
       
    ];

    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        focusOnSelect: true,
        infinite:true
    };

    return (
        <div className="container slider-container" id='testimoniel'>
            <div className='row'>
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
                <h5 className="section-title-part ff-secondary text-center fw-normal" style={{fontFamily:"Pacifico, cursive"}}>Testimonial</h5>
                <h1 className="mb-5" style={{fontFamily:"Pacifico, cursive"}}>Our Client Say !!!</h1>
            </div>
        <div className='wrapper'>
            <Slider {...settings}>
                {testimonials.map((testimoni, index) => (
                <div className=  'col-lg-3 col-md-3'>
                    <div key={index} className=" card card_col">
                        <a href='#'><FontAwesomeIcon icon={testimoni.icon} /></a>
                        <p className="card-text">{testimoni.des}</p>
                        <div className="card-body-wrapper">
                            <div className='img-container'>
                                <img src={testimoni.img} className="card-img-top" alt="..." />
                            </div>
                            <div className='side-details'>
                                <h5 className="card-title">{testimoni.name}</h5>
                                <small>{testimoni.profession}</small>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </Slider>
        </div>
        </div>
    </div>
      
    
    );
}

export default Testimonial;
