import React from 'react';
import './Team.css';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import person4 from '../../assets/person4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
    const team = [
        {
            img: person1,
            name: 'Mark',
            designation: 'Chef'
        },
        {
            img: person2,
            name: 'Peter',
            designation: 'AssChef'
        },
        {
            img: person3,
            name: 'Dany',
            designation: 'Manager'
        },
        {
            img: person4,
            name: 'Williams',
            designation: 'Chef'
        }
    ];

    return (
        <div className='container team_cover' id='team'>
            <div className='text-center wow fadeInUp' data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp" }}>
                <h5 className="section-title-part ff-secondary text-center fw-normal" style={{ fontFamily: "Pacifico, cursive" }}>Team Members</h5>
                <h1 className="mb-5" style={{ fontFamily: "Pacifico, cursive" }}>Our Master Chefs</h1>
            </div>
            <div className='row'>
                {team.map((list, index) => (
                    <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                        <div className='card card-cover text-center'>
                            <img src={list.img} alt={list.name}/>
                            <h5>{list.name}</h5>
                            <small>{list.designation}</small>
                            <div className="social-icons">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;
