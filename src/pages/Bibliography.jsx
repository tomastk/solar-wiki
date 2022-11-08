import React from 'react'
import Header from '../components/Header'

const Bibliography = () => {
  return (
    <>
     <Header />
     <div className="txt-wrapper">
      <h1 className="mt-20">Este sitio web utiliza los siguientes recursos:</h1>
      <ul className="mt-20">
        <li>Overview | Our Solar System - <a target="_blank" rel='noreferrer' href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/">https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/</a></li>
        <li>Overview | Mercury - <a href="https://solarsystem.nasa.gov/planets/mercury/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/mercury/overview/</a></li>
        <li>Overview | Venus - <a href="https://solarsystem.nasa.gov/planets/venus/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/venus/overview/</a></li>
        <li>Overview | Earth - <a href="https://solarsystem.nasa.gov/planets/earth/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/earth/overview/</a></li>
        <li>Overview | Mars - <a href="https://solarsystem.nasa.gov/planets/mars/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/mars/overview/</a></li>
        <li>Overview | Jupiter - <a href="https://solarsystem.nasa.gov/planets/jupiter/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/jupiter/overview/</a></li>
        <li>Overview | Saturn - <a href="https://solarsystem.nasa.gov/planets/saturn/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/saturn/overview/</a></li>
        <li>Overview | Uranus - <a href="https://solarsystem.nasa.gov/planets/uranus/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/uranus/overview/</a></li>
        <li>Overview | Neptune - <a href="https://solarsystem.nasa.gov/planets/neptune/overview/" target="_blank" rel="noreferrer">https://solarsystem.nasa.gov/planets/neptune/overview/</a></li>
      </ul>
     </div>
    </>
  )
}

export default Bibliography
