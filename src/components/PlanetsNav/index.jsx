import React, { useEffect, useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from '../IconsComponent'
import './index.css'
import planetsDefault from '../../texts/planets.js'

const PlanetsNav = () => {
  const [sliderIndex, setSliderIndex] = useState(1)
  const [planets, setPlanets] = useState([])
  const [disabled, setDisabled] = useState({
    add: false,
    remove: false
  })
  useEffect(() => {
    const planetsToPush = filterBySliderIndex(sliderIndex)
    setPlanets(planetsToPush)
  }, [sliderIndex])

  const filterBySliderIndex = (sliderIndex) => {
    const sliderItemsIndexs = [sliderIndex, sliderIndex + 1, sliderIndex + 2]
    const filterByPosition = (el) => {
      return sliderItemsIndexs.indexOf(el.position) > -1
    }
    const planetsFiltered = planetsDefault.filter(filterByPosition)
    return planetsFiltered
  }

  const addSliderIndex = () => {
    if (sliderIndex >= 6) {
      setDisabled({ add: true, substract: false })
      return
    }

    setDisabled({
      substract: false,
      add: false
    })
    setSliderIndex(sliderIndex + 1)
  }

  const substractSliderIndex = () => {
    if (sliderIndex < 2) {
      setDisabled({ add: false, substract: true })
      return
    }

    setDisabled({ add: false, substract: false })

    setSliderIndex(sliderIndex - 1)
  }

  return <div className='wrapper'>
    <motion.h3 whileInView={{ x: 0, transition: { duration: 0.5 } }} initial={{ x: 120 }} className='center mb-20'>Aterriza en otros planetas</motion.h3>
    <motion.div layout className="planets only-desktop">
    {planets.map(planet => {
      return (
        <motion.div layoutId={planet.position} className="planet" key={planet.position} animation={{ transition: { delay: 1, duration: 2 } }}>
        <Link to={`/${planet.name.toLowerCase()}`} className="planet">
          <img width="300" height="300" src={planet.url} alt={planet.name + ' en fotografía'} />
          <h3 className='center mt-20 mb-20 fs-20 t-s'>{planet.name}</h3>
        </Link>
        </motion.div>
      )
    })}
      <button className="btn btn-add" onClick={addSliderIndex} data-disabled={disabled.add}><ArrowRight /></button>
      <button className="btn btn-substract"onClick={substractSliderIndex} data-disabled={disabled.substract}><ArrowLeft /></button>
    </motion.div>
  </div>
}

export default PlanetsNav
