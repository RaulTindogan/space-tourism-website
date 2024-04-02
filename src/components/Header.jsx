import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
      <header className='bg-transparent fixed w-full'>
        <nav className='max-w-[1440px] mx-auto relative z-20'>
          {/* Mobile Menu */}
            <div className='p-5 flex justify-between items-center md:hidden'>
              <div>
                  <a href="#"><img src={logo} alt="LOGO" /></a>
              </div>
              <div>
                <a href="#"><img src={menu} alt="" /></a>
              </div>
            </div>
          {/* Desktop Menu */}
            <div className='hidden md:flex justify-between items-center text-white pl-10 relative'>
              <div className=''>
                  <a href="#"><img src={logo} alt="LOGO" /></a>
              </div>
              <hr className='hidden lg:block w-[35%] h-[1px] absolute left-[8rem] z-10'/>
              <div className='lg:w-[60%]'>
                <ul className='flex gap-10 bg-black p-10 lg:justify-center xl:gap-[5rem]'>
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/destination">DESTINATION</Link></li>
                  <li><Link to="/crew">CREW</Link></li>
                  <li><Link to="/technology">TECHNOLOGY</Link></li>
                </ul>
              </div>
            </div>
        </nav>     
        <div className='w-[60%] min-h-[100vh] fixed z-[10] bg-black/50 top-0 right-0 overflow-hidden text-white py-[7rem] px-[3rem]'>
            <ul>
              <li className='mb-10 py-2 border-b-[3px]'><Link to="/">00 HOME</Link></li>
              <li className='mb-10 py-2 border-b-[3px]'><Link to="/destination">01 DESTINATION</Link></li>
              <li className='mb-10 py-2 border-b-[3px]'><Link to="/crew">02 CREW</Link></li>
              <li className='mb-10 py-2 border-b-[3px]'><Link to="/technology">03 TECHNOLOGY</Link></li>
            </ul>
        </div>
      </header>
  )
}

export default Header

