import React from 'react'
import Fact from '../Fact'
import './index.css'

const AboutPlanet = ({ planet }) => {
  return <main className={`${planet.name.toLowerCase()} planet-info`}>
    <div className="txt-wrapper">
      <h2 className='mb-20 mt-20'>Sobre el planeta {planet.name}</h2>
      {planet.infoParagraphs.map((p, index) => {
        return <p key={index}>{p}</p>
      })}
    </div>
    <h2>9 cosas que debes saber sobre {planet.name}</h2>
    <div className="datas wrapper">
      {planet.facts.map((item, index) => {
        return <Fact key={index} number={index + 1} title={item.title} content={item.content}/>
      })}
    </div>
  </main>
}

export default AboutPlanet
