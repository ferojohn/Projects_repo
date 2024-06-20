import React from 'react'
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBreadSlice, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <div className='container' style={{ marginTop: "8rem" }}>
            <div className='menu-title'>
                <h5 class="section-title ff-secondary text-start  fw-normal mb-4">Food Menu</h5>
                <h1 className="mb-4 " style={{ fontWeight: "600" }}>Most Popular Items</h1>
                <div className='menu-list-wrapper'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link active"
                                id="breakfast-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#breakfast"
                                type="button"
                                role="tab"
                                aria-controls="breakfast"
                                aria-selected="true"
                            >
                                <FontAwesomeIcon icon={faCoffee} className="menu-list-icon" />
                                <span style={{ color: "gray", fontWeight: '300' }}> Popular</span><br />Breakfast
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="lunch-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#lunch"
                                type="button"
                                role="tab"
                                aria-controls="lunch"
                                aria-selected="false"
                            >
                                <FontAwesomeIcon icon={faBreadSlice} className="menu-list-icon" />
                                <span style={{ color: "gray", fontWeight: '300' }}> Special</span><br />Lunch
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="nav-link"
                                id="dinner-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#dinner"
                                type="button"
                                role="tab"
                                aria-controls="dinner"
                                aria-selected="false"
                            >
                                <FontAwesomeIcon icon={faUtensils} className="menu-list-icon" />
                                <span style={{ color: "gray", fontWeight: '300' }}> Lovely</span><br />Dinner
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                            
                        </div>
                        <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                            {/* Content for Lunch */}
                            <p>Content for Lunch</p>
                        </div>
                        <div className="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                            {/* Content for Dinner */}
                            <p>Content for Dinner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu