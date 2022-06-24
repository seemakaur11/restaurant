import React from 'react'
import Footer from './Footer'

function Location() {
    return (
        <section style={{ background: "#0c0b09" }}>
            <div className='container py-4' data-aos="fade-up" delay="200">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='py-2'>
                            <h4 className='socialText'><i className="fa-solid fa-location-dot socialLocation m-3"></i>Location: </h4>
                            <p className='socialPara'>A108 Adam Street, New York, NY 535022</p>
                        </div>
                        <div className='py-2'>
                            <h4 className='socialText'><i className="fa-regular fa-clock socialLocation m-3"></i>Open Hours:</h4>
                            <p className='socialPara'>Monday-Saturday:11:00 AM - 23:00 PM</p>
                        </div>
                        <div className='py-2'>
                            <h4 className='socialText'><i className="fa-regular fa-envelope socialLocation m-3"></i>Email: </h4>
                            <p className='socialPara'>info@example.com</p>
                        </div>
                        <div className='py-2'>
                            <h4 className='socialText'><i className="fa-solid fa-mobile-screen-button socialLocation m-3"></i>Call: </h4>
                            <p className='socialPara'>+1 5589 55488 55s</p>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input type="text" name="name" placeholder="Your Name" className='inputData' />
                            </div>
                            <div className='col-md-6'>
                                <input type="email" name="email" placeholder="Your Email" className='inputData' />
                            </div>
                            <div className='col-md-12'>
                                <input type="text" name="subject" placeholder="Subject" className='inputData' />
                            </div>
                            <div className='col-12'>
                                <textarea name="mesage" placeholder="Message" className='inputData22'></textarea>
                                <div className='pt-3 justify-content-center text-center py-5'>
                                    <button className='bookBtn'>
                                        <a className="nav-link1" href="/book">SEND MESSAGE</a>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='horizontalLine'></div>
            <Footer />
        </section>
    )
}

export default Location