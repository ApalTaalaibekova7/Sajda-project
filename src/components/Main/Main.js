import React from 'react'
import './Main.css'

export default function Main() {

    return (
        <main id={'main'}>
            <div className="container">
                <div className="main__wrap">
                    <div className="main__info">
                        <h1>Бренд "SAJDA" <br /> приглашает вас стать партнерам</h1>
                        <p>Получайте доход, достигающий 100 700$ <br /> в год с нашей бизнес-моделью!</p>
                        <a className='main__button' href={'#apply'}>ПОДАТЬ ЗАЯВКУ</a>
                    </div>
                </div>
            </div>
        </main>
    )
}
