import React from 'react'
import './StyleSajda.css'
import ReusableSwiper from './ReusableSwiper'
import { firstStyles, secondStyles, thirdStyles } from './constanst'

export default function StyleSajda() {
  return (
    <section id='style'>
        <div className="container">
            <div className="style__wrap">
            <div className="style__info">

            <h2>Стиль SAJDA</h2>
            <p>Основной целью бренда является создание системы бутиков, которая позволит членам любой семьи, независимо от их конфессиональных и мировоззренческих взглядов, подобрать себе гардероб на любой вкус и для любого времени года.</p>
          </div>

            <ReusableSwiper data = {firstStyles}/>
            <ReusableSwiper data = {secondStyles}/>
            <ReusableSwiper data = {thirdStyles}/>

            </div>
        </div>
    </section>
  )
}
