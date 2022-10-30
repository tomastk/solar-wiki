import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const Fact = ({ title, content, number }) => {
  const [ref, inView] = useInView()
  const animationAppear = useAnimation()

  useEffect(() => {
    if (inView) {
      animationAppear.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 3, bounce: 0.3 }
      })
    } else {
      animationAppear.start({
        x: '-100px',
        opacity: 0.5
      })
    }
  }, [inView])

  return <motion.div ref={ref} animate={animationAppear} className="data">
    <div className="number">{number}</div>
    <div className="data-title">{title}</div>
    <div className="data-content">
      {content}
    </div>
  </motion.div>
}

export default Fact
