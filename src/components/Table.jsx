import React from 'react';
import Testimonial from './Testimonial';

function Table() {
    return (
        <div>
            <section style={{ background: "#0c0b09" }}>
                <div className='container py-5'>
                    <div className='row' data-aos="fade-up" delay="200">
                        <p className='chooseTitle'>RESERVATION</p>
                        <p className='chooseText'>Book a Table</p>
                    </div>
                    <div className='row' data-aos="fade-up" delay="200">
                        <div className='col-md-4'>
                            <input type="text" name="name" placeholder="Your Name" className='inputData' />
                        </div>
                        <div className='col-md-4'>
                            <input type="email" name="email" placeholder="Your Email" className='inputData' />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name="phone" placeholder="Your Phone" className='inputData' />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name="date" placeholder="Date" className='inputData' />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name="time" placeholder="Time" className='inputData' />
                        </div>
                        <div className='col-md-4'>
                            <input type="text" name="people" placeholder="# of people" className='inputData' />
                        </div>
                        <div className='col-12 justify-content-center text-center'>
                            <textarea name="mesage" placeholder="Message" className='inputData22'></textarea>
                            <div className='pt-3'>
                                <button className='bookBtn'>
                                    <a className="nav-link1" href="/book">BOOK A TABLE</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
        </div>
    )
}

export default Table