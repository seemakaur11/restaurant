import React from 'react'
import Contact from './Contact'
import { chefList } from './EventList'
function Chef() {
    return (
        <section style={{ background: "#0c0b09" }}>
            <div className='container py-5'>
                <div className='row' data-aos="fade-up" delay="200">
                    <p className='chooseTitle'>CHEFS</p>
                    <p className='chooseText'>Our Proffesional Chefs</p>
                </div>
                <div className='row'>
                    {chefList.map((obj, id) => {
                        return (
                            <div className='col-md-4 chefContainer' >
                                <div className="img-container" key={id}>
                                    <img src={obj.img} className="img-fluid" alt="gallery" data-aos="zoom-in" delay="200" />
                                </div>
                                <div className="overlay">
                                    <h3 className='chefText'>{obj.text}</h3>
                                    <p className='chefName'>{obj.name}</p>
                                    <a href='/'>< i className="fa-brands fa-twitter socilaIcon m-2"></i></a>
                                    <a href='/'><i className="fa-brands fa-facebook socilaIcon m-2"></i></a>
                                    <a href='/'><i className="fa-brands fa-instagram socilaIcon m-2"></i></a>
                                    <a href='/'><i className="fa-brands fa-linkedin-in socilaIcon m-2"></i></a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Contact />
        </section>
    )
}

export default Chef