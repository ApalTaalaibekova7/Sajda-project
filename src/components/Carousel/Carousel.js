import React from 'react'
import './Carousel.css'
import Img1 from '../../assets/images/carousel/carousel1.jpg'
import Img2 from '../../assets/images/carousel/carousel5.jpg'
import Img3 from '../../assets/images/carousel/carousel3.jpg'
import Img4 from '../../assets/images/carousel/carousel5.jpg'
import Img5 from '../../assets/images/carousel/carousel2.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Carousel() {
    const images = [Img1, Img2, Img3, Img4, Img5]

  return (
    <section id='carousel'>
        <Swiper
            spaceBetween={30} 
            slidesPerView={3.5}
            breakpoints={{
                0: {
                    slidesPerView:1.5,
                },
                576: {
                    slidesPerView:1.5,
                },
                768: {
                    slidesPerView:2.5,
                },
                996:{
                    slidesPerView:3.5
                },
                1400: {
                    slidesPerView:3.5,
                }
            }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img 
                    src={img} 
                    alt="" 
                    className='swiper__img'/>

                </SwiperSlide>
              ))}

            </Swiper>

    </section>
  )
}
