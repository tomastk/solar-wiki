import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import mars from '../texts/mars'

const Mars = () => {
  return (
    <>
      <MainPlanet planet={mars}/>
      <div className="container">
        <AboutPlanet planet={mars} />
        <PopCulture planet={mars} />
        <PlanetsNav />
        <MobileNav />
        <Footer />
      </div>
    </>
  )
}

export default Mars
