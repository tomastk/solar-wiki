import React from 'react'
import { Icon } from '@iconify/react';
import '../../App.css'

const Bars = ({handleClick}) => {
  return (
    <div className="only-mobile c-pointer" onClick={handleClick}>
      <Icon icon="fa6-solid:bars" color="white" width="40" height="40" />
    </div>
  )
}

export default Bars