import React from 'react'
import dproductimg from '../../assets/dproduct-img.png'
import './Dproduct.scss'

function Dproduct() {
  return (
    <div className='astudio__dproduct section__padding'>
        <div className='astudio__dproduct-img'>
              <img src={dproductimg} alt='dproduct-img'/>
        </div>
        <div className='astudio__dproduct-content'>
              <h1>Great Digital Product Agency since 2016 </h1>
              <p>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
        </div>  
    </div>
  )
}

export default Dproduct