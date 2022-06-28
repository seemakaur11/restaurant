import React from 'react';
import 'aos/dist/aos.css';
import Home from './Home';
import { Link } from "react-scroll";

function Navbar() {
    return (
        <section className="pt-5">
            <div id="mainContent"></div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <h1><a className="navbar-brand" href="/restaurant" id="restaurant">RESTAURANTLY</a></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" id="home-link" activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={100}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" to="about" spy={true} smooth={true} offset={-100} duration={100}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" to="menu" spy={true} smooth={true} offset={-100} duration={100}>Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" to="specials" spy={true} smooth={true} offset={-100} duration={100}>Specials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" to="events" spy={true} smooth={true} offset={-100} duration={100}>Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" activeClass="active" to="chefs" spy={true} smooth={true} offset={-100} duration={100}>Chefs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={100}>Gallery</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/dsds" role="button" data-bs-toggle="dropdown" id="sabLink">Drop Down</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/" >Drop Down</a></li>
                                    <li><a className="dropdown-item" href="/" >Drop Down1</a></li>
                                    <li><a className="dropdown-item" href="/" >Drop Down2</a></li>
                                    <li><a className="dropdown-item" href="/" >Drop Down3</a></li>
                                    <li><a className="dropdown-item" href="/" >Drop Down4</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="sabLink" activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100}>Contact</Link>
                            </li>
                            <button className='tableBtn'>
                                <Link className="nav-link1" activeClass="active" to="book" spy={true} smooth={true} offset={-100} duration={300}>BOOK A TABLE</Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
            <Home />
        </section>
    )
}
export default Navbar