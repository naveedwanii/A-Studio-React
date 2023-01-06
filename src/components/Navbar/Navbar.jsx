import React from 'react'
import astudio from '../../assets/A+ Studio.png'
import './Navbar.scss'

function Header() {
  return (
      <div class='astudio'>
        <div class='astudio__link_logo'>
           <img src={astudio} alt='logo' />
        </div>
        <div class='astudio__link_links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#whatwedo'>What We Do</a></p>
              <p><a href='#service'>Service</a></p>
              <p><a href='#project'>Project</a></p>
              <p><a href='#blog'>Blog</a></p>
              <p><a href='#contact'>Contact</a></p>
        </div>
    </div>
  )
}

export default Header