import React from 'react'
import './StyleSajda.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ReusableSwiper({data}) {
    return (
      <div className='style__slides'>
          <div className="style__slide">
  
              <div className="styles__wrap">
                  <p className="styles__text">{data.text}</p>
              </div>
  
              <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                      <div className="style__box">
                          <img
                              className='style__mainImg'
                              src={data.mainImg}
                              alt=""
                          />
                      </div>
                  </div>
  
                  <div className="col-lg-9 col-md-8 col-sm-7 col-6">
                          <div className="style__box-2">
                              <Swiper
                                  spaceBetween={20}
                                  slidesPerView={3.5}
                                  breakpoints={{
                                      0: {
                                          slidesPerView: 1.5,
                                      },
                                      576: {
                                          slidesPerView: 1.5,
                                      },
                                      768: {
                                          slidesPerView: 2.5,
                                      },
                                      992: {
                                          slidesPerView: 3.5
                                      },
                                      1400: {
                                          slidesPerView: 3.5,
                                      }
                                  }}
                              >
                                  {data.arrayOfImgs.map((el, index) => (
                                      <SwiperSlide key={index}>
                                          <div className="style__box">
                                              <img
                                                  className='swiper__img'
                                                  src={el}
                                                  alt=""
                                              />
                                          </div>
                                      </SwiperSlide>
                                  ))}
                              </Swiper>
                          </div>
                  </div>
  
              </div>
  
          </div>
      </div>
    )
  }