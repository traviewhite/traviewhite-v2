import React, { useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'
import Link from 'next/link'
import Image from 'next/image' // one day

const logo = "/twhite_logo.svg"
const logoAlt = "Travis White Logo"
const travis = "/traviswhite_portrait_min.jpg"
const travisAlt = "Travis White Avitar"
const maggie = "/maggie_portrait_min.jpg"
const maggieAlt = "Maggie the Dog Avitar"

export default function Header() {

  useEffect(() => {
    TweenMax.fromTo(".heading", 2, {opacity: 0, y: -10}, {opacity: 1, y: 0, duration: 0.1, delay: 0.25, ease: Power3.easeOut}),
    TweenMax.fromTo(".home-avi", .7, {opacity: 0, y: -40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.4}),
    TweenMax.fromTo(".home-mags", .6, {opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: Power3.easeOut}),
    TweenMax.fromTo(".home-logo", .7, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: Power3.easeOut}),
    TweenMax.fromTo("h4", .7, {opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.75, ease: Power3.easeOut})
  }, [])

  return (
    <div className="heading">
      <div className="center">
        <Link href="/about">
          <div className="center-img">
            <div className="home-avi">
              <img src={travis}
                alt={travisAlt} />
            </div>
            <div className="home-mags">
              <img src={maggie}
                alt={maggieAlt}/>
            </div>
          </div>
        </Link>
        <div className="center-text">
          <Link href="/">
            <a>
              <div className="home-logo">
                <img src={logo}
                  alt={logoAlt} />
              </div>
            </a>
          </Link>
          <h4>a front-end developer &<br/>designer</h4>
        </div>
      </div>
    </div>
  )
}