import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import uranus from '../texts/uranus'

const Uranus = () => {
  return (
    <>
      <MainPlanet planet={uranus}/>
      <div className="container">
        <AboutPlanet planet={uranus} />
        <PopCulture planet={uranus} />
        <PlanetsNav />
        <MobileNav />
        <Footer />
      </div>
    </>
  )
}

export default Uranus
