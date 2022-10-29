import React from 'react'
import './index.css'

const PopCulture = ({ planet }) => {
  return (
    <div className='txt-wrapper'>
      <h2 className='tac mb-20 mt-20'>{planet.name} en la cultura popular</h2>
      <div className="pop-culture">
        {planet.popCultureParagraphs.map((p, index) => {
          return <p className="mb-20"key={index}>{p}</p>
        })}
      </div>
    </div>
  )
}

export default PopCulture
