import React from 'react';
import events from '../img/events.jpg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { eventsList } from './EventList';
import Table from './Table';

function Party() {

    return (
        <section id="events" style={{ backgroundImage: `url(${events})`, backgroundAttachment: "fixed", height: "auto", backgroundPosition: "center bottom" }}>
            <div className="partyContent"></div>
            <div className='container py-5'>
                <div className='row' data-aos="fade-up" delay="200">
                    <p className='chooseTitle'>EVENTS</p>
                    <p className='chooseText'>Organize Your Events in our Restaurant</p>
                </div>
                <div className='container pt-4'>
                    <OwlCarousel items={1} className="owl-theme" loop margin={8} autoplay={true}>
                        {
                            !!eventsList && eventsList.map((obj) => {
                                const { id, name, img, text, price, description } = obj
                                return (
                                    <div className='row' key={id} data-aos="fade-up" delay="200">
                                        <div className='col-md-6'>
                                            <img src={img} className="" alt="party" />
                                        </div>
                                        <div className='col-md-6'>
                                            <h3 className='partyHead'>{name}</h3>
                                            <p className='partyPrice'><span>{price}</span></p>
                                            <p className='partyText'>{text}</p>
                                            {obj.eventsPoint.map((data, id) => {
                                                return (
                                                    <div key={id}>
                                                        <p className='partyText1'><i className="far fa-check-circle checkCircle m-2"></i>{data}</p>
                                                    </div>
                                                )
                                            })}
                                            <p className='partyText11'>{description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
            <Table />
        </section>
    )
}

export default Party