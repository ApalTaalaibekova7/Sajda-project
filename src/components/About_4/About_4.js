import React from 'react'
import './About_4.css'
import icon1 from '../../assets/icon/ion_checkmark-done.png'
import icon2 from '../../assets/icon/ion_checkmark-done.png'
import icon3 from '../../assets/icon/ion_checkmark-done.png'
import icon4 from '../../assets/icon/ion_checkmark-done.png'
import icon5 from '../../assets/icon/ion_checkmark-done.png'
import icon6 from '../../assets/icon/ion_checkmark-done.png'
import icon7 from '../../assets/icon/ion_checkmark-done.png'
import icon8 from '../../assets/icon/ion_checkmark-done.png'
import icon9 from '../../assets/icon/ion_checkmark-done.png'
import icon10 from  '../../assets/icon/ion_checkmark-done.png'

export default function About_4() {
    return (
        <section id='about_4'>
            <div className="container">
                <h2>Бизнес с нами выгодно, потому что:</h2>
                <p>Вы получаете:</p>
                <div className="about_4Wrap">

                    <div className="row gy-5 about_4Row">
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='about_4_icons'>
                                    <img src={icon1} alt="" />
                                </div>
                                <p id='about_4__text'>помощь в выборе локации</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='about_4_icons'>
                                    <img src={icon2} alt="" />
                                </div>
                                <p id='about_4__text'>брендбук</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info info2">
                                <div className='about_4_icons'>
                                    <img src={icon3} alt="" />
                                </div>
                                <p id='about_4__text'>автоматизация бизнеса (программа по учету товаров и склада,система лояльности по 1C) </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='profitable_icons'>
                                    <img src={icon4} alt="" />
                                </div>
                                <p id='about_4__text'>юридический пакет (договор аренды и субаренды, договор для сотрудников) </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info info2">
                                <div className='about_4_icons'>
                                    <img src={icon5} alt="" />
                                </div>
                                <p id='about_4__text'>Marketing-book стратегия и руководство по управлению маркетингом </p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info info2">
                                <div className='about_4_icons'>
                                    <img src={icon6} alt="" />
                                </div>
                                <p id='about_4__text'>руководство по управлению бизнесом после открытия </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='about_4_icons'>
                                    <img src={icon7} alt="" />
                                </div>
                                <p id='about_4__text'>финансовый план</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='about_4_icons'>
                                    <img src={icon8} alt="" />
                                </div>
                                <p id='about_4__text'>бранчбук (дизайн-проект магазина)</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info info2">
                                <div className='about_4_icons'>
                                    <img src={icon9} alt="" />
                                </div>
                                <p id='about_4__text'>отдел поддержки франчайзи - сопровождение бизнеса за на весь период работы</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="about_4__info">
                                <div className='about_4_icons'>
                                    <img src={icon10} alt="" />
                                </div>
                                <p id='about_4__text'>обучение сотрудников</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
