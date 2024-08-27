import React from 'react';
import './About_3.css';
import about_3Logo from '../../assets/images/logoWhite.png'

const About_3 = () => {
    return (
        <section id='about_3'>
            <div className="container">
                <h2>Почему качеству SAJDA доверяют в разных странах ?</h2>

                <div className="about_3__wrap">

                    <div className="about_3">
                        <img src={about_3Logo} alt="" />
                        <p>Каждый сезон мы представляем четыре сезонные коллекции, а также дополнительные мини-коллекции, созданные специально для определенных сезонов или значимых событий. Мы готовим каталоги наших коллекций, чтобы наши франчайзи могли ознакомиться с ними и выбрать подходящий ассортимент для своего бизнеса.</p>
                    </div>

                    <div className="about_3">
                        <img src={about_3Logo} alt="" />
                        <p>Конструкторы строят уникальные лекала, благодаря чему каждая модель становится максимально удобной.</p>
                    </div>

                    <div className="about_3">
                        <img src={about_3Logo} alt="" />
                        <p>Технологи следят за соблюдением стандартов качества</p>
                    </div>

                    <div className="about_3">
                        <img src={about_3Logo} alt="" />
                        <p>Каждое изделие мы снимаем для сайта и наших социальных сетей, чтобы покупатели могли составить стильные образы</p>
                    </div>
                    <div className="about_3">
                        <img src={about_3Logo} alt="" />
                        <p>Мы любим каждого нашего клиента, поэтому нам так важно, чтобы они были довольны покупкой и возвращались к нам снова и снова</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default About_3;