import React from 'react';
import './Contact.css';
import videoThumbnail from '../../assets/video.jpg';

const Reservation = () => {
  return (
    <div className='container reservation-container' id='contact'>
        <div className='row'>
            <div className='col-md-12 col-lg-6 video'>
                 <button className='btn-play'>
                    <span></span>
                 </button>
            </div>
            <div className='col-md-12 col-lg-6  reservation-form '>
            <h5 class="section-title ff-secondary text-start  fw-normal">Reservation</h5>
            <h1 className='text-white mb-4'>Book A Table Online</h1>
               <form>
                <div className='row'>
                    <div className='col-md-6'>
                        <input type='text' className='form-control' placeholder='Your Name'/>
                    </div>
                    <div className='col-md-6'>
                        <input type='email' className='form-control' placeholder='Your Email'/>
                    </div>
                    <div className='col-md-6'>
                        <input type='text' className='form-control' placeholder='Date & Time'/>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-floating'>
                        <select id='select1' className='form-select'>
                            <option value='1'>People 1</option>
                            <option value='2'>People 2</option>
                            <option value='3'>People 3</option>
                        </select>
                        <label htmlFor='select1'>No Of People</label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='form-floating'>
                          <textarea placeholder='Special Request' className='form-control' id='message' style={{ height: '100px' }} />
                          <label htmlFor="message">Special Request</label>
                        </div>
                    </div>
                    <div className='col-md-12'>
                    <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                    </div>
                </div>
               </form>
            </div>
        </div>
    </div>
  );
}

export default Reservation;
