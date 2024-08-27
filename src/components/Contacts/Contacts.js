import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <section id='contacts'>
        <div className="container">
            <div className="row gy-5 ">
              <div></div>
                <h2>Остались вопросы?</h2>
                <div className="contacts__one">
                <div>
                <p className='text1'> Заполните заявку! </p>
                <div className='contacts_form'>
                  <input type="text" placeholder='ФИО'/>
                  <input type="tel" placeholder='Номер телефона' />
                  <input type="country" placeholder='Страна' />
                  <button className='contacts_btn'>Отправить заявку</button>
                </div>
              </div> 

              <div className=" apply__contactsBox">
                        <div className='text2'>
                            <p>Контакты</p>
                        </div>
                        <div className="apply__contacts">
                            <div className="apply__contactsPhone">
                                <p className='apply__p'>Тел.:</p>
                                <a className='apply__a' href="tel:+996777777777">+996777777777</a>
                            </div>
                            <div className="apply__contactsEmail">
                                <p className='apply__p'>Почта:</p>
                                <a className='apply__a' href="mailto:apal.taalaibekova@mail.ru">apaltaalaibekova7@gmail.com</a>
                            </div>
                        </div>
              </div>
                </div>
           

            </div>
        </div>

    </section>
  )
}


// col-lg-6 col-md-12 col-sm-12 col-12 