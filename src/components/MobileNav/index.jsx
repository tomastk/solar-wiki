import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import planetsDefault from '../../texts/planets'
import './index.css'

const MobileNav = () => {
  return (
    <div className="mobile-nav only-mobile txt-wrapper">
      {planetsDefault.map(planet => {
        return (
        <Link to={`/${planet.name.toLowerCase()}`}key={planet.position} className="planet-mobile">
          <img src={planet.url} alt={`Fotografía de ${planet.name}`} />
          <p>{planet.name}</p>
        </Link>)
      })}
    </div>
  )
}

export default MobileNav
