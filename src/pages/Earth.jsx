import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import earth from '../texts/earth'

const Earth = () => {
  return (
    <>
      <MainPlanet planet={earth}/>
      <div className="container">
        <AboutPlanet planet={earth} />
        <PopCulture planet={earth} />
        <PlanetsNav />
        <MobileNav />
        <Footer />
      </div>
    </>
  )
}

export default Earth
