import React, { useEffect } from 'react'
import { TweenMax, Power3 } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

const tLogo = "../t_logo.png"

export default function Tnav() {
  useEffect(() => {
    //TweenMax.fromTo(".t_nav", .6, {opacity: 0, y: 20}, {opacity: 1, y: 0, duration: 0.2, delay: 0.05, ease: Power3.easeIn})
  }, [])

  return (
    <div className="t_nav">
      <Link href="/">
        <a><img src={tLogo} alt="traviewhite T logo" /></a>
      </Link>
    </div>
  )
}