import React from 'react'
import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='bg-transparent absolute w-full'>
        <nav className='max-w-[1440px] mx-auto'>
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
    </header>
  )
}

export default Header

