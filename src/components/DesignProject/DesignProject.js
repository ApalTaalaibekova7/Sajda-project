import React, { useState } from 'react'
import './DesingProject.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import dP1 from '../../assets/images/DesignProject/DP1.png'
import dP2 from '../../assets/images/DesignProject/DP2.png'
import dP3 from '../../assets/images/DesignProject/DP3.png'
import dP4 from '../../assets/images/DesignProject/DP4.png'
import dP5 from '../../assets/images/DesignProject/DP5.png'
import dP6 from '../../assets/images/DesignProject/DP6.png'
import logoDP from '../../assets/images/DesignProject/logoDP.png'

export default function DesignProject() {

    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const images = [dP1, dP2, dP3, dP4, dP5, dP6]
    const openLightBox = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)

    }
  return (
    <section id='designProject'>
        <div className="designProject__wrap">
            <img src={logoDP} alt="Logo" className='designProject__logo' />
                <h2>Ваш магазин будет разработан по индивидуальному дизайн-проекту. Создание дизайн-проекта включено <br /> в стоимость франшизы.</h2>
                <p>Концепция магазина и стандарты сервиса помогают покупателю ощутить себя эксклюзивным клиентом, <br /> что недоступно в магазинах аналогичного ценового сегмента.</p>

                <div className="gy-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    {images.map((images, index) => (
                        <div key={index} className='box designProject__img' onClick={() => openLightBox(index)}>
                            <img src={images} alt="img" />
                        </div>
                    ))}
                </div>
        </div>
        {isOpen && (
            <Lightbox
                    mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % images.length)
                }
            />
            
           
        )}

    </section>
  )
}
