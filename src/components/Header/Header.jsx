import React from 'react'
import astudioimg from '../../assets/astudio-img.png'
import './Header.scss'

function Header() {
  return (
    <div className='astudio__header section__padding'>
          <div className='astudio__header-content'>
              <h1 className='astudio__text'>A Digital Product Agency</h1>
              <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
              <button type='button'>Contact Now</button>
          </div>
          <div className='astudio__header-content__img'>
            <img src={astudioimg} alt='astudio-image'/>
          </div>      
    </div>
  )
}

export default Header