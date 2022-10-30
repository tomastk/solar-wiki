import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import './index.css'

import solarData from '../../texts/solarData'
import mpTexts from '../../texts/mainPage'
import Fact from '../Fact/'

const AboutSolarSystem = () => {
  const [ref, inView] = useInView()
  const animationAppear = useAnimation()

  useEffect(() => {
    if (inView) {
      animationAppear.start({
        x: 0,
        transition: { type: 'spring', duration: 3, bounce: 0.3 }
      })
    } else {
      animationAppear.start({
        x: -200
      })
    }
  }, [inView])

  return (
    <div className="about-section">
      <section className='wrapper'>
        <motion.h2 ref={ref} animate={animationAppear}>{mpTexts.subTitle[0]}</motion.h2>
        <div className="why">
          <motion.h3 whileInView={{ x: 0, transition: { duration: 0.5 } }} initial={{ x: 120 }}>{mpTexts.h3}</motion.h3>
          <motion.p whileInView={{ x: 0, transition: { duration: 0.5, delay: 0.2 } }} initial={{ x: 120 }}>{mpTexts.answer}</motion.p>
        </div>
        <motion.p whileInView={{ x: 0, transition: { duration: 0.5, delay: 0.5 } }} initial={{ x: 120 }}>{mpTexts.aboutContent}</motion.p>
      </section>
      <img src="./img/planets-ilustration.png" alt="Ilustración del Sistema Solar" className="decoration-img"/>
      <section className="solar-system-facts">
        <h3 className="center mt-20" >{mpTexts.subTitle[1]}</h3>
        <div className="datas wrapper">
          {solarData.map((item, index) => {
            return <Fact key={index} number={index + 1} title={item.title} content={item.content}/>
          })}
        </div>
      </section>
    </div>
  )
}

export default AboutSolarSystem
