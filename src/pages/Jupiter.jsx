import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import jupiter from '../texts/jupiter'

const Jupiter = () => {
  return (
    <>
      <MainPlanet planet={jupiter}/>
      <div className="container">
        <AboutPlanet planet={jupiter} />
        <PopCulture planet={jupiter} />
        <PlanetsNav />
        <MobileNav />
        <Footer />
      </div>
    </>
  )
}

export default Jupiter
