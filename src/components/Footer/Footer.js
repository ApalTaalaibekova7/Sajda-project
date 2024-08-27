import React from 'react';
import './Footer.css'
import logo from '../../assets/images/footer/logo.svg'
import inst from '../../assets/images/footer/instagram.svg'
import fb from '../../assets/images/footer/fb.svg'
import yt from '../../assets/images/footer/ytube.svg'
import tt from '../../assets/images/footer/tictok.svg'
import itc from '../../assets/icon/logo.svg'

const Footer = () => {
    return (
        <footer id={'#footer'}>
            <div className="container">
                <div className=" footer__wrap">
                    <div className="footer__col footer__colContacts1">
                        <img className='footer__logo' src={logo} alt="" />
                        <div className="footer__icons">
                            <a target="_blank" rel="noreferrer" href="https://instagram.com/sajdaofficial?igshid=ZWQyN2ExYTkwZQ=="><img src={inst} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Sajda.kg?mibextid=LQQJ4d"><img src={fb} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://youtube.com/@sajdaofficial1609"><img src={yt} alt="" /></a>
                            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@sajdaofficial?_t=8cutRfOoU66&_r=1"><img src={tt} alt="" /></a>
                        </div>
                        <h5 className='itc__wrap'>Разработала: <img className='itc' src={itc} alt="itc" />Apal Taalaibekova</h5>
                    </div>
                    <div className="footer__col footer__colContacts">
                        <p>Контакты</p>
                        <a href="tel:+99655555555">+996(777)555555</a>
                        <br />
                        <a href="mailto:officialsajda@gmail.com">Apaltaalaibekova7@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;