import React from 'react'
import { Icon } from '@iconify/react'

const PlanetsIcon = () => {
  return <Icon icon="iconoir:planet-sat" width="40" height="40"/>
}

const MoonIcon = () => {
  return <Icon icon="charm:moon" width="40" height="40" />
}

const AsteroidIcon = () => {
  return <Icon icon="game-icons:asteroid" width="40" height="40" />
}

const BarsIcon = ({ handleClick }) => {
  return (
    <div className="only-mobile c-pointer" onClick={handleClick}>
      <Icon icon="fa6-solid:bars" color="white" width="40" height="40" />
    </div>
  )
}

const ArrowLeft = () => {
  return (
    <Icon icon="ant-design:arrow-left-outlined" width="40" height="40" />
  )
}

const ArrowRight = () => {
  return <Icon icon="ant-design:arrow-right-outlined" width="40" height="40" />
}

const Comet = () => {
  return <Icon icon="game-icons:comet-spark" width="40" height="40"/>
}

const SunIcon = () => {
  return <Icon icon="ci:sun" width="40" height="40"/>
}

const LightIcon = () => {
  return <Icon icon="akar-icons:light-bulb" width="40" height="40"/>
}

const PlanetIcon = () => {
  return <Icon icon="game-icons:planet-core" width="40" height="40"/>
}

const CalendarIcon = () => {
  return <Icon icon="ant-design:calendar-twotone" width="40" height="40" />
}

export { PlanetsIcon, MoonIcon, AsteroidIcon, BarsIcon, ArrowLeft, ArrowRight, Comet, SunIcon, LightIcon, PlanetIcon, CalendarIcon }
