import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Mars from './pages/Mars'
import Neptune from './pages/Neptune'
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Earth from './pages/Earth'
import Jupiter from './pages/Jupiter'
import Saturn from './pages/Saturn'
import Uranus from './pages/Uranus'

const SiteRouter = () => {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/marte" exact element={<Mars />}></Route>
        <Route path="/neptuno" exact element={<Neptune />}></Route>
        <Route path="/mercurio" exact element={<Mercury />}></Route>
        <Route path="/venus" exact element={<Venus />}></Route>
        <Route path="/tierra" exact element={<Earth />}></Route>
        <Route path="/jupiter" exact element={<Jupiter />}></Route>
        <Route path="/saturno" exact element={<Saturn />}></Route>
        <Route path="/urano" exact element={<Uranus />}></Route>
      </Routes>
    </Router>
  </>
  )
}

export default SiteRouter
