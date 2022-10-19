import React from 'react'
import { BarsIcon } from '../IconsComponent'
import Logo from '../Logo'
import Navbar from '../Navbar'
import './index.css'

const Header = ({ updateMenu, showed }) => {
  return (
    <header className="header">
      <Logo />
      <Navbar showed={showed}/>
      <BarsIcon handleClick={updateMenu}/>
    </header>
  )
}

export default Header
