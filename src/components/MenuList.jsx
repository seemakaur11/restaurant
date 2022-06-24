import React, { useState } from 'react'
import { menu } from './Menu';

function MenuList() {

    const [items, setItems] = useState(menu);
    const handleClick = (categItem) => {
        const updatedItem = menu.filter((curElement) => {
            return curElement.category === categItem
        });
        setItems(updatedItem)
    }
    return (
        <section id="menu" style={{ background: "#1a1814" }}>
            <div className='container py-5'>
                <div className='row' data-aos="fade-up" delay="200">
                    <p className='chooseTitle'>MENU</p>
                    <p className='chooseText'>Check Our Tasty Menu</p>
                    <div className='allMenuBtn'>
                        <button className='allBtn m-2' onClick={() => setItems(menu)}>All</button>
                        <button className='allBtn m-2' onClick={() => handleClick("Starters")}>Starters</button>
                        <button className='allBtn m-2' onClick={() => handleClick("Salads")}>Salads</button>
                        <button className='allBtn m-2' onClick={() => handleClick("Specialty")}>Specialty</button>
                    </div>
                </div>
                <div className='row pt-5' data-aos="fade-up" delay="200">
                    {
                        items.map((element) => {
                            const { id, heading, image, description, price } = element
                            return (
                                <div className='col-md-6 col-sm-6' key={id}>
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
    )
}

export default MenuList