import React, { useEffect, useState } from 'react'
import AboutSolarSystem from '../components/AboutSolarSystem'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MobileNav from '../components/MobileNav'
import PlanetsNav from '../components/PlanetsNav'
import YoutubeVideo from '../components/YoutubeVideo'
import scrollToTop from '../utilities/scrollToTop'

const Home = () => {
  const [showed, setShowed] = useState(true)
  const updateMenu = () => {
    setShowed(!showed)
  }

  useEffect(() => {
    scrollToTop()
    updateMenu()
  }, [])

  return (
    <>
      <section className="main-section">
        <Header updateMenu={updateMenu} showed={showed} />
        <Hero />
      </section>
      <AboutSolarSystem />
      <PlanetsNav />
      <MobileNav />
      <YoutubeVideo embedId="8dy27u_kX1I" />
      <Footer />
    </>
  )
}

export default Home
