import React from 'react'
import './index.css'
import { motion } from 'framer-motion'
import { AsteroidIcon, PlanetsIcon, MoonIcon, Comet } from '../IconsComponent'

const Hero = () => {
  return (
    <div className="wrapper hero">
      <motion.h1 className="heading" initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }}>El Sistema <br /> Solar</motion.h1>
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
        <div className="fact">
          <Comet />
          <p>
          3743 <br />cometas
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
