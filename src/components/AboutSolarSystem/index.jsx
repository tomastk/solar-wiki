import React from 'react'
import './index.css'

import solarData from '../../texts/solarData'
import mpTexts from '../../texts/mainPage'
import Fact from '../Fact/'

const AboutSolarSystem = () => {
  return (
    <div className="about-section">
      <section className='wrapper'>
        <h2>{mpTexts.subTitle[0]}</h2>
        <div className="why">
          <h3>{mpTexts.h3}</h3>
          <p>{mpTexts.answer}</p>
        </div>
        <p>{mpTexts.aboutContent}</p>
      </section>
      <img src="./img/planets-ilustration.png" alt="Ilustración del Sistema Solar" class="decoration-img"/>
      <section className="solar-system-facts">
        <h3 className="center mt-20">{mpTexts.subTitle[1]}</h3>
        <div className="datas wrapper">
          {solarData.map((item, index) => {
            return <Fact key={index} number={index + 1} title={item.title} content={item.content}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default AboutSolarSystem