import React, { useEffect, useRef, useState } from 'react'
import { TweenMax, Power3 } from 'gsap'
import { motion, useCycle } from 'framer-motion'
import NavToggle from '../components/NavToggle'
import NavMenu from '../components/NavMenu'

const menuvariantss = {
  open: {
    opacity: 1,
    overflow: 'no-scroll',
    width: '350px',
    //maxWidth: '350px',
    height: '550px',
    transition: {
      width: {tween: 100, duration: 0.2, ease: 'easeIn'},
      height: {tween: 100, duration: 0.2, ease: 'easeIn'}      
    }
  },
  closed: {
    width: '60px',
    height: '60px',
    opacity: 1,
    transition: {
      width: {tween: 100, duration: 0.2, ease: 'easeOut'},
      height: {tween: 100, duration: 0.2, ease: 'easeOut'}
    }
  }
}
const back = {
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
    backgroundColor: 'black',
    zIndex: 99,
    //filter: 'blur(10px)',
    transition: {
      opacity: {duration: 0.5}
      //filter: {duration: 0.1, tween: 10}
    }
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
    backgroundColor: 'none',
    zIndex: -10,
    transition: {
      opacity: {duration: 0.4}
    }
  }
}

const Nav = () => {
 // let menu = useRef(null)

//  const [state, setState] = useState(false)
  
  //let targetElement = document.querySelector("html")

//  const menuExpand = () => {
 //   TweenMax.to(menu, .6, { maxWidth: "350px", width: "100%", height: "550px", ease: Power3.easeOut })
//    setState(true)
//  }
//  const menuShrink = () => {
////    TweenMax.to(menu, .5, {width: 60, height: 60, ease: Power3.easeOut})
 //   setState(false)
 // }
  useEffect(() => {
    //TweenMax.fromTo("nav", .7, {opacity: 0}, {opacity: 1, duration: 0.1, ease: Power3.easeIn}),
    TweenMax.fromTo(".home_trav", .7, {opacity: 0, y: -40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.3}),
    TweenMax.fromTo(".home_mags", .6, {opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: Power3.easeOut}),
    TweenMax.fromTo(".home_logo", .7, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: Power3.easeOut}),
    TweenMax.fromTo("h4", .7, {opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.75, ease: Power3.easeOut})
  }, [])
  
 // const menuToggle = state !== true ? menuExpand : menuShrink
  const [isOpen, toggleOpen] = useCycle(false, true)

 // useEffect(() => {
    //state
    //? targetElement.classList.add("no-scroll")
    //: targetElement.classList.remove("no-scroll")
 // })

  return (
    <>
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={menuvariantss}
      //ref={el => menu = el}
      onClick={() => { toggleOpen() }}
      //onClick={() => { menuToggle(), toggleOpen() }}
      //toggle={() => { toggleOpen() }}
    >
      <NavToggle />
      <NavMenu />
    </motion.nav>
    <motion.div
    initial={false}
    animate={isOpen ? "open" : "closed"} 
    variants={back}
    onClick={() => { toggleOpen() }}
    ></motion.div>
    </>
  )
}

export default Nav