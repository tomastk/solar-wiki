import React from 'react'
import './index.css'
import {AsteroidIcon, PlanetsIcon, MoonIcon} from '../IconsComponent'

const Hero = () => {
  return (
    <div className="wrapper hero">
      <h1 className="heading">El Sistema <br /> Solar</h1>
      <div className="facts">
        <div className="fact">
          <PlanetsIcon />
          <p>
          8 planetas
          </p>
        </div>
        <div className="fact">
          <MoonIcon /> 
          <p>
          + 200 lunas
          </p>
        </div>
        <div className="fact">
          <AsteroidIcon />
          <p>
          1,113,527 <br />asteroides
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero