import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonialList } from './Constant';
import Gallery from './Gallery';

function Testimonial() {
    return (
        <div>
            <section style={{ background: "#1a1814" }}>
                <div className="container py-5">
                    <div className='row' data-aos="fade-up" delay="200">
                        <p className='chooseTitle'>TESTIMONIALS</p>
                        <p className='chooseText'>What they're saying about us</p>
                    </div>
                    <div className='container'>
                        <OwlCarousel items={2.99} className="owl-theme" loop margin={8} autoplay={true}>
                            {testimonialList.map((obj) => {
                                const { id, img, name, text, post } = obj
                                return (
                                    <div className="row" key={id} data-aos="fade-up" delay="200">
                                        <div className="col-md-4">
                                            <p className="testomonialItem"><i className="fa-solid fa-quote-left quoteLeft"></i>{text}<i className="fa-solid fa-quote-right quoteRight"></i></p>
                                            <img src={img} className="circleImg" alt="test" />
                                            <h3 className="itemOwl">{name}</h3>
                                            <h4 className="itemOwl12">{post}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <Gallery />
        </div>
    )
}

export default Testimonial                                                                                                                                                                                                                                                                  