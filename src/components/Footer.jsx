import React, { useState } from 'react'

function Footer() {

    const [visible, setVisible] = useState(false);
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <section>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div style={{ color: "white" }}>
                            <h3 className='footerRest'>RESTAURANTLY</h3>
                            <p className='street'>A108 Adam Street <br />NY 535022, USA</p><br />
                            <p className='street'><strong>Phone:</strong> +1 5589 55488 55</p>
                            <p className='street'><strong>Email:</strong> info@example.com</p>
                            <div className='pt-3'>
                                <a href='/'>< i className="fa-brands fa-twitter footerIcon m-2"></i></a>
                                <a href='/'><i className="fa-brands fa-facebook footerIcon m-2"></i></a>
                                <a href='/'><i className="fa-brands fa-instagram footerIcon m-2"></i></a>
                                <a href='/'><i className="fa-brands fa-linkedin-in footerIcon m-2"></i></a>
                                <a href='/'><i class="fa-brands fa-skype footerIcon m-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h4 className="usefullLink">Useful Links</h4>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Home</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>About us</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Services</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Terms of service</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Privacy policy</p>
                    </div>
                    <div className='col-md-3'>
                        <h4 className="usefullLink">Our Services</h4>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Web Design</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Web Development</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Product Management</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Marketing</p>
                        <p className="useText"><i class="fad fa-caret-right footerRight mx-2"></i>Graphic Design</p>
                    </div>
                    <div className='col-md-3'>
                        <h4 className="usefullLink">Our Newsletter</h4>
                        <p className="useText11">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <div className="subscribe">
                            <input type="email" name="email" placeholder="Email" className="emailSub" />
                            <input type="submit" value="Subscripe" className="submitInput" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='horizontalLine'></div>
            <section style={{ background: "black" }}>
                <div className="container py-4">
                    <div className="row justify-content-center text-center">
                        <p className="copyright">© Copyright <strong>Restaurantly</strong>. All Rights Reserved</p>
                        <p className="copyright">Designed by <span className="seema">Seema</span></p>
                    </div>
                </div>
            </section>
            {/* topScrollBtn */}
            <i className="fa-solid fa-circle-up" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} id="scrollBtn"></i>
        </section>
    )
}

export default Footer