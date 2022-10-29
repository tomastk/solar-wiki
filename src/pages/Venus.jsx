import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import venus from '../texts/venus'

const Venus = () => {
  return (
    <>
      <MainPlanet planet={venus}/>
      <AboutPlanet planet={venus} />
      <PlanetsNav />
      <MobileNav />
      <Footer />
    </>
  )
}

export default Venus
