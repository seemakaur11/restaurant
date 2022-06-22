import React from 'react'
import Location from './Location'
function Contact() {
    return (
        <section style={{ background: "#0c0b09" }}>
            <div className='container-fluid py-5'>
                <div className='row mx-5 p-3' data-aos="fade-up" delay="200">
                    <p className='chooseTitle'>CONTACT</p>
                    <p className='chooseText'>Contact Us</p>
                </div>
                <div className='m-0 p-0' data-aos="fade-up" delay="200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3614654298594!2d-74.00832638520683!3d40.710058579332106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sin!4v1655901943143!5m2!1sen!2sin"
                        width="600" height="450" allowfullscreen="" id="map-frame" title="mc colony"
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Location />
        </section>
    )
}

export default Contact