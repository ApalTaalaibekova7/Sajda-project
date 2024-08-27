import React from 'react'
import './Mission.css'
import MissionImg1 from '../../assets/Mask group.png'
import MissionImg2 from '../../assets/Mask group2.png'


export default function Mission() {
  return (
    <section id='mission'>
            <div className="container">
                <div className="gy-5 row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mission_wrap">

                    <div className="col mission__cols1">
                        <div className="mission__info">
                            <h2 className='with-lines2'><span>Миссия бренда</span></h2>
                            <p>Миссия бренда SAJDA заключается в том, чтобы донести до широкой аудитории понимание того, что современная и стильная одежда может соответствовать правилам и нормам ислама, обладая высоким качеством. </p>
                            <p> В условиях растущего интереса к свободной одежде и объемным фасонам, SAJDA имеет возможность заявить о себе и занять значительную нишу на рынке моды.</p>
                            <a className='mission__button' href='#apply'>Подробнее</a>
                        </div>
                    </div>

                    <div className="col mission__cols2">
                        <div className="mission__box">
                            <div className='imgBoxes1'>
                                <img className='missionImg' src={MissionImg2} alt="" />
                            </div>

                            <div className='imgBoxes2'>
                                <img className='missionImg' src={MissionImg1} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}
