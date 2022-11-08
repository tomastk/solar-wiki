import React from 'react'
import Logo from '../Logo'
import './index.css'
import planetsDefault from '../../texts/planets'
import { NavLink as Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='wrapper'>
      <div className="about">
        <Logo />
        &copy; 2022
      </div>
      <div className="planets-nav">
        <h2>Planetas</h2>
        <div className="planets-link">
          {planetsDefault.map(planet => {
            return <Link key={planet.position} to={`/${planet.name.toLowerCase()}`}>{`${planet.name.toLowerCase()}`}</Link>
          })}
        </div>
      </div>
      <div className="vertical-list">
        <h2>Enlaces de interés</h2>
        <Link key="Bibliografia" to="../bibliografia">Bibliografía</Link>
        <a href="https://solarsystem.nasa.gov" target="_blank" rel="noreferrer">Web de la NASA</a>
      </div>
    </footer>
  )
}

export default Footer
