import React from 'react'
import { google, amazon, ubereats, airbnb } from './imports'
import './Brand.scss'

function Brand() {
  return (
      <div className='astudio__brand section__heading'>
          <div className='astudio__brand-content'>
              <h1 className='astudio__brand-text'>Our Client</h1>
              <p>Several selected clients, who already believe in our service.</p>
          </div>
          <div className='astudio__brand-img'>
              <div>
                  <img src={google} alt='Google'/>
              </div>
              <div>
                  <img src={amazon} alt='Amazon'/>
              </div>
              <div>
                  <img src={ubereats} alt='Ubereats' />
              </div>
              <div>
                  <img src={airbnb} alti='Airbnb' />
              </div>
              <div>
                  <img />
              </div>
          </div>
      </div>
  )
}

export default Brand