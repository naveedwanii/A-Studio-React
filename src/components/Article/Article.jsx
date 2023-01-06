import React from 'react'
import './Article.scss'

function Article({ imgUrl, title, text }) {
  return (
    <div className='astudio__blog-container_article'>
        <div className='astudio__blog-container_article-img'>
              <img src={imgUrl} alt='blog image' />
          </div>
          <div className='astudio__blog-container_article-content'>
              <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
              </div>
          </div>
    </div>
  )
}

export default Article