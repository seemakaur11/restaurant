import React, { useState, useEffect } from 'react';
import { specialsListItems } from './Menu';
import Party from './Party';
import 'aos/dist/aos.css';

function Special() {
    const [selectedItem, setSelectedItem] = useState('special_modi')
    const [selectedData, setSelectedData] = useState([])
    const selectListItem = e => setSelectedItem(e.target.id)

    useEffect(() => {
        const tempArray = specialsListItems.filter(data => (data.id === selectedItem) ? data : '')
        setSelectedData(tempArray)
    }, [selectedItem])

    return (
        <div>
            <section id="specials" style={{ background: "#0c0b09" }}>
                <div className='container py-5'>
                    <div className='row' data-aos="fade-up" delay="200">
                        <p className='chooseTitle'>SPECIALS</p>
                        <p className='chooseText'>Check Our Specials</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3' data-aos="fade-up" delay="200">
                            <div className='borderBtn'>
                                <button id="special_modi" className={`specialBtn ${selectedItem === 'special_modi' ? 'specialBtnActive' : null}`} onClick={(e) => selectListItem(e)}>Modi sit est</button>
                                <button id="special_nostrum" className={`specialBtn ${selectedItem === 'special_nostrum' ? 'specialBtnActive' : null}`} onClick={(e) => selectListItem(e)}>Unde praesentium sed</button>
                                <button id="special_iusto" className={`specialBtn ${selectedItem === 'special_iusto' ? 'specialBtnActive' : null}`} onClick={(e) => selectListItem(e)}>Pariatur explicabo vel</button>
                                <button id="special_pariatur" className={`specialBtn ${selectedItem === 'special_pariatur' ? 'specialBtnActive' : null}`} onClick={(e) => selectListItem(e)}>Nostrum qui quasi</button>
                                <button id="special_unde" className={`specialBtn ${selectedItem === 'special_unde' ? 'specialBtnActive' : null}`} onClick={(e) => selectListItem(e)}>Iusto ut expedita aut</button>
                            </div>
                        </div>
                        <div className='col-md-9' data-aos="fade-up" delay="200">
                            {
                                !!selectedData && selectedData.map((data) => {
                                    const { id, img, name, text, description, } = data
                                    return (
                                        <div className='row' key={id}>
                                            <div className='col-md-7 m-auto'>
                                                <h3 className='specialHead'>{name}</h3>
                                                <p className='specialText'>{text}</p>
                                                <p className='specialPara'>{description}</p>
                                            </div>
                                            <div className='col-md-4'>
                                                <img src={img} className="img-fluid" alt={img} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Party />
        </div>
    )
}

export default Special;
