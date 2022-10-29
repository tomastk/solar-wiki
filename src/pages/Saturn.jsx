import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import saturn from '../texts/saturn'

const Saturn = () => {
  return (
    <>
      <MainPlanet planet={saturn}/>
      <AboutPlanet planet={saturn} />
      <PopCulture planet={saturn} />
      <PlanetsNav />
      <MobileNav />
      <Footer />
    </>
  )
}

export default Saturn
