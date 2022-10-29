import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import './index.css'

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
          <img src="img/solar-wiki-logo.svg" alt="Solar Wiki logo" />
      </div>
    </Link>
  )
}

export default Logo
