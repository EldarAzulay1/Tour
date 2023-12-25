import React, { useState } from 'react'
import './tours.css'

export const Tour = ({ id, image, info, name, price, remove }) => {
  const [readMore, setRead] = useState(false);
  return (
    <article className='single-tour'>
      <img src={image} className='img'></img>
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 250)}...  `}
          <div type='button' className='info-btn' onClick={() => { readMore ? setRead(false) : setRead(true) }}> {readMore ? 'Show Less' : 'Read More'}</div>
        </p>
        <hr style={{ padding: '10px' }}></hr>
        <button onClick={() => remove(id)} className='delete-btn'>Remove Tour</button>
      </div>
    </article>

  )
}
