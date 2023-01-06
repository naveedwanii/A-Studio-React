import React from 'react'
import Slider from "react-slick";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from './imports'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { data } from './data'
import linkImg from '../../assets/Custom.png'
import './Slider.scss'

function mySlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
    <div className='astudio__sli section__padding'>
    <Slider {...settings}>
        {data.map(item=>(
           <div className='astudio__slider'>
            <div className='astudio__slider-1'>
                    <img src={linkImg} alt='myImage' />
            </div>
            <div className='astudio__slider-2'>
                    <h1>{ item.name }</h1>
                    <p>{ item.description }</p>
            </div>
            <div className='astudio__slider-roundedImgs'>
              <a href='#' class='deg8'><img src={img1} alt='roundedImg1' /></a>
              <a href='#' class='deg1'><img src={img2} alt='roundedImg2' /></a>
              <a href='#' class='deg2'><img src={img3} alt='roundedImg3' /></a>
              <a href='#' class='deg3'><img src={img4} alt='roundedImg4' /></a>
              <a href='#' class='deg4'><img src={img5} alt='roundedImg5' /></a>
              <a href='#' class='deg5'><img src={img6} alt='roundedImg6' /></a>
              <a href='#' class='deg7'><img src={img7} alt='roundedImg7' /></a>
              <a href='#' class='center'><img src={img8} alt='roundedImg8' /></a>
            </div>
            </div>
        ))}
     </Slider>
    </div>
  )
}

export default mySlider

// import React from 'react'
// import './Slider'

// function Slider() {
//   return (
//       <div className='slider'>
//           <h1>Slider</h1>
//     </div>
//   )
// }

// export default Slider