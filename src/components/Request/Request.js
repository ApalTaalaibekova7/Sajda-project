import React from 'react';
import './Request.css'
import request1 from '../../assets/images/Request/request1.png'
import request2 from '../../assets/images/Request/request2.png'
import request3 from '../../assets/images/Request/request3.png'

const Request= () => {
    return (
        <section id='request'>
            <div className="container">
                <h2>Требования для городов</h2>
                <p className='request__p'>Для открытия франшизы требуется:</p>
                <div className="request__info">
                    <div className="request__info1">
                        <img src={request1} alt="" />
                        <p>Локация с населением свыше 500 000 человек, где большая часть населения активно практикует ислам.</p>
                    </div>
                    <div className="request__info2">
                        <img src={request2} alt="" />
                        <p>Существует значительный спрос на мусульманскую и комфортную одежду в данной локации.</p>
                    </div>
                    <div className="request__info3">
                        <img src={request3} alt="" />
                        <p>Средний доход населения составляет примерно 800 долларов США в месяц на одного человека.</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Request;