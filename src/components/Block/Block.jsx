import React from 'react'
import blockimg from '../../assets/Block-img.png'
import bgimg from '../../assets/Rectangle 31.png'
import './Block.scss'

function Block() {
  return (
    <div className='astudio__block section__padding'>
          <div className='astudio__block-content'>
              <h4>Subscribe Newsletter</h4>
              <p>I will update good news and promotion service not spam</p>
          </div>
          <div className='astudio__block-form'>
              <input type='text' className='astudio__block__form' placeholder='Enter your email address..'/>
              <button type='button' className='astudio__block__button'>Contact Now</button>
          </div>
      </div>

    
  )
}

export default Block