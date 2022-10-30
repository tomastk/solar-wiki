import React from 'react'
import AboutPlanet from '../components/AboutPlanet'
import Footer from '../components/Footer'
import MainPlanet from '../components/MainPlanet'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import PopCulture from '../components/PopCulture'
import neptune from '../texts/neptune'

const Neptune = () => {
  return (
    <>
      <MainPlanet planet={neptune}/>
      <div className="container">
        <AboutPlanet planet={neptune} />
        <PopCulture planet={neptune} />
        <PlanetsNav />
        <MobileNav />
        <Footer />
      </div>
    </>
  )
}

export default Neptune
