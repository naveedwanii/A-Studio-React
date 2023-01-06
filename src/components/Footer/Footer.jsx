import React from 'react'
import astudio from '../../assets/A+ Studio.png'
import fb from '../../assets/fb-new.png'
import tw from '../../assets/tw-new.png'
import lk from '../../assets/lk-new.png'
import './Footer.scss'

function Footer() {
  return (
    <div className='astudio__footer section__padding'>
      <div className='astudio__footer-links'>
        <div className='astudio__footer-links_logo'>
          <img src={astudio} />
          <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
          <img src={fb} className='social__links'/>
          <img src={tw} className='social__links'/>
          <img src={lk} className='social__links'/>
        </div>
        <div className='astudio__footer-links_div'>
          <h4>What We Do</h4>
          <p>Web Design</p>
          <p>App Design</p>
          <p>Social Media Manage</p>
          <p>Market Analysis Project</p>
        </div>
        <div className='astudio__footer-links_div'>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Career</p>
          <p>Social Media Manage</p>
        </div>
        <div className='astudio__footer-links_div'>
          <h4>Support</h4>
          <p>FAQ</p>
          <p>Policy</p>
          <p>Business</p>
        </div>
        <div className='astudio__footer-links_div'>
          <h4>Contact</h4>
          <p>WhatsApp</p>
          <p>Support 24</p>
        </div>
        
      </div>
      <hr />
      <div className='astudio__footer-secondary'>
        <p>Copyright © 2022 Naveed Wani</p>
      </div>
    </div>
  )
}

export default Footer