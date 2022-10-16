import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import './index.css'

const Navbar = ({showed}) => {
  const navBarClassName = showed ? 'active' : '';

  return (
    <nav className="nav">
      <ul className={navBarClassName}>
        <li>
          <Link to="/mercurio" className="nav-a" activeclassname="active">Mercurio</Link>
        </li>
        <li>
          <Link to="/venus" className="nav-a" activeclassname="active">Venus</Link>
        </li>
        <li>
          <Link to="/tierra" className="nav-a" activeclassname="active">Tierra</Link>
        </li>
        <li>
          <Link to="/marte" className="nav-a" activeclassname="active">Marte</Link>
        </li>
        <li>
          <Link to="/jupiter" className="nav-a" activeclassname="active">Jupiter</Link>
        </li>
        <li>
          <Link to="/saturno" className="nav-a" activeclassname="active">Saturno</Link>
        </li>
        <li>
          <Link to="/urano" className="nav-a" activeclassname="active">Urano</Link>
        </li>
        <li>
          <Link to="/neptuno" className="nav-a" activeclassname="active">Neptuno</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;