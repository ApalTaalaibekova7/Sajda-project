import React from 'react'
import './About_2.css'
import abouttImg from '../../assets/images/franchiseLogo.png'

export default function About_2() {
  return (
    <section id='aboutt_2'>  
        <div className="container">

            <div className="row gy-5 aboutt__wrap">
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="aboutt__info">
                    <h2>О Франшизе “SAJDA”</h2>
                    <p className='aboutt__info-p' >Это возможность построить свой успешный бизнес, присоединившись к сообществу в более 10 странах и удерживающих высокую конкурентоспособность, качества на протяжении 7 лет, к дружной семье предпринимателей и сильной команде специалистов, готовых оказать любую поддержку ради общей цели.</p>
                    <p className='aboutt__info-p'>В настоящее время наши коллекции уже продаются  в Казахстане,Узбекистане, ОАЭ, России,США, Южной Корее,Африке, Австралии,Норвегии,Турции  через дистрибуцию.</p>
                    <p className='aboutt__info-p'>И это нас сподвигло запустить франчайзинговую сеть, так как количество желающих открыть бизнес с нашей франшизой растет с каждым годом. А наша одежда становится популярнее с каждым днем, удовлетворяя верующих в религии Ислам.</p>
                    <a className='aboutt__btn' href="#apply">Получить финмодель</a>
                    </div>
               
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="aboutt_img">
                        <img src={abouttImg} alt="" />
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}
