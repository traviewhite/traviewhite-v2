import React, { useEffect, useRef, useState } from 'react'
import { motion, useCycle, useSpring } from 'framer-motion'
import NavToggle from 'components/NavToggle'
import Links from 'components/Links'

const menuBtn = {
  open: {
    opacity: 1,
    overflow: 'no-scroll',
    width: '350px',
    //maxWidth: '350px',
    height: '560px',
    transition: {
      width: { tween: 100, duration: 0.15, ease: 'easeIn' },
      height: { tween: 100, duration: 0.15, ease: 'easeIn' },
    },
  },
  closed: {
    width: '60px',
    height: '60px',
    opacity: 1,
    transition: {
      width: { tween: 100, duration: 0.1, ease: 'easeOut' },
      height: { tween: 100, duration: 0.1, ease: 'easeOut' },
    },
  },
}
const menuVariants = {
  open: {
    opacity: 1,
    display: 'block',
    overflow: 'no-scroll',
    width: 'auto',
    height: 'auto',
    transition: {
      opacity: { delay: 0.1, duration: 0.3, ease: 'easeIn' },
    },
  },
  closed: {
    opacity: 0,
    display: 'none',
    transition: {
      opacity: { duration: 0.07 },
    },
  },
}
const backDim = {
  open: {
    opacity: 0.4,
    overflow: 'no-scroll',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'block',
    backgroundColor: '#FB9271',
    zIndex: 99,
    //filter: 'blur(10px)',
    transition: {
      opacity: { duration: 0.5 },
      //filter: {duration: 0.1, tween: 10}
    },
  },
  closed: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'none',
    backgroundColor: '#fff',
    zIndex: -10,
    transition: {
      opacity: { duration: 0.4 },
    },
  },
}

const Nav = () => {
  /*

  const [state, setState] = useState(false)
  this.targetElement = document.querySelector('html')
  const x = useSpring(0, { opacity: 0 })
  useEffect(() => {
    state
    ? targetElement.classList.add("no-scroll")
    : targetElement.classList.remove("no-scroll")
  })
  
  useEffect(() => {
    x.onChange(() => {
      x.get() > 1 ? setState(false) : setState(true)
    })
  }, [x])
  
  */

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuBtn}
        //ref={el => menu = el}
        onClick={() => {
          toggleOpen()
        }}
        //onClick={() => { menuToggle(), toggleOpen() }}
        //toggle={() => { toggleOpen() }}
      >
        <NavToggle />
        <motion.div variants={menuVariants}>
          <motion.div className='nav-menu'>
            <Links />
          </motion.div>
        </motion.div>
      </motion.nav>
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={backDim}
        onClick={() => {
          toggleOpen()
        }}
      />
    </>
  )
}

export default Nav
