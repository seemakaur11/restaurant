import React from 'react';
import Chef from './Chef';
import { gallery } from './EventList';

function Gallery() {

    return (
        <section id="gallery" style={{ background: "#0c0b09" }}>
            <div className='container-fluid'>
                <div className='row mx-5 p-5' data-aos="fade-up" delay="200">
                    <p className='chooseTitle'>GALLERY</p>
                    <p className='chooseText'>Some photos from Our Restaurant</p>
                </div>
                <div className='row' data-aos="fade-up" delay="200">
                    {gallery.map((obj, id) => {
                        return (
                            <div className='col-md-3 p-0'>
                                <div key={id} className="img-container">
                                    <img src={obj.img} className="img-fluid galleryImg" alt="gallery" id="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Chef />
        </section>
    )
}

export default Gallery