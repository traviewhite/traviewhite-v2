import React, { useEffect, useRef, useState } from 'react'
import { motion, useCycle, useSpring } from 'framer-motion'
import FineArtFilter from 'components/FineArtFilter'

export const FilterToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <p>filter:</p>
  </button>
)

const filterBtn = {
  open: {
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
    //maxWidth: '350px',
    transition: {
      width: {tween: 100, duration: 0.15, ease: 'easeIn'},
      height: {tween: 100, duration: 0.15, ease: 'easeIn'}      
    }
  },
  closed: {
    display: 'inline-block',
    width: 'auto',
    height: 'auto',
    transition: {
      width: {tween: 100, duration: 0.1, ease: 'easeOut'},
      height: {tween: 100, duration: 0.1, ease: 'easeOut'}
    }
  }
}
const menuVariants = {
  open: {
    opacity: 1,
    display: 'block',
    transition: {
      opacity: { delay: 0, duration: 0.05, ease: "easeIn" }      
    }
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      opacity: { duration: 0.1 }
    }
  }
}

const Filter = () => {

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <motion.div
        className="filter"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={ filterBtn }
        //ref={el => menu = el}
        onClick={() => { toggleOpen() }}
        //onClick={() => { menuToggle(), toggleOpen() }}
        //toggle={() => { toggleOpen() }}
      >
        <FilterToggle />
        <motion.div variants={ menuVariants }>
          <motion.div className="filter-menu">
            <FineArtFilter />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Filter