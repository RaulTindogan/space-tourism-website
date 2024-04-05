import React, { useState } from 'react'
import logo from '/assets/shared/logo.svg'
import menu from '/assets/shared/icon-hamburger.svg'
import closeMenu from '/public/assets/shared/icon-close.svg'
import { NavLink } from 'react-router-dom'
function Header() {
  const [activeNav, setactiveNav] = useState(false)

  const desktopLink = ['00 HOME', '01 DESTINATION', '02 CREW', '03 TECHNOLOGY']
  return (
      <header className='bg-transparent fixed w-full'>
        <nav className='max-w-[1440px] mx-auto relative z-20 lg:mt-10'>
          {/* Mobile Menu */}
            <div className='p-5 flex justify-between items-center md:hidden'>
              <div>
                  <NavLink to="/"><img src={logo} alt="LOGO" /></NavLink>
              </div>
              <div onClick={()=>{setactiveNav(!activeNav)}}>
                <button><img src={!activeNav? menu : closeMenu} alt="" /></button>
              </div>
            </div>
          {/* Desktop Menu */}
            <div className='hidden md:flex justify-between items-center text-white pl-10 relative'>
              <div>
                  <NavLink to="/"><img src={logo} alt="LOGO" /></NavLink>
              </div>
              <hr className='hidden lg:block w-[35%] h-[1px] absolute left-[8rem] z-10'/>
              <div className='lg:w-[60%]'>
                <ul className='flex gap-10 bg-white/5 backdrop-blur-lg px-8 lg:justify-center xl:gap-[5rem]'>
                  <li className='py-8'><NavLink to="/" className={({isActive})=> isActive? 'border-b-2 border-white py-8': ''}>HOME</NavLink></li>
                  <li className='py-8'><NavLink to="/destination" className={({isActive})=> isActive? 'border-b-2 border-white py-8': ''}>DESTINATION</NavLink></li>
                  <li className='py-8'><NavLink to="/crew" className={({isActive})=>isActive? 'border-b-2 border-white py-8': ''}>CREW</NavLink></li>
                  <li className='py-8'><NavLink to="/technology" className={({isActive})=> isActive? 'border-b-2 border-white py-8': ''}>TECHNOLOGY</NavLink></li>
                </ul>
              </div>
            </div>
        </nav>     
        <div className={`w-[60%] min-h-[100vh] fixed z-[10] bg-black/50 top-0 right-0 overflow-hidden text-white py-[7rem] px-[3rem] ${activeNav?'':' hidden'}`}>
            <ul>
              <li className='mb-10 py-2 border-b-[3px]'><NavLink to="/">00 HOME</NavLink></li>
              <li className='mb-10 py-2 border-b-[3px]'><NavLink to="/destination">01 DESTINATION</NavLink></li>
              <li className='mb-10 py-2 border-b-[3px]'><NavLink to="/crew">02 CREW</NavLink></li>
              <li className='mb-10 py-2 border-b-[3px]'><NavLink to="/technology">03 TECHNOLOGY</NavLink></li>
            </ul>
        </div>
      </header>
  )
}

export default Header

