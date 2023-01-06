import React from 'react'
import { Article } from '../../components'
import rectangle from '../../assets/Rectangle 24.png'
import { blog01, blog02, blog03, blog04} from './imports'
import './Blog.scss'

function Blog() {
  return (
    <div className='astudio__blog section__padding'>
          <div className='astudio__blog-heading'>
              <h1>How can we help your Business ?</h1>
              <p>We build readymade websites, mobile applications, and elaborate online business services.</p>
          </div>
          <div className='astudio__blog-container'>
              <div className='astudio__blog-container_groupA'>
                  <Article imgUrl={ blog01 } title='Business Idea Planning' text='We present you a proposal and discuss niffty-gritty like'/>
                  <Article imgUrl={ blog02} title='Financial Planning System' text='Protocols apart from aengage models, pricing billing'/>
              </div>
              <div className='astudio__blog-container_groupB'>
                  <Article imgUrl={ blog03} title='Development Website and App' text='Communication protocols apart from engagement models'/>
                  <Article imgUrl={ blog04} title='Market Analysis Project' text='Protocols apart from aengage models, pricing billing'/>
              </div>
          </div>
    </div>
  )
}

export default Blog