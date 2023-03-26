import './navigation.scss';
import { AiFillCaretDown } from 'react-icons/ai'
import MainLogo from '../../mainlogo';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri'
import { useEffect } from 'react';
import React from 'react';

export default function Navigation() {

    return(
      <header>
      <div className="nav-wrapper">
        <div className="logo-container">
          <Link className='left-section-navigation-custom'>
           <MainLogo/>
          </Link>
        </div>
        <nav>
          <input className="hidden" type="checkbox" id="menuToggle" />
          <label className="menu-btn" htmlFor="menuToggle">
            <div className="menu" />
            <div className="menu" />
            <div className="menu" />
          </label>
          <div className="nav-container">
            <ul className="nav-tabs">
              <li className="nav-tab">
                <div className="dropdown">
                <a className="dropbtn color-black font-chillax text-d-no user-s-no router-elements">Categories<AiFillCaretDown/></a>
                <div className="dropdown-content">
                  <a href="#" className='font-chillax font-bold text-left'>Frontend Development</a>
                  <a href="#" className='font-chillax font-bold text-left'>Backend Development</a>
                  <a href="#" className='font-chillax font-bold text-left'>UI/UX Design</a>
                  <a href="#" className='font-chillax font-bold text-left'>All Categories</a>
                </div>
              </div>
              </li>
              <li className="nav-tab">
               <a href="" className='color-black font-chillax text-d-no user-s-no router-elements'>Technologies</a>
              </li>
              <li className="nav-tab">
               <a href="" className='color-black font-chillax text-d-no user-s-no router-elements'>Reviews</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    )
}