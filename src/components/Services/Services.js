import React, { useEffect, useState } from 'react';
import './Services.css';
import { faUtensils, faUserCircle, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    const [list, setList] = useState([]);
    const services = [
        {
            icon: faUserCircle,
            title: "Master Chefs",
            des: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: faUtensils,
            title: "Quality Food",
            des: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: faCartPlus,
            title: "Online Order",
            des: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        },
        {
            icon: faHeadset,
            title: "24/7 Service",
            des: 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        }
    ];

    useEffect(() => {
        setList(services);
    }, []);

    return (
        <div className='container' id='service'>
            <div className='row'>
                {list && list.map((item, index) => (
                    <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <FontAwesomeIcon icon={item.icon} className="icon" />
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.des}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
