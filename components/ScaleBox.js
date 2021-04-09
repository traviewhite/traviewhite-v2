import { motion } from 'framer-motion'
import React, { useMemo, useContext } from 'react'
import { IntersectionContext } from 'components/IntersectionBox'

export const ScaleBox = ({
  children,
  delayOrder, // order of appearance
  duration = 0.4,
  easing = [0.4, 0.5, 0.75, 1], // [number, number, number, number] | "linear" | "easeIn" | "easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" | "backInOut" | "anticipate" | EasingFunction;
}) => {
  const { inView } = useContext(IntersectionContext)
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
      y: 50,
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

  return (
    <motion.div initial='hidden' animate={inView ? 'show' : 'hidden'} exit='hidden' variants={variants}>
      {children}
    </motion.div>
  )
}

export default ScaleBox
