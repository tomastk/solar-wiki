import React, { useEffect, useState } from 'react'
import { NavLink as Link } from 'react-router-dom'
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
    <h3 className='center mb-20'>Aterriza en otros planetas</h3>
    <div className="planets only-desktop">
    {planets.map(planet => {
      return <Link to={`/${planet.name.toLowerCase()}`} key={planet.position} className="planet">
        <img width="300" height="300" src={planet.url} alt={planet.name + ' en fotografía'} />
        <h3 className='center mt-20 mb-20 fs-20 t-s'>{planet.name}</h3>
      </Link>
    })}
      <button className="btn btn-add" onClick={addSliderIndex} data-disabled={disabled.add}><ArrowRight /></button>
      <button className="btn btn-substract"onClick={substractSliderIndex} data-disabled={disabled.substract}><ArrowLeft /></button>
    </div>
  </div>
}

export default PlanetsNav
