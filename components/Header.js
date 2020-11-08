import React, { useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'
import Link from 'next/link'
import Image from 'next/image' // one day

const logo = "/logo2.svg"
const travis = "/traviswhite_portrait_min.jpg"
const maggie = "/maggie_portrait_min.jpg"

export default function Header() {
  useEffect(() => {
    TweenMax.fromTo(".home_trav", .7, {opacity: 0, y: -40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.3}),
    TweenMax.fromTo(".home_mags", .6, {opacity: 0, y: -30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: Power3.easeOut}),
    TweenMax.fromTo(".home_logo", .7, {opacity: 0, y: 30}, {opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: Power3.easeOut}),
    TweenMax.fromTo("h4", .7, {opacity: 0, y: 40}, {opacity: 1, y: 0, duration: 0.6, delay: 0.75, ease: Power3.easeOut})
  }, [])

  return (
    <div className="heading">
      <div className="center">
        <div className="center_img">
          <div className="home_trav">
            <img src={travis} 
            //width="500" height="500" 
            alt="Travis White Avitar" />
          </div>
          <div className="home_mags">
            <img src={maggie}  
            //width="300" height="300" 
            alt="Maggie the Dog Avitar"/>
          </div>
        </div>
        <div className="center_text">
          <Link href="/">
            <a>
              <div className="home_logo">
                <img src={logo} 
                //width="972" height="440" 
                alt="Travis White Logo"  />
              </div>
            </a>
          </Link>
          <h4>a front-end developer &<br/>designer</h4>
        </div>
      </div>
    </div>
  )
}