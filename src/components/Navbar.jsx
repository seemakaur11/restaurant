import React, { useState } from 'react';
import home from '../img/home.jpg';
import about from '../img/about.jpg';
import about1 from '../img/about1.jpg';
import { menu } from './Menu';

function Navbar() {
    const [items, setItems] = useState(menu);
    const handleClick = (categItem) => {
        const updatedItem = menu.filter((curElement) => {
            return curElement.category === categItem
        });
        setItems(updatedItem)
    }
    return (
        <section style={{ backgroundImage: `url(${home})`, backgroundPosition: "center", backgroundAttachment: "fixed" }} className="pt-5">
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
                                <a className="nav-link" href="/home" id="home-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">Specials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">Chefs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/fdf" id="sabLink">Gallery</a>
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
                                <a className="nav-link" href="/fdf" id="sabLink">Contact</a>
                            </li>
                            <button className='tableBtn'>
                                <a className="nav-link1" href="/book">BOOK A TABLE</a>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* home section */}
            <section className='pt-5'>
                <div id="mainContent"></div>
                <div className='container py-5'>
                    <div className='row'>
                        <h1 className='welcomeR'>Welcome to <strong>Restaurantly</strong></h1>
                        <p className='deliveryP'>Delivering great food for more than 18 years!</p>
                    </div>
                    <button className='menuBtn'>OUR MENU</button>
                    <button className='menuBtn'>BOOK A TABLE</button>
                </div>
            </section>
            <section style={{ backgroundImage: `url(${about})`, backgroundPosition: "center", backgroundAttachment: "fixed" }} id="aboutContent">
                <div id="aboutContent"></div>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-6'>
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
                        <div className='col-md-6'>
                            <img src={about1} className="img-fluid aboutImg" alt="about" />
                        </div>
                    </div>
                </div>
            </section>
            {/* choose restaurant */}
            <section style={{ background: "#0c0b09" }}>
                <div className='container py-5'>
                    <div className='row'>
                        <p className='chooseTitle'>WHY US</p>
                        <p className='chooseText'>Why Choose Our Restaurant</p>
                        <div className='col-md-4 colSection'>
                            <div className='card'>
                                <span className='number mx-3 pt-5'>01</span>
                                <h4 className='cardText mx-3'>Lorem Ipsum</h4>
                                <p className='cardPara mx-3'>Ulamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Et consectetur ducimus vero placeat</p>
                            </div>
                        </div>
                        <div className='col-md-4 colSection'>
                            <div className='card'>
                                <span className='number mx-3 pt-5'>02</span>
                                <h4 className='cardText mx-3'>Repellat Nihil</h4>
                                <p className='cardPara mx-3'>Dolorem est fugiat occaecati voluptate velit esse.
                                    Dicta veritatis dolor quod et vel dire leno para dest</p>
                            </div>
                        </div>
                        <div className='col-md-4 colSection'>
                            <div className='card'>
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
            <section style={{ background: "#1a1814" }}>
                <div className='container py-5'>
                    <div className='row'>
                        <p className='chooseTitle'>MENU</p>
                        <p className='chooseText'>Check Our Tasty Menu</p>
                        <div className='allMenuBtn'>
                            <button className='allBtn m-2' onClick={() => setItems(menu)}>All</button>
                            <button className='allBtn m-2' onClick={() => handleClick("Starters")}>Starters</button>
                            <button className='allBtn m-2' onClick={() => handleClick("Salads")}>Salads</button>
                            <button className='allBtn m-2' onClick={() => handleClick("Specialty")}>Specialty</button>
                        </div>
                    </div>
                    <div className='row pt-5'>
                        {
                            items.map((element) => {
                                const { id, heading, image, description, price } = element
                                return (
                                    <div className='col-md-6' key={id}>
                                        <img src={image} alt={heading} className="menuImg m-3" />
                                        <p className='menuText mt-4'>{heading}<span className='dottedLine'>..................................</span>
                                            <span className='menuPrice'>${price}</span></p>
                                        <p className='menuDes'>{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* special section */}
            <section style={{ background: "#0c0b09" }}>
                <div className='container py-5'>
                    <div className='row'>
                        <p className='chooseTitle'>SPECIALS</p>
                        <p className='chooseText'>Check Our Specials</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Navbar