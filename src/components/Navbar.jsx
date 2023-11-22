import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCross } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";
import { BsPatchExclamation } from "react-icons/bs";
import { GiMusicalScore } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { CgMenuGridO } from "react-icons/cg";



const Navbar = () => {
     const [isMobile, setIsMobile] = useState(false)

  return (
    <div>
        <div className="header">
            <div className="header__logo">
                <FaCross className='header__logo__io' />
                <span>Taberkin</span>
            </div>
            <ul id='menu' className={isMobile ? "menu__mobile" : "header__list"}
                 onClick={() => setIsMobile(false)}>
                <li className="header__items">
                    <NavLink to='/home' className='header__link'>
                       <HiOutlineHome className='header_icon' />
                        <span className='header__sp'>Accueil</span> 
                    </NavLink>
                </li>
                <li className="header__items">
                    <NavLink to='/songs' className='header__link'>
                        <GiMusicalScore className='header_icon' />
                        <span className='header__sp'>Cantique</span>
                    </NavLink>
                </li>
                <li className="header__items">
                    <NavLink to='/about' className='header__link'>
                        <BsPatchExclamation className='header_icon' />
                        <span className='header__sp'>A propos</span>
                    </NavLink>
                </li>
                <div className="header__close__menu" >
                    <TfiClose className='header__close__menu__icon' />
                </div>
            </ul>
                <div className='header__menu' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <TfiClose className='header__close__menu__icon' style={{display:'none'}} />
                    ) : (
                        <CgMenuGridO className='header__menu__menu'/>
                    )}
                </div>
        </div>
    </div>
  )
}

export default Navbar