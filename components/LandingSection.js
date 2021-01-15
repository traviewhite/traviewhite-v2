import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const easeCustom = [0.15, 0.25, 0.75, 1]
const homeblock = {
  open: {
    opacity: 1,
    display: 'block',
    transition: {
      // opacity: {tween: 200, delay: 1, duration: 0.5, ease: 'easeIn'},  
      // display: {tween: 200, delay: 1, duration: 0.5, ease: 'easeIn'}      
    }
  },
  hidden: {
    opacity: 0,
    display: 'none',
    transition: {
      opacity: {tween: 100, delay: 0.25, duration: 0.25, ease: easeCustom},
      display: {tween: 100, delay: 0.5, duration: 0.25, ease: easeCustom}
    }
  }
}
const heading = {
  hidden: {opacity: 0, y: -10},
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.1, ease: easeCustom }
  }
}
const homeAvi = {
  hidden: {opacity: 0, y: -40},
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.55, duration: 0.5, ease: easeCustom }
  }

}
const homeAvi2 = {
  hidden: {opacity: 0, y: -35},
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.75, duration: 0.45, ease: easeCustom }
  }

}
const homeLogo = {
  hidden: {opacity: 0, y: 25},
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.6, duration: 0.5, ease: easeCustom }
  }

}
const text = {
  hidden: {opacity: 0, y: 35, skeyY: '0deg', rotate: '-8deg'},
  animate: {
    opacity: 1,
    y: 0,
    skeyY: '-3.8deg',
    rotate: '-8deg',
    transition: { delay: 0.8, duration: 0.3, ease: easeCustom }
  }
}

const LandingSection = ({ images }) => {
  return (
    <>
      <motion.div
        animate="hidden"
        initial="open"
        variants={homeblock}
        className="block" 
      />
      <motion.div
        initial="hidden"
        animate="animate"
        variants={heading}
        className="heading"
      >
        <div className="center">
          <Link href="/about">
            <a>
              <div className="center-img">
                <motion.div 
                  initial="hidden"
                  animate="animate"
                  variants={homeAvi}
                  className="home-avi"
                >
                  <Image 
                    src={images.primaryLandingImage[0].secure_url} 
                    alt={images.primaryLandingAlt} 
                    width={images.primaryLandingImage[0].width}
                    height={images.primaryLandingImage[0].height}
                    objectFit='cover'
                  />
                </motion.div>
                <motion.div 
                  initial="hidden"
                  animate="animate"
                  variants={homeAvi2}
                  className="home-mags"
                >
                  <Image 
                    src={images.secondaryLandingImage[0].secure_url} 
                    alt={images.secondaryLandingAlt}
                    width={images.secondaryLandingImage[0].width}
                    height={images.secondaryLandingImage[0].height}
                    objectFit='cover'
                  />
                </motion.div>
              </div>
            </a>
          </Link>
          <div className="center-text">
            <Link href="/">
              <a>
                <motion.div 
                  initial="hidden"
                  animate="animate"
                  variants={homeLogo}
                  className="home-logo"
                >
                  <Image 
                    // src={logo} 
                    src={images.logoPrimaryImage[0].secure_url} 
                    alt={images.logoPrimaryAlt} 
                    width={images.logoPrimaryImage[0].width}
                    height={images.logoPrimaryImage[0].height}
                    objectFit='cover'
                    objectPosition='center center'
                  />
                </motion.div>
              </a>
            </Link>
            <motion.h4
              initial="hidden"
              animate="animate"
              variants={text}
            >
              a front-end engineer &<br/>designer
            </motion.h4>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default LandingSection