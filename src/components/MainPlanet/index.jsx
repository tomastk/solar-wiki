import React, { useEffect, useState } from 'react'
import scrollToTop from '../../utilities/scrollToTop'
import Header from '../Header'
import { CalendarIcon, LightIcon, PlanetIcon, SunIcon } from '../IconsComponent'
import './index.css'

const MainPlanet = ({ planet }) => {
  const [showed, setShowed] = useState(true)
  const updateMenu = () => {
    setShowed(!showed)
  }

  useEffect(() => {
    scrollToTop()
    updateMenu()
  }, [])
  return (
    <div className='main'>
      <Header showed={showed} updateMenu={updateMenu}/>
      <div className="wrapper d-grid two-columns responsive">
        <div className="about-planet">
          <h1>El Planeta <br /> {planet.name}</h1>
          <div className="info mb-20">
            <div className="item">
              <SunIcon /> <br />
              Distancia al Sol: <br />
              <b>{planet.distanceToSun}</b>
            </div>
            <div className="item">
              <LightIcon /> <br />
              Tiempo de Llegada de la luz al Sol: <br />
              <b>{planet.timeFromLightToSun}</b>
            </div>
            <div className="item">
              <CalendarIcon /> <br />
              Duración de año: <br />
              <b>{planet.durationOfYear}</b>
            </div>
            <div className="item">
              <PlanetIcon /> <br />
              Tipo de planeta: <br />
              <b>{planet.planetType}</b>
            </div>
          </div>
        </div>
        <div className="img bounce">
          <img src={`/img/${planet.name.toLowerCase()}.png`} alt="Imagen sobre el planeta" width="400" height="400"/>
        </div>
      </div>
    </div>
  )
}

export default MainPlanet
