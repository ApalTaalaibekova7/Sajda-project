import React, { useEffect, useState } from 'react'
import './Header.css'
import logoHeader from '../../assets/icon/logo.svg'
import { LINKS } from './constants'


export default function Header() {

    const [toggle, setToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleToggle = () => {
        if(windowWidth <= 992) {
            setToggle(!toggle)
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

            if (window.innerWidth > 992) {
                setToggle(false);
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    
    return (
        <>
            <div className={`backdrop ${toggle ? 'show' : ''}`} onClick={handleToggle}></div>
            
            <header>
                <div className="container">
                    <nav className='navigation'>
                        <div className="logo">
                            <a href="#main">
                                <img src={logoHeader} alt="logo" />
                            </a>
                        </div>

                        <ul className={`menu ${toggle ? 'show-menu' : ''}`}>
                        {LINKS.map((linkObj, index) => (
                            <li onClick={() => { console.log(`Clicked on ${linkObj.link}`); handleToggle(); }} key={index}>
                                <a className='menu__a' href={linkObj.link}>{linkObj.value}</a>
                                    </li>
                        ))}

                        </ul>

                        <div onClick={handleToggle} className={`mobile-btn ${toggle ? 'show-mobile-btn' : ''}`}>
                            <span></span>
                        </div>

                    </nav>
                </div>
            </header>
            
        </>
    )
}
