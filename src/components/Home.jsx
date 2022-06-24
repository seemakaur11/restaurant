import React from 'react';
import home from '../img/home.jpg';
import about from '../img/about.jpg';
import about1 from '../img/about1.jpg';
import Special from './Special';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuList from './MenuList';
AOS.init({
    duration: 800,
    // easing: 'ease-in-quad',
    delay: 100,
});

function Home() {

    return (
        <div>
            <section className='pt-5' style={{ backgroundImage: `url(${home})`, backgroundPosition: "center", backgroundAttachment: "fixed", height: "550px" }}>
                <div id="mainContent"></div>
                <div className='container py-5' data-aos="zoom-in" data-aos-delay="100">
                    <div className='row justify-content-center text-center pt-5'>
                        <h1 className='welcomeR'>Welcome to <strong>Restaurantly</strong></h1>
                        <p className='deliveryP'>Delivering great food for more than 18 years!</p>
                    </div>
                    <div className='justify-content-center text-center'>
                        <button className='menuBtn'>OUR MENU</button>
                        <button className='menuBtn'>BOOK A TABLE</button>
                        <div className='pt-3 justify-content-center text-center' style={{ display: "flex" }}>
                            <p className='timeBtn mx-2'><i className="fa-solid fa-mobile-screen-button socialLocation m-2"></i>+1 5589 55488 55s</p>
                            <p className='timeBtn'><i className="fa-regular fa-clock socialLocation m-2"></i>Monday-Saturday:11:00 AM - 23:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>
            <div id="aboutContent"></div>
            <section style={{ backgroundImage: `url(${about})`, backgroundPosition: "center bottom", backgroundAttachment: "fixed" }} id="aboutContent">
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-lg-6' data-aos="fade-up">
                            <h3 className='voluptatem'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className='voluptatem11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p className='checkP'><i className="fa-solid fa-circle-check mx-3" id="circle-check"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className='checkP'><i className="fa-solid fa-circle-check mx-3" id="circle-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            <p className='checkP'><i className="fa-solid fa-circle-check mx-3" id="circle-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>

                            <p className='checkP1'>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum</p>
                        </div>
                        <div className='col-lg-6' data-aos="zoom-in">
                            <img src={about1} className="img-fluid aboutImg" alt="about" />
                        </div>
                    </div>
                </div>
            </section>
            {/* choose restaurant */}
            <section style={{ background: "#0c0b09" }}>
                <div className='container py-5'>
                    <div className='row'>
                        <p className='chooseTitle' data-aos="fade-up">WHY US</p>
                        <p className='chooseText' data-aos="fade-up">Why Choose Our Restaurant</p>
                        <div className='col-md-4 colSection'>
                            <div className='card' data-aos="zoom-in" delay="200" id="text-animation">
                                <span className='number mx-3 pt-5'>01</span>
                                <h4 className='cardText mx-3'>Lorem Ipsum</h4>
                                <p className='cardPara mx-3'>Ulamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>
                        <div className='col-md-4 colSection'>
                            <div className='card' data-aos="zoom-in" delay="200">
                                <span className='number mx-3 pt-5'>02</span>
                                <h4 className='cardText mx-3'>Repellat Nihil</h4>
                                <p className='cardPara mx-3'>Dolorem est fugiat occaecati voluptate velit esse.
                                    Dicta veritatis dolor quod et vel dire leno para dest</p>
                            </div>
                        </div>
                        <div className='col-md-4 colSection'>
                            <div className='card' data-aos="zoom-in" delay="200">
                                <span className='number mx-3 pt-5'>03</span>
                                <h4 className='cardText mx-3'>Ad ad velit qui</h4>
                                <p className='cardPara mx-3'>Molestiae officiis omnis illo asperiores.
                                    Aut doloribus vitae sunt debitis quo vel nam quis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* menu section */}
            <MenuList />
            <Special />
        </div>
    )
}

export default Home
