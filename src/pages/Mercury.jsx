import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import mercury from '../texts/mercury'

const Mercury = () => {
  return (
    <>
      <MainPlanet planet={mercury}/>
      <AboutPlanet planet={mercury} />
      <PopCulture planet={mercury} />
      <PlanetsNav />
      <MobileNav />
      <Footer />
    </>
  )
}

export default Mercury
