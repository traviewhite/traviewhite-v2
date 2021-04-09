import React, { useEffect, useState, useMemo, useRef, createContext } from 'react'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'

export const IntersectionContext = createContext({ inView: true })

export const IntersectionBox = ({
  children,
  delayOrder,
  duration = 0.3,
  easing = [0.4, 0.5, 0.75, 1],
  reset = false,
}) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.45,
  })

  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  )

  const variants = {
    hidden: {
      y: 60,
      scale: 0.99,
      opacity: 0,
      transition,
    },
    show: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition,
    },
  }

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>
        <motion.div initial='hidden' animate={inView ? 'show' : 'hidden'} exit='hidden' variants={variants}>
          {children}
        </motion.div>
      </div>
    </IntersectionContext.Provider>
  )
}

export default IntersectionBox
