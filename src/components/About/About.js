import React from 'react'
import './About.css'
import aboutImg from '../../assets/images/aboutImg.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
  return (
    <section id='about'>
        <div className="container">
            <div className="row gy-5 about__wrap">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="about__box">
                        <img src={aboutImg} alt="" />
                    </div>

                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div className="about__info">
                    <h2 className='with-lines'><span>О бренде SAJDA</span></h2>
<p>Слово SAJDA – воплощение самого благородного положения человека перед Величием Аллаха, приносящее в сердцах глубокое восхищение и почтение.</p>
<p>Мы стремимся создавать не только качественные товары, <br /> но и передавать через них сакральную энергию, которая проникает <br /> в сердца наших клиентов. Наш бренд "SAJDA" является не просто коммерческим предприятием, но и платформой для распространения исключительных ценностей и вдохновения, источником связи <br /> с духовными глубинами.</p>
<p>Бренд "SAJDA" был создан в 2016 году для мусульман всего мира, чтобы обеспечить максимальный комфорт, практичность и удобство, сохраняя при этом идентичность и религиозную принадлежность. </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
