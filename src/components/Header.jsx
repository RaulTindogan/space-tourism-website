import React from 'react'
import logo from '../assets/shared/logo.svg'
import menu from '../assets/shared/icon-hamburger.svg'

function Header() {
  return (
    <header className='bg-transparent p-5'>
        <nav>
          {/* Mobile Menu */}
            <div className='flex justify-between items-center lg:hidden'>
              <div>
                  <a href="#"><img src={logo} alt="LOGO" /></a>
              </div>
              <div>
                <a href="#"><img src={menu} alt="" /></a>
              </div>
            </div>
          {/* Desktop Menu */}
            <div className='hidden lg:flex justify-between'>
              <div>
                  <a href="#"><img src={logo} alt="LOGO" /></a>
              </div>
              <div>
                <ul className='flex gap-10'>
                  <li><a href="">00 HOME</a></li>
                  <li><a href=""></a>01 DESTINATION</li>
                  <li><a href="">02 CREW</a></li>
                  <li><a href="">03 TECHNOLOGY</a></li>
                </ul>
              </div>
            </div>
        </nav>
    </header>
  )
}

export default Header

